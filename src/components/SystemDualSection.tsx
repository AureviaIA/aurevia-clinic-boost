import { motion } from "framer-motion";
import { Globe, MessageCircle, ArrowRight, Check } from "lucide-react";

/**
 * Sistema Aurevia: Web + WhatsApp
 * Dual-pillar block reinforcing capture + close.
 */

const webPoints = [
  "Convierte visitas en leads automáticamente",
  "Filtra pacientes interesados",
  "Explica tratamientos para impulsar acción",
  "Lleva al paciente directamente a WhatsApp",
];

const waPoints = [
  "Responde en menos de 5 segundos",
  "Mantiene conversaciones naturales",
  "Resuelve dudas",
  "Cierra citas automáticamente",
];

const SystemDualSection = () => {
  return (
    <section className="relative py-28 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/80 mb-4 font-body">
            Cómo funciona realmente tu crecimiento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Sistema Aurevia:{" "}
            <span className="gold-gradient-text">Web + WhatsApp</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Dos partes. Un solo sistema de captación y cierre de pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* WEB */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-body text-primary tracking-[0.2em] uppercase">
                Web · Captación
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Tu web deja de ser informativa.
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-6">
              Pasa a ser el primer punto de conversión.
            </p>
            <ul className="space-y-3 mb-6">
              {webPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-body text-foreground/90">
                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-sm font-body italic text-foreground/70 border-l-2 border-primary/40 pl-3">
              Si tu web no convierte, estás perdiendo pacientes antes de hablar con ellos.
            </p>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-body text-primary tracking-[0.2em] uppercase">
                WhatsApp · Cierre
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              El punto donde se decide todo.
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-6">
              Cada segundo cuenta para no perder un paciente.
            </p>
            <ul className="space-y-3 mb-6">
              {waPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-body text-foreground/90">
                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-sm font-body italic text-foreground/70 border-l-2 border-primary/40 pl-3">
              Si no respondes rápido, el paciente se va a otra clínica.
            </p>
          </motion.div>
        </div>

        {/* FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6 sm:p-8 text-center"
        >
          <p className="text-xs font-body text-primary tracking-[0.2em] uppercase mb-4">
            🔄 Sistema completo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 font-display font-bold text-base sm:text-lg">
            <span className="text-foreground/80">Tráfico</span>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-foreground">Web</span>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-foreground">WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="gold-gradient-text">Cita confirmada</span>
          </div>
          <p className="text-sm sm:text-base font-body text-foreground/80">
            No son dos herramientas.{" "}
            <span className="text-primary font-semibold">Es un único sistema conectado.</span>
          </p>
          <p className="mt-3 text-sm font-body italic text-muted-foreground">
            Web capta. WhatsApp convierte.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDualSection;
