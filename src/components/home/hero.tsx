'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const roles = ["Software Engineer", "Data Analyst", "Problem Solver", "Tech Enthusiast"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState(roles[0])
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
      setIsTyping(true)
    }, 3000)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (isTyping) {
      setDisplayedRole(roles[roleIndex])
      setIsTyping(false)
    }
  }, [isTyping, roleIndex])

  return (
    <section className="min-h-screen pt-32 pb-16 px-4 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aqua/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-aqua font-medium flex items-center space-x-2">
              <span className="w-2 h-2 bg-aqua rounded-full animate-pulse" />
              <span>Welcome to my digital space</span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm Gregory Odiase
            </h1>
            <div className="h-12 flex items-center">
              <p className="text-xl text-gray-600 typing-text">
                I'm a{' '}
                <span className="text-aqua font-medium">
                  {displayedRole}
                  <span className="inline-block w-0.5 h-5 bg-aqua animate-blink ml-1" />
                </span>
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Passionate about crafting efficient solutions and turning complex problems 
            into elegant code. Let's build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#projects"
              className="px-8 py-4 bg-aqua text-white rounded-lg hover:bg-aqua-dark transition-colors text-center
                relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white opacity-20 transform translate-y-full 
                transition-transform group-hover:translate-y-0" />
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-aqua text-aqua rounded-lg hover:bg-aqua/10 
                transition-colors text-center group"
            >
              Get in Touch
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Tech stack pills */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'Nest.js', 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GCP'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm
                    hover:bg-aqua/10 hover:text-aqua transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Decorative Elements */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-aqua/20 to-purple-500/20 rounded-full blur-2xl" />
          <div className="relative">
            {/* Code snippet decoration */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-md mx-auto
              transform hover:scale-105 transition-transform cursor-pointer">
              <pre className="text-sm font-mono">
                <code className="text-gray-800">
                  <span className="text-purple-600">const</span>{' '}
                  <span className="text-blue-600">developer</span> = {'{'}<br />
                  &nbsp;&nbsp;name: <span className="text-green-600">"Gregory"</span>,<br />
                  &nbsp;&nbsp;type: <span className="text-green-600">"Full Stack"</span>,<br />
                  &nbsp;&nbsp;loves: [<span className="text-green-600">"coding"</span>, <span className="text-green-600">"coffee"</span>],<br />
                  &nbsp;&nbsp;isOpenToWork: <span className="text-orange-600">true</span><br />
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
