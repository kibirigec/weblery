import React from 'react';

const swatches = [
  { name: 'Background', var: '--bg' },
  { name: 'Surface', var: '--surface' },
  { name: 'Text', var: '--text' },
  { name: 'Muted', var: '--text-muted' },
  { name: 'Border', var: '--border' },
  { name: 'Primary', var: '--primary' },
  { name: 'Accent', var: '--accent' },
  { name: 'Danger', var: '--danger' },
  { name: 'Success', var: '--success' },
  { name: 'Warning', var: '--warning' },
];

export default function ColorsSection() {
  return (
    <section id="colors" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Colors</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {swatches.map((swatch) => (
          <div key={swatch.name} className="group">
            <div 
              className="h-24 w-full rounded-[var(--radius-lg)] border border-[var(--border-subtle)] shadow-sm mb-3 transition-transform group-hover:scale-105"
              style={{ backgroundColor: `hsl(var(${swatch.var}))` }}
            />
            <div className="flex justify-between items-center text-[var(--font-xs)]">
              <span className="font-semibold">{swatch.name}</span>
              <span className="font-mono text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
                var({swatch.var})
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
