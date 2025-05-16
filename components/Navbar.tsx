"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="text-2xl font-bold text-foreground flex items-center"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="40"
                rx="8"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M10 30V10L20 25L30 10V30"
                stroke="currentColor"
                className="text-primary-foreground"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="20"
                y="35"
                fontSize="16"
                fill="currentColor"
                className="text-primary-foreground"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
              >
                MR
              </text>
            </svg>
            <span className="ml-2 text-xl font-semibold">Mubarak Raji</span>
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/mubarakraji.pdf"
              target="_blank"
              download
              className="text-foreground hover:text-primary transition-colors flex items-center"
            >
              <FileText size={20} className="mr-1" />
              <span className="hidden md:inline">Resume</span>
            </a>
            {mounted && <ThemeSwitcher />}
            <button className="md:hidden text-foreground" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background py-2"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-foreground hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
