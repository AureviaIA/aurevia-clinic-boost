import { motion } from "framer-motion";
import { X, Check, MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20este%20sistema";

const before = [
  "Web informativa sin conversión",
  "Leads que no reciben respuesta",
  "Pacientes que se van a la competencia",
  "Sin automatización ni seguimiento",
];

const after = [
  "Sistema de IA activo 24/7",
  "Conversión automática de leads",
  "Respuestas instantáneas personalizadas",
  "Citas generadas automáticamente",
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
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
            Antes vs <span className="gold-gradient-text">Después</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            La diferencia entre una web que informa y un sistema que factura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card border-destructive/20 p-8 hover-lift"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-bold text-destructive">ANTES</h3>
            </div>
            <div className="space-y-4">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-sm font-body text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow between (desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card border-primary/20 p-8 hover-lift"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold gold-gradient-text">DESPUÉS</h3>
            </div>
            <div className="space-y-4">
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-body text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK)}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero este sistema
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
