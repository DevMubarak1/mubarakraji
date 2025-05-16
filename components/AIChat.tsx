"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";

const preloadedQuestions = [
  "What are your main skills?",
  "Can you tell me about your latest project?",
  "How can I contact you?",
  "What's your experience with React?",
];

const aiResponses = {
  "What are your main skills?":
    "My main skills include front-end development with React and Next.js, back-end development with Node.js, and database management with MongoDB. I'm also proficient in UI/UX design and have experience with DevOps practices.",
  "Can you tell me about your latest project?":
    "My latest project is this portfolio website you're currently viewing! It's built with Next.js and features interactive 3D elements, an AI chatbot, and a responsive design. You can find more details about my other projects in the Projects section.",
  "How can I contact you?":
    "You can reach me through the contact form in the Contact section of this website. Alternatively, you can connect with me on LinkedIn or Instagram. The links are available in the footer of the page.",
  "What's your experience with React?":
    "I have extensive experience with React, having used it for over 5 years. I'm well-versed in modern React practices, including hooks, context API, and state management solutions like Redux. I've built numerous web applications using React, ranging from small business websites to large-scale enterprise applications.",
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set()); // To track which questions have been answered
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse;
      if (input.toLowerCase() in aiResponses) {
        aiResponse = aiResponses[input.toLowerCase()];
      } else {
        aiResponse =
          "I'm sorry, I don't have a specific answer for that question. Is there anything else I can help you with regarding Mubarak's skills, projects, or how to contact him?";
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setAnsweredQuestions((prev) => new Set(prev).add(question)); // Mark question as answered
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponses[question] },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const remainingQuestions = preloadedQuestions.filter(
    (question) => !answeredQuestions.has(question) // Filter out answered questions
  );

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg"
        >
          <MessageSquare size={24} />
        </button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 h-96 bg-background border border-border rounded-lg shadow-xl overflow-hidden z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">AI Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <>
                    <p className="text-center text-muted-foreground">
                      How can I help you today?
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {remainingQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuestionClick(question)}
                          className="bg-secondary text-secondary-foreground p-2 rounded-md text-sm text-left hover:bg-secondary/80 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`${
                        msg.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <span
                        className={`inline-block p-2 rounded-lg ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.content}
                      </span>
                    </div>
                  ))
                )}
                {isTyping && (
                  <div className="text-center text-muted-foreground">
                    <span>AI is typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-border"
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground p-2 rounded-r-md"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
