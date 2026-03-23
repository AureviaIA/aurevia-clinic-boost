import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating chat bubbles */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 border border-primary/20"
          style={{
            width: 12 + i * 8,
            height: 12 + i * 8,
            top: `${20 + i * 20}%`,
            right: `${10 + i * 12}%`,
          }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10 px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-primary">Aurevia Agency — Automatización WhatsApp</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-6">
              Convierte mensajes de WhatsApp en{" "}
              <span className="gold-gradient-text">citas automáticamente</span>{" "}
              para tu clínica
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 font-body leading-relaxed">
              Responde al instante a todos tus pacientes, incluso fuera de horario, sin contratar más personal.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
            >
              <MessageCircle className="w-5 h-5" />
              Ver demo en WhatsApp
            </a>
          </motion.div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-border-glow">
              <img
                src={heroClinic}
                alt="Clínica moderna con staff usando móvil"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
