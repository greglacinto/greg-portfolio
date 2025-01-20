'use client'
import ResumeHero from '@/components/resume/hero'
import Experience from '@/components/resume/experience'
import Education from '@/components/resume/education'
import Skills from '@/components/resume/skills'
import Volunteer from '@/components/resume/volunteer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ResumeHero />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <Experience />
        <Education />
        <Skills />
        <Volunteer />
      </div>
    </div>
  )
} 