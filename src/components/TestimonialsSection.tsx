import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Gracias a Aurevia, aumenté mis conversiones en un 40% y ahora ahorro 15 horas a la semana.",
    name: "Dr. López",
    clinic: "Clínica Estética Renovar",
  },
  {
    quote: "La automatización cambió nuestra dinámica. ¡Ya no perdemos ningún lead!",
    name: "Sra. Martínez",
    clinic: "Estética Avanzada",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="relative py-24 bg-secondary/20 section-glow scroll-mt-24">
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
            Lo que dicen <span className="gold-gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl gold-border-glow bg-card relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground font-body">{t.clinic}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-5 rounded-xl btn-float"
          >
            Quiero resultados así
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
