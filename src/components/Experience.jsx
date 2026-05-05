import React from 'react';
import { experience } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section id="experience" className="py-24 px-[5%] bg-white">
      <div ref={ref} className="fade-in max-w-[1100px] mx-auto">

        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          <span className="inline-block w-6 h-0.5 bg-accent" />
          Where I've worked
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-ink mb-12">
          Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="bg-bg border border-border rounded-xl px-8 py-7 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start"
            >
              <div>
                <h3 className="font-serif text-2xl tracking-tight text-ink mb-1">
                  {job.company}
                </h3>
                <p className="text-accent font-medium text-sm mb-5">
                  {job.role} · {job.type}
                </p>
                <ul className="flex flex-col gap-3">
                  {job.bullets.map((point, i) => (
                    <li key={i} className="relative pl-5 text-sm text-muted leading-relaxed">
                      <span className="absolute left-0 top-0.5 text-accent text-xs">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="inline-block text-xs font-semibold tracking-[0.08em] uppercase text-muted bg-white border border-border rounded-full px-4 py-2 whitespace-nowrap">
                {job.period}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
