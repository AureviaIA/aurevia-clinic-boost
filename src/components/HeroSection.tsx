import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Activity, Wifi, Shield, Check } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import aureviaLogo from "@/assets/aurevia-logo.png";

const WA_LINK_DIAGNOSTICO = "https://wa.me/34640624484?text=" + encodeURIComponent("Hola, quiero ver un diagnóstico de mi clínica");
const WA_LINK_COMO_FUNCIONA = "https://wa.me/34640624484?text=" + encodeURIComponent("Hola, quiero ver cómo funcionaría el sistema en mi clínica");

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/[0.04] blur-[200px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={4} />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} />
      <FloatingParticle delay={2} x="25%" y="70%" size={5} />
      <FloatingParticle delay={0.5} x="70%" y="60%" size={3} />
      <FloatingParticle delay={1.5} x="50%" y="15%" size={4} />
      <FloatingParticle delay={3} x="90%" y="75%" size={3} />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10 px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo + Badge */}
            <div className="flex items-center gap-3 mb-8">
              <img src={aureviaLogo} alt="Aurevia" className="h-9 w-auto" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-body text-primary tracking-wide">PatientFlow 24/7™ activo</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-8">
              <span className="text-foreground">Tu clínica no necesita más visitas. Necesita </span>
              <motion.span
                className="gold-gradient-text inline-block"
                style={{ textShadow: "0 0 30px hsl(51 100% 50% / 0.4)" }}
                animate={{
                  textShadow: [
                    "0 0 20px hsl(51 100% 50% / 0.3)",
                    "0 0 40px hsl(51 100% 50% / 0.6)",
                    "0 0 20px hsl(51 100% 50% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                convertirlas en pacientes
              </motion.span>
              <span className="text-foreground">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 font-body leading-relaxed">
              El <span className="text-primary font-semibold">Sistema PatientFlow 24/7™</span> de Aurevia convierte cada mensaje en una cita real en segundos, incluso cuando tu clínica está cerrada.
            </p>

            <ul className="space-y-2.5 mb-10 font-body">
              {[
                "Web optimizada para captar pacientes",
                "IA responde en menos de 5 segundos",
                "Sistema automático de citas 24/7",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground/90">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={WA_LINK_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, WA_LINK_DIAGNOSTICO)}
                className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
              >
                <ArrowRight className="w-5 h-5" />
                Ver diagnóstico de mi clínica
              </a>
              <a
                href={WA_LINK_COMO_FUNCIONA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, WA_LINK_COMO_FUNCIONA)}
                className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary font-body font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Ver cómo funciona
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground font-body">
              ✔ Implementación en 72h &nbsp;·&nbsp; ✔ Sin conocimientos técnicos &nbsp;·&nbsp; ✔ Activo desde el día 1
            </p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: "<5s", label: "Tiempo de respuesta" },
                { value: "97%", label: "Tasa de atención" },
                { value: "24/7", label: "Disponibilidad" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating SaaS Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative animate-float-slow">
              {/* Main dashboard card */}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 scan-line pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <Wifi className="w-3 h-3 text-green-500" />
                    <span>Sistema conectado</span>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Leads hoy", value: "47", color: "text-primary" },
                    { label: "Citas", value: "12", color: "text-green-500" },
                    { label: "Conversión", value: "37%", color: "text-primary" },
                  ].map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="rounded-lg bg-secondary/50 border border-border/30 p-3 text-center"
                    >
                      <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">{m.label}</p>
                      <p className={`text-xl font-display font-bold ${m.color}`}>{m.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="rounded-lg bg-secondary/30 border border-border/20 p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-body">Leads esta semana</span>
                    <span className="text-xs text-green-500 font-body">↑ +23%</span>
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    {[35, 52, 45, 68, 58, 75, 82].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                        className="flex-1 rounded-sm gold-gradient-bg opacity-60"
                      />
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-2">
                  {[
                    { text: "Nuevo lead entrante", time: "hace 12s", dot: "bg-green-500" },
                    { text: "Cita confirmada", time: "hace 1m", dot: "bg-primary" },
                    { text: "Respuesta enviada", time: "hace 2m", dot: "bg-green-500" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.2 }}
                      className="flex items-center gap-2 text-xs font-body"
                    >
                      <span className={`activity-dot ${item.dot} animate-pulse`} />
                      <span className="text-foreground/70">{item.text}</span>
                      <span className="text-muted-foreground/50 ml-auto">{item.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute -bottom-4 -left-6 glass-card rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <div className="relative">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <span className="text-xs font-body text-foreground/80">IA activa</span>
              </motion.div>

              {/* Floating shield */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="absolute -top-3 -right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-body text-foreground/70">RGPD</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
