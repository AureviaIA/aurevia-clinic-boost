import { motion } from "framer-motion";

/**
 * Simplified pain block — 3 stark stats + closing line.
 * Replaces the previous longer ClinicPain content per landing simplification.
 */

const stats = [
  { value: "68%", label: "de mensajes sin respuesta" },
  { value: "30%", label: "de citas perdidas por no-shows" },
  { value: "72%", label: "de leads sin seguimiento" },
];

const ClinicPainSection = () => {
  return (
    <section className="relative py-24 sm:py-28 bg-[#0b0b0b] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-6 relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/80 mb-4 font-body">
            La realidad de las clínicas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Lo que pasa <span className="gold-gradient-text">cada día</span> en tu clínica
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl glass-card p-8 text-center"
            >
              <p className="text-5xl sm:text-6xl font-display font-black gold-gradient-text mb-3">
                {s.value}
              </p>
              <p className="text-sm sm:text-base font-body text-foreground/80">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14 text-xl sm:text-2xl font-display font-semibold text-foreground"
        >
          No es falta de pacientes.{" "}
          <span className="gold-gradient-text">Es falta de sistema.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ClinicPainSection;
