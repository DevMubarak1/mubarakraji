'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const skills = [
  { name: 'Frontend Development', level: 95 },
  { name: 'Backend Development', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'DevOps', level: 75 },
  { name: 'Project Management', level: 85 },
  { name: 'Data Visualization', level: 70 },
]

const radarData = {
  labels: skills.map(skill => skill.name),
  datasets: [
    {
      label: 'Skill Level',
      data: skills.map(skill => skill.level),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ],
}

const radarOptions = {
  scales: {
    r: {
      angleLines: {
        display: false
      },
      suggestedMin: 0,
      suggestedMax: 100
    }
  }
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full py-20 bg-background text-foreground" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-lg font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Radar data={radarData} options={radarOptions} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

