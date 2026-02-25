import React from 'react';

export default function InputsSection() {
  return (
    <section id="inputs" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Inputs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
        
        {/* Text Input */}
        <div className="space-y-4">
            <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">
                Email Address
            </label>
            <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full h-10 px-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] text-[var(--font-sm)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            />
            <p className="text-[var(--font-xs)] text-[var(--text-muted)]">We'll never share your email.</p>
        </div>

        {/* Select */}
        <div className="space-y-4">
            <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">
                Role
            </label>
            <select className="w-full h-10 px-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] text-[var(--font-sm)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all">
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
            </select>
        </div>

        {/* Textarea */}
        <div className="md:col-span-2 space-y-4">
            <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">
                Bio
            </label>
            <textarea 
                rows={4}
                className="w-full p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] text-[var(--font-sm)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                placeholder="Tell us about yourself..."
            />
        </div>

        {/* Toggles */}
        <div className="flex items-center space-x-4">
            <input type="checkbox" className="w-4 h-4 text-[var(--primary)] rounded border-[var(--border)] focus:ring-[var(--primary)]" />
            <span className="text-[var(--font-sm)]">Remember me</span>
        </div>

        {/* Disabled State */}
        <div className="space-y-4 opacity-50 pointer-events-none">
            <label className="block text-[var(--font-sm)] font-medium text-[var(--text)]">
                Disabled Input
            </label>
            <input 
                type="text" 
                disabled
                className="w-full h-10 px-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-highlight)] text-[var(--font-sm)]"
                value="Cannot edit this"
            />
        </div>

      </div>
    </section>
  );
}
