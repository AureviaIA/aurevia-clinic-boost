import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK =
  "https://wa.me/34640624484?text=" +
  encodeURIComponent("Hola, quiero esto en mi clínica");

const ImpactSection = () => {
  return (
    <section className="relative py-32 sm:py-40 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1]">
            <span className="text-foreground">Mientras tardas en responder…</span>
            <br />
            <motion.span
              className="gold-gradient-text inline-block mt-2"
              animate={{
                textShadow: [
                  "0 0 20px hsl(51 100% 50% / 0.3)",
                  "0 0 40px hsl(51 100% 50% / 0.55)",
                  "0 0 20px hsl(51 100% 50% / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              otro sistema ya ha cerrado la cita.
            </motion.span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Cada minuto sin responder es un paciente que elige a otra clínica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK, {
              section: "impact",
              button: "Quiero esto en mi clínica",
              message: "Hola, quiero esto en mi clínica",
            })}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl btn-float animate-glow-pulse"
          >
            Quiero esto en mi clínica
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
