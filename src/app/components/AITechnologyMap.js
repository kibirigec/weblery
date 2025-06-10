"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';

// AI Technology Map Component
export default function AITechnologyMap() {
  // Track the active node
  const [activeNode, setActiveNode] = useState(null);
  
  // Technology nodes data with a more structured layout
  const technologies = [
    // Core Technologies (Center)
    {
      id: 'mlmodels',
      name: 'Machine Learning',
      description: 'Algorithms that improve through experience',
      x: 300, // Center position
      y: 220, // Center position
      color: '#3b82f6', // blue
      connections: ['nlp', 'cv', 'automl', 'tensorflow', 'pytorch']
    },
    
    // Top Tier - Application Areas
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      description: 'AI systems that understand and generate human language',
      x: 200,
      y: 120,
      color: '#8b5cf6', // purple
      connections: ['openai']
    },
    {
      id: 'cv',
      name: 'Computer Vision',
      description: 'AI that interprets and analyzes visual information',
      x: 400,
      y: 120,
      color: '#ec4899', // pink
      connections: []
    },
    
    // Bottom Tier - Implementation Tools
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      description: 'Open-source machine learning framework',
      x: 150,
      y: 340,
      color: '#f59e0b', // amber
      connections: ['pytorch']
    },
    {
      id: 'pytorch',
      name: 'PyTorch',
      description: 'Deep learning framework for research and production',
      x: 300,
      y: 340,
      color: '#ef4444', // red
      connections: []
    },
    {
      id: 'automl',
      name: 'AutoML',
      description: 'Automated machine learning for model selection and tuning',
      x: 450,
      y: 340,
      color: '#06b6d4', // cyan
      connections: []
    },
    
    // Left/Right Nodes - Specific Applications
    {
      id: 'openai',
      name: 'OpenAI GPT',
      description: 'Advanced language models for text generation and understanding',
      x: 100,
      y: 250,
      color: '#10b981', // green
      connections: []
    }
  ];
  
  // Find a technology node by id
  const findTech = (id) => technologies.find(tech => tech.id === id);
  
  // Calculate connection path
  const connectionPath = (sourceId, targetId) => {
    const source = findTech(sourceId);
    const target = findTech(targetId);
    
    if (!source || !target) return '';
    
    // Create a curved path between nodes
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const dr = Math.sqrt(dx * dx + dy * dy) * 1.2;
    
    return `M${source.x},${source.y} A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
  };
  
  // Handle mouse events
  const handleMouseEnter = (techId) => {
    setActiveNode(techId);
  };
  
  const handleMouseLeave = () => {
    setActiveNode(null);
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-xl">
      <div className="relative p-4 w-full h-full">
        <svg viewBox="0 0 600 500" className="w-full h-full">
          {/* Background grid */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Connection lines */}
          {technologies.map(tech => (
            tech.connections.map(targetId => (
              <motion.path
                key={`${tech.id}-${targetId}`}
                d={connectionPath(tech.id, targetId)}
                stroke={activeNode === tech.id || activeNode === targetId ? '#6366f1' : '#cbd5e1'}
                strokeWidth={activeNode === tech.id || activeNode === targetId ? 2 : 1}
                fill="none"
                strokeDasharray={activeNode === tech.id || activeNode === targetId ? '0' : '5,5'}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  strokeDasharray: activeNode === tech.id || activeNode === targetId ? '0' : '5,5',
                  stroke: activeNode === tech.id || activeNode === targetId ? '#6366f1' : '#cbd5e1',
                  strokeWidth: activeNode === tech.id || activeNode === targetId ? 2 : 1
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            ))
          ))}
          
          {/* Technology nodes */}
          {technologies.map(tech => (
            <g 
              key={tech.id} 
              onMouseEnter={() => handleMouseEnter(tech.id)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              <motion.circle
                cx={tech.x}
                cy={tech.y}
                r={activeNode === tech.id ? 40 : (tech.name.split(' ').length > 2 ? 38 : 30)}
                fill={tech.color}
                opacity={activeNode === tech.id ? 1 : activeNode ? 0.5 : 0.8}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  r: activeNode === tech.id ? 40 : (tech.name.split(' ').length > 2 ? 38 : 30),
                  opacity: activeNode === tech.id ? 1 : activeNode ? 0.5 : 0.8
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.3
                }}
              />
              <text
                x={tech.x}
                y={tech.y - (tech.name.split(' ').length > 1 ? (tech.name.split(' ').length - 1) * 6 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontWeight={activeNode === tech.id ? "bold" : "normal"}
                fontSize={activeNode === tech.id ? "12" : "10"}
                pointerEvents="none" // Prevents text from interfering with hover
              >
                {tech.name.split(' ').map((word, i, arr) => (
                  <tspan
                    key={i}
                    x={tech.x}
                    dy={i === 0 ? "0" : "1.1em"}
                    textAnchor="middle"
                  >
                    {arr.length === 1 ? tech.name : word}
                  </tspan>
                ))}
              </text>
            </g>
          ))}
        </svg>
        
        {/* Fixed Description panel (not near cursor) */}
      {activeNode && (
  <motion.div
    className="absolute bottom-2 left-0 right-0 mx-auto w-4/5 max-w-md rounded-2xl p-3 text-white shadow-2xl"
    style={{
      // Main glassmorphism background
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      
      // Sophisticated border system
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderTop: '1px solid rgba(255, 255, 255, 0.4)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
      
      // Advanced shadow system
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.15),
        0 4px 16px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1)
      `,
      
      // Performance optimizations
      transform: 'translateZ(0)',
      willChange: 'backdrop-filter',
    }}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.95 }}
    transition={{ 
      duration: 0.3, 
      ease: [0.16, 1, 0.3, 1] // Custom easing for smooth animation
    }}
  >
    {/* Content container with additional depth */}
    <div className="relative z-10">
      <div className="flex items-start gap-2 mb-0">
        <div 
          className="w-2.5 h-2.5 rounded-full shadow-sm flex-shrink-0 mt-1.5" 
          style={{ 
            backgroundColor: findTech(activeNode).color,
            boxShadow: `0 0 8px ${findTech(activeNode).color}40`
          }}
        />
        <h3 className="font-semibold text-base text-gray-800">
          {findTech(activeNode).name}
        </h3>
      </div>
      <p className="text-gray-700 text-xs leading-tight ml-5">
        {findTech(activeNode).description}
      </p>
    </div>
    
    {/* Subtle highlight overlay - mimics the macOS style */}
    <div 
      className="absolute inset-0 rounded-2xl pointer-events-none"
      style={{
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.1) 0%, 
          rgba(255, 255, 255, 0.05) 25%, 
          transparent 50%, 
          rgba(0, 0, 0, 0.02) 100%
        )`,
      }}
    />
    
    {/* Color accent border that matches the node */}
    <div 
      className="absolute inset-0 rounded-2xl pointer-events-none"
      style={{
        background: `linear-gradient(135deg, 
          ${findTech(activeNode).color}15 0%, 
          transparent 40%, 
          ${findTech(activeNode).color}08 100%
        )`,
        border: `1px solid ${findTech(activeNode).color}20`,
      }}
    />
  </motion.div>
)}
        
        {/* Title and instructions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-gray-800 font-semibold">AI Technology Ecosystem</h3>
          <div className="text-gray-500 text-xs italic">Hover over nodes to explore connections</div>
        </div>
      </div>
    </div>
  );
} 