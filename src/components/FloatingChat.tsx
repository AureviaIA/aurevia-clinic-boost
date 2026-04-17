import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20mejorar%20la%20captaci%C3%B3n%20de%20pacientes%20en%20mi%20cl%C3%ADnica";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

type Stage =
  | "greeting"
  | "qualification"
  | "pain_explore"
  | "pain_deep"
  | "positioning"
  | "transition_schedule"
  | "ask_preference"
  | "offer_slots"
  | "ask_email"
  | "confirm_email"
  | "ask_phone"
  | "confirm_phone"
  | "booked"
  | "objection_1"
  | "objection_2"
  | "objection_3"
  | "objection_4";

interface ConvoState {
  stage: Stage;
  name: string;
  businessInfo: string;
  painPoint: string;
  email: string;
  phone: string;
  chosenSlot: string;
  objectionCount: number;
  availableSlots: string[];
}

const initialState: ConvoState = {
  stage: "greeting",
  name: "",
  businessInfo: "",
  painPoint: "",
  email: "",
  phone: "",
  chosenSlot: "",
  objectionCount: 0,
  availableSlots: [],
};

const NEGATIVE_KW = [
  "no", "no me interesa", "después", "despues", "luego", "ahora no",
  "no ahora", "no puedo", "no quiero", "no gracias", "paso", "ocupado",
  "ocupada", "pensarlo", "piénsalo", "lo pienso", "déjame pensar",
  "dejame pensar", "mándame info", "mandame info", "envíame", "enviame",
];

const POSITIVE_KW = [
  "sí", "si", "claro", "dale", "vale", "ok", "bueno", "me interesa",
  "quiero", "agendar", "agenda", "cita", "demo", "vamos", "genial",
  "perfecto", "correcto", "bien",
];

const isNegative = (t: string) => {
  const l = t.toLowerCase().trim();
  return NEGATIVE_KW.some((kw) => l.includes(kw));
};
const isPositive = (t: string) => {
  const l = t.toLowerCase().trim();
  return POSITIVE_KW.some((kw) => l.includes(kw));
};
const looksLikeEmail = (t: string) => /\S+@\S+\.\S+/.test(t.trim());
const looksLikePhone = (t: string) => /[\d\s\-+()]{7,}/.test(t.trim());

function getSlots(): string[] {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const hours = ["10:00", "12:00", "16:00", "17:00", "18:00"];
  const now = new Date();
  const slots: string[] = [];
  for (let i = 1; i <= 7 && slots.length < 3; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const dayName = days[d.getDay() - 1];
    if (dayName) {
      const h = hours[Math.floor(Math.random() * hours.length)];
      slots.push(`${dayName} a las ${h}`);
    }
  }
  return slots.length >= 3 ? slots.slice(0, 3) : ["Martes a las 10:00", "Miércoles a las 16:00", "Jueves a las 12:00"];
}

function processMessage(
  userText: string,
  state: ConvoState
): { responses: string[]; newState: ConvoState } {
  const s = { ...state };
  const t = userText.trim();
  const lower = t.toLowerCase();

  // Helper: attempt objection handling
  const handleObjection = (): string[] => {
    s.objectionCount += 1;
    if (s.objectionCount === 1) {
      s.stage = "objection_1";
      return [
        "Entiendo 😊",
        "Solo una pregunta rápida... que es lo que más te frustra de la captación de leads actualmente?",
      ];
    }
    if (s.objectionCount === 2) {
      s.stage = "objection_2";
      return [
        "Claro, lo respeto 👍",
        "Mira, muchos de nuestros clientes nos dijeron lo mismo al inicio.",
        "Actualmente como manejan la atención a leads que les escriben?",
      ];
    }
    if (s.objectionCount === 3) {
      s.stage = "objection_3";
      return [
        "Te entiendo perfectamente.",
        "Puedo preguntarte algo? Si pudieras mejorar UNA cosa del seguimiento a tus pacientes hoy, cual sería?",
      ];
    }
    // 4th attempt
    s.stage = "objection_4";
    return [
      "Ok, sin compromiso... solo por curiosidad:",
      "Cual es tu meta de crecimiento para los próximos 3-6 meses? 📊",
    ];
  };

  // After objection responses, if they engage positively -> back to positioning
  if (
    ["objection_1", "objection_2", "objection_3", "objection_4"].includes(s.stage)
  ) {
    if (isNegative(lower) && s.objectionCount < 4) {
      return { responses: handleObjection(), newState: s };
    }
    if (s.objectionCount >= 4 && isNegative(lower)) {
      s.stage = "booked";
      return {
        responses: [
          "Sin problema! Cuando quieras retomar el tema, aquí estamos 😊",
          "También puedes escribirnos directo por WhatsApp 👇",
        ],
        newState: s,
      };
    }
    // They engaged – capture pain and move to positioning
    if (t.length > 3) {
      s.painPoint = t;
      s.stage = "positioning";
      return {
        responses: [
          `Uff, sí... "${t.length > 60 ? t.slice(0, 60) + "..." : t}" es súper común 😅`,
          "Mira, lo que hacemos es un sistema integral de automatización con IA que incluye una landing profesional y un agente IA que gestiona consultas al instante.",
          "Así mejoras tu captación y no pierdes pacientes valiosos 📊",
          "Lo mejor sería que hablemos más a fondo sobre tu situación. Tenemos consultorías donde analizamos tu negocio y te armamos una estrategia personalizada. Sin costo 😊",
          "Son como 30-45 min. Te gustaría agendar una llamada?",
        ],
        newState: s,
      };
    }
  }

  switch (s.stage) {
    case "greeting": {
      s.stage = "qualification";
      // Try to grab name
      const words = t.split(/\s+/);
      if (words.length <= 4) s.name = words[words.length - 1];
      return {
        responses: [
          `${s.name ? `Hola ${s.name}! 😊` : "Hola! 😊"} Hablas con el equipo de Aurevia.`,
          "Somos una agencia de automatización con IA que ayuda a empresarios a mejorar su negocio.",
          "Me cuentas un poco sobre tu negocio? A qué se dedican?",
        ],
        newState: s,
      };
    }

    case "qualification": {
      s.businessInfo = t;
      s.stage = "pain_explore";
      const mention = t.length > 40 ? t.slice(0, 40) + "..." : t;
      return {
        responses: [
          `Ah interesante lo de "${mention}" 👍`,
          "Actualmente, como están obteniendo nuevos pacientes? Usan marketing digital, redes sociales, o como les llegan?",
        ],
        newState: s,
      };
    }

    case "pain_explore": {
      s.stage = "pain_deep";
      return {
        responses: [
          "Ya veo... y como te está funcionando eso? Están viendo los resultados que esperaban?",
        ],
        newState: s,
      };
    }

    case "pain_deep": {
      s.painPoint = t;
      s.stage = "positioning";
      const hasFrustration =
        lower.includes("no") ||
        lower.includes("mal") ||
        lower.includes("poco") ||
        lower.includes("falta") ||
        lower.includes("difícil") ||
        lower.includes("dificil") ||
        lower.includes("complicado");
      const empathy = hasFrustration
        ? "Uff, te entiendo perfectamente 😅 Eso es súper común."
        : "Sí, muchos nos dicen lo mismo.";
      return {
        responses: [
          empathy,
          "Mira, lo que hacemos es un sistema integral de automatización con IA que incluye una landing profesional y un agente IA que gestiona consultas al instante.",
          "Así mejoras tu captación y no pierdes pacientes valiosos 📊",
          "Lo mejor sería que hablemos más a fondo sobre tu situación. Tenemos consultorías donde analizamos tu negocio y te armamos una estrategia personalizada. Sin costo 😊",
          "Son como 30-45 min. Te gustaría agendar una llamada?",
        ],
        newState: s,
      };
    }

    case "positioning":
    case "transition_schedule": {
      if (isNegative(lower)) {
        return { responses: handleObjection(), newState: s };
      }
      s.stage = "ask_preference";
      return {
        responses: [
          "Genial! 🙌",
          "En qué ciudad/país estás? (para ajustar el horario)",
        ],
        newState: s,
      };
    }

    case "ask_preference": {
      const slots = getSlots();
      s.availableSlots = slots;
      s.stage = "offer_slots";
      return {
        responses: [
          "Dale! Tengo estos horarios disponibles:",
          `1️⃣ ${slots[0]}`,
          `2️⃣ ${slots[1]}`,
          `3️⃣ ${slots[2]}`,
          "Cual te viene mejor?",
        ],
        newState: s,
      };
    }

    case "offer_slots": {
      const pick =
        lower.includes("1") || lower.includes("primer")
          ? 1
          : lower.includes("2") || lower.includes("segund")
            ? 2
            : 3;
      const slots = s.availableSlots.length >= 3 ? s.availableSlots : getSlots();
      s.chosenSlot = slots[pick - 1] || slots[0];
      s.stage = "ask_email";
      return {
        responses: [
          `Dale! ✅ Te agendo para ${s.chosenSlot}`,
          "Para enviarte la confirmación, cual es tu email?",
        ],
        newState: s,
      };
    }

    case "ask_email": {
      if (looksLikeEmail(t)) {
        s.email = t.trim();
        s.stage = "confirm_email";
        return {
          responses: [
            "Podrías repetirlo para verificar que está bien? 😊",
          ],
          newState: s,
        };
      }
      return {
        responses: ["Podrías pasarme tu email? Así te envío la confirmación 📩"],
        newState: s,
      };
    }

    case "confirm_email": {
      // Accept the spelling / re-entry
      if (looksLikeEmail(t)) s.email = t.trim();
      s.stage = "ask_phone";
      return {
        responses: [
          `Ok, entonces es ${s.email}. Correcto? 👍`,
          "Y el teléfono de contacto, cual sería? (por si necesitamos confirmar algo)",
        ],
        newState: s,
      };
    }

    case "ask_phone": {
      if (looksLikePhone(t)) {
        s.phone = t.trim();
        s.stage = "confirm_phone";
        return {
          responses: [`Genial, entonces ${s.phone}. Así está bien?`],
          newState: s,
        };
      }
      return {
        responses: ["Podrías darme un número de teléfono de contacto? 📱"],
        newState: s,
      };
    }

    case "confirm_phone": {
      s.stage = "booked";
      return {
        responses: [
          `Listo! ✅ Ya estás agendado/a para ${s.chosenSlot} tu hora.`,
          `Te va a llegar un email de confirmación a ${s.email} con el link de la videollamada.`,
          "Nos vemos entonces! 😊🚀",
        ],
        newState: s,
      };
    }

    case "booked": {
      return {
        responses: [
          "Ya tienes tu cita agendada! Si necesitas algo más, aquí estamos 😊",
          "También puedes escribirnos directo por WhatsApp 👇",
        ],
        newState: s,
      };
    }

    default:
      return {
        responses: ["Me cuentas un poco más? 😊"],
        newState: s,
      };
  }
}

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "Hola! 😊 Soy tu asistente de Aurevia" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [convoState, setConvoState] = useState<ConvoState>({ ...initialState });
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(2);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: idCounter.current++, sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const { responses, newState } = processMessage(text, convoState);
    setConvoState(newState);

    // Drip messages with delays
    let delay = 600;
    responses.forEach((resp, i) => {
      delay += 400 + resp.length * 12; // simulate typing speed
      setTimeout(() => {
        const botMsg: Message = { id: idCounter.current++, sender: "bot", text: resp };
        setMessages((prev) => [...prev, botMsg]);
        if (i === responses.length - 1) setTyping(false);
      }, delay);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl gold-border-glow bg-card flex flex-col"
            style={{ height: 480, maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="gold-gradient-bg px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary-foreground text-sm">Aurevia Agency</p>
                  <p className="text-xs text-primary-foreground/70 font-body">En línea</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-background/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-body leading-relaxed ${
                      msg.sender === "user"
                        ? "gold-gradient-bg text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-muted-foreground rounded-2xl rounded-bl-sm px-4 py-3 text-sm font-body">
                    <span className="inline-flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* WhatsApp link */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openWhatsApp(e, WA_LINK)}
              className="mx-4 mb-2 text-center text-xs font-body text-primary hover:underline"
            >
              💬 Prefieres hablar por WhatsApp? Haz clic aquí
            </a>

            {/* Input */}
            <div className="p-3 border-t border-border/50 flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 btn-float disabled:opacity-40"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center btn-float animate-glow-pulse shadow-lg"
        aria-label="Conversación directa"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default FloatingChat;
