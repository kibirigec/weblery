"use client";

import Link from 'next/link';
import { useRef } from 'react';

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

  // Get color classes based on hoverColor
  const getIconBgClass = () => {
    const baseClass = 'bg-gray-100';
    const activeClass = isActive ? getActiveIconBgClass() : '';
    const hoverClass = getHoverIconBgClass();
    return `${baseClass} ${hoverClass} ${activeClass}`.trim();
  };

  const getActiveIconBgClass = () => {
    switch(hoverColor) {
      case 'pink': return 'bg-pink-100';
      case 'blue': return 'bg-blue-100';
      case 'yellow': return 'bg-yellow-100';
      case 'green': return 'bg-green-100';
      case 'orange': return 'bg-orange-100';
      default: return 'bg-gray-100';
    }
  };

  const getHoverIconBgClass = () => {
    switch(hoverColor) {
      case 'pink': return 'group-hover:bg-pink-100';
      case 'blue': return 'group-hover:bg-blue-100';
      case 'yellow': return 'group-hover:bg-yellow-100';
      case 'green': return 'group-hover:bg-green-100';
      case 'orange': return 'group-hover:bg-orange-100';
      default: return 'group-hover:bg-gray-100';
    }
  };

  const getIconTextClass = () => {
    const baseClass = 'text-gray-600';
    const activeClass = isActive ? getActiveIconTextClass() : '';
    const hoverClass = getHoverIconTextClass();
    return `${baseClass} ${hoverClass} ${activeClass}`.trim();
  };

  const getActiveIconTextClass = () => {
    switch(hoverColor) {
      case 'pink': return 'text-pink-600';
      case 'blue': return 'text-blue-600';
      case 'yellow': return 'text-yellow-600';
      case 'green': return 'text-green-600';
      case 'orange': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getHoverIconTextClass = () => {
    switch(hoverColor) {
      case 'pink': return 'group-hover:text-pink-600';
      case 'blue': return 'group-hover:text-blue-600';
      case 'yellow': return 'group-hover:text-yellow-600';
      case 'green': return 'group-hover:text-green-600';
      case 'orange': return 'group-hover:text-orange-600';
      default: return 'group-hover:text-gray-600';
    }
  };

  const getFeatureBgClass = () => {
    const baseClass = 'bg-gray-100 text-gray-800';
    const activeClass = isActive ? getActiveFeatureBgClass() : '';
    const hoverClass = getHoverFeatureBgClass();
    return `${baseClass} ${hoverClass} ${activeClass}`.trim();
  };

  const getActiveFeatureBgClass = () => {
    switch(hoverColor) {
      case 'pink': return 'bg-pink-50 text-pink-800';
      case 'blue': return 'bg-blue-50 text-blue-800';
      case 'yellow': return 'bg-yellow-50 text-yellow-800';
      case 'green': return 'bg-green-50 text-green-800';
      case 'orange': return 'bg-orange-50 text-orange-800';
      default: return 'bg-gray-50 text-gray-800';
    }
  };

  const getHoverFeatureBgClass = () => {
    switch(hoverColor) {
      case 'pink': return 'group-hover:bg-pink-50 group-hover:text-pink-800';
      case 'blue': return 'group-hover:bg-blue-50 group-hover:text-blue-800';
      case 'yellow': return 'group-hover:bg-yellow-50 group-hover:text-yellow-800';
      case 'green': return 'group-hover:bg-green-50 group-hover:text-green-800';
      case 'orange': return 'group-hover:bg-orange-50 group-hover:text-orange-800';
      default: return 'group-hover:bg-gray-50 group-hover:text-gray-800';
    }
  };

  return (
    <Link href={`/services/${slug}`} className="block no-underline">
      <div 
        ref={cardRef}
        className={`card hover-lift group service-card-${hoverColor} cursor-pointer transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200 bg-white overflow-hidden ${isActive ? 'is-active' : ''}`}
      >
        <div className="p-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getIconBgClass()}`}>
            <svg 
              className={`w-6 h-6 ${getIconTextClass()}`} 
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
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getFeatureBgClass()}`}
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