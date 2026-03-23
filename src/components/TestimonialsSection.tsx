import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import drLopezImg from "@/assets/testimonial-dr-lopez.jpg";
import sraMartinezImg from "@/assets/testimonial-sra-martinez.jpg";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const testimonials = [
  {
    quote: "Gracias a Aurevia, ahora respondemos a todos los pacientes y no perdemos leads. Más tiempo libre y más ingresos.",
    name: "Dr. López",
    clinic: "Clínica Estética Renovar",
    image: drLopezImg,
  },
  {
    quote: "Automatizar WhatsApp cambió nuestra dinámica. ¡Ya no perdemos pacientes!",
    name: "Sra. Martínez",
    clinic: "Estética Avanzada",
    image: sraMartinezImg,
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
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground font-body">{t.clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            Quiero resultados así
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
