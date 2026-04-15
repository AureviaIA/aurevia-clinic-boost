import { motion } from "framer-motion";
import { Zap, Filter, CalendarCheck, ShieldCheck, Users, MessageCircle } from "lucide-react";

const solutions = [
  { icon: Zap, title: "Respuesta instantánea 24/7", description: "Tu agente IA responde al segundo, incluso a las 3 AM." },
  { icon: Filter, title: "Filtrado y calificación de leads", description: "Identifica automáticamente a los pacientes más valiosos." },
  { icon: CalendarCheck, title: "Agenda citas con confirmación", description: "Confirma citas por email y teléfono sin intervención." },
  { icon: ShieldCheck, title: "Reduce cancelaciones", description: "Recordatorios automáticos que bajan los no-shows un 40%." },
  { icon: Users, title: "Menos trabajo manual", description: "Libera a tu equipo de tareas repetitivas." },
  { icon: MessageCircle, title: "Conversaciones naturales", description: "IA que habla como un humano, con empatía." },
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
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
            Tu <span className="gold-gradient-text">copiloto invisible</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Un sistema que trabaja en segundo plano, resolviendo problemas reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((sol, i) => (
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
                <sol.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">{sol.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
