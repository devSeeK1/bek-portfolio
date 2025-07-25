'use client'

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    desc: "Admin panel with analytics and user management.",
    tech: ["PHP", "CSS", "MYSQL"],
    link: "https://github.com/devSeeK1/edoc-doctor-appointment-system",
  },
  {
    id: 2,
    title: "Task Management App", 
    desc: "Real-time collaborative to-do list.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    link: "https://github.com/devSeeK1/edoc-doctor-appointment-system",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="space-y-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition group"
          >
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                {proj.title}
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t, idx) => (
                <span
                  key={`${proj.id}-${idx}`}
                  className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              className="text-blue-500 hover:underline text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}