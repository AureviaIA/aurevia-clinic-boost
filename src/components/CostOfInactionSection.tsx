import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/34640624484?text=Hola%2C%20quiero%20dejar%20de%20perder%20ingresos%20en%20mi%20cl%C3%ADnica";

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return val;
};

const CostOfInactionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const leadsLost = 40;
  const ticketAvg = 250;
  const monthly = leadsLost * ticketAvg;
  const yearly = monthly * 12;

  const monthlyCount = useCountUp(monthly, 2000, inView);
  const yearlyCount = useCountUp(yearly, 2500, inView);

  return (
    <section ref={ref} className="relative py-28 bg-[#0b0b0b]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent" />
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-destructive/80 mb-4 font-body">
            El coste de no actuar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Cuánto te está costando{" "}
            <span className="text-destructive/90">no tener esto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Una clínica media pierde <strong className="text-foreground">40 leads al mes</strong> por falta de respuesta rápida
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-8 border border-destructive/15 text-center"
            >
              <TrendingDown className="w-8 h-8 text-destructive/70 mx-auto mb-4" />
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-2">Pérdida mensual</p>
              <p className="text-4xl font-display font-bold text-destructive/90">
                €{monthlyCount.toLocaleString("es-ES")}
              </p>
              <p className="text-xs text-muted-foreground font-body mt-2">
                {leadsLost} leads × €{ticketAvg} ticket medio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-8 border border-destructive/15 text-center"
            >
              <TrendingDown className="w-8 h-8 text-destructive/70 mx-auto mb-4" />
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-2">Pérdida anual</p>
              <p className="text-4xl font-display font-bold text-destructive/90">
                €{yearlyCount.toLocaleString("es-ES")}
              </p>
              <p className="text-xs text-muted-foreground font-body mt-2">
                Ingresos que tu competencia está captando
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero dejar de perder ingresos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostOfInactionSection;
