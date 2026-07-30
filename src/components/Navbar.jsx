import { useState } from 'react'

const sections = ['home', 'about', 'skills', 'projects', 'contact']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="text-xl font-semibold tracking-tight text-sky-400">
          Portfolio<span className="text-white">.</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="transition hover:text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href="https://github.com/DOAdediran" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/oluwafikayo-adediran" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition hover:text-white">
            LinkedIn
          </a>
          <a
            href="mailto:doa.adediran@gmail.com?subject=Hiring%20Opportunity"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-base text-slate-200">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className="transition hover:text-white"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
