'use client';

import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
  useTransform,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const containerControls = useAnimation();
  const videoWrapperControls = useAnimation();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const mobilePadding = isMobile ? 4 : 8;
    const mobileScale = isMobile ? 0.985 : 0.975;
    const mobileBorderRadius = isMobile ? '0.75rem' : '1.5rem';
    
    if (v > 0) {
      containerControls.start({
        paddingLeft: 0,
        paddingRight: 0,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
      videoWrapperControls.start({
        borderRadius: '0px',
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    } else {
      containerControls.start({
        paddingLeft: mobilePadding,
        paddingRight: mobilePadding,
        scale: mobileScale,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
      videoWrapperControls.start({
        borderRadius: mobileBorderRadius,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    }
  });

  const top = useTransform(scrollYProgress, [0, 0.5], ['10vh', '0%']);
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '0']);
  const height = useTransform(scrollYProgress, [0, 0.5], ['90vh', '100vh']);

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5], [1, 0, 0, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const animatedText = [
    {
      text: 'From Marketing to Sales, and everything in between.',
      opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [20, 0, 0, -20]),
    },
    {
      text: 'Even operations like accounting and HR.',
      opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [20, 0, 0, -20]),
    },
    {
      text: '...to Book Keeping and Inventory Management.',
      opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [20, 0, 0, -20]),
    },
    {
      text: "And Customer Support through Chatbots and AI Voice Assistants.",
      opacity: useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0.8, 0.9, 1], [20, 0, 0]),
    },
  ];

  const videoSrc = 'https://res.cloudinary.com/dz2o14lnf/video/upload/v1758621360/854321-hd_1920_1080_24fps_w47dug.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    <section ref={targetRef} className="relative h-[800vh]" style={{ backgroundColor: '#f2f0ef' }}>
      <motion.div
        className="sticky left-0 w-full flex items-end justify-center"
        style={{ top, y }}
      >
        <motion.div
          className="relative w-full bg-[#f20ef]"
          initial={{ 
            paddingLeft: 0, 
            paddingRight: 0, 
            scale: isMobile ? 0.985 : 0.975 
          }}
          animate={containerControls}
          style={{ transformOrigin: 'top center', height }}
        >
          <motion.div
            className="w-full h-full overflow-hidden relative"
            initial={{ borderRadius: isMobile ? '0.75rem' : '1.5rem' }}
            animate={videoWrapperControls}
            style={{ borderRadius: isMobile ? '0.75rem' : '1.5rem' }}
          >
            {/* Background Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Safe Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

            {/* Foreground Text */}
            <div className="absolute inset-0 flex items-center justify-center z-20 text-center text-white p-4 sm:p-6 lg:p-8">
              <motion.div style={{ opacity: textOpacity, y: textY }}>
                <h1 className="text-5xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight">
                  Automation is the future.
                </h1>
                <p className="text-white text-2xl xs:text-xl sm:text-2xl max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                  Everything, and anything can now be automated.
                  
                </p>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                {animatedText.map((item, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: item.opacity,
                      y: item.y,
                    }}
                    className="absolute text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:px-0 text-center"
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Sticky Buttons */}
            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 z-30 px-4 sm:px-0">
              <Link href="/onboarding" passHref>
                <motion.div
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-white text-black rounded-md border border-gray-300 text-base sm:text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  Start Your Project
                </motion.div>
              </Link>
              <Link href="#services" passHref>
                <motion.div
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 border-2 border-white text-white rounded-md text-base sm:text-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center"
                  whileHover={isMobile ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  View All Services
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
