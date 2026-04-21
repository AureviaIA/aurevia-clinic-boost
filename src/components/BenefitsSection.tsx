import { motion } from "framer-motion";
import { Zap, CalendarCheck, ShieldCheck, TrendingUp, Users, MessageCircle } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Respuesta instantánea 24/7", desc: "Cada mensaje atendido en menos de 5 segundos." },
  { icon: TrendingUp, title: "Más citas sin más tráfico", desc: "Convierte mejor lo que ya tienes." },
  { icon: ShieldCheck, title: "Reducción de no-shows", desc: "Recordatorios que mantienen tu agenda llena." },
  { icon: CalendarCheck, title: "Seguimiento automático", desc: "Ningún lead se pierde por falta de seguimiento." },
  { icon: Users, title: "Menos carga para tu equipo", desc: "Tu staff atiende, la IA responde." },
  { icon: MessageCircle, title: "Conversaciones naturales", desc: "Empatía y tono humano en cada mensaje." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
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
            Beneficios clave
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Lo que tu clínica <span className="gold-gradient-text">empieza a notar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="rounded-xl glass-card p-6 group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
