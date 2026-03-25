import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section id="contacto" className="relative py-24 bg-secondary/20 section-glow scroll-mt-24">
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
            ¿Listo para <span className="gold-gradient-text">automatizar tu clínica</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Completa el formulario y te contactaremos para agendar tu demo gratuita.
          </p>
        </motion.div>

        <motion.form
          id="contact-form"
          action="https://formspree.io/f/xabcd123"
          method="POST"
          data-endpoint="/api/lead"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl gold-border-glow bg-card space-y-5 group"
          noValidate={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nombre" className="text-sm font-body text-muted-foreground mb-2 block">Nombre *</label>
              <input
                id="nombre"
                name="nombre"
                required
                placeholder="Tu nombre"
                className="peer flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm invalid:[&:not(:placeholder-shown)]:border-destructive invalid:[&:not(:placeholder-shown)]:ring-destructive/30"
              />
              <p className="hidden peer-invalid:peer-[&:not(:placeholder-shown)]:block text-sm text-destructive mt-1">
                El nombre es obligatorio.
              </p>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-body text-muted-foreground mb-2 block">Email *</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="tu@email.com"
                className="peer flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm invalid:[&:not(:placeholder-shown)]:border-destructive invalid:[&:not(:placeholder-shown)]:ring-destructive/30"
              />
              <p className="hidden peer-invalid:peer-[&:not(:placeholder-shown)]:block text-sm text-destructive mt-1">
                Introduce un email válido.
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="teléfono" className="text-sm font-body text-muted-foreground mb-2 block">Teléfono (opcional)</label>
            <input
              id="teléfono"
              name="teléfono"
              type="tel"
              placeholder="+34 600 000 000"
              className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="text-sm font-body text-muted-foreground mb-2 block">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Cuéntanos sobre tu clínica y lo que necesitas..."
              className="peer flex w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm min-h-[100px] invalid:[&:not(:placeholder-shown)]:border-destructive invalid:[&:not(:placeholder-shown)]:ring-destructive/30"
            />
            <p className="hidden peer-invalid:peer-[&:not(:placeholder-shown)]:block text-sm text-destructive mt-1">
              El mensaje es obligatorio.
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-8 py-5 rounded-xl btn-float animate-glow-pulse"
          >
            <Send className="w-5 h-5" />
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
