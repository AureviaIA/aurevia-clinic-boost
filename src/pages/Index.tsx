import { useEffect } from "react";
import { initScrollDepthTracking } from "@/lib/tracking";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import LiveSystemSection from "@/components/LiveSystemSection";
import ClinicPainSection from "@/components/ClinicPainSection";
import SystemDualSection from "@/components/SystemDualSection";
import ProcessSection from "@/components/ProcessSection";
import SimulationSection from "@/components/SimulationSection";
import ImpactSection from "@/components/ImpactSection";
import CalculatorSection from "@/components/CalculatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProblemsSection from "@/components/ProblemsSection";
import PathSelectorSection from "@/components/PathSelectorSection";
import PacksSection from "@/components/PacksSection";
import SecuritySection from "@/components/SecuritySection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import FinalCTASection from "@/components/FinalCTASection";
import BrandTaglineFooter from "@/components/BrandTaglineFooter";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  useEffect(() => {
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      {/* 1. HERO */}
      <HeroSection />
      {/* 2. MÉTRICAS / prueba rápida */}
      <SocialProofBar />
      {/* 3. DEMO en vivo (chat + dashboard) */}
      <LiveSystemSection />
      {/* 4. PROBLEMA con métricas grandes */}
      <ClinicPainSection />
      {/* 5. SOLUCIÓN dos columnas: Web + WhatsApp */}
      <SystemDualSection />
      {/* 6. CÓMO FUNCIONA — 3 pasos */}
      <ProcessSection />
      {/* 7. SIMULACIÓN paso a paso del flujo (<5 min) */}
      <SimulationSection />
      {/* 8. IMPACTO — frase ancla + CTA */}
      <ImpactSection />
      {/* 9. SIMULADOR de ingresos */}
      <CalculatorSection />
      {/* 10. BENEFICIOS grid 2x3 */}
      <BenefitsSection />
      {/* 11. ANTES vs DESPUÉS */}
      <ProblemsSection />
      {/* 12. PATH selector — 3 opciones */}
      <PathSelectorSection />
      {/* 13. PLANES */}
      <PacksSection />
      {/* 14. GARANTÍA / sin riesgo */}
      <SecuritySection />
      {/* 15. POR QUÉ DIFERENTES */}
      <WhyDifferentSection />
      {/* 16. TESTIMONIOS */}
      <TestimonialsSection />
      {/* 17. FAQ */}
      <FAQSection />
      {/* 18. CONTACTO */}
      <ContactFormSection />
      {/* 19. CIERRE binario */}
      <FinalCTASection />
      {/* Footer */}
      <BrandTaglineFooter />
      <FloatingChat />
    </div>
  );
};

export default Index;
