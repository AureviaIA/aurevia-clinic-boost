import { motion } from "framer-motion";

const BrandTaglineFooter = () => {
  return (
    <footer className="relative py-16 bg-[#0b0b0b] border-t border-border/30">
      <div className="container px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
            Sistema inteligente para clínicas privadas
          </p>
          <p className="text-xl sm:text-2xl font-display font-bold gold-gradient-text mb-8">
            de salud, estética y bienestar.
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6" />
          <p className="text-sm font-body text-muted-foreground max-w-2xl mx-auto">
            Aurevia ayuda a convertir más consultas en pacientes reales mediante sistemas de automatización y atención instantánea.
          </p>
          <p className="text-xs font-body text-muted-foreground/60 mt-4">© 2026 Aurevia</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default BrandTaglineFooter;
