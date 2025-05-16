"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "QuizMaster",
    category: "Web Development",
    image: "/images/quizmaster.jpg",
    description: "An interactive platform for creating and taking quizzes.",
    demoUrl: "https://quizmaker-topaz.vercel.app/",
    githubUrl: "https://github.com/MubarakRaji1/quizmaker",
  },
  {
    id: 2,
    title: "ProjectManager",
    category: "Web Development",
    image: "/images/projectmanager.jpg",
    description: "A comprehensive project management tool for teams.",
    demoUrl: "https://project-manager-smoky.vercel.app/",
    githubUrl: "https://github.com/MubarakRaji1/project-managerr",
  },
  {
    id: 3,
    title: "RinneTech",
    category: "Web Development",
    image: "/images/rinnetech.jpg",
    description: "A cutting-edge tech blog and news aggregator.",
    demoUrl: "https://rinnetech.vercel.app/",
    githubUrl: "https://github.com/MubarakRaji1/rinnetech",
  },
  {
    id: 4,
    title: "EcoShop",
    category: "Web Development",
    image: "/images/ecoshop.jpg",
    description: "An e-commerce platform for eco-friendly products.",
    demoUrl: "https://eco-shop-ten.vercel.app/",
    githubUrl: "https://github.com/MubarakRaji1/EcoShop",
  },
  {
    id: 5,
    title: "SkillSync",
    category: "Web Development",
    image: "/images/skillsync.jpg",
    description: "A skill-sharing and mentorship matching platform.",
    demoUrl: "https://skillsync-woad.vercel.app/",
    githubUrl: "https://github.com/MubarakRaji1/skillsync",
  },
  {
    id: 6,
    title: "JobBoard",
    category: "web Development",
    image: "/images/jobboard.jpg",
    description: "A mobile app for tracking fitness and nutrition goals.",
    demoUrl: "https://job-board-lime-kappa.vercel.app/",
    githubUrl: "https://github.com/mubarakraji/fittrack",
  },
  {
    id: 7,
    title: "Foodify AI",
    category: "Machine Learning",
    image: "/images/foodifyai.jpg",
    description: "Coming-Soon(still under construction).",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Web Development", "Machine Learning"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className="w-full py-20 bg-background text-foreground"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`m-2 px-4 py-2 rounded text-sm md:text-base ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://github.com/MubarakRaji1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View more projects
          </Link>
        </div>
      </div>
    </section>
  );
}
