'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function EmbedFrame({ src, title, poster, priority = false }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full aspect-video rounded-none shadow-2xl bg-[#0f0f0f] overflow-hidden">
            {!isLoaded && poster && (
                <img
                    src={poster}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            <iframe
                src={src}
                title={title}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                loading={priority ? 'eager' : 'lazy'}
                onLoad={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}

function SubtleVideo({ src, title, poster, priority = false }) {
    const videoRef = useRef(null);
    const hideTimerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isScrubbing, setIsScrubbing] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const clearHideTimer = useCallback(() => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    }, []);

    const revealControls = useCallback((timeoutMs = 1600) => {
        clearHideTimer();
        setShowControls(true);
        hideTimerRef.current = setTimeout(() => {
            setShowControls(false);
            hideTimerRef.current = null;
        }, timeoutMs);
    }, [clearHideTimer]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const syncState = () => {
            setIsPlaying(!video.paused);
            setCurrentTime(video.currentTime || 0);
        };

        syncState();

        video.addEventListener('play', syncState);
        video.addEventListener('pause', syncState);
        video.addEventListener('loadedmetadata', syncState);

        const attemptAutoplay = async () => {
            try {
                await video.play();
            } catch {
                setIsPlaying(false);
            }
        };

        attemptAutoplay();

        return () => {
            video.removeEventListener('play', syncState);
            video.removeEventListener('pause', syncState);
            video.removeEventListener('loadedmetadata', syncState);
        };
    }, [src]);

    useEffect(() => () => clearHideTimer(), [clearHideTimer]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let rafId;

        const updateFromVideo = () => {
            if (!isScrubbing) {
                setCurrentTime(video.currentTime || 0);
            }
            rafId = requestAnimationFrame(updateFromVideo);
        };

        if (isPlaying) {
            rafId = requestAnimationFrame(updateFromVideo);
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isPlaying, isScrubbing]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        revealControls();

        if (video.paused) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    };

    const handleSeek = (event) => {
        const video = videoRef.current;
        if (!video) return;

        revealControls();
        const nextTime = Number(event.target.value);
        video.currentTime = nextTime;
        setCurrentTime(nextTime);
    };

    const formatTime = (value) => {
        if (!Number.isFinite(value) || value < 0) return '0:00';
        const totalSeconds = Math.floor(value);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div
            className="relative w-full"
            onMouseMove={() => revealControls()}
            onTouchStart={() => revealControls()}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? 'auto' : 'metadata'}
                onLoadedData={() => {
                    setIsReady(true);
                    revealControls(1400);
                }}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
                className="w-full h-auto object-contain block rounded-none shadow-2xl bg-[#0f0f0f]"
                aria-label={title}
                onClick={togglePlay}
            />

            <div className={`absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 flex items-center gap-2 md:gap-3 px-2 py-1.5 md:px-3 md:py-2 rounded-xl md:rounded-full bg-black/45 backdrop-blur-md transition-all duration-300 ${isReady && showControls ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
                <button
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        togglePlay();
                    }}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    {isPlaying ? (
                        <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <rect x="6" y="5" width="4" height="14" rx="1" />
                            <rect x="14" y="5" width="4" height="14" rx="1" />
                        </svg>
                    ) : (
                        <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>

                <div className="flex items-center gap-2 flex-1">
                    <span className="text-white/85 text-[10px] md:text-xs tabular-nums min-w-8 md:min-w-10">
                        {formatTime(currentTime)}
                    </span>
                    <input
                        type="range"
                        min={0}
                        max={Math.max(duration, 0)}
                        step={0.1}
                        value={Math.min(currentTime, duration || 0)}
                        onChange={handleSeek}
                        onInput={handleSeek}
                        onMouseDown={() => {
                            setIsScrubbing(true);
                            clearHideTimer();
                            setShowControls(true);
                        }}
                        onMouseUp={() => {
                            setIsScrubbing(false);
                            revealControls();
                        }}
                        onTouchStart={() => {
                            setIsScrubbing(true);
                            clearHideTimer();
                            setShowControls(true);
                        }}
                        onTouchEnd={() => {
                            setIsScrubbing(false);
                            revealControls();
                        }}
                        onClick={(event) => event.stopPropagation()}
                        className="flex-1 h-1 md:h-1.5 accent-white cursor-pointer"
                        aria-label="Seek video timeline"
                    />
                    <span className="text-white/85 text-[10px] md:text-xs tabular-nums min-w-8 md:min-w-10 text-right">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>
        </div>
    );
}

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
                                    <div className={`flex flex-col gap-12 md:gap-24 pb-16 pt-6 h-full ${desktopImages.some(img => ['video', 'embed'].includes(img.mediaType)) ? 'px-0 items-center justify-center' : 'px-6 md:px-48'}`}>
                                        {desktopImages.map((img, index) => (
                                            <div
                                                key={`desktop-${index}`}
                                                className={`relative w-full ${['video', 'embed'].includes(img.mediaType) ? 'flex justify-center w-full max-w-[1000px] px-4 md:px-12' : ''}`}
                                            >
                                                {img.mediaType === 'video' ? (
                                                    <SubtleVideo
                                                        src={img.src}
                                                        title={`${clientName} desktop video ${index + 1}`}
                                                        poster={img.poster}
                                                        priority={index === 0}
                                                    />
                                                ) : img.mediaType === 'embed' ? (
                                                    <EmbedFrame
                                                        src={img.src}
                                                        title={`${clientName} desktop embed ${index + 1}`}
                                                        poster={img.poster}
                                                        priority={index === 0}
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
                                        <div className={`flex flex-col gap-12 md:gap-24 pb-16 pt-6 h-full ${mobileImages.some(img => ['video', 'embed'].includes(img.mediaType)) ? 'px-0 items-center justify-center' : 'px-6 md:px-48'}`}>
                                            {mobileImages.map((img, index) => (
                                                <div
                                                    key={`mobile-${index}`}
                                                    className={`relative w-full ${['video', 'embed'].includes(img.mediaType) ? 'flex justify-center px-0! md:px-0 lg:px-0' : 'md:px-[20%] lg:px-[30%]'}`}
                                                >
                                                    {img.mediaType === 'video' ? (
                                                        <SubtleVideo
                                                            src={img.src}
                                                            title={`${clientName} mobile video ${index + 1}`}
                                                            poster={img.poster}
                                                            priority={index === 0}
                                                        />
                                                    ) : img.mediaType === 'embed' ? (
                                                        <EmbedFrame
                                                            src={img.src}
                                                            title={`${clientName} mobile embed ${index + 1}`}
                                                            poster={img.poster}
                                                            priority={index === 0}
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
