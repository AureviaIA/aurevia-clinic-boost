import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChatDemoSection from "@/components/ChatDemoSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import FAQSection from "@/components/FAQSection";
import BonusSection from "@/components/BonusSection";
import ContactFormSection from "@/components/ContactFormSection";
import BenefitsSection from "@/components/BenefitsSection";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ChatDemoSection />
      <ProblemsSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CalculatorSection />
      <FAQSection />
      <BonusSection />
      <ContactFormSection />
      <BenefitsSection />
      <FloatingChat />
    </div>
  );
};

export default Index;
