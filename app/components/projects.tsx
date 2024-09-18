// app/components/project-showcase.tsx

import projectsData from "app/lib/projects.json";

export function ProjectShowcase() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      {projectsData
        .sort((a, b) => b.year - a.year)
        .map((project) => (
          <div key={project.name} className="mb-6">
            <div className="flex flex-col md:flex-row md:items-baseline">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm w-[60px] flex-shrink-0">
                {project.year}
              </p>
              <div className="flex-grow">
                <p className="text-neutral-900 dark:text-neutral-100">
                  <a
                    href={project.link}
                    className="font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
