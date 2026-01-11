import { motion } from 'framer-motion'
import { Wine, Martini, Beer } from 'lucide-react'

export default function MenuSection() {
  const menuCategories = [
    {
      icon: <Wine className="text-bar-gold w-12 h-12" />,
      title: 'Вина',
      description: 'Изысканная винная карта от лучших производителей'
    },
    {
      icon: <Martini className="text-bar-gold w-12 h-12" />,
      title: 'Коктейли',
      description: 'Авторские миксы от наших талантливых барменов'
    },
    {
      icon: <Beer className="text-bar-gold w-12 h-12" />,
      title: 'Разливное пиво',
      description: 'Лучшие сорта крафтового и классического пива'
    }
  ]

  return (
    <section id="menu" className="section-padding bg-bar-dark/90">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-center font-display text-bar-gold mb-12"
        >
          Наше Меню
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-bar-dark/50 rounded-xl p-6 text-center hover:bg-bar-burgundy/20 transition-colors"
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-2xl text-white mb-2">{category.title}</h3>
              <p className="text-white/70">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}