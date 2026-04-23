import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";

const faqs = [
  { q: "¿Funciona con mi sistema actual?", a: "Sí. PatientFlow 24/7™ se integra con la mayoría de sistemas de gestión de clínicas y CRMs del mercado." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Lo configuramos todo nosotros — tu equipo solo recibe los pacientes ya cualificados." },
  { q: "¿Cuánto tarda la implementación?", a: "En menos de 72 horas el sistema está activo y respondiendo." },
  { q: "¿Es difícil de usar?", a: "No. Funciona en automático: el sistema responde, cualifica y agenda sin intervención manual." },
  { q: "¿Qué resultados puedo esperar?", a: "La mayoría ven resultados en las primeras 4-6 semanas: más citas, menos no-shows y horas de trabajo recuperadas." },
  { q: "¿Mis datos están seguros?", a: "Cumplimos con RGPD y utilizamos cifrado de nivel bancario en toda la información." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
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
            Resolvemos tus <span className="gold-gradient-text">objeciones</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Las dudas más comunes antes de activar PatientFlow 24/7™.
          </p>
        </motion.div>

        {/* Urgencia */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-10 rounded-xl border border-primary/30 bg-primary/[0.05] px-5 py-4 text-center"
        >
          <p className="text-sm sm:text-base font-body text-foreground/90">
            🚨 <span className="text-primary font-semibold">Solo trabajamos con un número limitado de clínicas al mes</span> para garantizar una implementación correcta.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-xl glass-card overflow-hidden"
            >
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/[0.02] transition-colors">
                <span className="font-display font-semibold text-foreground pr-4 text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-body mb-6">¿Tienes más preguntas? Hablemos directamente</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK)}
            className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
