import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Settings, BarChart3 } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Sistema probado", desc: "Implementado y funcionando en clínicas reales con resultados medibles." },
  { icon: Handshake, title: "Implementación guiada", desc: "Te acompañamos paso a paso. Sin complicaciones técnicas." },
  { icon: Settings, title: "Control total", desc: "Acceso completo a métricas, conversaciones y configuración." },
  { icon: BarChart3, title: "Sin fricción técnica", desc: "No necesitas conocimientos técnicos. Nosotros lo configuramos todo." },
];

const SecuritySection = () => (
  <section className="relative py-28 bg-[#0b0b0b]">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/80 mb-4 font-body">
          Confianza total
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Implementación <span className="gold-gradient-text">sin riesgo</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-display font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
