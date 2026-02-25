'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGalleryModal({
    isOpen,
    onClose,
    images,
    clientName,
}) {
    const prefersReducedMotion = useReducedMotion();

    // Prevent body scroll when modal is open (keeps scroll position)
    useEffect(() => {
        if (!isOpen) return;

        const scrollY = window.scrollY;

        const prevBodyOverflow = document.body.style.overflow;
        const prevHtmlOverflow = document.documentElement.style.overflow;
        const prevBodyPosition = document.body.style.position;
        const prevBodyWidth = document.body.style.width;
        const prevBodyTop = document.body.style.top;
        const prevOverscroll = document.documentElement.style.overscrollBehavior;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
        document.documentElement.style.overscrollBehavior = 'none';

        return () => {
            document.body.style.overflow = prevBodyOverflow;
            document.documentElement.style.overflow = prevHtmlOverflow;
            document.body.style.position = prevBodyPosition;
            document.body.style.width = prevBodyWidth;
            document.body.style.top = prevBodyTop;
            document.documentElement.style.overscrollBehavior = prevOverscroll;

            window.scrollTo(0, scrollY);
        };
    }, [isOpen]);

    // Keyboard accessibility for closing
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const [activeView, setActiveView] = useState('desktop');
    const [direction, setDirection] = useState(0);
    const [mountKey, setMountKey] = useState(0);

    // Reset view state when modal opens
    useEffect(() => {
        if (isOpen) {
            setActiveView('desktop');
            setDirection(0);
            setMountKey(prev => prev + 1);
        }
    }, [isOpen]);

    const handleViewChange = (newView) => {
        if (activeView === newView) return;
        setDirection(newView === 'mobile' ? 1 : -1);
        setActiveView(newView);
    };

    const isLegacy = images && images.length > 0 && typeof images[0] === 'string';

    const desktopImages = useMemo(() => {
        if (!images || images.length === 0) return [];
        if (isLegacy) return images.map((src) => ({ src, mediaType: 'image' }));
        return images.filter((img) => img.type === 'desktop');
    }, [images, isLegacy]);

    const mobileImages = useMemo(() => {
        if (!images || images.length === 0) return [];
        if (isLegacy) return [];
        return images.filter((img) => img.type === 'mobile');
    }, [images, isLegacy]);

    if (!images || (Array.isArray(images) && images.length === 0)) return null;

    const renderPillNavigator = (layoutScope) => (
        <div
            className={`flex items-center w-44 h-11 p-1 rounded-full relative shrink-0 ${layoutScope === 'mobile'
                ? 'bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200/50'
                : 'bg-gray-100 border border-gray-200/50'
                }`}
        >
            <button
                onClick={() => handleViewChange('desktop')}
                className={`relative flex-1 h-full rounded-full text-[13px] font-semibold flex items-center justify-center transition-colors z-10 ${activeView === 'desktop' ? 'text-[#0f0f0f]' : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                Desktop
                {activeView === 'desktop' && (
                    <motion.div
                        layoutId={`pill-bg-${layoutScope}-${mountKey}`}
                        className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                        transition={prefersReducedMotion ? { duration: 0 } : undefined}
                    />
                )}
            </button>

            <button
                onClick={() => mobileImages.length > 0 && handleViewChange('mobile')}
                disabled={mobileImages.length === 0}
                className={`relative flex-1 h-full rounded-full text-[13px] font-semibold flex items-center justify-center transition-colors z-10 ${mobileImages.length === 0
                        ? 'text-gray-300 cursor-not-allowed opacity-50'
                        : activeView === 'mobile'
                            ? 'text-[#0f0f0f]'
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                Mobile
                {activeView === 'mobile' && (
                    <motion.div
                        layoutId={`pill-bg-${layoutScope}-${mountKey}`}
                        className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                        transition={prefersReducedMotion ? { duration: 0 } : undefined}
                    />
                )}
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex flex-col justify-end pointer-events-none p-4 md:p-0 pb-0 touch-none overscroll-none">
                    {/* Dark Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute inset-0 bg-[#0f0f0f]/95 pointer-events-auto touch-none overscroll-none will-change-opacity"
                        onClick={onClose}
                    />

                    {/* Bottom Sheet Modal Panel */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '100%' }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-[1500px] mx-auto h-[95vh] md:h-[92vh] bg-white rounded-t-[2rem] md:rounded-lg shadow-[0_-20px_80px_rgba(0,0,0,0.5)] relative z-10 flex flex-col pointer-events-auto overflow-hidden will-change-transform"
                    >
                        {/* Modal Header */}
                        <div className="w-full flex items-center justify-between px-6 md:px-48 pt-6 pb-4 shrink-0 bg-white z-20">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl md:text-2xl font-bold text-[#0f0f0f] tracking-tight mb-1">{clientName}</h3>

                                {/* Pill Navigator (Desktop) */}
                                {!isLegacy && <div className="hidden md:flex">{renderPillNavigator('desktop')}</div>}
                            </div>

                            <div className="flex items-center gap-4 md:gap-6 z-30">
                                <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className="flex px-5 md:w-44 h-11 items-center justify-center bg-[#0f0f0f] text-white text-sm font-semibold rounded-full hover:bg-black hover:scale-105 transition-all shadow-lg shadow-black/20"
                                >
                                    Get in touch
                                </Link>

                                <button
                                    onClick={onClose}
                                    className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-[#0f0f0f] hover:bg-gray-200 hover:rotate-90 transition-all pointer-events-auto"
                                    aria-label="Close Gallery"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Gallery Content (mounted side-by-side) */}
                        <div className="flex-1 overflow-hidden relative">
                            <motion.div
                                animate={{ x: activeView === 'mobile' && !isLegacy ? '-50%' : '0%' }}
                                transition={prefersReducedMotion ? { duration: 0 } : { type: 'tween', duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className={`flex h-full will-change-transform ${isLegacy ? 'w-full' : 'w-[200%]'}`}
                            >
                                {/* Desktop Images */}
                                <div className={`h-full overflow-y-auto overflow-x-hidden relative ${isLegacy ? 'w-full' : 'w-1/2'}`}>
                                    <div className="flex flex-col gap-12 md:gap-24 px-6 md:px-48 pb-16 pt-6">
                                        {desktopImages.map((img, index) => (
                                            <div
                                                key={`desktop-${index}`}
                                                className="relative w-full"
                                            >
                                                {img.mediaType === 'video' ? (
                                                    <video
                                                        src={img.src}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-auto object-contain block rounded-lg border border-neutral-200/60 shadow-sm"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={img.src}
                                                        alt={`${clientName} desktop capture ${index + 1}`}
                                                        width={1920}
                                                        height={5000}
                                                        className="w-full h-auto object-contain block rounded-lg border border-neutral-200/60 shadow-sm"
                                                        sizes="100vw"
                                                        priority={index === 0}
                                                        loading={index === 0 ? 'eager' : 'lazy'}
                                                        decoding="async"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Images */}
                                {!isLegacy && (
                                    <div className="h-full w-1/2 overflow-y-auto overflow-x-hidden relative">
                                        <div className="flex flex-col gap-12 md:gap-24 px-6 md:px-48 pb-16 pt-6">
                                            {mobileImages.map((img, index) => (
                                                <div
                                                    key={`mobile-${index}`}
                                                    className="relative w-full md:px-[20%] lg:px-[30%]"
                                                >
                                                    {img.mediaType === 'video' ? (
                                                        <video
                                                            src={img.src}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="w-full h-auto object-contain block rounded-lg border border-neutral-200/60 shadow-sm"
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={img.src}
                                                            alt={`${clientName} mobile capture ${index + 1}`}
                                                            width={1920}
                                                            height={5000}
                                                            className="w-full h-auto object-contain block rounded-lg border border-neutral-200/60 shadow-sm"
                                                            sizes="100vw"
                                                            priority={index === 0}
                                                            loading={index === 0 ? 'eager' : 'lazy'}
                                                            decoding="async"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Mobile Floating Pill Navigator */}
                        {!isLegacy && (
                            <div className="flex md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
                                {renderPillNavigator('mobile')}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}