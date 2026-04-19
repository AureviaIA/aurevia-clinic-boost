import { motion } from "framer-motion";
import { Clock, AlertTriangle, Timer } from "lucide-react";

const items = [
  { icon: Clock, title: "Cada día sin sistema", text: "= pacientes perdidos que no vuelven." },
  { icon: AlertTriangle, title: "70% de los pacientes", text: "elige la primera clínica que responde." },
  { icon: Timer, title: "En menos de 5 minutos", text: "el paciente ya está hablando con tu competencia." },
];

const CostOfWaitingSection = () => {
  return (
    <section className="relative py-24 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/[0.03] to-transparent" />
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/[0.06] mb-5">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-xs font-body text-destructive uppercase tracking-widest">Urgencia real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            <span className="text-foreground">El </span>
            <span className="gold-gradient-text">coste de esperar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl glass-card p-6 border border-destructive/20"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/15 border border-destructive/30 flex items-center justify-center mb-4">
                <it.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{it.title}</h3>
              <p className="font-body text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostOfWaitingSection;
