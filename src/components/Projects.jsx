import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'SaaS Analytics Dashboard',
      description: 'A modern SaaS dashboard built with Next.js, TypeScript, and Tailwind CSS, featuring authentication, interactive charts, and user profile management.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoLink: 'https://doadediran.github.io/SaaS-Dashboard/',
      githubLink: 'https://github.com/DOAdediran/SaaS-Dashboard',
    },
    {
      title: 'Weather Dashboard',
      description: 'A React and Vite weather dashboard that fetches live data from Open-Meteo and supports city search, theme toggle, and forecast charts.',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      demoLink: 'https://doadediran.github.io/Weather-App/',
      githubLink: 'https://github.com/DOAdediran/Weather-App',
    },
    {
      title: 'E-Commerce Product Dashboard',
      description: 'A sleek product management dashboard built with React, Redux Toolkit, and Bolt Database for CRUD, filtering, pagination, and analytics.',
      technologies: ['React', 'Redux Toolkit', 'TypeScript'],
      demoLink: 'https://doadediran.github.io/E-CommerceProduct/',
      githubLink: 'https://github.com/DOAdediran/E-CommerceProduct',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-sky-400">
          <span className="h-px flex-1 bg-slate-700" />
          Projects
          <span className="h-px flex-1 bg-slate-700" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900"
            >
              <div className="p-6 text-slate-200">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-400">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.demoLink && project.demoLink !== '#' ? (
                    <a href={project.demoLink} className="text-sky-300 transition hover:text-sky-100">
                      Live demo
                    </a>
                  ) : (
                    <span className="text-slate-500">Demo coming soon</span>
                  )}
                  {project.githubLink && project.githubLink !== '#' ? (
                    <a href={project.githubLink} className="text-slate-400 transition hover:text-slate-100">
                      GitHub
                    </a>
                  ) : (
                    <span className="text-slate-500">Repo coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
