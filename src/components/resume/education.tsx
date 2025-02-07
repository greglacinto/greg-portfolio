const education = [
  {
    degree: "Post Graduate Diploma, Data Analytics for Business",
    school: "St. Clair College",
    period: "January 2024 – April 2025",
    highlights: [
      "Focus on data analysis and business intelligence",
      "Key courses: Advanced Analytics, Business Intelligence, Data Visualization"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Port Harcourt",
    period: "September 2012 – April 2016",
    highlights: [
      "Focus on Computer Science fundamentals, Software Engineering principles,Data Structures and Algorithms"
    ]
  }
]

export default function Education() {
  return (
    <section id="education">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="group relative bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <div className="flex flex-wrap items-center gap-x-3 text-gray-600">
                <span>{edu.school}</span>
                <span className="text-primary">•</span>
                <span>{edu.period}</span>
              </div>
              <ul className="mt-3 space-y-1 text-gray-500">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-justify">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 