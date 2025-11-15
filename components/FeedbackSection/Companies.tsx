'use client'
import { motion } from 'framer-motion'

export default function Companies() {
  const companies = [
    { name: 'SnapShot', logo: '/Images/company-1.webp' },
    { name: 'umbrella', logo: '/Images/company-2.webp' },
    { name: 'Leafe', logo: '/Images/company-3.webp' },
    { name: 'Greenish', logo: '/Images/company-4.webp' },
    { name: 'Sitemark', logo: '/Images/company-5.webp' }
  ]
  const directions = ['left', 'right', 'top', 'bottom']

  const getInitial = (direction: string) => {
    switch (direction) {
      case 'left': return { x: -50, opacity: 0 }
      case 'right': return { x: 50, opacity: 0 }
      case 'top': return { y: -50, opacity: 0 }
      case 'bottom': return { y: 50, opacity: 0 }
      default: return { opacity: 0 }
    }
  }

  return (
    <div className="py-12 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company, index) => {
            const direction = directions[index % directions.length] 

            return (
              <motion.div
                key={company.name}
                initial={getInitial(direction)}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
