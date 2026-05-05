import React from 'react';
import { skillGroups } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';

function Tag({ label }) {
  return (
    <span className="bg-tag-bg text-tag-text px-3 py-1 rounded-full text-xs font-medium">
      {label}
    </span>
  );
}

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section id="skills" className="py-24 px-[5%] bg-white">
      <div ref={ref} className="fade-in max-w-[1100px] mx-auto">

        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          <span className="inline-block w-6 h-0.5 bg-accent" />
          What I work with
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-ink mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-bg border border-border rounded-xl p-6"
            >
              <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-muted mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
