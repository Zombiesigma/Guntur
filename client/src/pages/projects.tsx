import { motion } from "framer-motion";
import { ExternalLink, Plus, Code } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Proyek Saya</h2>
          <motion.div 
            className="w-24 h-1 bg-gold mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 mt-6">Here are some of my recent works</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card: Litera */}
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(245, 197, 24, 0.2)"
            }}
          >
            <img 
              src="app.png" 
              alt="Litera - eBook Web Application" 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy mb-3">Litera</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Aplikasi eBook web modern yang dibangun dengan Python, Flask dan Tailwind CSS. 
Menampilkan desain responsif, animasi halus, dan antarmuka pengguna intuitif 
yang memberikan pengalaman pengguna yang sangat baik.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">Flask</span>
              </div>
              
              <motion.button 

onClick={() => window.open('https://literaguntur.pythonanywhere.com', '_blank')} // Ganti URL

className="bg-gold hover:bg-gold text-navy px-6 py-3 rounded-lg font-semibold">

<ExternalLink className="w-4 h-4" />

Visit Project

</motion.button>

            </div>
          </motion.div>
          
          {/* Additional Project Placeholders */}
          <motion.div 
            className="bg-white/10 rounded-2xl p-6 border-2 border-dashed border-white/20 flex items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <Plus className="w-12 h-12 text-gold mb-4 mx-auto" />
              <p className="text-white text-lg">More projects coming soon...</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 rounded-2xl p-6 border-2 border-dashed border-white/20 flex items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <Code className="w-12 h-12 text-gold mb-4 mx-auto" />
              <p className="text-white text-lg">Currently in development</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
