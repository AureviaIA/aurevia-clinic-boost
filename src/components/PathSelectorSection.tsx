import { motion } from "framer-motion";
import { MessageCircle, Rocket } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_QUICK = "https://wa.me/34640624484?text=Hola%2C%20quiero%20dejar%20de%20perder%20citas%20en%20mi%20cl%C3%ADnica";
const WA_FULL = "https://wa.me/34640624484?text=Hola%2C%20quiero%20el%20sistema%20completo%20para%20escalar%20mi%20cl%C3%ADnica";

const paths = [
  {
    icon: MessageCircle,
    title: "Dejar de perder citas",
    desc: "Automatiza respuestas y confirmaciones en WhatsApp. Ideal si ya tienes pacientes pero pierdes leads por falta de velocidad.",
    cta: "Quiero dejar de perder citas",
    link: WA_QUICK,
    accent: "border-green-500/20 hover:border-green-500/40",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
  },
  {
    icon: Rocket,
    title: "Escalar y crecer",
    desc: "Sistema completo de captación: web optimizada + IA + automatización + dashboard. Para clínicas que quieren multiplicar pacientes.",
    cta: "Quiero el sistema completo",
    link: WA_FULL,
    accent: "border-primary/20 hover:border-primary/40",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
];

const PathSelectorSection = () => (
  <section className="relative py-28 bg-[#0b0b0b]">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          ¿Qué necesita tu clínica{" "}
          <span className="gold-gradient-text">ahora mismo</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
          Elige tu punto de partida. Ambos caminos llevan a más pacientes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {paths.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, p.link)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass-card rounded-2xl p-8 border ${p.accent} transition-all cursor-pointer group block`}
          >
            <div className={`w-14 h-14 rounded-xl ${p.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <p.icon className={`w-7 h-7 ${p.iconColor}`} />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{p.desc}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary group-hover:gap-3 transition-all">
              {p.cta} →
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PathSelectorSection;
