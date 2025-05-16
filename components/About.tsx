"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const timelineEvents = [
  { year: 2020, event: "Started my journey in web development", icon: "🚀" },
  { year: 2021, event: "Completed my first freelance project", icon: "💼" },
  {
    year: 2022,
    event: "Joined a tech startup as a junior developer",
    icon: "🏢",
  },
  { year: 2023, event: "Led my first major project", icon: "👨‍💼" },
  { year: 2024, event: "Promoted to senior developer", icon: "🏅" },
  { year: 2025, event: "Started my own web development agency", icon: "🌟" },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-background text-foreground"
      id="about"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-full aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
              <Image
                src="/images/d.jpg"
                alt="Mubarak Raji"
                width={800}
                height={960}
                // layout="fill" // Use fill to ensure the image stretches to fit
                // objectFit="cover" // Ensures the image fills the container while maintaining proportions
                className="rounded-lg"
                quality={100}
                unoptimized
              />
              <motion.div
                className="absolute inset-0 border-4 border-primary rounded-lg"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </motion.div>
          </div>
          <div className="w-full md:w-2/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-lg mb-6 text-center md:text-left"
            >
              Hello! I'm Mubarak Raji, a passionate and innovative web developer
              with a keen eye for design and a love for creating seamless user
              experiences. With over 5 years of experience in the field, I've
              had the privilege of working on a diverse range of projects that
              have honed my skills and fueled my creativity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg mb-6 text-center md:text-left"
            >
              My journey in web development has been an exciting adventure
              filled with continuous learning and growth. I specialize in
              front-end technologies like React and Next.js, but I'm also
              well-versed in back-end development using Node.js and Express. I'm
              passionate about creating responsive, accessible, and performant
              web applications that not only look great but also provide an
              exceptional user experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-8 text-center md:text-left"
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community meetups. I believe in the power
              of technology to make a positive impact, and I'm always excited to
              take on new challenges and push the boundaries of what's possible
              on the web.
            </motion.p>
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="mb-8 flex items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex-1 text-right pr-4">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-xl font-semibold">{event.year}</h3>
                        <p>{event.event}</p>
                      </>
                    )}
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <div className="flex-1 pl-4">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-xl font-semibold">{event.year}</h3>
                        <p>{event.event}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -ml-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
