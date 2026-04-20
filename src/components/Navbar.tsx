import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import aureviaLogo from "@/assets/aurevia-logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

const WA_LINK = "https://wa.me/34640624484?text=Hola%20quiero%20agendar%20demo";

const navLinks = [
  { label: "Sistema", href: "#sistema" },
  { label: "Proceso", href: "#proceso" },
  { label: "Simulador", href: "#calculadora" },
  { label: "Testimonios", href: "#testimonios" },
];

const desktopNavLinks = [...navLinks, { label: "FAQ", href: "#faq" }];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-[#0b0b0b]/90 backdrop-blur-xl"
    >
      <div className="container px-6 flex items-center justify-between h-16 gap-4">
        <img src={aureviaLogo} alt="Aurevia" className="h-10 w-auto shrink-0" />

        <div className="hidden lg:flex items-center gap-6">
          {desktopNavLinks.map((link) => (
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

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openWhatsApp(e, WA_LINK)}
            className="hidden lg:inline-flex text-sm font-body font-medium px-5 py-2 rounded-lg gold-gradient-bg text-primary-foreground btn-float shrink-0"
          >
            Ver demo
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0b0b0b]/95 backdrop-blur-xl border-t border-border/20 px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors py-2">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
