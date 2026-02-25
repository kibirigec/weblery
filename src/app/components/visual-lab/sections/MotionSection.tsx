import React from 'react';

interface MotionSectionProps {
  motion: 'standard' | 'reduced';
  setMotion: (m: 'standard' | 'reduced') => void;
  speed: 'slow' | 'medium' | 'fast' | 'static';
  setSpeed: (s: 'slow' | 'medium' | 'fast' | 'static') => void;
}

export default function MotionSection({ motion, setMotion, speed, setSpeed }: MotionSectionProps) {
  return (
    <section id="motion" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Motion & Effects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Controls */}
        <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
            <h3 className="text-[var(--font-h4)] mb-4">Global Controls</h3>
            
            <div className="space-y-4 mb-8">
                <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">Motion Preference</label>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setMotion('standard')}
                        className={`px-4 py-2 rounded-[var(--radius-md)] text-[var(--font-sm)] border transition-all ${motion === 'standard' ? 'bg-[var(--primary)] text-[var(--primary-fg)] border-[var(--primary)]' : 'bg-[var(--surface-elevated)] border-[var(--border)]'}`}
                    >
                        Standard
                    </button>
                    <button 
                        onClick={() => setMotion('reduced')}
                        className={`px-4 py-2 rounded-[var(--radius-md)] text-[var(--font-sm)] border transition-all ${motion === 'reduced' ? 'bg-[var(--primary)] text-[var(--primary-fg)] border-[var(--primary)]' : 'bg-[var(--surface-elevated)] border-[var(--border)]'}`}
                    >
                        Reduced
                    </button>
                </div>
                <p className="text-[var(--font-xs)] text-[var(--text-muted)] mt-2">
                    Simulates `prefers-reduced-motion`. In reduced mode, mesh gradients and complex transitions are disabled.
                </p>
            </div>

            <div className="space-y-4">
                <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">Mesh Speed</label>
                <div className="flex gap-4">
                    {['slow', 'medium', 'fast'].map((s) => (
                        <button 
                            key={s}
                            onClick={() => setSpeed(s as 'slow' | 'medium' | 'fast')}
                            className={`px-4 py-2 rounded-[var(--radius-md)] text-[var(--font-sm)] border capitalize transition-all ${speed === s ? 'bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)]' : 'bg-[var(--surface-elevated)] border-[var(--border)]'}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Examples */}
        <div className="p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
            <h3 className="text-[var(--font-h4)] mb-4">Micro-Interactions</h3>
            
            <div className="flex gap-8 items-center mb-8">
                <div className="w-16 h-16 bg-[var(--primary)] rounded-[var(--radius-md)] hover:scale-110 active:scale-95 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-bounce)] shadow-md cursor-pointer flex items-center justify-center text-white text-[var(--font-xs)] font-medium">
                    Hover
                </div>
                
                <div className="w-16 h-16 bg-[var(--accent)] rounded-[var(--radius-full)] hover:bg-[var(--primary)] transition-colors duration-[var(--duration-slow)] shadow-md cursor-pointer flex items-center justify-center text-white text-[var(--font-xs)] font-medium">
                    Color
                </div>

                <div className="group w-16 h-16 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-[var(--duration-normal)]">
                    <span className="text-[var(--font-xs)] font-medium group-hover:translate-y-[-2px] transition-transform duration-[var(--duration-normal)]">Shadow</span>
                </div>
            </div>
             <p className="text-[var(--font-xs)] text-[var(--text-muted)] font-mono">
                    Standard ease: `cubic-bezier(0.16, 1, 0.3, 1)` <br/>
                    Bounce ease: `cubic-bezier(0.34, 1.56, 0.64, 1)`
            </p>
        </div>

      </div>
    </section>
  );
}
