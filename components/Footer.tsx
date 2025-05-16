'use client'

import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full py-8 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">&copy; 2025 Mubarak Raji. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li><a href="#about" className="text-sm md:text-base hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="text-sm md:text-base hover:text-gray-300">Projects</a></li>
              <li><a href="#skills" className="text-sm md:text-base hover:text-gray-300">Skills</a></li>
              <li><a href="#contact" className="text-sm md:text-base hover:text-gray-300">Contact</a></li>
              <li>
                <motion.a
                  href="https://www.instagram.com/mubarakraji"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#E1306C' }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInstagram size={32} />
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
        <motion.button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

