import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, TrendingDown, Clock, BarChart3 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { openWhatsApp } from "@/lib/whatsapp";
import { useSimulator, setSimulator, computeSimulator, buildSimulatorWaLink } from "@/lib/simulatorStore";

const AnimatedNumber = ({ value, duration = 0.6, prefix = "", suffix = "" }: { value: number; duration?: number; prefix?: string; suffix?: string }) => {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString("es-ES")}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => { spring.set(value); }, [value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [display]);

  return <span ref={ref}>{`${prefix}${Math.round(value).toLocaleString("es-ES")}${suffix}`}</span>;
};

const CalculatorSection = () => {
  const sim = useSimulator();
  const { leads, noShowRate, avgTicket } = sim;
  const setLeads = (v: number) => setSimulator({ leads: v });
  const setNoShowRate = (v: number) => setSimulator({ noShowRate: v });
  const setAvgTicket = (v: number) => setSimulator({ avgTicket: v });

  const {
    ingresosPerdidos,
    ingresosRecuperados,
    ingresosRecuperadosAnual: ingresosAnuales,
    horasAhorradasSemana,
  } = computeSimulator(sim);
  const horasAhorradas = Math.round(horasAhorradasSemana);

  return (
    <section id="calculadora" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-body text-primary uppercase tracking-widest">Revenue Impact Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground">
            Simula tu <span className="gold-gradient-text">impacto en ingresos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Mueve los sliders y descubre cuánto puedes recuperar.
          </p>
          <p className="text-xs text-primary/70 font-body uppercase tracking-widest mt-3">
            Resultados estimados usando PatientFlow 24/7™
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Inputs */}
          <div className="space-y-8 p-8 rounded-2xl glass-card">
            <h3 className="font-display font-semibold text-lg text-foreground">Tus datos</h3>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-3 flex justify-between">
                Leads por mes <span className="text-primary font-semibold text-base">{leads}</span>
              </label>
              <Slider min={20} max={500} step={5} value={[leads]} onValueChange={([v]) => setLeads(v)} />
            </div>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-3 flex justify-between">
                Tasa de no-shows <span className="text-primary font-semibold text-base">{noShowRate}%</span>
              </label>
              <Slider min={5} max={60} step={1} value={[noShowRate]} onValueChange={([v]) => setNoShowRate(v)} />
            </div>

            <div>
              <label className="text-sm font-body text-muted-foreground mb-3 flex justify-between">
                Ticket promedio <span className="text-primary font-semibold text-base">{avgTicket}€</span>
              </label>
              <Slider min={50} max={1000} step={10} value={[avgTicket]} onValueChange={([v]) => setAvgTicket(v)} />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 p-8 rounded-2xl glass-card">
            <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Resultados
            </h3>

            <motion.div whileHover={{ scale: 1.01 }} className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5 uppercase tracking-wider">
                <TrendingDown className="w-3.5 h-3.5 text-destructive" /> Ingresos perdidos / mes
              </p>
              <p className="text-2xl font-display font-bold text-destructive mt-1">
                -<AnimatedNumber value={ingresosPerdidos} suffix="€" />
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Ingresos recuperados / mes</p>
              <p className="text-2xl font-display font-bold gold-gradient-text mt-1">
                +<AnimatedNumber value={ingresosRecuperados} suffix="€" />
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="p-5 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Ingresos recuperados / año</p>
              <p className="text-3xl font-display font-bold gold-gradient-text mt-1">
                +<AnimatedNumber value={ingresosAnuales} suffix="€" />
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-primary" /> Horas ahorradas / semana
              </p>
              <p className="text-2xl font-display font-bold gold-gradient-text mt-1">
                <AnimatedNumber value={horasAhorradas} suffix="h" />
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center mt-14">
          <a
            href={buildSimulatorWaLink(sim)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, buildSimulatorWaLink(sim), {
              section: "simulator",
              button: "Ver cómo recuperar ingresos",
              message: "Quiero recuperar los ingresos que estoy perdiendo",
            })}
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float text-lg"
          >
            Ver cómo recuperar estos ingresos
          </a>
          <p className="mt-3 text-xs text-primary/70 font-body italic">
            estimación basada en tu caso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
