'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type ProjectCategory = 'fullstack' | 'data'

interface Project {
  name: string
  description: string
  image: string
  link: string
  category: ProjectCategory
}

const projects: Project[] = [
  {
    name: "Accupuncture and Herbs",
    description: "A web platform for a local acupuncturist to receive appointment bookings and display their services.",
    image: process.env.NEXT_PUBLIC_FULL_STACK_1 || '',
    link: "https://acupunctureandherbaltreatment.com",
    category: 'fullstack'
  },
  {
    name: "FRED",
    description: "An e-commerce platform for local farmers to sell their products online.",
    image: process.env.NEXT_PUBLIC_FULL_STACK_2 || '',
    link: "https://fred-frontend.vercel.app",
    category: 'fullstack'
  },
  {
    name: "Project Name",
    description: "You can also add in this description the type of the project, if it was for web, mobile, data analysis",
    image: "/project3.jpg",
    link: "/projects/3",
    category: 'data'
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('fullstack')

  const filteredProjects = projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          <button
            onClick={() => setActiveCategory('fullstack')}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeCategory === 'fullstack' 
                ? 'border-aqua text-aqua' 
                : 'border-transparent hover:text-aqua'
            }`}
          >
            Full-stack
          </button>
          <button
            onClick={() => setActiveCategory('data')}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeCategory === 'data' 
                ? 'border-aqua text-aqua' 
                : 'border-transparent hover:text-aqua'
            }`}
          >
            Data
          </button>
        </div>

        {/* Projects Stack */}
        <div className="w-3/4 mx-auto space-y-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content - Left side on desktop, top on mobile */}
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                  <p className="text-gray-600 mb-6 text-justify leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <Link 
                      href={project.link}
                      className="inline-block px-6 py-3 border-2 border-aqua text-aqua rounded-lg hover:bg-aqua hover:text-white transition-colors"
                    >
                      View Project
                    </Link>
                  </div>
                </div>

                {/* Image - Right side on desktop, bottom on mobile */}
                <div className="order-1 lg:order-2 relative w-full h-64 lg:h-auto">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 