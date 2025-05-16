'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html, useTexture } from '@react-three/drei'
import { motion } from 'framer-motion'

// Animated sphere component
function AnimatedSphere() {
  const meshRef = useRef(null)
  const texture = useTexture('/assets/3d/texture_earth.jpg')

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the sphere slowly
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

// Loading component
function Loader() {
  return <Html center>Loading 3D scene...</Html>
}

export default function Hero() {
  return (
    <section className="w-full h-screen relative bg-background">
      <Canvas className="absolute inset-0">
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground z-10 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Mubarak Raji
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8"
        >
          Welcome to My Universe of Web Development
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#projects"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

