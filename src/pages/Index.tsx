import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import FAQSection from "@/components/FAQSection";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CalculatorSection />
      <FAQSection />
      <BenefitsSection />
    </div>
  );
};

export default Index;
