import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFormSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    clinica: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, vengo de la web. Quiero automatizar mi clínica.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nClínica: ${form.clinica}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl gold-border-glow bg-card space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Nombre</label>
              <Input
                required
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Teléfono</label>
              <Input
                required
                type="tel"
                placeholder="+34 600 000 000"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Email</label>
              <Input
                required
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Nombre de la clínica</label>
              <Input
                required
                placeholder="Tu clínica"
                value={form.clinica}
                onChange={(e) => setForm({ ...form, clinica: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-body text-muted-foreground mb-2 block">Mensaje</label>
            <Textarea
              placeholder="Cuéntanos sobre tu clínica y lo que necesitas..."
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="bg-secondary/50 border-border min-h-[100px]"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 gold-gradient-bg text-primary-foreground font-body font-bold text-lg px-8 py-5 rounded-xl btn-float animate-glow-pulse"
          >
            <Send className="w-5 h-5" />
            Quiero automatizar mi clínica
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
