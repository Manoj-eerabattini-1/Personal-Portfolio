import React from 'react';
import { personal } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';

const contactLinks = [
  { href: `mailto:${personal.email}`, label: personal.email, icon: '✉' },
  { href: personal.linkedin, label: 'LinkedIn', icon: 'in', external: true },
  { href: personal.github, label: 'GitHub', icon: '⌥', external: true },
  { href: `tel:${personal.phone.replace(/\s/g, '')}`, label: personal.phone, icon: '☎' },
];

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section id="contact" className="py-24 px-[5%] bg-accent text-white text-center">
      <div ref={ref} className="fade-in max-w-[1100px] mx-auto">

        <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-white/60 mb-3">
          <span className="inline-block w-6 h-0.5 bg-white/50" />
          Let's connect
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-white/70 max-w-[440px] mx-auto text-base leading-relaxed mb-10">
          I'm actively looking for full-time software development roles. If you have an opening or just want to chat, reach out — I'd love to connect.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {contactLinks.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/25 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>{icon}</span>
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
