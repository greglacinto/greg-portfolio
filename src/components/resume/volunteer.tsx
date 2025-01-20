const volunteerWork = [
  {
    role: "Instructor",
    organization: "Black Boys Code",
    description: "Teaching coding fundamentals to young aspiring developers"
  },
  {
    role: "Mentor",
    organization: "Code the Dream",
    description: "Mentoring aspiring developers in web development technologies"
  }
]

export default function Volunteer() {
  return (
    <section id="volunteer" className="pb-20">
      <h2 className="text-3xl font-bold mb-8">Volunteering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteerWork.map((work, index) => (
          <div 
            key={index}
            className="p-6 bg-gradient-to-br from-teal/5 to-purple-500/5 rounded-lg hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{work.role}</h3>
                <p className="text-teal">{work.organization}</p>
              </div>
            </div>
            <p className="text-gray-600">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 