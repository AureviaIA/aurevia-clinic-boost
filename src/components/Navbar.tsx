import { motion } from "framer-motion";
import aureviaLogo from "@/assets/aurevia-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      <div className="container px-6 flex items-center justify-between h-20">
        <img src={aureviaLogo} alt="Aurevia - Agentes de IA" className="h-14 w-auto" />
        <a
          href="#demo"
          className="text-sm font-body font-medium px-5 py-2 rounded-lg gold-gradient-bg text-primary-foreground btn-float"
        >
          Agendar Demo
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
