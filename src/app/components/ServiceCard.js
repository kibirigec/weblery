"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  hoverColor = "black", 
  slug, 
  features = [],
  index,
  isActive,
  setActiveCard
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          
          // Only take action when intersection state changes
          if (entry.isIntersecting) {
            // Calculate how centered the element is
            const viewportHeight = window.innerHeight;
            const boundingRect = entry.target.getBoundingClientRect();
            const elementCenter = boundingRect.top + boundingRect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
            
            // If this element is closer to center than threshold, activate it
            const centerThreshold = viewportHeight * 0.2; // 20% of viewport height
            
            if (distanceFromCenter < centerThreshold) {
              setActiveCard(index);
            }
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: [0.1, 0.5, 0.9], // Track multiple thresholds for smoother transitions
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [index, setActiveCard]);

  // Get color classes based on hoverColor
  const getIconBgClass = () => {
    if (isActive) {
      switch(hoverColor) {
        case 'pink': return 'bg-pink-100';
        case 'blue': return 'bg-blue-100';
        case 'yellow': return 'bg-yellow-100';
        case 'green': return 'bg-green-100';
        case 'orange': return 'bg-orange-100';
        default: return 'bg-gray-100';
      }
    }
    return 'bg-gray-100';
  };

  const getIconTextClass = () => {
    if (isActive) {
      switch(hoverColor) {
        case 'pink': return 'text-pink-600';
        case 'blue': return 'text-blue-600';
        case 'yellow': return 'text-yellow-600';
        case 'green': return 'text-green-600';
        case 'orange': return 'text-orange-600';
        default: return 'text-gray-600';
      }
    }
    return 'text-gray-600';
  };

  const getFeatureBgClass = () => {
    if (isActive) {
      switch(hoverColor) {
        case 'pink': return 'bg-pink-50 text-pink-800';
        case 'blue': return 'bg-blue-50 text-blue-800';
        case 'yellow': return 'bg-yellow-50 text-yellow-800';
        case 'green': return 'bg-green-50 text-green-800';
        case 'orange': return 'bg-orange-50 text-orange-800';
        default: return 'bg-gray-50 text-gray-800';
      }
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Link href={`/services/${slug}`} className="block no-underline service-card-link">
      <div 
        ref={cardRef}
        className={`card hover-lift group service-card-${hoverColor} cursor-pointer transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200 bg-white overflow-hidden ${isActive ? 'is-active' : ''}`}
      >
        <div className="p-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getIconBgClass()} transition-colors duration-300`}>
            <svg 
              className={`w-6 h-6 ${getIconTextClass()} transition-colors duration-300`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {icon}
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray mb-4">{description}</p>
          
          {features.length > 0 && (
            <div className="mb-5">
              <div className="flex flex-wrap gap-2">
                {features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex} 
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getFeatureBgClass()} transition-colors duration-300`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="inline-flex items-center text-black hover:text-gray-600 font-medium transition-colors duration-200">
            Learn More
            <svg className={`w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 ${isActive ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 