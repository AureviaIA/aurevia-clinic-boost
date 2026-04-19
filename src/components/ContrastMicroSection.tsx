import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { bad: "Tu web actual = pérdida constante de pacientes", good: "Sistema Aurevia = máquina activa de conversión" },
  { bad: "Responder tarde = perder ingresos", good: "Responder en segundos = ganar pacientes" },
];

const ContrastMicroSection = () => {
  return (
    <section className="relative py-20 bg-[#0b0b0b] overflow-hidden">
      <div className="container px-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/[0.05] p-5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 border border-destructive/40 flex items-center justify-center mt-0.5">
                  <X className="w-3.5 h-3.5 text-destructive" />
                </span>
                <p className="font-body text-foreground/85">{r.bad}</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/[0.05] p-5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <p className="font-body text-foreground">{r.good}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContrastMicroSection;
