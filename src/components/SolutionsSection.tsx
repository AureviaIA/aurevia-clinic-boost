import { motion } from "framer-motion";
import { Zap, Filter, CalendarCheck, ShieldCheck, Users, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const solutions = [
  { icon: Zap, title: "Respuesta instantánea 24/7", description: "Tu agente IA responde al segundo, incluso a las 3 AM." },
  { icon: Filter, title: "Filtrado y calificación de leads", description: "Identifica automáticamente a los pacientes más valiosos." },
  { icon: CalendarCheck, title: "Agenda citas con confirmación", description: "Confirma citas por email y teléfono sin intervención." },
  { icon: ShieldCheck, title: "Reduce cancelaciones y no-shows", description: "Recordatorios automáticos que bajan los no-shows un 40%." },
  { icon: Users, title: "Menos trabajo manual", description: "Libera a tu equipo de tareas repetitivas para que atiendan mejor." },
  { icon: MessageCircle, title: "Conversaciones naturales", description: "IA que habla como un humano, con empatía y profesionalismo." },
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
            Soluciones que <span className="gold-gradient-text">transforman tu clínica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Tecnología inteligente diseñada para que tu clínica crezca sin complicaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl gold-border-glow bg-card group text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <sol.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{sol.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{sol.description}</p>
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
            Quiero estas soluciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
