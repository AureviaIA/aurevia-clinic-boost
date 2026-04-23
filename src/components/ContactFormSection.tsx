import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";

const ContactFormSection = () => {
  return (
    <section id="contacto" className="relative py-36 bg-[#0b0b0b] scroll-mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      
      {/* Large ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[200px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 rounded-2xl gold-gradient-bg flex items-center justify-center mx-auto mb-8 shadow-lg relative"
          >
            <Zap className="w-10 h-10 text-primary-foreground" />
            <span className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-pulse-ring" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            <span className="gold-gradient-text">Activar sistema</span> en mi clínica
          </h2>

          <p className="text-lg text-muted-foreground font-body mb-4">
            Implementación en menos de 72h
          </p>

          <p className="text-sm text-muted-foreground/70 font-body mb-10 max-w-md mx-auto">
            Habla directamente con nuestro equipo. Sin formularios. Sin esperas. Solo resultados.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK)}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-xl px-12 py-6 rounded-xl btn-float animate-glow-pulse"
          >
            <MessageCircle className="w-6 h-6" />
            Activar sistema ahora
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground/60 font-body">
            <span>✓ Sin compromiso</span>
            <span>✓ Implementación 72h</span>
            <span>✓ Soporte continuo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
