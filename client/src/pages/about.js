import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-navy">Tentang Saya</h2>
          <motion.div 
            className="w-24 h-1 bg-gold mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto">
  <img 
    src="/profile-photo.jpg" 
    alt="Guntur Padilah - Professional Photo" 
    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover"
  />
</div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy">Hello! I'm Guntur Padilah</h3>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Saya seorang Pengembang Frontend yang bersemangat dengan keahlian dalam teknologi web modern. Saya mengkhususkan diri dalam menciptakan aplikasi web yang indah, responsif, dan ramah pengguna.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Perjalanan saya dalam pengembangan web dimulai dengan rasa ingin tahu tentang cara kerja situs web, 
dan telah berkembang menjadi hasrat untuk menciptakan pengalaman digital yang membuat perbedaan. 
           
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Saat saya tidak sedang membuat kode, Anda dapat menemukan saya menjelajahi teknologi baru, berkontribusi pada proyek sumber terbuka, atau berbagi pengetahuan dengan komunitas pengembang.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gold/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gold">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gold/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gold">15+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
