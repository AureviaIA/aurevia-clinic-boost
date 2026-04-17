import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola,%20tengo%20algunas%20preguntas%20sobre%20el%20sistema%20y%20me%20gustar%C3%ADa%20hablar%20con%20alguien%20para%20resolverlas";

const faqs = [
  { q: "¿Cuánto tiempo tarda la implementación?", a: "Menos de 72 horas. Nos encargamos de todo el proceso técnico." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. El sistema está diseñado para que cualquier equipo lo use sin formación técnica." },
  { q: "¿Funciona con mi sistema de gestión actual?", a: "Sí, se integra con los principales sistemas de gestión de clínicas y CRMs." },
  { q: "¿Qué resultados puedo esperar?", a: "La mayoría ven resultados en las primeras 4-6 semanas: más leads convertidos, menos no-shows y ahorro de tiempo." },
  { q: "¿Cuál es el coste?", a: "Planes adaptados al tamaño de tu clínica. Agenda una consultoría gratuita para propuesta personalizada." },
  { q: "¿Mis datos están seguros?", a: "Cumplimos con RGPD y utilizamos cifrado de nivel bancario para toda la información." },
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
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Preguntas <span className="gold-gradient-text">frecuentes</span>
          </h2>
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
