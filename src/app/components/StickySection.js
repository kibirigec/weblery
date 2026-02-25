import React from 'react';
import Image from 'next/image';

// Reusable Sticky Section
export default function StickySection({ title, children, className = "", image, imageAlt = "", titleClass = "text-[var(--text-main)]" }) {
    return (
        <div className={`flex flex-col md:flex-row gap-12 md:gap-24 py-16 md:py-24 border-t border-[rgba(0,0,0,0.08)] ${className}`}>
            {/* Sticky Header */}
            <div className="md:w-1/3 flex-shrink-0">
                <div className="sticky top-32">
                    <h2 className={`text-xl md:text-2xl font-semibold tracking-tight ${titleClass}`}>{title}</h2>
                    <div className="w-12 h-[1px] bg-black mt-6 mb-8 md:mb-8 opacity-20" />

                    {image && (
                        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-none overflow-hidden bg-gray-100 mt-4 md:mt-8 shadow-sm">
                            <Image
                                src={image}
                                alt={imageAlt || title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Scrollable Content */}
            {/* Scrollable Content */}
            {/* CSS Grid strictly dictates that the 1fr block consumes identical remaining row height in all browsers safely. */}
            <div className="md:w-2/3 grid" style={{ gridTemplateRows: 'auto 1fr' }}>
                <div className="hidden md:block invisible select-none" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
                    <div className="w-12 h-[1px] mt-6 mb-8 md:mb-8" />
                    {/* Add invisible space matching the exact margin of the image container to ensure perfect parallel start */}
                    {image && <div className="mt-4 md:mt-8" />}
                </div>

                <div className="flex flex-col justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
