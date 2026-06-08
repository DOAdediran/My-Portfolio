import React from 'react'
import profileImage from '../assets/Daniell.png'

const Home = () => {
  return (
    <section id="home" className="scroll-mt-20 py-24">
      <div className="grid gap-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow md:grid-cols-[1.4fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Built with React + Tailwind, deployed on Vercel
          </div>
          <div>
            <p className="tracking-[0.3em] text-slate-400">PORTFOLIO</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Daniel Oluwafikayo
            </h1>
            <p className="mt-4 text-xl text-slate-300 sm:text-2xl">
              Frontend Developer | Technical Support Specialist
            </p>
          </div>
          <p className="max-w-xl text-slate-300 sm:text-lg">
            I design and deploy responsive portfolio sites with polished UI patterns and reusable component architecture.
            This site demonstrates ownership from development through production deployment on Vercel.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Let's chat
            </a>
            <a href="/Daniel_Oluwafikayo_Adediran_Resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white">
              Download Resume
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-950 p-8 text-slate-300 shadow-xl shadow-slate-950/20">          <div className="flex flex-col items-center gap-6">
            <img
              src={profileImage}
              alt="Daniel Oluwafikayo"
              className="h-40 w-40 rounded-full border-4 border-sky-500/20 object-cover"
            />
            <div className="space-y-2 text-center">
              <p className="uppercase tracking-[0.3em] text-sky-400">Hello</p>
              <h2 className="text-2xl font-semibold text-white">Daniel Oluwafikayo</h2>
              <p className="text-slate-300">Frontend Developer | Technical Support Specialist</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <a href="/Daniel_Oluwafikayo_Adediran_Resume.pdf" download className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Resume
                </a>
                <a href="https://www.linkedin.com/in/oluwafikayo-adediran" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
