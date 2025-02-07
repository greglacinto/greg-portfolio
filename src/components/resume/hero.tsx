import Link from 'next/link'

export default function ResumeHero() {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 group transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
          <p className="text-xl text-gray-600 max-w-2xl text-justify">
            Motivated software developer with degrees in computer science and Data Analysis for Business. 
            Proficient in full-stack development with a passion for creating impactful solutions.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/Gregory_Odiase-Full_Stack_Engineer.pdf" 
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 