import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false })
const Blog = dynamic(() => import('@/components/Blog'), { ssr: false })
const AIChat = dynamic(() => import('@/components/AIChat'), { ssr: false })
const Interactive3D = dynamic(() => import('@/components/Interactive3D'), { ssr: false })
const BackgroundAnimation = dynamic(() => import('@/components/BackgroundAnimation'), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Interactive3D />
      <Projects />
      <Skills />
      <Education />
      <TechStack />
      <Blog />
      <Contact />
      <Footer />
      <AIChat />
      <ScrollToTop />
    </main>
  )
}

