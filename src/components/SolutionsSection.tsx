import { motion } from "framer-motion";
import { Bot, CalendarCheck, FileText, Workflow, TrendingUp, Clock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Workflow,
    title: "Automatización de seguimiento de leads",
    description: "Asegúrate de que cada lead sea atendido a tiempo.",
    benefit: "Nunca perderás una oportunidad de conversión.",
  },
  {
    icon: Bot,
    title: "Agente de Texto IA 24/7",
    description: "Respuesta instantánea a consultas de pacientes.",
    benefit: "Mantén el interés y la conexión con pacientes potenciales.",
  },
  {
    icon: CalendarCheck,
    title: "Sistema de agendamiento inteligente",
    description: "Reduce las inasistencias y optimiza tus agendas.",
    benefit: "Minimiza el riesgo de no presentarse a citas.",
  },
  {
    icon: FileText,
    title: "Generación automática de propuestas",
    description: "Crea propuestas personalizadas sin esfuerzo.",
    benefit: "Ahorra tiempo y personaliza la atención al paciente.",
  },
];

const stats = [
  { icon: TrendingUp, value: "80%", label: "Aumento en conversión de leads" },
  { icon: Clock, value: "15h", label: "Ahorro semanal en trabajo manual" },
  { icon: UserCheck, value: "40%", label: "Reducción de no-shows" },
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="relative py-24 bg-secondary/20 section-glow scroll-mt-24">
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
            Soluciones de <span className="gold-gradient-text">IA a tu medida</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Tecnología inteligente diseñada específicamente para el crecimiento de tu clínica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-6 rounded-2xl gold-border-glow bg-card group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <sol.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{sol.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-3">{sol.description}</p>
              <p className="text-sm text-primary font-body font-medium">→ {sol.benefit}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl gold-border-glow bg-card min-w-[240px]">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold gold-gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            size="lg"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-5 rounded-xl btn-float"
          >
            Quiero estas soluciones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
