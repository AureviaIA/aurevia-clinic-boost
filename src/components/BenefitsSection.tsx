import aureviaLogo from "@/assets/aurevia-logo.png";

const BenefitsSection = () => {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8 flex flex-col items-center gap-4">
      <img src={aureviaLogo} alt="Aurevia - Agentes de IA" className="h-16 w-auto" />
      <a
        href="https://www.instagram.com/aurev_iaagency"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        @aurev_iaagency
      </a>
      <p className="text-sm text-muted-foreground font-body text-center max-w-md">
        Automatizaciones inteligentes con IA para clínicas de medicina estética.
      </p>
      <p className="text-xs text-muted-foreground/60 font-body">
        © 2026 Aurevia Agency. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default BenefitsSection;
