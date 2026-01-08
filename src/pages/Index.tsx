import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import PresentationContentSection from "@/components/PresentationContentSection";
import EventInfoSection from "@/components/EventInfoSection";
import ProfessorsSection from "@/components/ProfessorsSection";
import TeamSection from "@/components/TeamSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <PresentationContentSection />
      <EventInfoSection />
      <ProfessorsSection />
      <TeamSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
