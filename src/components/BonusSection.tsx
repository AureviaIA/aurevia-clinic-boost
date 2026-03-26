import { motion } from "framer-motion";
import { BookOpen, Copy, BarChart3 } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20obtener%20mis%20bonos";

const bonuses = [
  {
    icon: BookOpen,
    title: 'Ebook "Guía de Captación de Pacientes por WhatsApp"',
    description: "PDF completo con scripts, manejo de objeciones, agendamiento automatizado y checklist final para tu clínica.",
  },
  {
    icon: BarChart3,
    title: "Mini auditoría de WhatsApp",
    description: "Tabla editable con KPIs, estado actual, objetivos y acciones sugeridas para optimizar tu WhatsApp.",
  },
];

const BonusSection = () => {
  return (
    <section id="bonus" className="relative py-24 section-glow scroll-mt-24">
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
            Bonus <span className="gold-gradient-text">exclusivos</span> para ti
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Herramientas extra que recibes al agendar tu consultoría gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 rounded-2xl gold-border-glow bg-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl gold-gradient-bg flex items-center justify-center mb-6 mx-auto">
                <bonus.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">{bonus.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{bonus.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float animate-glow-pulse"
          >
            Obtener mis bonos ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
