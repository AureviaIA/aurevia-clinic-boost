import { motion } from "framer-motion";
import { Stethoscope, ArrowRight } from "lucide-react";
import { openWhatsApp, buildWaLink } from "@/lib/whatsapp";

const WA = buildWaLink("Hola, quiero ver cómo funciona PatientFlow 24/7 en mi clínica");

const DiagnosticBridgeSection = () => {
  return (
    <section className="relative py-20 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.05] blur-[160px]" />
      <div className="container relative z-10 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.06] to-transparent p-8 sm:p-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/[0.08] mb-5">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-xs font-body text-primary uppercase tracking-widest">Diagnóstico gratuito</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4">
            <span className="text-foreground">Descubre si tu clínica está </span>
            <span className="gold-gradient-text">perdiendo pacientes ahora mismo</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
            En menos de 2 minutos te decimos cuántos pacientes y cuántos ingresos podrías estar perdiendo cada mes.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA)}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-base sm:text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
          >
            Ver diagnóstico de mi clínica
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticBridgeSection;
