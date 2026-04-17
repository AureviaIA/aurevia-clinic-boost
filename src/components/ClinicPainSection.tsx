import { motion } from "framer-motion";
import { MessageCircleOff, Clock, CalendarX, UserX, Zap, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola,%20creo%20que%20estoy%20perdiendo%20pacientes%20en%20mi%20cl%C3%ADnica%20por%20la%20gesti%C3%B3n%20de%20mensajes%20y%20me%20gustar%C3%ADa%20solucionarlo";

const pains = [
  { icon: MessageCircleOff, text: "Pacientes que escriben y nunca reciben respuesta", stat: "68%" , label: "sin respuesta en <1h" },
  { icon: Clock, text: "Mensajes respondidos demasiado tarde", stat: "45min", label: "tiempo medio de respuesta" },
  { icon: CalendarX, text: "Citas que no se confirman y generan huecos", stat: "30%", label: "de citas se pierden" },
  { icon: UserX, text: "Leads que preguntan una vez y no vuelven jamás", stat: "72%", label: "no reciben seguimiento" },
  { icon: Zap, text: "Tu competencia ya responde antes que tú", stat: "<5s", label: "con IA activa" },
];

const ClinicPainSection = () => (
  <section className="relative py-28 bg-[#0b0b0b]">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent" />
    <div className="container px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-destructive/80 mb-4 font-body">
          La realidad que nadie te cuenta
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Esto es lo que está pasando en tu clínica{" "}
          <span className="text-destructive/90">(aunque no lo veas)</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
          Cada día pierdes pacientes e ingresos por problemas invisibles
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-6 border border-destructive/10 hover:border-destructive/25 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                <p.icon className="w-5 h-5 text-destructive/80" />
              </div>
              <div className="flex-1">
                <p className="text-foreground/90 font-body text-sm leading-relaxed mb-3">{p.text}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-destructive/90">{p.stat}</span>
                  <span className="text-xs text-muted-foreground font-body">{p.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
        >
          <MessageCircle className="w-5 h-5" />
          Quiero solucionar esto ahora
        </a>
      </motion.div>
    </div>
  </section>
);

export default ClinicPainSection;
