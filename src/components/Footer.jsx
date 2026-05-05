import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-8 text-xs text-muted border-t border-border bg-bg">
      © {new Date().getFullYear()} Manoj Eerabattini
    </footer>
  );
}
