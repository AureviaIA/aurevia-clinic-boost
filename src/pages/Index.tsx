import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import FAQSection from "@/components/FAQSection";
import BenefitsSection from "@/components/BenefitsSection";
import { MessageCircle } from "lucide-react";

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

      {/* Floating chat button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center btn-float animate-glow-pulse shadow-lg"
        aria-label="Conversación directa"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
