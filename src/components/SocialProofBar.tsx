import { motion } from "framer-motion";
import { MessageSquareText, Timer, TrendingUp } from "lucide-react";

/**
 * Compact social-proof bar shown right under the hero.
 * Three high-signal metrics that justify PatientFlow 24/7™.
 */
const items = [
  { icon: MessageSquareText, value: "97%", label: "de mensajes respondidos" },
  { icon: Timer, value: "<5s", label: "de tiempo de respuesta" },
  { icon: TrendingUp, value: "+30% a +45%", label: "más citas agendadas" },
];

const SocialProofBar = () => {
  return (
    <section
      aria-label="Prueba social"
      className="relative bg-[#0b0b0b] border-y border-primary/10 py-10 sm:py-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container px-6 max-w-5xl mx-auto relative z-10">
        <p className="text-center text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary/70 font-body mb-6">
          Resultados de implementación de PatientFlow 24/7™ en clínicas privadas
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 px-5 py-4 rounded-xl border border-primary/15 bg-primary/[0.03]"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 border border-primary/25 shrink-0">
                <it.icon className="w-5 h-5 text-primary" />
              </span>
              <div className="leading-tight">
                <p className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text">
                  {it.value}
                </p>
                <p className="text-xs sm:text-sm font-body text-foreground/75">
                  {it.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
