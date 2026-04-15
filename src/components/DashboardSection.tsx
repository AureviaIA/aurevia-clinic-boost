import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Zap, CalendarCheck, DollarSign, TrendingUp, Activity } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2.5, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString("es-ES")}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.3 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { if (inView) spring.set(end); }, [inView, end, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [display]);

  return <div ref={containerRef}><span ref={ref}>{prefix}0{suffix}</span></div>;
};

const metrics = [
  { icon: Users, label: "Leads entrantes", value: 1247, suffix: "", sublabel: "este mes" },
  { icon: Zap, label: "Respuestas automáticas", value: 97, suffix: "%", sublabel: "< 1 min" },
  { icon: CalendarCheck, label: "Citas generadas", value: 89, suffix: "", sublabel: "esta semana" },
  { icon: DollarSign, label: "Ingresos estimados", value: 47800, suffix: "€", sublabel: "este mes" },
];

const DashboardSection = () => {
  const [revenue, setRevenue] = useState(47800);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 50 + 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-[#0b0b0b]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[150px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-body text-primary uppercase tracking-widest">Dashboard en vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Así funciona una clínica con{" "}
            <span className="gold-gradient-text">IA activa 24/7</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="rounded-xl glass-card p-6 text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{m.label}</p>
              <p className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text">
                <AnimatedCounter end={i === 3 ? revenue : m.value} suffix={m.suffix} />
              </p>
              <p className="text-xs text-muted-foreground/60 font-body mt-1">{m.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto rounded-2xl glass-card bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 flex items-center justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 scan-line pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center relative">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-xl border-2 border-primary/40 animate-pulse-ring" />
            </div>
            <div>
              <p className="text-sm font-body text-foreground font-semibold">Paciente convertido → ingreso generado</p>
              <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-green-500" />
                Automatización trabajando 24/7
              </p>
            </div>
          </div>
          <div className="text-right relative z-10">
            <p className="text-2xl font-display font-bold gold-gradient-text">{revenue.toLocaleString("es-ES")}€</p>
            <p className="text-xs text-green-500 font-body">↑ actualizándose</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
