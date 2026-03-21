import { motion } from "framer-motion";
import aureviaLogo from "@/assets/aurevia-logo.png";

const navLinks = [
  { label: "Problemas", href: "#problemas" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="container px-6 flex items-center justify-between h-20 gap-4">
        <img src={aureviaLogo} alt="Aurevia - Agentes de IA" className="h-14 w-auto shrink-0" />

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          onClick={(e) => handleClick(e, "#hero")}
          className="text-sm font-body font-medium px-5 py-2 rounded-lg gold-gradient-bg text-primary-foreground btn-float shrink-0"
        >
          Agendar Demo
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
