import React from 'react';
import { education, extras } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Education() {
  const ref = useFadeIn();

  return (
    <section className="py-24 px-[5%] bg-bg">
      <div ref={ref} className="fade-in max-w-[1100px] mx-auto">

        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          <span className="inline-block w-6 h-0.5 bg-accent" />
          Background
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-ink mb-12">
          Education & More
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education Card */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="font-serif text-xl tracking-tight text-ink mb-1">
              {education.institution}
            </h3>
            <p className="text-muted text-sm mb-6">
              {education.degree} · {education.period}
            </p>

            <div className="divide-y divide-border">
              <div className="flex justify-between items-center py-3 text-sm">
                <span className="text-muted">CGPA</span>
                <span className="font-semibold text-ink">{education.cgpa}</span>
              </div>
              <div className="flex justify-between items-center py-3 text-sm">
                <span className="text-muted">Location</span>
                <span className="font-semibold text-ink">{education.location}</span>
              </div>
            </div>
          </div>

          {/* Extras Card */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="font-serif text-xl tracking-tight text-ink mb-1">
              Publications & Activities
            </h3>
            <p className="text-muted text-sm mb-6">Beyond the classroom</p>

            <div className="divide-y divide-border">
              {extras.map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 text-sm">
                  <span className="text-muted flex items-center gap-2">
                    <span>{item.icon}</span> {item.label}
                  </span>
                  <span className="font-semibold text-ink text-right max-w-[55%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
