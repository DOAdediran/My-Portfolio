import React from 'react'

const Skills = () => {
  const skills = [
    'React',
    'Tailwind CSS',
    'Vite',
    'Component Design',
    'Responsive Layouts',
    'Accessibility',
    'UI Patterns',
    'Documentation UX',
  ]

  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-sky-400">
          <span className="h-px flex-1 bg-slate-700" />
          Skills
          <span className="h-px flex-1 bg-slate-700" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-slate-200 shadow-sm transition hover:border-sky-500/40 hover:bg-slate-900">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
