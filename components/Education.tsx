"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const educationItems = [
  {
    title: "BSc Engineering",
    institution: "Lagos State University",
    description:
      "Currently studying Civil Engineering at Lagos State University, where I plan on obtaining my BSc in Civil Engineering.",
  },
  {
    title: "Certificate in React, Next.js, Redux, and More",
    institution: "Udemy Inc",
    description:
      "Completed a comprehensive course covering React, Next.js, Redux, and other modern web development technologies.",
  },
  {
    title: "Certificate of Completion: Complete JavaScript",
    institution: "Udemy Inc",
    description:
      "Finished an in-depth JavaScript course, covering all aspects of the language from basics to advanced concepts.",
  },
];

function EducationItem({
  title,
  institution,
  description,
  isOpen,
  toggleOpen,
}) {
  return (
    <motion.div
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <p className="text-muted-foreground mb-2">{institution}</p>
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="w-full py-20 bg-background text-foreground"
      id="education"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem
              key={index}
              {...item}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://www.linkedin.com/in/rajimubarak123/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View more certificates
          </Link>
        </div>
      </div>
    </section>
  );
}
