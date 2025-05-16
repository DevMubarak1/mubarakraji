"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "January 23, 2025",
    slug: "future-of-web-development",
  },
  {
    title: "Mastering React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively.",
    date: "January 15, 2025",
    slug: "mastering-react-hooks",
  },
  {
    title: "Building Scalable Backend Systems",
    excerpt:
      "Best practices for creating robust and scalable backend architectures.",
    date: "January 5, 2025",
    slug: "building-scalable-backend-systems",
  },
];

export default function Blog() {
  return (
    <section className="w-full py-20 bg-background text-foreground" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
