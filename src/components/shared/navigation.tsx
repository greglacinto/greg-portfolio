'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left side - Logo/Name with creative elements */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">G</span>
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm text-gray-500">{currentTime}</div>
            <div className="text-xs text-primary">EST • Available for hire</div>
          </div>
        </div>

        {/* Right side - Navigation links with hover effects */}
        <div className="flex items-center space-x-8">
          <Link 
            href="/resume" 
            className="nav-link relative text-gray-600 hover:text-primary transition-colors"
          >
            Resume
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="#" 
            className="nav-link relative text-gray-600 hover:text-primary transition-colors"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="#" 
            className="relative px-4 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Let&apos;s Talk
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

