"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xyzzbpla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="w-full py-20 bg-background text-foreground"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 space-y-6">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope size={24} className="text-primary" />
              <a href="mailto:rmbabatunde123@gmail.com" className="text-lg">
                rmbabatunde123@gmail.com
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaPhone size={24} className="text-primary" />
              <a href="tel:+1234567890" className="text-lg">
                +234 (808) 131-6671
              </a>
            </motion.div>
            <div className="flex space-x-6 mt-8">
              <motion.a
                href="https://x.com/Rinnetech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                transition={{ duration: 0.3 }}
              >
                <Instagram size={32} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rajimubarak123/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0077B5" }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mubar.a.k/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#6e5494" }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub size={32} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
