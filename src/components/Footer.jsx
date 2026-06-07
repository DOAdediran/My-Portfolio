import React from 'react'

const Footer = () => {
  const email = 'doa.adediran@gmail.com'
  const github = 'https://github.com/DOAdediran'
  const linkedin = 'https://www.linkedin.com/in/oluwafikayo-adediran'

  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 px-6 py-8 text-center text-sm text-slate-400 sm:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm">
        <a href={`mailto:${email}`} className="transition hover:text-sky-300">
          {email}
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="transition hover:text-sky-300">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-sky-300">
          LinkedIn
        </a>
      </div>
      <p>© 2026 Adedian Daniel Oluwafikayo. Designed and deployed with React, Tailwind CSS, and Vercel.</p>
    </footer>
  )
}

export default Footer
