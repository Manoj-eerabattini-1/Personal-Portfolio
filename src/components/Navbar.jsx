import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-20 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <a href="#home" className="font-serif text-xl text-ink tracking-tight no-underline">
        Manoj
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-muted text-sm font-medium tracking-widest uppercase no-underline hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {/* <a
        href={`mailto:${personal.email}`}
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent rounded-md hover:bg-accent-light transition-all duration-200"
      >
        Hire Me
      </a> */}
    </nav>
  );
}
