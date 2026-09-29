import HeroSection from "@/components/home/HeroSection";
import EssenceSection from "@/components/home/EssenceSection";
import StoryTimeline from "@/components/home/StoryTimeline";
import LearningWorld from "@/components/home/LearningWorld";
import DayTimeline from "@/components/home/DayTimeline";
import CampusSpaces from "@/components/home/CampusSpaces";
import SocialWorld from "@/components/home/SocialWorld";
import AdmissionsBanner from "@/components/home/AdmissionsBanner";
import ContactMapSection from "@/components/home/ContactMapSection";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 02. Hero Experience */}
      <HeroSection />

      {/* 03. "A School That Feels Like..." Essence & Editorial Story */}
      <EssenceSection />

      {/* 04. The School Story Timeline */}
      <StoryTimeline />

      {/* 05. Interactive Learning World */}
      <LearningWorld />

      {/* 06. A Day at Tavish Liora Rhythm */}
      <DayTimeline />

      {/* 07. Campus & Spaces Gallery */}
      <CampusSpaces />

      {/* 10. Social World (Verified Community Posts) */}
      <SocialWorld />

      {/* 11. Admissions Experience */}
      <AdmissionsBanner />

      {/* 12. Contact & Campus Visit Map */}
      <ContactMapSection />
    </div>
  );
}
