import { motion } from "framer-motion";
import { Zap, Filter, CalendarCheck, ShieldCheck, Users, MessageCircle } from "lucide-react";
import aiPhoneClinic from "@/assets/ai-phone-clinic.jpg";

const solutions = [
  { icon: Zap, num: "1", title: "Respuesta instantánea 24/7", description: "Tu agente IA responde al segundo, incluso a las 3 AM." },
  { icon: Filter, num: "2", title: "Filtrado y calificación de leads", description: "Identifica automáticamente a los pacientes más valiosos." },
  { icon: CalendarCheck, num: "3", title: "Agenda citas con confirmación", description: "Confirma citas por email y teléfono sin intervención." },
  { icon: ShieldCheck, num: "4", title: "Reduce cancelaciones y no-shows", description: "Recordatorios automáticos que bajan los no-shows un 40%." },
  { icon: Users, num: "5", title: "Menos trabajo manual", description: "Libera a tu equipo de tareas repetitivas para que atiendan mejor." },
  { icon: MessageCircle, num: "6", title: "Conversaciones naturales", description: "IA que habla como un humano, con empatía y profesionalismo." },
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="relative py-0 bg-background scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left column – image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <img
            src={aiPhoneClinic}
            alt="Smartphone con IA en clínica estética de lujo"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-y-0 right-0 w-px bg-primary/30" />
        </motion.div>

        {/* Right column – content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-card/60 border border-primary/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gold-gradient-text mb-4 leading-tight"
          >
            Nuestra solución: tu copiloto invisible
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-foreground/85 font-body leading-relaxed mb-10 max-w-lg"
          >
            No es un software complicado. Es un sistema diseñado específicamente para clínicas que trabaja
            en segundo plano, resolviendo problemas reales sin interrumpir tu forma de trabajar.
          </motion.p>

          {/* Solutions list */}
          <div className="space-y-5 max-w-lg">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/60 border border-primary/20 flex items-center justify-center">
                  <sol.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-display font-semibold text-foreground mb-0.5">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{sol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
