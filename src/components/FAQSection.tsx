import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "La implementación completa se realiza en menos de 2 semanas. Nos encargamos de todo el proceso técnico para que no tengas que preocuparte por nada.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nuestras soluciones están diseñadas para que cualquier equipo las use sin formación técnica. Además, te ofrecemos soporte continuo.",
  },
  {
    q: "¿Funciona con mi sistema actual de gestión de citas?",
    a: "Sí, nuestras soluciones se integran con los principales sistemas de gestión de clínicas y CRMs del mercado.",
  },
  {
    q: "¿Qué resultados puedo esperar y en cuánto tiempo?",
    a: "La mayoría de nuestros clientes ven resultados positivos en las primeras 4-6 semanas: más leads convertidos, menos no-shows y un ahorro significativo de tiempo.",
  },
  {
    q: "¿Cuál es el coste de las soluciones?",
    a: "Ofrecemos planes adaptados al tamaño de tu clínica. Agenda una consultoría gratuita y te daremos una propuesta personalizada sin compromiso.",
  },
  {
    q: "¿Mis datos y los de mis pacientes están seguros?",
    a: "Absolutamente. Cumplimos con todas las normativas de protección de datos (RGPD) y utilizamos cifrado de nivel bancario para toda la información.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 section-glow scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Preguntas <span className="gold-gradient-text">frecuentes</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl gold-border-glow bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
