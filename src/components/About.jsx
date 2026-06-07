import React from 'react'

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-sky-400">
          <span className="h-px flex-1 bg-slate-700" />
          About
          <span className="h-px flex-1 bg-slate-700" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
            <h2 className="text-3xl font-semibold text-white">I build experiences that scale.</h2>
            <p className="text-slate-300 leading-8">
              I design and deploy fully responsive portfolio experiences using React and Tailwind CSS.
              The site brings together structured component architecture, consistent UI patterns, and a clean production flow that is easy to maintain.
            </p>
            <p className="text-slate-300 leading-8">
              My work is transferable to internal support tools, documentation portals, and product-facing web apps where clarity and maintainability matter.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              'End-to-end ownership from design to production',
              'Responsive and accessible UI with Tailwind',
              'Reusable components for teams and documentation',
              'Optimized for Vercel deployment and performance',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-slate-300 shadow-sm transition hover:border-sky-500/40">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
