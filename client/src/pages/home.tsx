import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Guntur
            </motion.span>
            <motion.span 
              className="block text-gold animate-pulse-slow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Padilah
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Frontend Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-gold hover:bg-gold text-navy px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 197, 24, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
