import { motion } from "framer-motion";
import { Globe, MessageCircle, Rocket } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const enc = (m: string) => `https://wa.me/34640624484?text=${encodeURIComponent(m)}`;

const paths = [
  {
    icon: Globe,
    badge: "Opción 1 · Web",
    title: "Quiero mejorar mi web",
    desc: "Para clínicas que tienen tráfico pero no convierten visitas en pacientes.",
    cta: "Quiero mejorar mi web",
    msg: "Quiero mejorar la conversión de mi web",
    section: "path_web",
    highlight: false,
  },
  {
    icon: Rocket,
    badge: "Opción 3 · Sistema completo",
    title: "Quiero el sistema completo",
    desc: "Para clínicas que quieren captar y convertir de forma automática. Web + WhatsApp conectados.",
    cta: "Quiero el sistema completo",
    msg: "Quiero el sistema completo de captación y cierre",
    section: "path_full",
    highlight: true,
  },
  {
    icon: MessageCircle,
    badge: "Opción 2 · WhatsApp",
    title: "Quiero automatizar mi WhatsApp",
    desc: "Para clínicas que pierden leads por no responder a tiempo.",
    cta: "Quiero automatizar mi WhatsApp",
    msg: "Quiero automatizar mis respuestas en WhatsApp",
    section: "path_whatsapp",
    highlight: false,
  },
];

const PathSelectorSection = () => (
  <section className="relative py-28 bg-[#0b0b0b]">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container px-6 relative z-10 max-w-6xl mx-auto">
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
          No todas las clínicas están en el mismo punto. Elige tu camino.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:items-stretch">
        {paths.map((p, i) => {
          const link = enc(p.msg);
          return (
            <motion.a
              key={p.section}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openWhatsApp(e, link, {
                section: p.section,
                button: p.cta,
                message: p.msg,
              })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 flex flex-col cursor-pointer transition-all ${
                p.highlight
                  ? "border-2 border-primary/70 bg-gradient-to-b from-primary/[0.10] to-transparent shadow-[0_0_60px_-15px_hsl(51_100%_50%/0.4)] md:scale-[1.04] z-10"
                  : "glass-card border border-primary/15 hover:border-primary/35"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient-bg text-primary-foreground text-xs font-body font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  ⭐ Recomendado
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-body text-primary tracking-[0.2em] uppercase mb-2">{p.badge}</p>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-1">{p.desc}</p>
              <span className={`inline-flex items-center gap-2 text-sm font-semibold font-body ${p.highlight ? "text-primary" : "text-primary/80"}`}>
                {p.cta} →
              </span>
            </motion.a>
          );
        })}
      </div>

      <p className="text-center mt-10 text-sm font-body text-muted-foreground italic">
        Web capta. WhatsApp convierte.
      </p>
    </div>
  </section>
);

export default PathSelectorSection;
