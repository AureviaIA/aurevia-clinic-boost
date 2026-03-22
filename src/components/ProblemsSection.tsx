import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, Monitor, CalendarX } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const problems = [
  {
    icon: Clock,
    title: "Pacientes sin respuesta a tiempo",
    description: "Más del 40% de tus leads se pierden porque no reciben respuesta rápida.",
  },
  {
    icon: MessageSquareWarning,
    title: "WhatsApp saturado → citas perdidas",
    description: "Los mensajes se acumulan y las oportunidades se van con la competencia.",
  },
  {
    icon: Monitor,
    title: "Recepción desbordada",
    description: "Tu equipo no da abasto respondiendo consultas, gestionando agendas y atendiendo pacientes.",
  },
  {
    icon: CalendarX,
    title: "Pacientes que no se presentan",
    description: "El 30% de tus pacientes agendados no se presentan, perdiendo ingresos y horas.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="relative py-24 section-glow scroll-mt-24">
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
            ¿Te suenan <span className="gold-gradient-text">estos problemas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Los desafíos diarios que le cuestan dinero a tu clínica — y que la IA puede resolver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex gap-5 p-6 rounded-2xl gold-border-glow bg-card"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0">
                <problem.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14"
        >
          <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
            <p className="text-sm font-body font-semibold text-destructive mb-2">❌ ANTES</p>
            <p className="text-foreground font-body text-sm">Leads perdidos, WhatsApp caótico, pacientes que no vuelven</p>
          </div>
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-sm font-body font-semibold text-primary mb-2">✅ DESPUÉS</p>
            <p className="text-foreground font-body text-sm">Respuesta instantánea, citas automáticas, equipo relajado</p>
          </div>
        </motion.div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            Resolver estos problemas
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
