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
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

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

      {/* Floating WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center btn-float animate-glow-pulse shadow-lg"
        aria-label="Conversación directa por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
