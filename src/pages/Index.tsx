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
    <div className="min-h-screen bg-section-base">
      <Navbar />
      {/* 1. HERO - gradiente sutil */}
      <HeroSection />
      {/* 2. MÉTRICAS / prueba rápida - fondo alternativo */}
      <div className="bg-section-alt">
        <SocialProofBar />
      </div>
      {/* 3. DEMO en vivo (chat + dashboard) - fondo base */}
      <LiveSystemSection />
      {/* 4. PROBLEMA con métricas grandes - fondo elevado */}
      <div className="bg-section-elevated">
        <ClinicPainSection />
      </div>
      {/* 5. SOLUCIÓN dos columnas: Web + WhatsApp - fondo alternativo */}
      <div className="bg-section-alt">
        <SystemDualSection />
      </div>
      {/* 6. CÓMO FUNCIONA — 3 pasos - fondo base */}
      <ProcessSection />
      {/* 7. SIMULACIÓN paso a paso del flujo - fondo elevado */}
      <div className="bg-section-elevated">
        <SimulationSection />
      </div>
      {/* 8. IMPACTO — frase ancla + CTA - fondo alternativo */}
      <div className="bg-section-alt">
        <ImpactSection />
      </div>
      {/* 9. SIMULADOR de ingresos - fondo base */}
      <CalculatorSection />
      {/* 10. BENEFICIOS grid 2x3 - fondo elevado */}
      <div className="bg-section-elevated">
        <BenefitsSection />
      </div>
      {/* 11. ANTES vs DESPUÉS - fondo alternativo */}
      <div className="bg-section-alt">
        <ProblemsSection />
      </div>
      {/* 12. PATH selector — 3 opciones - fondo base */}
      <PathSelectorSection />
      {/* 13. PLANES - fondo elevado */}
      <div className="bg-section-elevated">
        <PacksSection />
      </div>
      {/* 14. GARANTÍA / sin riesgo - fondo alternativo */}
      <div className="bg-section-alt">
        <SecuritySection />
      </div>
      {/* 15. POR QUÉ DIFERENTES - fondo base */}
      <WhyDifferentSection />
      {/* 16. TESTIMONIOS - fondo elevado */}
      <div className="bg-section-elevated">
        <TestimonialsSection />
      </div>
      {/* 17. FAQ - fondo alternativo */}
      <div className="bg-section-alt">
        <FAQSection />
      </div>
      {/* 18. CONTACTO - fondo base */}
      <ContactFormSection />
      {/* 19. CIERRE binario - fondo elevado */}
      <div className="bg-section-elevated">
        <FinalCTASection />
      </div>
      {/* Footer - fondo base */}
      <div className="bg-section-base">
        <BrandTaglineFooter />
      </div>
      <FloatingChat />
    </div>
  );
};

export default Index;