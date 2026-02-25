'use client';

import React, { useState, useEffect } from 'react';
import { generateHarmoniousPalette, rgbStringToHex, hexToRgbString, PRESETS } from './color-utils';
import MeshBackground from '../visual/MeshBackground'; // Import new component
import TypographySection from './sections/TypographySection';
import ColorsSection from './sections/ColorsSection';
import ButtonsSection from './sections/ButtonsSection';
import InputsSection from './sections/InputsSection';
import CardsSection from './sections/CardsSection';
import LinksSection from './sections/LinksSection';
import SpacingSection from './sections/SpacingSection';
import MotionSection from './sections/MotionSection';

export default function VisualLab() {
  const [palette, setPalette] = useState('openai-ice');
  const [customColors, setCustomColors] = useState<any>(null);
  const [motion, setMotion] = useState<'standard' | 'reduced'>('standard');
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast' | 'static'>('medium');
  const [lightness, setLightness] = useState(1); // New lightness state
  const [activeSection, setActiveSection] = useState('typography');

  // Handle Randomize
  const randomizePalette = () => {
    setPalette('custom');
    const colors = generateHarmoniousPalette();
    setCustomColors(colors);
  };

  // Reset to preset
  const selectPreset = (preset: string) => {
    setPalette(preset);
    setCustomColors(null);
    setLightness(1); // Reset lightness on preset change
  };

  // Prepare props for MeshBackground
  const currentColors = palette === 'custom' && customColors ? customColors : PRESETS[palette];
  const meshColors = [currentColors.c1, currentColors.c2, currentColors.c3, currentColors.c4, currentColors.c5];
  const meshBg = currentColors.bg;

  // Scroll spy for sidebar active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['typography', 'colors', 'buttons', 'inputs', 'cards', 'links', 'spacing', 'motion'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 relative">
      
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 flex-shrink-0 bg-[var(--surface)]/80 backdrop-blur-md border-b md:border-b-0 md:border-r border-[var(--border-subtle)] md:h-screen md:sticky md:top-0 flex flex-col overflow-hidden">
          
          {/* Header - Fixed */}
          <div className="p-6 pb-2 flex-shrink-0">
            <h1 className="text-[var(--font-h5)] font-bold tracking-tight flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[var(--primary)]"></span>
              Visual Lab
            </h1>
            <p className="text-[var(--font-xs)] text-[var(--text-muted)] mt-1">Weblery Design System & Token Test</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-6">
            
            <nav className="space-y-1">
              {['Typography', 'Colors', 'Buttons', 'Inputs', 'Cards', 'Links', 'Spacing', 'Motion'].map((item) => {
                const id = item.toLowerCase();
                return (
                  <a 
                    key={id}
                    href={`#${id}`}
                    className={`block px-3 py-1.5 rounded-[var(--radius-md)] text-[var(--font-sm)] font-medium transition-colors ${activeSection === id ? 'bg-[var(--primary)] text-[var(--primary-fg)]' : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-elevated)]'}`}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
            
            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-6">
              
              {/* Palette Switcher */}
              <div>
                <label className="text-[var(--font-xs)] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">Theme Palette</label>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => selectPreset('openai-ice')}
                      className={`border px-2 py-1.5 rounded-[var(--radius-sm)] text-[var(--font-xs)] text-left transition-all ${palette === 'openai-ice' ? 'border-[var(--primary)] ring-1 ring-[var(--primary)] bg-[var(--bg-highlight)]' : 'border-[var(--border)] hover:border-[var(--text-muted)]'}`}
                    >
                      <div className="flex gap-1 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#151428]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#385AC8]"></span>
                      </div>
                      Op AI Ice
                    </button>
                    <button 
                      onClick={() => selectPreset('mint-sky')}
                      className={`border px-2 py-1.5 rounded-[var(--radius-sm)] text-[var(--font-xs)] text-left transition-all ${palette === 'mint-sky' ? 'border-[var(--primary)] ring-1 ring-[var(--primary)] bg-[var(--bg-highlight)]' : 'border-[var(--border)] hover:border-[var(--text-muted)]'}`}
                    >
                      <div className="flex gap-1 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#0A1E23]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#1EB48C]"></span>
                      </div>
                      Mint Sky
                    </button>
                    <button 
                      onClick={() => selectPreset('violet-dusk')}
                      className={`border px-2 py-1.5 rounded-[var(--radius-sm)] text-[var(--font-xs)] text-left transition-all ${palette === 'violet-dusk' ? 'border-[var(--primary)] ring-1 ring-[var(--primary)] bg-[var(--bg-highlight)]' : 'border-[var(--border)] hover:border-[var(--text-muted)]'}`}
                    >
                      <div className="flex gap-1 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#0F0A23]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#643CC8]"></span>
                      </div>
                      Violet Dusk
                    </button>
                    <button 
                      onClick={randomizePalette}
                      className={`border px-2 py-1.5 rounded-[var(--radius-sm)] text-[var(--font-xs)] text-left transition-all ${palette === 'custom' ? 'border-[var(--primary)] ring-1 ring-[var(--primary)] bg-[var(--bg-highlight)]' : 'border-[var(--border)] hover:border-[var(--text-muted)]'}`}
                    >
                      <div className="flex gap-1 mb-1">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></span>
                      </div>
                      Randomize
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Lightness Control */}
              <div>
                 <div className="flex items-center justify-between mb-2">
                    <label className="text-[var(--font-xs)] font-bold text-[var(--text-muted)] uppercase tracking-wider">Lightness</label>
                    <span className="text-[9px] bg-[var(--surface-elevated)] px-1.5 py-0.5 rounded font-mono">{Math.round(lightness * 100)}%</span>
                 </div>
                 <input 
                    type="range" 
                    min="0.2" 
                    max="1.8" 
                    step="0.05" 
                    value={lightness} 
                    onChange={(e) => setLightness(parseFloat(e.target.value))}
                    className="w-full accent-[var(--primary)] h-1.5 bg-[var(--surface-elevated)] rounded-full appearance-none cursor-pointer"
                 />
              </div>

              {/* Manual Color Controls */}
              {(palette === 'custom' || customColors || PRESETS[palette]) && (
                  <div className="bg-[var(--surface-elevated)] p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-[var(--font-xs)] font-bold text-[var(--text-muted)] uppercase tracking-wider">Fine Tune</label>
                        {palette !== 'custom' && <span className="text-[9px] bg-[var(--primary)]/10 text-[var(--primary)] px-1.5 py-0.5 rounded font-medium">{palette}</span>}
                    </div>
                    
                    <div className="flex items-center justify-between gap-1">
                        {['bg', 'c1', 'c2', 'c3', 'c4', 'c5'].map((key) => {
                            const currentRgb = customColors?.[key] || PRESETS[palette]?.[key] || '255 255 255';
                            const currentHex = rgbStringToHex(currentRgb);

                            return (
                                <div key={key} className="flex flex-col items-center gap-1 flex-1 relative group">
                                    <div className="relative w-full aspect-square rounded-full overflow-hidden border border-[var(--border-subtle)] shadow-sm hover:ring-2 hover:ring-[var(--primary)] hover:border-[var(--primary)] transition-all">
                                      <input 
                                          type="color" 
                                          value={currentHex}
                                          onChange={(e) => {
                                              const newHex = e.target.value;
                                              const newRgb = hexToRgbString(newHex);
                                              const baseColors = customColors || { ...PRESETS[palette] };
                                              setCustomColors({ ...baseColors, [key]: newRgb });
                                              setPalette('custom');
                                          }}
                                          className="absolute inset-[-50%] w-[200%] h-[200%] p-0 cursor-pointer border-0"
                                      />
                                    </div>
                                    <span className="text-[9px] text-[var(--text-muted)] uppercase font-mono">{key}</span>
                                </div>
                            );
                        })}
                    </div>
                  </div>
              )}

              <div className="text-[var(--font-xs)] text-[var(--text-muted)] pb-2">
                  <p>Status: <span className="text-[var(--success)] font-medium">Production Ready</span></p>
                  <p>Version: 1.0.0</p>
              </div>

            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-6xl mx-auto">
            
            {/* HERO MESH SECTION - Now using Reusable Component */}
            <MeshBackground 
                colors={meshColors} 
                backgroundColor={meshBg} 
                lightness={lightness}
                speed={speed} 
                className={`relative mb-16 rounded-[var(--radius-2xl)] overflow-hidden border border-[var(--border-subtle)] shadow-sm h-[520px]`}
            >
                <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center h-full">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm w-fit mb-6">
                        <span className="text-xs font-semibold">☁️ Cloudy Mesh Gradient</span>
                    </div>
                    <h1 className="text-[var(--font-display)] font-semibold tracking-[var(--track-h1)] text-[var(--text-main)] mb-6 leading-[0.9] text-white drop-shadow-sm">
                        Weblery Design System Visuals.
                    </h1>
                    <p className="text-[var(--font-title)] text-white/80 max-w-2xl leading-[var(--line-h3)] drop-shadow-sm">
                        A comprehensive testing environment for the atomic design system. Review typography, spacing, colors, and motion fidelity in real-time.
                    </p>
                </div>
            </MeshBackground>

            <div className="bg-[var(--surface)]/50 backdrop-blur-sm rounded-[var(--radius-2xl)] p-8 md:p-12 border border-[var(--border-subtle)] shadow-[var(--shadow-xl)]">
                <TypographySection />
                <ColorsSection />
                <ButtonsSection />
                <InputsSection />
                <CardsSection />
                <LinksSection />
                <SpacingSection />
                <MotionSection motion={motion} setMotion={setMotion} speed={speed} setSpeed={setSpeed} />
            </div>

            <footer className="mt-24 pt-8 border-t border-[var(--border-subtle)] text-[var(--text-muted)] text-[var(--font-xs)] flex justify-between">
                <span>&copy; {new Date().getFullYear()} Modiqube Design System</span>
                <span>Confidential Internal Tool</span>
            </footer>

        </main>
      </div>
    </div>
  );
}

