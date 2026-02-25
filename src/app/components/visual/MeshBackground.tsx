'use client';

import React, { useId, useMemo, useEffect, useRef, useState } from 'react';
import { adjustLightness, rgbStringToHex } from '../visual-lab/color-utils';

interface MeshBackgroundProps {
    colors: string[]; // Array of Hex strings or RGB strings. Component will try to detect.
    backgroundColor: string; // Hex or RGB string
    lightness?: number; // 0 to 2, 1 = default (Global lightness)
    backgroundLightness?: number; // 0 to 2. If set, overrides global lightness for background only.
    speed?: 'slow' | 'medium' | 'fast' | 'static';
    showClouds?: boolean;
    className?: string; // Additional classes for the container
    children?: React.ReactNode;
}

export default function MeshBackground({
    colors,
    backgroundColor,
    lightness = 1,
    backgroundLightness,
    speed = 'medium',
    showClouds = true,
    className = '',
    children
}: MeshBackgroundProps) {
    const id = useId();

    // Ensure we have 5 colors for the mesh logic, cycling if fewer provided
    const safeColors = useMemo(() => {
        if (!colors || colors.length === 0) return ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(colors[i % colors.length]);
        }
        return result;
    }, [colors]);

    // Process colors: adjust lightness and ensure RGB format for CSS vars
    const cssVars = useMemo(() => {
        const processColor = (val: string, specificLightness?: number) => {
            // Check if it looks like RGB "R G B" (from current presets) or Hex
            const isRgbFn = (str: string) => /^\d{1,3} \d{1,3} \d{1,3}$/.test(str);
            
            let hex = val;
            if (isRgbFn(val)) {
                hex = rgbStringToHex(val);
            }
            
            // Use specific lightness if provided, otherwise fallback to global lightness
            const l = specificLightness !== undefined ? specificLightness : lightness;
            
            return adjustLightness(hex, l);
        };

        return {
            '--bg': processColor(backgroundColor, backgroundLightness),
            '--c1': processColor(safeColors[0]),
            '--c2': processColor(safeColors[1]),
            '--c3': processColor(safeColors[2]),
            '--c4': processColor(safeColors[3]),
            '--c5': processColor(safeColors[4]),
        } as React.CSSProperties;
    }, [safeColors, backgroundColor, lightness, backgroundLightness]);


    const [isInView, setIsInView] = React.useState(true);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0 } // Trigger as soon as even 1px is visible/hidden
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const speedClass = speed === 'static' ? 'mesh-static' : `mesh-${speed}`;

    return (
        <div 
            ref={containerRef}
            className={`mesh ${speedClass} ${className}`} 
            style={{
                ...cssVars,
                // Pause animation when not in view to save resources
                animationPlayState: isInView ? 'running' : 'paused',
                // Also pause variable transition
                transition: isInView ? 'none' : 'none' 
            } as React.CSSProperties}
        >
             {/* SVG Filters for Cloud Effect - scoped by ID to prevent conflicts if multiple on page */}
             <svg className="mesh-defs" aria-hidden="true" focusable="false">
                <filter id={`meshWarp-${id}`} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.010"
                    numOctaves="1" // Reduced octaves for better performance
                    seed="8"
                    result="noise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="18"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="warped"
                />
                <feGaussianBlur in="warped" stdDeviation="0.6" result="soft" />
                <feComposite in="soft" in2="soft" operator="over" />
                </filter>
            </svg>
            
            {/* Inline style to override the specific filter URL for this instance */}
            <style jsx>{`
                .mesh::before {
                    filter: url(#meshWarp-${id}) blur(70px) saturate(125%) contrast(112%) brightness(var(--field-bright, 1));
                    animation-play-state: ${isInView ? 'running' : 'paused'} !important;
                }
            `}</style>

            
            {showClouds && (
                <>
                    <div className="sheen-layer" />
                    <div className="noise-layer" />
                </>
            )}

            {children}
        </div>
    );
}
