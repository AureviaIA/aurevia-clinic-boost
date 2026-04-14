import { motion } from "framer-motion";
import { Building2, UserCog, GitBranch } from "lucide-react";

const points = [
  {
    icon: Building2,
    title: "Especializado en clínicas",
    text: "Construido entendiendo el lenguaje, los procesos y los pacientes del sector.",
  },
  {
    icon: UserCog,
    title: "Adaptado a tu negocio",
    text: "Cada implementación se configura según tu marca, tratamientos y forma de trabajar.",
  },
  {
    icon: GitBranch,
    title: "En evolución constante",
    text: "El sistema aprende y mejora con el tiempo, adaptándose a tus necesidades.",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="relative py-24 bg-[#0b0b0b]">
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
            Por qué <span className="gold-gradient-text">somos diferentes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-xl gold-border-glow bg-card p-8 text-center group hover:border-primary/40 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
