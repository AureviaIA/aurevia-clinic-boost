import { motion } from "framer-motion";
import { MessageCircle, Bot, CalendarCheck, Clock } from "lucide-react";

const steps = [
  { icon: MessageCircle, time: "0s", label: "Paciente escribe", desc: "\"Hola, quiero info sobre blanqueamiento\"", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Bot, time: "3s", label: "IA responde", desc: "Saludo personalizado + pregunta de cualificación", color: "text-primary", bg: "bg-primary/10" },
  { icon: MessageCircle, time: "45s", label: "Conversación activa", desc: "Manejo de dudas, objeciones y urgencia natural", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: CalendarCheck, time: "4min", label: "Cita confirmada", desc: "Fecha, hora y confirmación enviada automáticamente", color: "text-primary", bg: "bg-primary/10" },
];

const SimulationSection = () => (
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
          Flujo real de conversión
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Así se convierte un paciente{" "}
          <span className="gold-gradient-text">en menos de 5 minutos</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-5 md:gap-6 relative"
            >
              {/* Node */}
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${s.bg} flex items-center justify-center shrink-0 z-10 border border-white/5`}>
                <s.icon className={`w-5 h-5 md:w-6 md:h-6 ${s.color}`} />
              </div>

              {/* Content */}
              <div className="glass-card rounded-xl p-5 flex-1 hover-lift">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary/70">
                    <Clock className="w-3 h-3" />
                    {s.time}
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground">{s.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SimulationSection;
