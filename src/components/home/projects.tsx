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
    description: "A web platform for a local acupuncturist to receive appointment bookings and display their services. This project was built using Next.js, Tailwind CSS, and TypeScript. Integrations were made to google calendar for bookings and google maps for location services.",
    image: process.env.NEXT_PUBLIC_FULL_STACK_1 || '',
    link: "https://acupunctureandherbaltreatment.com",
    category: 'fullstack'
  },
  {
    name: "FRED",
    description: "An e-commerce platform for local farmers to sell their products online. This layered architecture was built using Next.js, Node js, AWS RDS. Integrations were made to Stripe for payment processing, Cloudinary for image storage and Ably for real-time notifications.",
    image: process.env.NEXT_PUBLIC_FULL_STACK_2 || '',
    link: "https://findatfred.com",
    category: 'fullstack'
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
                ? 'border-primary text-primary' 
                : 'border-transparent hover:text-primary'
            }`}
          >
            Full-stack
          </button>
          <button
            onClick={() => setActiveCategory('data')}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeCategory === 'data' 
                ? 'border-primary text-primary' 
                : 'border-transparent hover:text-primary'
            }`}
          >
            Data
          </button>
        </div>

        {/* Projects Stack */}
        <div className="w-full lg:w-3/4 mx-auto space-y-8 ">
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-600">Coming Soon!</p>
          )}
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
                      className="inline-block px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
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