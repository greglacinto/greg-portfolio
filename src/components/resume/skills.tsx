'use client'
import { useState } from 'react'

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind", level: 90 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Nest.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Oracle", level: 70 }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Git", level: 85 },
      { name: "Power BI", level: 80 }
    ]
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category.name
                ? 'bg-teal text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-teal/10'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories
          .find(category => category.name === activeCategory)
          ?.skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-teal">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal rounded-full transition-all duration-500 ease-out group-hover:opacity-80"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  )
} 