import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import whatsappChat from "@/assets/whatsapp-chat-realistic.jpg";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20esto%20en%20mi%20clinica";

const ChatDemoSection = () => {
  return (
    <section id="demo" className="relative py-24 bg-[#0b0b0b] scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Así responde tu clínica{" "}
            <span className="gold-gradient-text">automáticamente</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Incluso cuando dicen que no tienen tiempo o que lo quieren pensar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left – Phone */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-[320px] sm:w-[360px]">
              <img
                src={whatsappChat}
                alt="Conversación de WhatsApp con IA respondiendo automáticamente"
                className="rounded-2xl shadow-2xl border border-primary/20 w-full h-auto"
                loading="lazy"
                width={640}
                height={960}
              />
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-foreground">
              Flujo completo de <span className="gold-gradient-text">cierre automático</span>
            </h3>
            <ul className="space-y-4 font-body mb-8">
              {[
                "Respuesta instantánea en <5 segundos",
                "Cualificación automática de cada lead",
                "Manejo inteligente de objeciones",
                "Urgencia natural sin presionar",
                "Cierre a cita confirmada",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
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
              Quiero esto en mi clínica
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemoSection;
