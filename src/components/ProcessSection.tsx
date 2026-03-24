import { motion } from "framer-motion";
import { CalendarClock, Bot, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20agendar%20consultoria%20gratuita";

const steps = [
  {
    icon: CalendarClock,
    step: "01",
    title: "Consultoría gratuita 30–45 min",
    description: "Analizamos tu clínica, tus necesidades y diseñamos un plan personalizado.",
  },
  {
    icon: Bot,
    step: "02",
    title: "Implementación del sistema IA",
    description: "Configuramos tu agente de WhatsApp y lo integramos con tu flujo de trabajo.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Resultados en 2–4 semanas",
    description: "Más leads convertidos, menos no-shows y un equipo más productivo.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="relative py-24 section-glow scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Así de <span className="gold-gradient-text">simple</span> es empezar
          </h2>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative flex-1 flex flex-col items-center text-center p-8 rounded-2xl gold-border-glow bg-card"
            >
              <span className="text-xs font-body font-semibold text-primary tracking-widest mb-3">PASO {step.step}</span>
              <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            Agendar consultoría gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
