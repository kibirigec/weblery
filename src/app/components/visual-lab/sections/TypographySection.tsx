import React from 'react';

export default function TypographySection() {
  return (
    <section id="typography" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Typography</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Headings */}
        <div className="space-y-8 p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
          <div className="border-b border-[var(--border-subtle)] pb-4 mb-4 text-[var(--text-muted)] text-[var(--font-sm)] uppercase tracking-widest font-semibold flex justify-between">
            <span>Element</span>
            <span>Size / Line-Height</span>
          </div>
          
          {[
            { tag: 'h1', label: 'Display H1', size: '3rem', lh: '1.1' },
            { tag: 'h2', label: 'Section H2', size: '2.25rem', lh: '1.2' },
            { tag: 'h3', label: 'Subsection H3', size: '1.875rem', lh: '1.25' },
            { tag: 'h4', label: 'Title H4', size: '1.5rem', lh: '1.3' },
            { tag: 'h5', label: 'Subtitle H5', size: '1.25rem', lh: '1.4' },
            { tag: 'h6', label: 'Label H6', size: '1.125rem', lh: '1.5' },
          ].map((item) => (
            <div key={item.tag} className="flex justify-between items-baseline group">
              <span 
                className="font-semibold block" 
                style={{
                  fontSize: `var(--font-${item.tag})`,
                  lineHeight: `var(--line-${item.tag})`,
                  letterSpacing: `var(--track-${item.tag})`
                }}
              >
                {item.label}
              </span>
              <span className="text-[var(--font-xs)] text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                {item.size} / {item.lh}
              </span>
            </div>
          ))}
        </div>

        {/* Body Text */}
        <div className="space-y-8">
            <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
                <h3 className="text-[var(--font-h4)] mb-4">Body Copy</h3>
                <p className="text-[var(--font-body)] leading-[var(--line-body)] text-[var(--text)] mb-4">
                    Body text is used for standard content. It should be highly readable with optimal line length and contrast. 
                    The quick brown fox jumps over the lazy dog. 
                </p>
                <p className="text-[var(--font-body)] leading-[var(--line-body)] text-[var(--text-muted)]">
                    Muted text variation for secondary information.
                </p>
            </div>

            <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] grid grid-cols-2 gap-8">
                <div>
                     <span className="text-[var(--font-sm)] font-bold mb-2 block uppercase text-[var(--text-muted)]">Small</span>
                     <p className="text-[var(--font-sm)] leading-[var(--line-sm)]">
                        Used for helper text, detailed captions, or dense UI areas.
                     </p>
                </div>
                <div>
                     <span className="text-[var(--font-xs)] font-bold mb-2 block uppercase text-[var(--text-muted)]">Extra Small</span>
                     <p className="text-[var(--font-xs)] leading-[var(--line-xs)]">
                        Used for tiny labels, timestamps, or legal disclaimers.
                     </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
