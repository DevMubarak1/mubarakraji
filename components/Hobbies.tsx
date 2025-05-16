'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Html } from '@react-three/drei'

function Hobby({ name, position }) {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  )
}

const hobbies = ['Reading', 'Traveling', 'Photography', 'Coding', 'Gaming']

function Loader() {
  return <Html center>Loading...</Html>
}

export default function Hobbies() {
  return (
    <section className="w-full h-screen bg-card text-card-foreground" id="hobbies">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Hobbies & Interests</h2>
        <div className="h-[60vh] md:h-[70vh]">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} />
              {hobbies.map((hobby, index) => (
                <Hobby
                  key={hobby}
                  name={hobby}
                  position={[
                    Math.cos((index / hobbies.length) * Math.PI * 2) * 4,
                    Math.sin((index / hobbies.length) * Math.PI * 2) * 4,
                    0,
                  ]}
                />
              ))}
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

