import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, Monitor, CalendarX } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20resolver%20estos%20problemas";

const problems = [
  {
    icon: Clock,
    title: "Pacientes sin respuesta a tiempo",
    description: "Más del 40% de tus leads se pierden porque no reciben respuesta rápida.",
    before: "Leads esperando horas sin respuesta",
    after: "Respuesta instantánea 24/7 con IA",
  },
  {
    icon: MessageSquareWarning,
    title: "WhatsApp saturado → citas perdidas",
    description: "Los mensajes se acumulan y las oportunidades se van con la competencia.",
    before: "Mensajes sin leer, oportunidades perdidas",
    after: "Cada mensaje atendido al instante",
  },
  {
    icon: Monitor,
    title: "Recepción desbordada",
    description: "Tu equipo no da abasto respondiendo consultas, gestionando agendas y atendiendo pacientes.",
    before: "Equipo estresado y tareas acumuladas",
    after: "Equipo relajado, IA gestiona lo repetitivo",
  },
  {
    icon: CalendarX,
    title: "Pacientes que no se presentan",
    description: "El 30% de tus pacientes agendados no se presentan, perdiendo ingresos y horas.",
    before: "30% de ausencias, ingresos perdidos",
    after: "Recordatorios automáticos, -80% ausencias",
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
              className="rounded-2xl gold-border-glow bg-card overflow-hidden"
            >
              <div className="flex gap-5 p-6">
                <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0">
                  <problem.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{problem.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-border/30">
                <div className="p-3 bg-destructive/10 text-center border-r border-border/30">
                  <p className="text-xs font-body font-semibold text-destructive mb-1">❌ ANTES</p>
                  <p className="text-foreground font-body text-xs leading-snug">{problem.before}</p>
                </div>
                <div className="p-3 bg-primary/10 text-center">
                  <p className="text-xs font-body font-semibold text-primary mb-1">✅ DESPUÉS</p>
                  <p className="text-foreground font-body text-xs leading-snug">{problem.after}</p>
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
            Resolver estos problemas
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
