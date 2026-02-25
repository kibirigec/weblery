import React from 'react';

export default function SpacingSection() {
  return (
    <section id="spacing" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Spacing & Radius</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Spacing Scale */}
        <div className="space-y-4">
             <h3 className="text-[var(--font-h4)] mb-4">Spacing Scale</h3>
             {[4, 8, 12, 16, 24, 32, 48, 64].map((px) => (
                <div key={px} className="flex items-center gap-4">
                    <span className="w-16 text-[var(--font-xs)] font-mono text-[var(--text-muted)]">{px}px</span>
                    <div 
                        className="h-4 bg-[var(--accent)] opacity-50 rounded-sm"
                        style={{ width: `${px}px` }}
                    />
                </div>
             ))}
        </div>

        {/* Radius Scale */}
        <div className="space-y-8">
             <h3 className="text-[var(--font-h4)] mb-4">Radius Scale</h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-sm)]">
                    sm
                </div>
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-md)]">
                    md
                </div>
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-lg)]">
                    lg
                </div>
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-xl)]">
                    xl
                </div>
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-2xl)]">
                    2xl
                </div>
                <div className="aspect-square bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm flex items-center justify-center text-[var(--font-xs)] rounded-[var(--radius-full)]">
                    full
                </div>
             </div>
        </div>

      </div>
    </section>
  );
}
