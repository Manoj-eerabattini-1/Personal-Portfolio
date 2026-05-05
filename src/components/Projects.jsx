import React from 'react';
import { projects } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';

function ProjectCard({ project }) {
  return (
    <div className="project-card relative bg-white border border-border rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,62,110,0.1)] hover:border-accent/20 overflow-hidden">
      <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted mb-3">
        {project.year}
      </p>

      <h3 className="font-serif text-[1.4rem] tracking-tight leading-tight text-ink mb-3">
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-tag-bg text-tag-text px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="flex flex-col gap-3">
        {project.highlights.map((point, i) => (
          <li key={i} className="relative pl-5 text-sm text-muted leading-relaxed">
            <span className="absolute left-0 top-0.5 text-accent text-xs">→</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Optional links */}
      {(project.github || project.live) && (
        <div className="flex gap-3 mt-6 pt-5 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:underline"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="py-24 px-[5%] bg-bg">
      <div ref={ref} className="fade-in max-w-[1100px] mx-auto">

        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          <span className="inline-block w-6 h-0.5 bg-accent" />
          Things I've built
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-ink mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
