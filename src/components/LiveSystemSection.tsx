import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Users, CalendarCheck, TrendingUp, DollarSign } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
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

  useEffect(() => {
    if (inView) spring.set(end);
  }, [inView, end, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [display]);

  return <div ref={containerRef}><span ref={ref}>{prefix}0{suffix}</span></div>;
};

const chatMessages = [
  { sender: "patient", text: "Hola, quiero información sobre el tratamiento", delay: 0 },
  { sender: "ia", text: "¡Hola! 😊 Claro, ¿qué tratamiento te interesa?", delay: 1.5 },
  { sender: "patient", text: "Botox, ¿tienen disponibilidad esta semana?", delay: 3 },
  { sender: "ia", text: "Sí, tenemos hueco el jueves a las 16:00 y viernes a las 10:00. ¿Cuál prefieres?", delay: 4.5 },
  { sender: "patient", text: "El jueves perfecto", delay: 6 },
  { sender: "ia", text: "✅ Cita confirmada: Jueves 16:00 - Botox. Te envío confirmación por email.", delay: 7.5 },
];

const LiveSystemSection = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const timers = chatMessages.map((msg, i) =>
      setTimeout(() => setVisibleMessages(i + 1), msg.delay * 1000 + 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="sistema" className="relative py-24 bg-[#0b0b0b] scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-body text-primary uppercase tracking-widest">Sistema activo en tiempo real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Así funciona tu clínica operando con{" "}
            <span className="gold-gradient-text">automatización 24/7</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Chat simulation - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl gold-border-glow bg-card overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-border/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-foreground">WhatsApp IA</p>
                <p className="text-xs text-green-500 font-body">Respondiendo...</p>
              </div>
            </div>
            <div className="p-5 space-y-3 min-h-[360px]">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-body leading-relaxed ${
                      msg.sender === "patient"
                        ? "bg-primary/15 text-foreground rounded-br-sm border border-primary/20"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics dashboard - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Users, label: "Leads entrantes", value: 847, suffix: "", color: "text-primary" },
              { icon: CalendarCheck, label: "Citas generadas", value: 312, suffix: "", color: "text-green-500" },
              { icon: TrendingUp, label: "Tasa conversión", value: 37, suffix: "%", color: "text-primary" },
            ].map((metric, i) => (
              <div key={i} className="rounded-xl gold-border-glow bg-card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{metric.label}</p>
                  <p className="text-2xl font-display font-bold gold-gradient-text">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </p>
                </div>
              </div>
            ))}

            {/* Revenue card */}
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-5">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <p className="text-xs text-primary font-body uppercase tracking-wider">Ingresos generados</p>
              </div>
              <p className="text-3xl font-display font-bold gold-gradient-text">
                <AnimatedCounter end={124500} prefix="" suffix="€" duration={3} />
              </p>
              <p className="text-xs text-muted-foreground font-body mt-2">
                <span className="text-green-500">↑ +23%</span> vs mes anterior
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveSystemSection;
