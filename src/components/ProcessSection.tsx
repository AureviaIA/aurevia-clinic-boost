import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import clinicCorridor from "@/assets/clinic-corridor.jpg";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20conocer%20más%20sobre%20la%20solución";
const WA_CONSULT = "https://wa.me/34640624484?text=Hola%20quiero%20agendar%20consultoria%20gratuita";

const ProcessSection = () => {
  return (
    <section id="proceso" className="relative py-0 bg-background scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left column – image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <img
            src={clinicCorridor}
            alt="Pasillo de clínica estética de ultra-lujo con arcos dorados"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-y-0 right-0 w-px bg-primary/30" />
        </motion.div>

        {/* Right column – text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-card/60 border border-primary/20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg font-display italic text-primary mb-4"
          >
            ¿Listo para descubrirlo?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gold-gradient-text mb-6 leading-tight"
          >
            Descubre cómo esto podría funcionar en tu clínica
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-foreground/85 font-body leading-relaxed mb-8 max-w-lg"
          >
            Cada negocio es único. Por eso empezamos con una conversación sin compromiso para
            entender tu situación y mostrarte exactamente qué impacto podría tener en tu clínica.
          </motion.p>

          {/* Callout box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 p-5 rounded-xl bg-secondary/40 border border-primary/20 mb-10 max-w-lg"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-foreground/90 font-body leading-relaxed">
              <span className="font-semibold">Sin tecnicismos. Sin promesas vacías.</span> Solo una conversación honesta sobre cómo la
              IA puede ayudarte a crecer de forma inteligente.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={WA_CONSULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
            >
              Reserva tu sesión gratuita
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary font-body font-semibold px-8 py-4 rounded-xl hover:bg-primary/10 transition-colors"
            >
              Conoce más sobre la solución
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
