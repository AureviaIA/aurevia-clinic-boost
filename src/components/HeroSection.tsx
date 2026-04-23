import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check, Zap, Clock, CalendarCheck } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import aureviaLogo from "@/assets/aurevia-logo.png";
import HeroChatDemo from "@/components/HeroChatDemo";

const WA_LINK_DIAGNOSTICO = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";
const WA_LINK_COMO_FUNCIONA = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";
const WA_LINK_PERDIENDO_SI = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";
const WA_LINK_PERDIENDO_NS = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";

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
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Radial glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[180px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-[120px]" />
      
      {/* Grid pattern overlay muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles reducidos */}
      <FloatingParticle delay={0} x="15%" y="25%" size={3} />
      <FloatingParticle delay={1.5} x="75%" y="35%" size={2} />
      <FloatingParticle delay={2.5} x="30%" y="65%" size={3} />
      <FloatingParticle delay={0.8} x="65%" y="70%" size={2} />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

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
              <span className="text-foreground">Estás perdiendo pacientes que ya te están </span>
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
                escribiendo
              </motion.span>
              <span className="text-foreground">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 font-body leading-relaxed">
              La mayoría de clínicas privadas pierde entre un <span className="text-primary font-semibold">30% y 60%</span> de sus pacientes potenciales por falta de respuesta inmediata y seguimiento.
            </p>

            <p className="text-base sm:text-lg text-foreground/85 max-w-2xl mb-8 font-body leading-relaxed">
              <span className="text-primary font-semibold">PatientFlow 24/7™</span> convierte tu web y WhatsApp en un sistema que responde en menos de 5 segundos y agenda citas automáticamente.
            </p>

            <ul className="space-y-2.5 mb-8 font-body">
              {[
                "Web optimizada para generar pacientes",
                "Respuestas en menos de 5 segundos",
                "Conversión automática a citas",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground/90">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Micro-compromiso */}
            <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
              <p className="text-sm sm:text-base font-display font-semibold text-foreground mb-3">
                ¿Estás perdiendo pacientes ahora mismo?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK_PERDIENDO_SI}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openWhatsApp(e, WA_LINK_PERDIENDO_SI, {
                    section: "hero_micro_commit",
                    button: "Sí",
                    message: "Sí, creo que estoy perdiendo pacientes ahora mismo. Quiero solucionarlo.",
                  })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg gold-gradient-bg text-primary-foreground font-body font-semibold text-sm hover:opacity-95 transition-opacity"
                >
                  Sí
                </a>
                <a
                  href={WA_LINK_PERDIENDO_NS}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openWhatsApp(e, WA_LINK_PERDIENDO_NS, {
                    section: "hero_micro_commit",
                    button: "No estoy seguro",
                    message: "No estoy seguro de si estoy perdiendo pacientes, quiero un diagnóstico rápido.",
                  })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary font-body font-semibold text-sm transition-colors"
                >
                  No estoy seguro
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 w-full max-w-xl">
              <a
                href={WA_LINK_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, WA_LINK_DIAGNOSTICO, {
                  section: "hero",
                  button: "Ver cómo funcionaría en mi clínica",
                  message: "Hola, quiero ver cómo funcionaría el sistema en mi clínica",
                })}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-base sm:text-lg px-6 sm:px-10 py-5 rounded-xl btn-float animate-glow-pulse text-center"
              >
                <ArrowRight className="w-5 h-5 shrink-0" />
                <span className="break-words">Ver cómo funcionaría en mi clínica</span>
              </a>
              <a
                href={WA_LINK_COMO_FUNCIONA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, WA_LINK_COMO_FUNCIONA, {
                  section: "hero",
                  button: "Ver cómo funciona el sistema",
                  message: "Hola, quiero ver cómo funciona el sistema en mi clínica",
                })}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary font-body font-bold text-base sm:text-lg px-6 sm:px-10 py-5 rounded-xl transition-all duration-300 text-center"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span className="break-words">Ver cómo funciona el sistema</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-primary/70 font-body italic">
              sin compromiso · verás tu caso real
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-body">
              ✔ Implementación en 72h &nbsp;·&nbsp; ✔ Sin conocimientos técnicos &nbsp;·&nbsp; ✔ Desarrollado por Aurevia
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

          {/* Right: Live chat demo (autoplay loop, no controls) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full"
          >
            <HeroChatDemo />

            {/* Below the demo: 3 quick proof points */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[420px] mx-auto">
              {[
                { icon: Zap, label: "Respuesta <5s" },
                { icon: Clock, label: "Activo 24/7" },
                { icon: CalendarCheck, label: "Citas automáticas" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border border-primary/15 bg-primary/[0.03] text-center"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-[11px] sm:text-xs font-body text-foreground/80 leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
