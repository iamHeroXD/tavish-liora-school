import subprocess
import time
import json
import base64
import urllib.request
import asyncio
import websockets
import os
import shutil

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
TEMP_PROFILE = r"C:\Users\Rohan\AppData\Local\Temp\chrome_cdp_profile"

async def send_cmd(ws, msg_id, method, params=None):
    payload = {"id": msg_id, "method": method}
    if params:
        payload["params"] = params
    await ws.send(json.dumps(payload))
    while True:
        resp = json.loads(await ws.recv())
        if resp.get("id") == msg_id:
            return resp

async def capture_page(url, output_path, width=1440, height=900, device_scale=1, scroll_y=0):
    if os.path.exists(TEMP_PROFILE):
        try:
            shutil.rmtree(TEMP_PROFILE)
        except Exception:
            pass

    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--remote-debugging-port=9222",
        f"--user-data-dir={TEMP_PROFILE}",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
    ]
    proc = subprocess.Popen(cmd)
    try:
        ws_url = None
        for _ in range(40):
            try:
                with urllib.request.urlopen("http://127.0.0.1:9222/json/version", timeout=1) as resp:
                    data = json.loads(resp.read().decode())
                    ws_url = data.get("webSocketDebuggerUrl")
                    if ws_url:
                        break
            except Exception:
                time.sleep(0.25)

        if not ws_url:
            print("Failed to get websocket debugger URL")
            return False

        async with websockets.connect(ws_url, max_size=50*1024*1024) as ws:
            target_res = await send_cmd(ws, 1, "Target.createTarget", {"url": "about:blank"})
            target_id = target_res["result"]["targetId"]

            page_ws_url = f"ws://127.0.0.1:9222/devtools/page/{target_id}"
            async with websockets.connect(page_ws_url, max_size=50*1024*1024) as page_ws:
                await send_cmd(page_ws, 2, "Page.enable")
                await send_cmd(page_ws, 3, "Emulation.setDeviceMetricsOverride", {
                    "width": width,
                    "height": height,
                    "deviceScaleFactor": device_scale,
                    "mobile": width < 600,
                })
                await send_cmd(page_ws, 4, "Page.addScriptToEvaluateOnNewDocument", {
                    "source": "sessionStorage.setItem('tlcs_visited', 'true');"
                })
                await send_cmd(page_ws, 5, "Page.navigate", {"url": url})
                
                await asyncio.sleep(2.0)

                if scroll_y > 0:
                    await send_cmd(page_ws, 6, "Runtime.evaluate", {
                        "expression": f"window.scrollTo(0, {scroll_y});"
                    })
                    await asyncio.sleep(1.0)

                shot_res = await send_cmd(page_ws, 7, "Page.captureScreenshot", {"format": "png"})
                img_data = base64.b64decode(shot_res["result"]["data"])
                with open(output_path, "wb") as f:
                    f.write(img_data)
                print(f"Captured {output_path} successfully ({len(img_data)} bytes)")
                return True
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

if __name__ == "__main__":
    os.makedirs("public/screenshots", exist_ok=True)
    asyncio.run(capture_page("http://localhost:3000", "public/screenshots/new-hero-desktop.png", 1440, 950))
    asyncio.run(capture_page("http://localhost:3000", "public/screenshots/new-about-work.png", 1440, 950, scroll_y=750))
    asyncio.run(capture_page("http://localhost:3000", "public/screenshots/new-classes.png", 1440, 950, scroll_y=1550))
    asyncio.run(capture_page("http://localhost:3000", "public/screenshots/new-mobile-hero.png", 390, 844))
