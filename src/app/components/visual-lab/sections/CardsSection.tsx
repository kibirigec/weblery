import React from 'react';

export default function CardsSection() {
  return (
    <section id="cards" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Cards & Surfaces</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Default Card */}
        <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
            <h3 className="text-[var(--font-h4)] font-medium mb-2">Default Card</h3>
            <p className="text-[var(--text-muted)] text-[var(--font-body)]">
                Standard surface for grouping content. Uses border and subtle shadow.
            </p>
        </div>

        {/* Elevated Card */}
        <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--surface-elevated)] shadow-[var(--shadow-lg)] border border-[var(--border-subtle)]">
            <h3 className="text-[var(--font-h4)] font-medium mb-2">Elevated Surface</h3>
            <p className="text-[var(--text-muted)] text-[var(--font-body)]">
                High elevation for modals or dropdowns. Stronger shadow, lighter border.
            </p>
        </div>

        {/* Glass Card */}
        <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]/80 backdrop-blur-md shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--font-h4)] font-medium mb-2">Glass Surface</h3>
            <p className="text-[var(--text-muted)] text-[var(--font-body)]">
                Translucent background using backdrop-blur. Great for overlays.
            </p>
        </div>

        {/* Inset Surface */}
        <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--bg-highlight)] shadow-inner">
            <h3 className="text-[var(--font-h4)] font-medium mb-2">Inset Surface</h3>
            <p className="text-[var(--text-muted)] text-[var(--font-body)]">
                Depressed area for code blocks or grouping within a card.
            </p>
        </div>

      </div>
    </section>
  );
}
