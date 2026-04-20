import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

/**
 * Hero chat demo — animated mockup that loops automatically.
 * Simulates: patient writes → IA responds → proposes time → confirmed.
 * Pure Framer Motion (no real video). Autoplay, muted by nature, no controls.
 */

const SEQUENCE_DURATION = 12; // seconds per loop

type Message = {
  from: "patient" | "ia";
  text: string;
  /** when this message appears (seconds within the loop) */
  appearAt: number;
};

const messages: Message[] = [
  { from: "patient", text: "Hola, quería info sobre un tratamiento facial 🙂", appearAt: 0.6 },
  { from: "ia", text: "¡Hola! Claro, ¿buscas algo concreto o te recomiendo según tu tipo de piel?", appearAt: 2.2 },
  { from: "patient", text: "Algo para manchas. ¿Tenéis hueco esta semana?", appearAt: 4.0 },
  { from: "ia", text: "Perfecto. Tengo jueves 17:30 o viernes 11:00 ¿cuál te encaja?", appearAt: 5.8 },
  { from: "patient", text: "Jueves a las 17:30 👌", appearAt: 7.6 },
  { from: "ia", text: "✅ Cita confirmada — Jueves 17:30. Te envío recordatorio el día antes.", appearAt: 9.2 },
];

const TypingDots = () => (
  <div className="flex gap-1 px-3 py-2.5 rounded-2xl rounded-bl-sm bg-muted/80 w-fit">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-foreground/60"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const HeroChatDemo = () => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/[0.08] blur-2xl pointer-events-none" />

      {/* Phone frame */}
      <div className="phone-mockup aspect-[9/18] w-full relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-9 pb-3 bg-gradient-to-b from-[#0b0b0b] to-[#0b0b0b]/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center text-[10px] font-display font-bold text-primary-foreground">
              IA
            </div>
            <div className="leading-tight">
              <p className="text-xs font-display font-semibold text-foreground">Tu clínica</p>
              <p className="text-[10px] text-green-400 font-body flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                en línea
              </p>
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground font-body">PatientFlow 24/7™</span>
        </div>

        {/* Chat area */}
        <div className="absolute inset-0 pt-20 pb-6 px-4 flex flex-col justify-end gap-2 overflow-hidden">
          {/* Background subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative flex flex-col gap-2">
            {messages.map((m, i) => {
              const isPatient = m.from === "patient";
              const showTypingBefore = !isPatient;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    y: [10, 10, 0, 0, -4],
                    scale: [0.96, 0.96, 1, 1, 0.98],
                  }}
                  transition={{
                    duration: SEQUENCE_DURATION,
                    times: [
                      0,
                      m.appearAt / SEQUENCE_DURATION,
                      (m.appearAt + 0.3) / SEQUENCE_DURATION,
                      0.98,
                      1,
                    ],
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className={`flex ${isPatient ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[12px] font-body leading-snug ${
                      isPatient
                        ? "bg-primary/90 text-primary-foreground rounded-br-sm"
                        : "bg-muted/80 text-foreground rounded-bl-sm border border-border/30"
                    }`}
                  >
                    {m.text}
                    <div
                      className={`flex items-center gap-1 mt-1 text-[9px] ${
                        isPatient ? "text-primary-foreground/70 justify-end" : "text-muted-foreground"
                      }`}
                    >
                      <span>
                        {String(10 + i).padStart(2, "0")}:
                        {String(20 + i * 3).padStart(2, "0")}
                      </span>
                      {isPatient && <CheckCheck className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Confirmation banner that flashes near the end */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [20, 20, 20, 0, 0, 20] }}
          transition={{
            duration: SEQUENCE_DURATION,
            times: [0, 0.7, 0.78, 0.82, 0.95, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute bottom-4 left-4 right-4 z-30 rounded-xl gold-gradient-bg text-primary-foreground px-4 py-2.5 flex items-center gap-2 shadow-lg"
        >
          <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-display font-bold">Cita confirmada ✔</p>
            <p className="text-[9px] opacity-80 font-body">Jueves 17:30 · Recordatorio activo</p>
          </div>
        </motion.div>
      </div>

      {/* Live label */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
        </span>
        <p className="text-xs font-body text-muted-foreground tracking-wide">
          Sistema funcionando en tiempo real
        </p>
      </div>
    </div>
  );
};

export default HeroChatDemo;
