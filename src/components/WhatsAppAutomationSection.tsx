import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, Clock, CalendarX, UserX, PhoneOff, Zap, CalendarCheck, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola,%20quiero%20automatizar%20el%20WhatsApp%20de%20mi%20cl%C3%ADnica%20porque%20siento%20que%20estoy%20perdiendo%20pacientes%20por%20no%20responder%20a%20tiempo";

const chatMessages = [
  { from: "patient", text: "Hola, me gustaría pedir cita para una limpieza dental", delay: 0 },
  { from: "ai", text: "¡Hola! 😊 Soy el asistente de Clínica Dental Sonrisa. Tenemos disponibilidad esta semana. ¿Prefiere mañana o tarde?", delay: 1.5 },
  { from: "patient", text: "Por la tarde mejor, después de las 17h", delay: 3.5 },
  { from: "ai", text: "Perfecto. Tengo hueco el jueves a las 17:30 con la Dra. García. ¿Le confirmo?", delay: 5 },
  { from: "patient", text: "Sí, perfecto!", delay: 7 },
  { from: "ai", text: "✅ Cita confirmada: Jueves 17:30 - Limpieza dental con Dra. García. Le enviaré un recordatorio 24h antes. ¡Hasta pronto!", delay: 8.5 },
];

const problems = [
  { icon: PhoneOff, text: "Leads sin respuesta" },
  { icon: CalendarX, text: "Pacientes que no confirman citas" },
  { icon: UserX, text: "No-shows constantes" },
  { icon: Clock, text: "Falta de seguimiento" },
];

const benefits = [
  { icon: Zap, text: "Respuestas instantáneas 24/7" },
  { icon: CalendarCheck, text: "Confirmación automática de citas" },
  { icon: ShieldCheck, text: "Reducción de no-shows" },
  { icon: TrendingUp, text: "Seguimiento automático" },
  { icon: MessageCircle, text: "Más citas sin esfuerzo" },
];

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-secondary/60 border border-border/20 w-fit">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-primary/60"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const WhatsAppAutomationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let timeouts: NodeJS.Timeout[] = [];

    chatMessages.forEach((msg, i) => {
      // Show typing before AI messages
      if (msg.from === "ai") {
        timeouts.push(setTimeout(() => setShowTyping(true), msg.delay * 1000 - 800));
      }
      timeouts.push(
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(i + 1);
        }, msg.delay * 1000)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[180px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-primary tracking-wide">Automatización WhatsApp</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Automatiza tu WhatsApp y </span>
              <span className="gold-gradient-text">deja de perder pacientes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Si ya tienes pacientes interesados pero no puedes responder a tiempo o haces seguimiento manual… este sistema es para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Phone mockup with chat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                {/* Phone frame */}
                <div className="w-full rounded-[3rem] border-[3px] border-border/30 bg-[#111] p-2 shadow-2xl shadow-primary/5">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#111] rounded-b-2xl z-20" />
                  
                  {/* Screen */}
                  <div className="rounded-[2.5rem] overflow-hidden bg-[#0a1a0a]">
                    {/* WhatsApp header */}
                    <div className="bg-[#1a2e1a] px-5 pt-10 pb-3 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">IA</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-body font-semibold text-foreground">Clínica Dental Sonrisa</p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] text-green-400 font-body">en línea</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div className="px-3 py-4 space-y-3 min-h-[380px] max-h-[380px] overflow-hidden">
                      {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] font-body leading-relaxed ${
                              msg.from === "patient"
                                ? "bg-primary/20 text-foreground rounded-br-sm"
                                : "bg-secondary/60 text-foreground/90 rounded-bl-sm border border-border/10"
                            }`}
                          >
                            {msg.text}
                            <span className="block text-[9px] text-muted-foreground/50 text-right mt-1">
                              {msg.from === "patient" ? "✓✓" : ""}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                      {showTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <TypingIndicator />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating notifications */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="absolute -right-8 top-24 glass-card rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-body text-foreground/80">Cita agendada</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="absolute -left-6 bottom-32 glass-card rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-body text-foreground/80">Respuesta &lt;5s</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Problems, solution, benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* Problems */}
              <div>
                <h3 className="text-sm font-body font-semibold text-red-400/80 uppercase tracking-wider mb-4">El problema</h3>
                <div className="grid grid-cols-2 gap-3">
                  {problems.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-xl p-4 flex items-center gap-3 hover-lift"
                    >
                      <p.icon className="w-5 h-5 text-red-400/70 shrink-0" />
                      <span className="text-sm font-body text-foreground/80">{p.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="glass-card rounded-2xl p-6 border-primary/20">
                <h3 className="text-sm font-body font-semibold text-primary uppercase tracking-wider mb-3">La solución</h3>
                <p className="text-foreground/90 font-body leading-relaxed">
                  Un sistema de IA que responde automáticamente, gestiona citas y hace seguimiento sin intervención humana.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-sm font-body font-semibold text-green-400/80 uppercase tracking-wider mb-4">Beneficios</h3>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <b.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-body text-foreground/80">{b.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, WA_LINK)}
                className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-xl btn-float animate-glow-pulse"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero automatizar mi WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Bottom connection message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto border-primary/10">
              <p className="text-foreground/80 font-body text-lg leading-relaxed">
                Y si quieres llevarlo al siguiente nivel, podemos integrar este sistema con tu web y crear un{" "}
                <span className="gold-gradient-text font-semibold">sistema completo de captación y cierre de pacientes</span>.
              </p>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-primary font-body font-medium mt-4 hover:underline"
              >
                Descubre el sistema completo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAutomationSection;
