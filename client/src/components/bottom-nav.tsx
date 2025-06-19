import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

interface BottomNavProps {
  currentSection: string;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function BottomNav({ currentSection }: BottomNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-white/10 md:hidden"
    >
      <div className="flex justify-around items-center py-3 px-4">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${
                currentSection === item.id
                  ? "text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
