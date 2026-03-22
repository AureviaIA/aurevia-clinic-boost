import aureviaLogo from "@/assets/aurevia-logo.png";

const BenefitsSection = () => {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8 flex flex-col items-center gap-4">
      <img src={aureviaLogo} alt="Aurevia - Agentes de IA" className="h-16 w-auto" />
      <p className="text-sm text-muted-foreground font-body text-center max-w-md">
        Aurevia Agency — Automatización de WhatsApp con IA para clínicas
      </p>
      <p className="text-xs text-muted-foreground font-body">
        © 2026 Aurevia Agency. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default BenefitsSection;
