import { motion } from "framer-motion";
import { MessageCircle, Smartphone } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const messages = [
  { sender: "patient", text: "Hola, quiero información sobre tratamientos", delay: 0.3 },
  { sender: "ia", text: "¡Claro! 😊 ¿Quieres agendar una cita esta semana?", delay: 0.6 },
  { sender: "ia", text: "Tenemos disponibilidad el martes o jueves, ¿cuál prefieres?", delay: 0.9 },
];

const ChatDemoSection = () => {
  return (
    <section id="demo" className="relative py-24 bg-secondary/20 section-glow scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Mira cómo funciona <span className="gold-gradient-text">en acción</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Tu agente de IA responde al instante y agenda citas sin intervención humana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left – Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-4 border-primary/30 bg-card p-4 shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-2 mb-4">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-body text-primary font-semibold">WhatsApp</span>
                  <div className="w-4" />
                </div>
                {/* Chat area */}
                <div className="space-y-3 min-h-[280px]">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: msg.delay, duration: 0.4 }}
                      className={`flex ${msg.sender === "patient" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`chat-bubble ${
                          msg.sender === "patient" ? "chat-bubble-patient" : "chat-bubble-ia"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/5 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              Tu asistente IA responde <span className="gold-gradient-text">24/7</span>
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Los pacientes escriben a cualquier hora. Nuestro agente IA responde al instante, 
              filtra leads, califica pacientes y agenda citas — todo automáticamente por WhatsApp.
            </p>
            <ul className="space-y-3 text-foreground/80 font-body mb-8">
              {["Respuesta en menos de 5 segundos", "Calificación automática de leads", "Agendamiento inteligente con confirmación"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full gold-gradient-bg shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
            >
              <MessageCircle className="w-5 h-5" />
              Prueba en WhatsApp ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemoSection;
