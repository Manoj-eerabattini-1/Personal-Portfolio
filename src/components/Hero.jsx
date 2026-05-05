import React from 'react';
import { personal, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[5%] pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="hero-blob" />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div className="animate-fade-up">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">
            <span className="inline-block w-8 h-0.5 bg-accent" />
            {personal.availability}
          </p>

          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-tight text-ink mb-6">
            {personal.name.split(' ')[0]}
            <br />
            <em className="text-accent not-italic italic">{personal.name.split(' ')[1]}</em>
          </h1>

          <p className="text-muted text-[1.05rem] font-light max-w-[420px] leading-relaxed mb-8">
            {personal.tagline} {personal.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-md text-sm font-medium hover:bg-[#12305a] transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-accent border border-accent rounded-md text-sm font-medium hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex flex-col gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white border border-border rounded-xl p-6 animate-fade-up-${i + 1} ${
                i === 1 ? 'ml-8' : ''
              }`}
            >
              <div className="font-serif text-[2.5rem] text-accent leading-none mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
