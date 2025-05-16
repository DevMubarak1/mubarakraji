'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Innovators',
    content: 'Mubarak is an exceptional developer. His attention to detail and problem-solving skills are unmatched.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, Digital Solutions Inc.',
    content: 'Working with Mubarak was a game-changer for our project. His expertise in React and Node.js is impressive.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Lead Developer, InnovateTech',
    content: 'Mubarak ability to tackle complex problems and deliver elegant solutions is truly remarkable.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-card text-card-foreground" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
        <div className="relative h-64 md:h-80">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
              />
              <p className="text-lg md:text-xl mb-4">"{testimonials[currentIndex].content}"</p>
              <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

