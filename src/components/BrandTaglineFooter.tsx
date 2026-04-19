import { motion } from "framer-motion";
import aureviaLogo from "@/assets/aurevia-logo.png";

const BrandTaglineFooter = () => {
  return (
    <footer className="relative py-16 bg-[#0b0b0b] border-t border-border/30">
      <div className="container px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline */}
          <div>
            <p className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
              Sistema inteligente para clínicas privadas
            </p>
            <p className="text-xl sm:text-2xl font-display font-bold gold-gradient-text">
              de salud, estética y bienestar.
            </p>
            <p className="text-sm font-body text-muted-foreground max-w-xl mx-auto mt-4">
              Aurevia ayuda a convertir más consultas en pacientes reales mediante sistemas de automatización y atención instantánea.
            </p>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Brand block */}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @aurev_iaagency
            </a>
            <p className="text-sm font-body text-muted-foreground max-w-md">
              Automatizaciones inteligentes con IA para clínicas privadas de salud, estética y bienestar.
            </p>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <p className="text-xs font-body text-muted-foreground/60">
            © 2026 Aurevia. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default BrandTaglineFooter;
