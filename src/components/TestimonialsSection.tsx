import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import drLopezImg from "@/assets/testimonial-dr-lopez.jpg";
import sraMartinezImg from "@/assets/testimonial-sra-martinez.jpg";
import draNavarroImg from "@/assets/testimonial-dra-navarro.jpg";
import martaRuizImg from "@/assets/testimonial-marta-ruiz.jpg";
import javierLopezImg from "@/assets/testimonial-javier-lopez.jpg";
import anaTorresImg from "@/assets/testimonial-ana-torres.jpg";
import drMoralesImg from "@/assets/testimonial-dr-morales.jpg";
import lauraSanchezImg from "@/assets/testimonial-laura-sanchez.jpg";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://api.whatsapp.com/send?phone=34640624484&text=Hola%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20PatientFlow%2024%2F7%20en%20mi%20cl%C3%ADnica";

const testimonials = [
  { quote: "El sistema nos ha generado un 40% más de citas sin aumentar tráfico. Ya no perdemos leads.", name: "Dr. López", clinic: "Clínica Estética Renovar", image: drLopezImg },
  { quote: "Automatizar WhatsApp cambió nuestra dinámica. Más pacientes, menos trabajo manual.", name: "Sra. Martínez", clinic: "Estética Avanzada", image: sraMartinezImg },
  { quote: "Antes se nos acumulaban los mensajes. Ahora todo se responde al instante y se nota en la agenda.", name: "Dra. Navarro", clinic: "Clínica Dental Navarro", image: draNavarroImg },
  { quote: "Pacientes que escribían fuera de horario se perdían. Ahora todo queda atendido automáticamente.", name: "Marta Ruiz", clinic: "Belleza Integral", image: martaRuizImg },
  { quote: "El equipo está más centrado en atender pacientes, no en contestar mensajes repetitivos.", name: "Javier López", clinic: "Centro Fisioterapia Vital", image: javierLopezImg },
  { quote: "Ya no se pierden contactos. Todo el mundo recibe respuesta. Las conversiones subieron.", name: "Ana Torres", clinic: "Clínica Capilar Torres", image: anaTorresImg },
  { quote: "Contestamos en segundos y eso hace que el paciente elija venir con nosotros.", name: "Dr. Morales", clinic: "Clínica Médica Morales", image: drMoralesImg },
  { quote: "El sistema trabaja solo y la agenda está más llena que nunca.", name: "Laura Sánchez", clinic: "Centro de Salud Bienestar", image: lauraSanchezImg },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="p-8 rounded-2xl glass-card relative h-full flex flex-col group hover-lift">
    <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}
    </div>
    <p className="text-foreground font-body leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all">
        <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" width={48} height={48} />
      </div>
      <div>
        <p className="font-display font-semibold text-foreground">{t.name}</p>
        <p className="text-sm text-muted-foreground font-body">{t.clinic}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const totalSlides = Math.ceil(testimonials.length / 2);

  return (
    <section id="testimonios" className="relative py-28 bg-[#0b0b0b] scroll-mt-24">
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
            Resultados <span className="gold-gradient-text">reales</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={slideIdx} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.slice(slideIdx * 2, slideIdx * 2 + 2).map((t, i) => (
                      <TestimonialCard key={slideIdx * 2 + i} t={t} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} disabled={!canScrollPrev} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-30" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} disabled={!canScrollNext} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary/10 transition-colors disabled:opacity-30" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex justify-center gap-2 mb-14">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-primary w-6" : "bg-primary/30"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        <div className="text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => openWhatsApp(e, WA_LINK)} className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl btn-float">
            Quiero resultados así
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
