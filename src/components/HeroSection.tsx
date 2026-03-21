import { motion } from "framer-motion";
import { Bot, Clock, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary">Aurevia Agency — IA para Clínicas</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
            Automatiza Tu Negocio y{" "}
            <span className="gold-gradient-text">Transforma Tu Forma de Conectar</span>{" "}
            con los Pacientes
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Aumenta tus leads y reduce tu carga de trabajo manual con soluciones de IA diseñadas para clínicas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Clock, text: "Respuesta automática 24/7 a tus leads" },
              { icon: TrendingDown, text: "Reducción de no-shows en un 40%" },
              { icon: Zap, text: "Implementación en menos de 2 semanas" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-body">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="gold-gradient-bg text-primary-foreground font-body font-semibold text-lg px-10 py-6 rounded-xl btn-float animate-glow-pulse"
            >
              Agendar Demo Gratuita
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
