import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ID"; // Reemplazar con tu ID real de Formspree

const ContactFormSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          email: form.email,
          phone: form.telefono,
          message: form.mensaje,
        }),
      });
      if (res.ok) {
        toast.success("¡Mensaje enviado! Te contactaremos pronto.");
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        toast.error("Error al enviar. Inténtalo de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  };

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
          data-endpoint="/api/lead"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl gold-border-glow bg-card space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-body text-muted-foreground mb-2 block">Nombre *</label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-body text-muted-foreground mb-2 block">Email *</label>
              <Input
                id="email"
                name="email"
                required
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-body text-muted-foreground mb-2 block">Teléfono (opcional)</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+34 600 000 000"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="bg-secondary/50 border-border"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-body text-muted-foreground mb-2 block">Mensaje *</label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Cuéntanos sobre tu clínica y lo que necesitas..."
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="bg-secondary/50 border-border min-h-[100px]"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-8 py-5 rounded-xl btn-float animate-glow-pulse disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
