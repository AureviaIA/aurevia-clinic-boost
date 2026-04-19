import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const PackAnchorSection = () => {
  return (
    <section className="relative py-12 bg-[#0b0b0b]">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-6 sm:p-8 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-body text-primary uppercase tracking-widest">Anclaje de valor</span>
          </div>
          <p className="text-lg sm:text-xl font-body text-foreground mb-2">
            <span className="font-display font-bold gold-gradient-text">Un solo paciente nuevo</span> puede cubrir el sistema durante meses.
          </p>
          <p className="text-base sm:text-lg font-body text-foreground/80">
            Si recuperas <span className="text-primary font-semibold">2–3 pacientes al mes</span>, el sistema se paga solo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PackAnchorSection;
