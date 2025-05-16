'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiDocker, SiGraphql, SiNextdotjs } from 'react-icons/si'

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
]

export default function TechStack() {
  return (
    <section className="w-full bg-background text-foreground" id="tech-stack">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <tech.icon size={48} color={tech.color} className="mb-4" />
              <h3 className="text-sm md:text-lg font-semibold text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

