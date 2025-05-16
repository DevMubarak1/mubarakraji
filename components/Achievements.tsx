'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const achievements = [
  { id: 1, title: 'Best Web App Award', description: 'Won the Best Web App Award at the annual tech conference' },
  { id: 2, title: 'Certified Cloud Architect', description: 'Obtained AWS Certified Solutions Architect certification' },
  { id: 3, title: '1M+ Users', description: 'Developed an app that reached over 1 million active users' },
  { id: 4, title: 'Open Source Contributor', description: 'Major contributor to popular open-source projects' },
]

export default function Achievements() {
  return (
    <section className="w-full bg-background text-foreground" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mr-2" />
                <h3 className="text-lg md:text-xl font-semibold">{achievement.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

