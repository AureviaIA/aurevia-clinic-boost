import { motion } from "framer-motion";
import { Building2, UserCog, GitBranch } from "lucide-react";
import clinicRender from "@/assets/clinic-render.jpg";

const points = [
  {
    icon: Building2,
    title: "Especializado en clínicas",
    text: "No es una solución genérica. Está construida entendiendo el lenguaje, los procesos y los pacientes específicos de este sector.",
  },
  {
    icon: UserCog,
    title: "Adaptado a tus necesidades",
    text: "Cada implementación se configura según tu identidad de marca, tu oferta de tratamientos y tu forma de trabajar.",
  },
  {
    icon: GitBranch,
    title: "En evolución constante",
    text: "El sistema aprende y mejora con el tiempo, adaptándose a los cambios del mercado y a las necesidades de tu negocio.",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="relative py-0 bg-[#000000]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left column – text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-card/60 border border-primary/20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gold-gradient-text mb-10">
            Por qué este enfoque es diferente
          </h2>

          <div className="space-y-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex gap-5 p-5 rounded-xl bg-secondary/40 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/85 font-body leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column – image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <img
            src={clinicRender}
            alt="Interior de clínica estética de ultra-lujo con acabados dorados y mármol"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gold overlay edge */}
          <div className="absolute inset-y-0 left-0 w-px bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
