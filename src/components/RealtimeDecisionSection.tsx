import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Zap, CalendarCheck, UserCheck } from "lucide-react";

const liveEvents = [
  { icon: Activity, text: "Lead entrando desde la web…", color: "text-primary" },
  { icon: Zap, text: "IA respondiendo en 2.4s…", color: "text-green-500" },
  { icon: CalendarCheck, text: "Cita confirmada hace 1 minuto…", color: "text-primary" },
  { icon: UserCheck, text: "Paciente convertido → ingreso generado", color: "text-green-500" },
];

const RealtimeDecisionSection = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative py-24 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.03] blur-[180px]" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/[0.06] mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-body text-green-500 uppercase tracking-widest">Sistema activo en este momento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Esto ya está ocurriendo ahora mismo en </span>
            <span className="gold-gradient-text">clínicas como la tuya</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Mientras lees esto, el Sistema PatientFlow 24/7™ está cerrando citas en tiempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {liveEvents.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-xl glass-card p-5"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 relative">
                <e.icon className={`w-5 h-5 ${e.color}`} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              <p className="text-sm sm:text-base font-body text-foreground/90">{e.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={tick}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5 text-center">
            <p className="text-3xl font-display font-bold gold-gradient-text">3</p>
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mt-1">Conversaciones activas ahora</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5 text-center">
            <p className="text-3xl font-display font-bold gold-gradient-text">2.4s</p>
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mt-1">IA respondiendo en promedio</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5 text-center">
            <p className="text-3xl font-display font-bold gold-gradient-text">2</p>
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mt-1">Citas cerradas en los últimos 10 min</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealtimeDecisionSection;
