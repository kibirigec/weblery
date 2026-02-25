import React from 'react';

export default function LinksSection() {
  return (
    <section id="links" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Links</h2>
      
      <div className="space-y-8 p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">

        <div className="space-y-2">
            <h3 className="text-[var(--font-h4)] mb-4">Default Link</h3>
            <a href="#" className="text-[var(--primary)] hover:underline">
                This is a standard text link.
            </a>
        </div>

        <div className="space-y-2">
            <h3 className="text-[var(--font-h4)] mb-4">Underline Animation</h3>
            <a href="#" className="group inline-flex items-center font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]">
                <span>Hover me for animation</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[var(--primary)] ml-1"></span>
                {/* Alternative technique using background-size */}
            </a>
            <br />
            <a href="#" className="inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--primary)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-[var(--text)] font-medium">
                Sleek underline effect
            </a>
        </div>

        <div className="space-y-2">
            <h3 className="text-[var(--font-h4)] mb-4">States</h3>
            <div className="flex gap-8">
                <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Muted Link</a>
                <a href="#" className="text-[var(--danger)] hover:opacity-80 transition-opacity">Destructive Link</a>
            </div>
        </div>

      </div>
    </section>
  );
}
