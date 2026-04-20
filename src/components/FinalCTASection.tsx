import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_FINAL = "https://wa.me/34640624484?text=" + encodeURIComponent("Hola, quiero activar el sistema completo en mi clínica");

const FinalCTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.05] blur-[200px]" />

      <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/[0.06] mb-8"
        >
          <AlertTriangle className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-primary tracking-wide">
            Plazas limitadas · No colaboramos con competencia directa en la misma zona
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6"
        >
          <span className="text-foreground">Cada paciente que no respondes en segundos </span>
          <span className="gold-gradient-text">ya está en otra clínica</span>
          <span className="text-foreground">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl text-muted-foreground font-body mb-10 max-w-2xl mx-auto"
        >
          No es falta de pacientes. Es falta de <span className="text-primary font-semibold">velocidad</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
        >
          <div className="rounded-xl border border-border/40 bg-secondary/30 p-5 text-left">
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Opción 1</p>
            <p className="font-body text-foreground/80">Seguir perdiendo oportunidades cada día.</p>
          </div>
          <div className="rounded-xl border border-primary/40 bg-primary/[0.06] p-5 text-left">
            <p className="text-xs font-body text-primary uppercase tracking-wider mb-2">Opción 2</p>
            <p className="font-body text-foreground">Activar <span className="text-primary font-semibold">PatientFlow 24/7™</span>: el sistema que convierte automáticamente cada mensaje en una cita.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href={WA_FINAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_FINAL)}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-12 py-6 rounded-xl btn-float animate-glow-pulse"
          >
            Activar PatientFlow 24/7™ ahora
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-8 text-base sm:text-lg text-foreground/80 font-body max-w-2xl mx-auto">
            Aurevia convierte oportunidades en pacientes mediante el sistema <span className="text-primary font-semibold">PatientFlow 24/7™</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
