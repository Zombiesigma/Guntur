import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-gold/5 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gold/10 rounded-full"
      />
    </div>
  );
}
