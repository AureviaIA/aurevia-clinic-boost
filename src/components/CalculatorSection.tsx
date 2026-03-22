import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/?text=Hola%2C%20vengo%20de%20la%20web.%20Quiero%20ver%20c%C3%B3mo%20funciona%20la%20automatizaci%C3%B3n%20de%20WhatsApp%20en%20mi%20cl%C3%ADnica";

const CalculatorSection = () => {
  const [leadsPerMonth, setLeadsPerMonth] = useState(100);
  const [noShowRate, setNoShowRate] = useState(30);
  const [avgTicket, setAvgTicket] = useState(200);

  const recoveredLeads = Math.round(leadsPerMonth * 0.4 * 0.8);
  const reducedNoShows = Math.round((leadsPerMonth * (noShowRate / 100)) * 0.4);
  const extraRevenue = (recoveredLeads + reducedNoShows) * avgTicket;
  const hoursSaved = 15;

  return (
    <section id="calculadora" className="relative py-24 bg-secondary/20 section-glow scroll-mt-24">
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
            <span className="gold-gradient-text">Calcula</span> tu retorno
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Descubre cuánto podrías ganar automatizando tu clínica con IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Inputs */}
          <div className="space-y-6 p-8 rounded-2xl gold-border-glow bg-card">
            <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" /> Tus datos
            </h3>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">
                Leads por mes: <span className="text-primary font-semibold">{leadsPerMonth}</span>
              </label>
              <input
                type="range"
                min={20}
                max={500}
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">
                Tasa de no-shows: <span className="text-primary font-semibold">{noShowRate}%</span>
              </label>
              <input
                type="range"
                min={5}
                max={60}
                value={noShowRate}
                onChange={(e) => setNoShowRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">
                Ticket promedio (€): <span className="text-primary font-semibold">{avgTicket}€</span>
              </label>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5 p-8 rounded-2xl gold-border-glow bg-card">
            <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Resultados estimados
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-body">Leads recuperados/mes</p>
                <p className="text-2xl font-display font-bold gold-gradient-text">+{recoveredLeads}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-body">No-shows evitados/mes</p>
                <p className="text-2xl font-display font-bold gold-gradient-text">+{reducedNoShows}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-body">Ingresos extra estimados/mes</p>
                <p className="text-3xl font-display font-bold gold-gradient-text">+{extraRevenue.toLocaleString()}€</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-body">Horas ahorradas/semana</p>
                <p className="text-2xl font-display font-bold gold-gradient-text">{hoursSaved}h</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float"
          >
            Quiero estos resultados
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
