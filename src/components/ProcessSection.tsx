import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultoría Gratuita",
    description: "Entendemos tus necesidades y objetivos específicos.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Implementación",
    description: "Configuramos la solución de IA seleccionada para tu clínica.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Resultados",
    description: "Obtén resultados positivos en un plazo de 4 a 6 semanas.",
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

        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-4xl mx-auto">
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
          <Button
            size="lg"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-5 rounded-xl btn-float"
          >
            Agenda consultoría
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
