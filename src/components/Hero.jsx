import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-bar-dark">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-display text-bar-gold">
            Luxe Bar
          </h1>
          <p className="text-xl text-white/80">
            Погрузитесь в мир изысканных коктейлей и незабываемой атмосферы
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              className="bg-bar-gold text-bar-dark px-6 py-3 rounded-lg flex items-center"
            >
              Забронировать <ArrowRight className="ml-2" />
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 text-white px-6 py-3 rounded-lg"
            >
              Наше меню
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img 
            src="https://source.unsplash.com/800x600/?cocktail,bar" 
            alt="Luxe Bar Cocktail" 
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}