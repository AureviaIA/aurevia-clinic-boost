import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const enc = (m: string) => `https://wa.me/34640624484?text=${encodeURIComponent(m)}`;

const packs = [
  {
    name: "STARTER",
    subtitle: "PatientFlow 24/7™ Básico",
    price: "299€",
    period: "/mes",
    features: [
      "Acceso a PatientFlow 24/7™ (versión básica)",
      "Respuestas automáticas en WhatsApp",
      "Cierre de citas básico",
    ],
    result: "+10% a +20% más citas",
    cta: "Quiero activar PatientFlow 24/7™",
    waMsg: "Hola, quiero activar PatientFlow 24/7™ versión básica",
    highlight: false,
  },
  {
    name: "GROWTH",
    subtitle: "PatientFlow 24/7™ + Web",
    price: "599€",
    period: "/mes",
    features: [
      "PatientFlow 24/7™ + web optimizada de conversión",
      "Automatización completa WhatsApp + web",
      "Seguimiento inteligente de leads",
    ],
    result: "+20% a +40% más citas",
    cta: "Quiero activar PatientFlow 24/7™",
    waMsg: "Hola, quiero activar PatientFlow 24/7™ con web optimizada",
    highlight: true,
  },
  {
    name: "ELITE",
    subtitle: "PatientFlow 24/7™ Completo",
    price: "999€",
    period: "/mes",
    features: [
      "PatientFlow 24/7™ completo + sistema avanzado de captación",
      "Web premium de alta conversión",
      "Seguimiento + automatización end-to-end",
      "Soporte prioritario",
    ],
    result: "+30% a +60% más citas",
    cta: "Activar PatientFlow 24/7™ completo",
    waMsg: "Hola, quiero activar PatientFlow 24/7™ completo en mi clínica",
    highlight: false,
  },
];

const PacksSection = () => {
  return (
    <section id="packs" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[180px]" />

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-body text-primary tracking-wide">Packs PatientFlow 24/7™</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-5">
            <span className="text-foreground">Elige el nivel de </span>
            <span className="gold-gradient-text">crecimiento</span>
            <span className="text-foreground"> de tu clínica</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Tres sistemas, un mismo objetivo: convertir cada mensaje en una cita real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "border-2 border-primary/60 bg-gradient-to-b from-primary/[0.08] to-transparent shadow-[0_0_60px_-15px_hsl(51_100%_50%/0.35)]"
                  : "glass-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient-bg text-primary-foreground text-xs font-body font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Más elegido
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-body text-primary tracking-[0.2em] mb-2">{p.name}</p>
                <h3 className="text-2xl font-display font-bold text-foreground">{p.subtitle}</h3>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold gold-gradient-text">{p.price}</span>
                <span className="text-muted-foreground font-body">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-foreground/90 text-sm">
                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 rounded-xl border border-primary/20 bg-primary/[0.04]">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Resultado esperado</p>
                <p className="text-lg font-display font-bold gold-gradient-text">{p.result}</p>
              </div>

              <a
                href={enc(p.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsApp(e, enc(p.waMsg))}
                className={`inline-flex items-center justify-center gap-2 font-body font-bold text-base px-6 py-4 rounded-xl transition-all ${
                  p.highlight
                    ? "gold-gradient-bg text-primary-foreground btn-float"
                    : "border border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 text-center"
        >
          <p className="text-sm font-body text-primary tracking-wider uppercase mb-2">Garantía Aurevia</p>
          <p className="text-foreground/90 font-body">
            Si el sistema no mejora la captación de leads en <span className="text-primary font-semibold">30 días</span>, lo revisamos e iteramos sin coste hasta que funcione correctamente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PacksSection;
