import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20aumentar%20mis%20pacientes";

const manifestos = [
  "CREAMOS WEBS QUE GENERAN PACIENTES",
  "TU WEB DECIDE SI TE ELIGEN O NO",
  "PACIENTE QUE DUDA NO ESPERA",
  "DUPLICA TUS PACIENTES CON IA",
  "EL TIEMPO LO ES TODO",
];

const ImpactSection = () => {
  return (
    <section className="relative py-32 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {manifestos.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="overflow-hidden"
            >
              <h3
                className={`text-2xl sm:text-3xl lg:text-5xl font-display font-black tracking-tight leading-none ${
                  i % 2 === 0 ? "text-foreground" : "gold-gradient-text"
                }`}
                style={i % 2 !== 0 ? { textShadow: "0 0 30px hsl(51 100% 50% / 0.2)" } : undefined}
              >
                {text}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-xl btn-float animate-glow-pulse"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero aumentar mis pacientes
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
