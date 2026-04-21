import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import aureviaLogo from "@/assets/aurevia-logo.png";

const WA_LINK_ACTIVAR =
  "https://wa.me/34640624484?text=" +
  encodeURIComponent("Hola, quiero activar el sistema en mi clínica");

const BrandTaglineFooter = () => {
  return (
    <footer className="relative py-20 bg-[#0b0b0b] border-t border-border/30 overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="container relative px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* 1. POSICIONAMIENTO */}
          <div>
            <p className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
              Sistema inteligente para clínicas privadas
            </p>
            <p className="text-xl sm:text-2xl font-display font-bold gold-gradient-text">
              de salud, estética y bienestar.
            </p>
            <p className="text-sm font-body text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
              Aurevia convierte tu <span className="text-primary font-semibold">web</span> en captación y tu <span className="text-primary font-semibold">WhatsApp</span> en un sistema de cierre automático.
            </p>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* 2. DIFERENCIACIÓN */}
          <div className="rounded-xl border border-primary/15 bg-primary/[0.03] px-6 py-5 max-w-xl">
            <p className="text-base sm:text-lg font-display font-semibold text-foreground mb-1">
              No es una agencia.
            </p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Es un sistema diseñado para no perder pacientes y mejorar la conversión de cada consulta.
            </p>
          </div>

          {/* 3. AUTORIDAD DE MARCA */}
          <div className="flex flex-col items-center gap-3">
            <img src={aureviaLogo} alt="Aurevia - Agentes de IA" className="h-14 w-auto" />
            <p className="text-base font-display font-semibold text-foreground">
              Aurevia — Agentes de IA
            </p>
            <a
              href="https://www.instagram.com/aurev_iaagency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Instagram className="w-4 h-4" />
              @aurev_iaagency
            </a>
            <p className="text-sm font-body text-muted-foreground max-w-md">
              Automatización inteligente para clínicas privadas
            </p>
          </div>

          {/* 4. CTA FINAL */}
          <a
            href={WA_LINK_ACTIVAR}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK_ACTIVAR, {
              section: "footer",
              button: "Activar sistema en mi clínica",
              message: "Quiero información sobre cómo empezar con PatientFlow 24/7™",
            })}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-base sm:text-lg px-8 py-4 rounded-xl btn-float animate-glow-pulse"
          >
            Activar sistema en mi clínica
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* 5. URGENCIA SUAVE */}
          <p className="text-xs sm:text-sm font-body text-muted-foreground/80 max-w-lg italic">
            Solo trabajamos con un número limitado de clínicas al mes para garantizar una implementación correcta.
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* 6. COPYRIGHT */}
          <p className="text-xs font-body text-muted-foreground/60">
            © 2026 Aurevia. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default BrandTaglineFooter;
