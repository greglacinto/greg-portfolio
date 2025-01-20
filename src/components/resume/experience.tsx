const experiences = [
  {
    title: "Developer/Researcher/Tutor",
    company: "St Clair College",
    period: "Jan 2024 – Present",
    responsibilities: [
      "Designed and implemented Power BI dashboard post data analysis for Invest Windsor, enhancing data visualization",
      "Volunteer tutor for programming, introduction to Python, Flask, and basics of application design",
      "Student researcher for smart helmet implementation, focusing on mobile development considerations and data flow"
    ]
  },
  {
    title: "Full-stack Engineer",
    company: "MyAIPathway",
    period: "May 2024 – Present",
    responsibilities: [
      "Developed high-performance front-end infrastructure with Html, React.js, and Next.js",
      "Built complex REST APIs, using optimized algorithms and leveraging WebSockets",
      "Implemented database management with AWS RDS and MySQL",
      "Performed Code Reviews on distributed application components"
    ]
  },
  {
    title: "Application Engineer",
    company: "CWG",
    period: "August 2022 – December 2023",
    responsibilities: [
        "Delivered user training sessions for bank employees to optimize their usage of the Finacle platform and reduce recurring support requests",
        "Managed software upgrades, patches, and configurations for the Finacle application, ensuring minimal downtime and business continuity",
        "Conducted SQL data access and query optimization, ensuring smooth operations for internal teams while maintaining responsibility for data integrity and relational databases",
    ]
  },
  {
    title: "Application Engineer",
    company: "United Bank for Africa",
    period: "August 2019 – August 2022",
    responsibilities: [
      "Implemented web development using web frameworks like Angular and React, ensuring compliance with HTTP standards",
      "Documented software features using Confluence, improving team collaboration. Writing technical documentation for product development",
      "Troubleshot and resolved critical application errors related to transactions, account management, and financial reporting within the Finacle system",
      "Coordinated with cross-functional teams to escalate unresolved technical issues to development teams, ensuring adherence to SLAs"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative">
            {/* Timeline dot */}
            <div className="absolute -left-4 mt-3 w-3 h-3 bg-teal rounded-full" />
            {/* Timeline line */}
            <div className="absolute -left-3 mt-6 w-0.5 h-full bg-gray-200 group-last:hidden" />
            
            <div className="pl-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-teal">•</span>
                <span className="text-lg text-gray-600">{exp.company}</span>
                <span className="text-teal">•</span>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 