import { motion } from "framer-motion";
import { UserX, Cog, BellOff, CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: UserX,
    title: "Leads sin respuesta",
    description: "¿Sabías que más del 40% de tus leads se pierden por falta de respuesta rápida?",
  },
  {
    icon: Cog,
    title: "Procesos manuales",
    description: "El trabajo manual consume un tiempo valioso y reduce tu eficiencia.",
  },
  {
    icon: BellOff,
    title: "Falta de seguimiento",
    description: "Los pacientes potenciales se olvidan de ti sin un sistema de seguimiento efectivo.",
  },
  {
    icon: CalendarX,
    title: "No-shows en citas",
    description: "El 30% de tus pacientes agendados no se presentan, perdiendo oportunidades valiosas.",
  },
];

const ProblemsSection = () => {
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
            ¿Te suenan <span className="gold-gradient-text">estos problemas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Los desafíos que enfrentan las clínicas cada día — y que la IA puede resolver.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl gold-border-glow bg-card"
            >
              <div className="relative z-10 w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-14"
        >
          <Button
            size="lg"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-5 rounded-xl btn-float"
          >
            Resolver estos problemas
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
