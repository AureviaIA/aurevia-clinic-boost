import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20ver%20demo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b0b0b]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-body text-primary tracking-wide">Sistema activo 24/7</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-8">
              <span className="text-foreground">Sistema de IA que convierte</span>
              <br />
              <span className="text-foreground">tu web en una </span>
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
                máquina de pacientes
              </motion.span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed">
              Responde, cualifica y agenda automáticamente sin intervención humana
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
              >
                <MessageCircle className="w-5 h-5" />
                Ver sistema en vivo
              </a>
              <a
                href="#sistema"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#sistema")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body font-medium transition-colors"
              >
                Descubre cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
