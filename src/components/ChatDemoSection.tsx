import { motion } from "framer-motion";
import { MessageCircle, Check, CheckCheck } from "lucide-react";
import whatsappChat from "@/assets/whatsapp-chat-realistic.jpg";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";

const ChatDemoSection = () => {
  return (
    <section id="demo" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Así responde tu clínica{" "}
            <span className="gold-gradient-text">automáticamente</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Incluso cuando dicen que no tienen tiempo o que lo quieren pensar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left – Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="phone-mockup w-[300px] sm:w-[320px]">
                <img
                  src={whatsappChat}
                  alt="Conversación de WhatsApp con IA respondiendo automáticamente"
                  className="w-full h-auto block"
                  loading="lazy"
                  width={640}
                  height={960}
                />
              </div>
              
              {/* Glow behind phone */}
              <div className="absolute -inset-8 rounded-[3rem] bg-primary/[0.06] blur-3xl -z-10" />
              
              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-8 top-20 glass-card rounded-xl px-4 py-3 flex items-center gap-2 max-w-[180px]"
              >
                <CheckCheck className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-[11px] font-body text-foreground/80">Cita confirmada automáticamente</span>
              </motion.div>
              
              {/* Floating response time */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-6 bottom-32 glass-card rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <span className="activity-dot bg-green-500 animate-pulse" />
                <span className="text-[11px] font-body text-foreground/80">Respuesta en &lt;5s</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-foreground">
              Flujo completo de <span className="gold-gradient-text">cierre automático</span>
            </h3>
            <ul className="space-y-5 font-body mb-10">
              {[
                "Respuesta instantánea en <5 segundos",
                "Cualificación automática de cada lead",
                "Manejo inteligente de objeciones",
                "Urgencia natural sin presionar",
                "Cierre a cita confirmada",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 text-foreground/80"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openWhatsApp(e, WA_LINK)}
              className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero esto en mi clínica
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemoSection;
