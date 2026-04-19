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
            Aurevia no ayuda a conseguir más leads.
          </p>
          <p className="text-xl sm:text-2xl font-display font-bold gold-gradient-text mb-8">
            Ayuda a no perder los que ya tienes.
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6" />
          <p className="text-sm font-body text-muted-foreground">
            Aurevia · Sistema PatientFlow 24/7™ · Automatización inteligente para clínicas
          </p>
          <p className="text-xs font-body text-muted-foreground/60 mt-2">© 2026 Aurevia</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default BrandTaglineFooter;
