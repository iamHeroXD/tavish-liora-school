import asyncio
import os
import sys
sys.path.append(".")
from scripts.capture_cdp import capture_page

if __name__ == "__main__":
    asyncio.run(capture_page("http://localhost:3000", "public/screenshots/desktop-contact.png", 1440, 950, scroll_y=4200))
    asyncio.run(capture_page("http://localhost:3000/contact", "public/screenshots/contact-page.png", 1440, 950))
