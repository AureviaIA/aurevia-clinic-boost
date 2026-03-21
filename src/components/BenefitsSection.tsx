import { motion } from "framer-motion";
import { TrendingUp, Headphones, Settings, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: TrendingUp, title: "Mayor conversión de leads" },
  { icon: Headphones, title: "Atención continua a pacientes" },
  { icon: Settings, title: "Optimización de procesos" },
  { icon: Timer, title: "Ahorro de tiempo significativo" },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 section-glow">
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
            Beneficios que <span className="gold-gradient-text">transforman</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl gold-border-glow bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">{b.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-5 rounded-xl btn-float"
          >
            Comenzar ahora
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Aurevia Agency. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
