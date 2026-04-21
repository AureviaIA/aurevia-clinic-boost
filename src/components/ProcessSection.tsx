import { motion } from "framer-motion";
import { MessageSquare, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "El paciente escribe",
    description: "Web, WhatsApp o redes sociales. A cualquier hora.",
  },
  {
    icon: Bot,
    num: "02",
    title: "El sistema responde en segundos",
    description: "Detecta intención, resuelve dudas y mantiene la conversación activa.",
  },
  {
    icon: CalendarCheck,
    num: "03",
    title: "Se agenda automáticamente",
    description: "Confirmación por email y SMS. Sin intervención del equipo.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Cómo <span className="gold-gradient-text">funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Tres pasos. Cero complicaciones. Resultados inmediatos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative mb-6 mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mx-auto group-hover:border-primary/50 transition-colors"
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center text-xs font-display font-bold text-primary-foreground shadow-lg">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
