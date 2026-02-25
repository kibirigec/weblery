import React from 'react';

const Button = ({ variant = 'primary', size = 'md', children, disabled = false, loading = false }: any) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants: any = {
    primary: "bg-[var(--primary)] text-[var(--primary-fg)] hover:opacity-90 shadow-sm",
    secondary: "bg-[var(--surface-elevated)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--border-subtle)] shadow-sm",
    ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--surface-elevated)]",
    destructive: "bg-[var(--danger)] text-white hover:opacity-90 shadow-sm",
  };

  const sizes: any = {
    sm: "h-8 px-3 text-[var(--font-xs)] rounded-[var(--radius-sm)]",
    md: "h-10 px-4 text-[var(--font-sm)] rounded-[var(--radius-md)]",
    lg: "h-12 px-6 text-[var(--font-body)] rounded-[var(--radius-lg)]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`} disabled={disabled}>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default function ButtonsSection() {
  return (
    <section id="buttons" className="mb-24 scroll-mt-24">
      <h2 className="text-[var(--font-h2)] font-semibold mb-8 tracking-[var(--track-h2)]">Buttons</h2>
      
      <div className="space-y-12 p-8 border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)]">
        
        {/* Variants */}
        <div className="space-y-4">
            <h3 className="text-[var(--font-h4)] mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
            </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
            <h3 className="text-[var(--font-h4)] mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
        </div>

        {/* States */}
        <div className="space-y-4">
            <h3 className="text-[var(--font-h4)] mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
            </div>
        </div>

      </div>
    </section>
  );
}
