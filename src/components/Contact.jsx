import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const email = 'doa.adediran@gmail.com'
  const github = 'https://github.com/DOAdediran'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo - integrate with EmailJS or backend)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-sky-400">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Ready to collaborate?</h2>
          <p className="text-slate-300 leading-8">
            If you want to build intuitive internal tools, documentation portals, or polished product experiences,
            send a message and I''ll follow up with a clear implementation plan.
          </p>
          <div className="space-y-3 pt-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
              <a href={`mailto:${email}`} className="text-sky-300 transition hover:text-sky-100">
                {email}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</p>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-sky-300 transition hover:text-sky-100">
                {github}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
