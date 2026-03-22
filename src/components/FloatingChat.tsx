import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "¡Hola! 👋 Soy el asistente de Aurevia Agency. ¿En qué puedo ayudarte hoy?",
  },
];

const botResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["precio", "costo", "cuánto", "cuanto", "tarifa", "plan"],
    response:
      "Ofrecemos planes adaptados al tamaño de tu clínica. ¿Te gustaría agendar una consultoría gratuita de 30-45 min para darte una propuesta personalizada? 😊",
  },
  {
    keywords: ["demo", "demostración", "probar", "prueba", "ver"],
    response:
      "¡Claro! Podemos mostrarte cómo funciona en una demo en vivo de 30-45 min. ¿Quieres que la agendemos? También puedes probarlo directamente en WhatsApp 👇",
  },
  {
    keywords: ["whatsapp", "automatizar", "automatización", "ia", "bot"],
    response:
      "Nuestro agente de IA responde automáticamente a tus pacientes por WhatsApp 24/7, agenda citas y reduce no-shows hasta un 40%. ¿Quieres ver cómo funciona?",
  },
  {
    keywords: ["cita", "agendar", "agenda", "consulta", "consultoría"],
    response:
      "¡Perfecto! Puedes agendar tu consultoría gratuita de 30-45 min donde analizaremos tu clínica y diseñaremos un plan personalizado. ¿Te gustaría agendar ahora por WhatsApp?",
  },
  {
    keywords: ["hola", "buenas", "hey", "buenos"],
    response:
      "¡Hola! 😊 Bienvenido a Aurevia Agency. Ayudamos a clínicas a automatizar WhatsApp con IA para captar más pacientes. ¿Qué te gustaría saber?",
  },
  {
    keywords: ["tiempo", "implementación", "cuánto tarda", "plazo"],
    response:
      "La implementación completa se realiza en 2-4 semanas. Nos encargamos de todo el proceso técnico para que no tengas que preocuparte. ¿Agendamos la consultoría?",
  },
];

function getBotResponse(userText: string): string {
  const lower = userText.toLowerCase();
  for (const item of botResponses) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.response;
    }
  }
  return "¡Gracias por tu mensaje! Para darte la mejor atención, te recomiendo hablar directamente con nuestro equipo por WhatsApp. ¿Quieres que te conecte? 😊";
}

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
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

    setTimeout(() => {
      const botText = getBotResponse(text);
      const botMsg: Message = { id: idCounter.current++, sender: "bot", text: botText };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 1000 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat window */}
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
              className="mx-4 mb-2 text-center text-xs font-body text-primary hover:underline"
            >
              💬 ¿Prefieres hablar por WhatsApp? Haz clic aquí
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
