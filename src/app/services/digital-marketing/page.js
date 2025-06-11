"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import React, { useRef, useState, useMemo, useEffect } from "react";
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceModal from '../../components/ServiceModal';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  fadeInUp,
  containerVariants,
  itemVariants,
  iconVariants,
  buttonVariants,
} from "./animations";
import { digitalMarketingService } from "./data";

// Component for particles moving along connection lines
function MovingParticles({ originPosition, destinations, color }) {
  const particlesRef = useRef();
  const tubesRef = useRef([]);
  const tubeMaterialsRef = useRef([]);
  
  // Create particles that will move along the curves
  const { positions, indices } = useMemo(() => {
    const positions = [];
    const indices = [];
    const count = destinations.length * 3; // 3 particles per connection
    
    for (let i = 0; i < count; i++) {
      positions.push(0, 0, 0);
      // Store which destination this particle belongs to
      indices.push(Math.floor(i / 3));
    }
    
    return { positions, indices };
  }, [destinations]);
  
  // Create tube paths
  const tubes = useMemo(() => {
    const tubes = [];
    
    destinations.forEach((dest, i) => {
      const origin = new THREE.Vector3(...originPosition);
      const destination = new THREE.Vector3(...dest);
      
      // Calculate curve height based on distance
      const distance = origin.distanceTo(destination);
      const midpoint = new THREE.Vector3().addVectors(origin, destination).multiplyScalar(0.5);
      const normal = new THREE.Vector3().copy(midpoint).normalize();
      
      // Pull the midpoint out from the sphere to create an arc
      midpoint.add(normal.multiplyScalar(distance * 0.3));
      
      // Create a quadratic bezier curve
      const curve = new THREE.QuadraticBezierCurve3(
        origin.clone().multiplyScalar(1.02), // Slightly outside sphere
        midpoint,
        destination.clone().multiplyScalar(1.02) // Slightly outside sphere
      );
      
      // Create tube geometry - path, segments, radius, radial segments, closed
      const tubeGeometry = new THREE.TubeGeometry(
        curve, 
        30,         // tubular segments
        0.008,      // radius
        8,          // radial segments
        false       // closed
      );
      
      tubes.push(tubeGeometry);
    });
    
    return tubes;
  }, [destinations, originPosition]);
  
  // Initialize tube refs
  useEffect(() => {
    tubesRef.current = new Array(destinations.length).fill().map((_, i) => tubesRef.current[i] || React.createRef());
    tubeMaterialsRef.current = new Array(destinations.length).fill().map((_, i) => tubeMaterialsRef.current[i] || React.createRef());
  }, [destinations.length]);
  
  // Update particle positions and tube materials
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    const time = clock.getElapsedTime();
    const positionArray = particlesRef.current.geometry.attributes.position.array;
    
    // Update particles
    for (let i = 0; i < positionArray.length / 3; i++) {
      const destIndex = indices[i];
      const origin = new THREE.Vector3(...originPosition);
      const destination = new THREE.Vector3(...destinations[destIndex]);
      
      // Calculate curve height based on distance
      const distance = origin.distanceTo(destination);
      const midpoint = new THREE.Vector3().addVectors(origin, destination).multiplyScalar(0.5);
      const normal = new THREE.Vector3().copy(midpoint).normalize();
      
      // Pull the midpoint out from the sphere to create an arc
      midpoint.add(normal.multiplyScalar(distance * 0.3));
      
      // Create a quadratic bezier curve
      const curve = new THREE.QuadraticBezierCurve3(
        origin.multiplyScalar(1.02),
        midpoint,
        destination.multiplyScalar(1.02)
      );
      
      // Get position along curve based on time - SLOWER SPEED
      const speed = 0.08 + (i % 3) * 0.04; // Reduced speed values
      const offset = (i * 0.3) % 1; // Stagger starting positions
      let t = ((time * speed) + offset) % 1;
      
      // Ease in/out for smoother motion at endpoints
      t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      
      const point = curve.getPoint(t);
      
      // Update position
      positionArray[i * 3] = point.x;
      positionArray[i * 3 + 1] = point.y;
      positionArray[i * 3 + 2] = point.z;
    }
    
    // Update tube materials
    tubeMaterialsRef.current.forEach((materialRef, i) => {
      if (materialRef.current) {
        // Calculate path progress (0-1) - SLOWER ANIMATION
        const pathCycleTime = 6; // Seconds for a complete cycle
        const cyclePosition = ((time * (1 / pathCycleTime)) + (i * 0.1)) % 1;
        
        // Update material uniforms
        materialRef.current.uniforms.time.value = time;
        materialRef.current.uniforms.progress.value = cyclePosition;
      }
    });
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <>
      {/* Tube paths */}
      {tubes.map((tubeGeometry, i) => (
        <mesh key={i} ref={tubesRef.current[i]}>
          <primitive object={tubeGeometry} attach="geometry" />
          <shaderMaterial
            ref={tubeMaterialsRef.current[i]}
            transparent={true}
            vertexShader={`
              varying vec2 vUv;
              
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform vec3 color;
              uniform float time;
              uniform float progress;
              varying vec2 vUv;
              
              void main() {
                // vUv.x is along the tube (0 at start, 1 at end)
                float distFromWave = abs(vUv.x - progress);
                float waveLength = 0.4;
                
                // Create visible wave section
                float visibility = distFromWave < waveLength/2.0 
                  ? 1.0 - (distFromWave / (waveLength/2.0)) 
                  : 0.0;
                
                // Add a stronger tail effect that's always visible at the source
                float sourceFade = max(0.0, 0.3 - vUv.x * 0.6); // Higher opacity near the source (when vUv.x is close to 0)
                float tailEffect = vUv.x < progress ? 0.3 : 0.0; // Stronger tail (increased from 0.15 to 0.3)
                
                // Add a pulse
                float pulse = 0.9 + 0.1 * sin(time * 2.0 + vUv.x * 10.0);
                
                // Combine effects - ensure source is always visible
                float alpha = max(max(visibility * pulse, tailEffect), sourceFade);
                
                // Never completely transparent
                alpha = max(alpha, 0.1);
                
                // Glow effect
                vec3 glowColor = mix(color, vec3(1.0, 1.0, 1.0), visibility * 0.7);
                
                gl_FragColor = vec4(glowColor, alpha);
              }
            `}
            uniforms={{
              color: { value: new THREE.Color(color) },
              time: { value: 0 },
              progress: { value: 0 }
            }}
          />
        </mesh>
      ))}
      
      {/* Particles along the curves */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={new Float32Array(positions)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={color}
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
}

// 3D Globe Component with connections
function Globe({ color = '#eab308' }) {
  const globeGroupRef = useRef();
  const pointsRef = useRef();
  const pointsMaterialRef = useRef();
  
  // Uganda coordinates (approx lat/long to 3D position)
  const originPosition = useMemo(() => {
    // Uganda is roughly at 1°N, 32°E
    const lat = 1 * (Math.PI / 180);
    const lng = 32 * (Math.PI / 180);
    const x = -Math.cos(lat) * Math.sin(lng);
    const y = Math.sin(lat);
    const z = Math.cos(lat) * Math.cos(lng);
    return [x, y, z];
  }, []);
  
  // Generate destination points around the globe
  const destinations = useMemo(() => {
    return [
      { lat: 40, lng: -74 }, // New York
      { lat: 51, lng: 0 },   // London
      { lat: 35, lng: 139 }, // Tokyo
      { lat: -33, lng: 151 }, // Sydney
      { lat: -1, lng: 36 },  // Nairobi
      { lat: 19, lng: 72 },  // Mumbai
      { lat: 55, lng: 37 },  // Moscow
      { lat: -34, lng: -58 }, // Buenos Aires
    ].map(({ lat, lng }) => {
      const latRad = lat * (Math.PI / 180);
      const lngRad = lng * (Math.PI / 180);
      const x = -Math.cos(latRad) * Math.sin(lngRad);
      const y = Math.sin(latRad);
      const z = Math.cos(latRad) * Math.cos(lngRad);
      return [x, y, z];
    });
  }, []);
  
  // Create sphere points with patterns
  const { positions, sizes, colors } = useMemo(() => {
    const positions = [];
    const sizes = [];
    const colors = [];
    
    // Regular distribution for base sphere
    const baseCount = 1200;
    for (let i = 0; i < baseCount; i++) {
      // Random spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      // Convert to cartesian
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      positions.push(x, y, z);
      
      // Random sizes for dots
      const size = 0.015 + Math.random() * 0.02;
      sizes.push(size);
      
      // Color variations (staying in amber/yellow palette)
      colors.push(0.9, 0.6 + Math.random() * 0.3, 0.1 + Math.random() * 0.1);
    }
    
    // Add circular patterns - Spiral pattern 1
    const circleCount = 80;
    let centerLat = 35; // Latitude for center of pattern
    let centerLng = 20; // Longitude for center of pattern
    
    // Convert pattern center to 3D coordinates
    const centerLatRad = centerLat * (Math.PI / 180);
    const centerLngRad = centerLng * (Math.PI / 180);
    const centerX = -Math.cos(centerLatRad) * Math.sin(centerLngRad);
    const centerY = Math.sin(centerLatRad);
    const centerZ = Math.cos(centerLatRad) * Math.cos(centerLngRad);
    
    // Create a basis for the spiral
    const up = new THREE.Vector3(centerX, centerY, centerZ).normalize();
    let right = new THREE.Vector3(1, 0, 0);
    if (Math.abs(up.y) < 0.99) {
      right.crossVectors(up, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      right.crossVectors(up, new THREE.Vector3(1, 0, 0)).normalize();
    }
    const forward = new THREE.Vector3().crossVectors(right, up).normalize();
    
    // Add spiral points
    for (let i = 0; i < circleCount; i++) {
      const angle = (i / circleCount) * Math.PI * 15;
      const radius = 0.05 + (i / circleCount) * 0.2;
      
      const x = centerX + Math.cos(angle) * radius * right.x + Math.sin(angle) * radius * forward.x;
      const y = centerY + Math.cos(angle) * radius * right.y + Math.sin(angle) * radius * forward.y;
      const z = centerZ + Math.cos(angle) * radius * right.z + Math.sin(angle) * radius * forward.z;
      
      // Normalize to surface of sphere
      const length = Math.sqrt(x*x + y*y + z*z);
      positions.push(x/length, y/length, z/length);
      
      // Larger sizes for pattern
      sizes.push(0.03 + (i / circleCount) * 0.01);
      
      // Yellow to amber colors
      colors.push(0.95, 0.7 + (i / circleCount) * 0.2, 0.2);
    }
    
    // Add circular patterns - Spiral pattern 2
    centerLat = -20; // Latitude for center of second pattern
    centerLng = -30; // Longitude for center of second pattern
    
    // Convert pattern center to 3D coordinates
    const centerLatRad2 = centerLat * (Math.PI / 180);
    const centerLngRad2 = centerLng * (Math.PI / 180);
    const centerX2 = -Math.cos(centerLatRad2) * Math.sin(centerLngRad2);
    const centerY2 = Math.sin(centerLatRad2);
    const centerZ2 = Math.cos(centerLatRad2) * Math.cos(centerLngRad2);
    
    // Create a basis for the spiral
    const up2 = new THREE.Vector3(centerX2, centerY2, centerZ2).normalize();
    let right2 = new THREE.Vector3(1, 0, 0);
    if (Math.abs(up2.y) < 0.99) {
      right2.crossVectors(up2, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      right2.crossVectors(up2, new THREE.Vector3(1, 0, 0)).normalize();
    }
    const forward2 = new THREE.Vector3().crossVectors(right2, up2).normalize();
    
    // Add spiral points
    for (let i = 0; i < circleCount; i++) {
      const angle = (i / circleCount) * Math.PI * 15;
      const radius = 0.05 + (i / circleCount) * 0.2;
      
      const x = centerX2 + Math.cos(angle) * radius * right2.x + Math.sin(angle) * radius * forward2.x;
      const y = centerY2 + Math.cos(angle) * radius * right2.y + Math.sin(angle) * radius * forward2.y;
      const z = centerZ2 + Math.cos(angle) * radius * right2.z + Math.sin(angle) * radius * forward2.z;
      
      // Normalize to surface of sphere
      const length = Math.sqrt(x*x + y*y + z*z);
      positions.push(x/length, y/length, z/length);
      
      // Larger sizes for pattern
      sizes.push(0.03 + (i / circleCount) * 0.01);
      
      // Yellow to amber colors
      colors.push(0.95, 0.7 + (i / circleCount) * 0.2, 0.2);
    }
    
    // Add concentric circles around Uganda
    const circleRings = 3;
    const pointsPerRing = 30;
    
    for (let ring = 0; ring < circleRings; ring++) {
      const ringRadius = 0.1 + ring * 0.08;
      
      for (let i = 0; i < pointsPerRing; i++) {
        const angle = (i / pointsPerRing) * Math.PI * 2;
        
        const right3 = new THREE.Vector3(1, 0, 0).cross(
          new THREE.Vector3(originPosition[0], originPosition[1], originPosition[2])
        ).normalize();
        
        const forward3 = new THREE.Vector3(originPosition[0], originPosition[1], originPosition[2])
          .cross(right3).normalize();
        
        const x = originPosition[0] + Math.cos(angle) * ringRadius * right3.x + 
                  Math.sin(angle) * ringRadius * forward3.x;
        const y = originPosition[1] + Math.cos(angle) * ringRadius * right3.y + 
                  Math.sin(angle) * ringRadius * forward3.y;
        const z = originPosition[2] + Math.cos(angle) * ringRadius * right3.z + 
                  Math.sin(angle) * ringRadius * forward3.z;
        
        // Normalize to surface of sphere
        const length = Math.sqrt(x*x + y*y + z*z);
        positions.push(x/length, y/length, z/length);
        
        // Larger sizes for rings
        sizes.push(0.04);
        
        // Bright yellow color
        colors.push(1.0, 0.8, 0.1);
      }
    }
    
    return { positions, sizes, colors };
  }, [originPosition]);
  
  // Animate the globe rotation
  useFrame(({ clock }) => {
    if (globeGroupRef.current) {
      // Slower rotation - reduced from 0.1 to 0.05
      globeGroupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    
    if (pointsMaterialRef.current) {
      // Pulse the dot sizes - slower pulse
      pointsMaterialRef.current.size = pointsMaterialRef.current.userData.baseSize * 
        (1 + 0.1 * Math.sin(clock.getElapsedTime() * 1)); // Reduced from 2 to 1 for slower pulse
    }
  });
  
  return (
    // Everything is now in one group that rotates together
    <group ref={globeGroupRef}>
      {/* Points for the globe surface */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={new Float32Array(positions)}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={new Float32Array(colors)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMaterialRef}
          size={0.025}
          sizeAttenuation={true}
          vertexColors={true}
          transparent
          opacity={0.9}
          userData={{ baseSize: 0.025 }}
          depthWrite={false}
        />
      </points>
      
      {/* Origin point (Uganda) */}
      <mesh position={[originPosition[0] * 1.02, originPosition[1] * 1.02, originPosition[2] * 1.02]}>
        <sphereGeometry args={[0.04, 16, 16]} /> {/* Increased from 0.03 to 0.04 */}
        <meshBasicMaterial color="#ff9900" />
      </mesh>
      
      {/* Destination points */}
      {destinations.map((position, i) => (
        <mesh 
          key={i} 
          position={[position[0] * 1.02, position[1] * 1.02, position[2] * 1.02]}
        >
          <sphereGeometry args={[0.02, 16, 16]} /> {/* Increased from 0.015 to 0.02 */}
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
      
      {/* Animated particles and loading bars along the curves */}
      <MovingParticles 
        originPosition={originPosition} 
        destinations={destinations} 
        color={color} 
      />
    </group>
  );
}

export default function DigitalMarketingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const strategyRef = useRef(null);
  const resultsRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const strategyInView = useInView(strategyRef, { once: true, amount: 0.2 });
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const chartY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const socialY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const analyticsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.9, 1.1]);
  const campaignY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with marketing visualizations */}
      <motion.section 
        className="pt-36 pb-24 lg:min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-amber-100 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-300/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 8}px`,
                height: `${Math.random() * 20 + 8}px`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <motion.div 
                className="flex items-center mb-8"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-yellow-600 to-amber-700 p-1 rounded-xl shadow-lg">
                  <motion.div 
                    className="bg-white rounded-lg flex items-center justify-center w-16 h-16"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.svg 
                      className="w-8 h-8 text-yellow-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <motion.path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <span className="text-sm font-medium uppercase tracking-wider text-yellow-700">Global Marketing</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-yellow-900"
                variants={fadeInUp}
              >
                Digital <br className="hidden lg:block" />
                <span className="relative">
                  Marketing
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-yellow-600"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-yellow-800/80 mb-10 leading-relaxed"
                variants={fadeInUp}
              >
                Strategic campaigns that drive growth, expand your global reach, and maximize ROI across all digital channels.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                variants={containerVariants}
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative overflow-hidden bg-yellow-700 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-yellow-800"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Why Digital Marketing Matters</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
                
                <motion.div variants={buttonVariants}>
                  <Link 
                    href="/#contact" 
                    className="group relative overflow-hidden bg-white text-yellow-900 border-2 border-yellow-300 font-medium rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="mr-2">Get Started</span>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div 
                className="mt-16 flex items-center text-yellow-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="w-10 h-px bg-yellow-300 mr-3"></div>
                <span className="text-sm mr-2">Scroll to explore</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Globe Visualization */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              variants={fadeInUp}
            >
              <div className="relative">
                {/* 3D Globe with Three.js */}
                <motion.div 
                  className="w-full max-w-xl h-[500px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 overflow-hidden relative"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="text-lg font-semibold text-gray-800">Global Campaign Reach</div>
                    </div>
                    <div className="text-sm text-yellow-600 font-medium">Live Data</div>
                  </div>
                  
                  {/* Three.js Canvas for 3D Globe */}
                  <div className="relative h-[320px] mb-6">
                    <Canvas
                      camera={{ position: [0, 0, 2.5], fov: 45 }}
                      style={{ background: 'transparent' }}
                    >
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <Globe color="#eab308" />
                    </Canvas>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center">
                      <div className="mr-3 bg-amber-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-amber-700 font-medium">Audience Size</div>
                        <div className="text-lg font-bold text-amber-900">5.2M</div>
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center">
                      <div className="mr-3 bg-amber-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-amber-700 font-medium">Demographics</div>
                        <div className="text-lg font-bold text-amber-900">28</div>
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 flex items-center">
                      <div className="mr-3 bg-amber-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-amber-700 font-medium">Engagement</div>
                        <div className="text-lg font-bold text-amber-900">8.7%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section with enhanced marketing dashboard */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        ref={overviewRef}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Marketing Dashboard */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5"
          style={{ scale: analyticsScale }}
        >
          <div className="w-48 h-32 bg-yellow-100 rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="bg-yellow-200 rounded p-1">
                <div className="text-xs font-bold text-yellow-700 mb-1">Clicks</div>
                <motion.div 
                  className="text-lg font-bold text-yellow-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  12.5K
                </motion.div>
              </div>
              <div className="bg-violet-200 rounded p-1">
                    <div className="text-xs font-bold text-violet-700 mb-1">Views</div>
                <motion.div 
                  className="text-lg font-bold text-violet-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  89.2K
                </motion.div>
              </div>
              <div className="bg-yellow-300 rounded p-1">
                <div className="text-xs font-bold text-yellow-700 mb-1">Conv</div>
                <motion.div 
                  className="text-lg font-bold text-yellow-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  8.7%
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-yellow-900"
                variants={itemVariants}
              >
                Strategic Digital Growth
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Accelerate your business growth with data-driven digital marketing strategies. From SEO to social media, 
                we create comprehensive campaigns that deliver measurable results and connect you with your target audience.
              </motion.p>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  "Search Engine Optimization (SEO)",
                  "Pay-Per-Click (PPC) advertising",
                  "Social media marketing and management",
                  "Content marketing and strategy",
                  "Email marketing automation"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mt-1" 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </motion.div>
                    <span className="text-yellow-900">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Enhanced Marketing Dashboard */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative border-2 border-yellow-900"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Multi-Platform Dashboard Mockup */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Campaign Dashboard</h3>
                
                {/* Social Media Platform Mockups */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <motion.div 
                    className="bg-violet-50 rounded-lg p-2 border border-violet-200"
                    // whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-violet-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-violet-700">Facebook</div>
                    <motion.div 
                      className="text-sm font-bold text-violet-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      2.1K
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-pink-50 rounded-lg p-2 border border-pink-200"
                    // whileHover={{ scale: 1.05, backgroundColor: "#fce7f3" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-pink-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-pink-700">Instagram</div>
                    <motion.div 
                      className="text-sm font-bold text-pink-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      3.7K
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-sky-50 rounded-lg p-2 border border-sky-200"
                    // whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-sky-500 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-sky-700">Twitter</div>
                    <motion.div 
                      className="text-sm font-bold text-sky-800"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      1.9K
                    </motion.div>
                  </motion.div>
                </div>

                {/* Performance Chart Visualization */}
                <div className="bg-yellow-50 rounded-lg p-3 ">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-yellow-700">Campaign Performance</span>
                    <motion.span 
                      className="text-sm font-bold text-yellow-800"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↗ +47%
                    </motion.span>
                </div>
                  <div className="flex items-end space-x-1 h-12">
                    {[30, 45, 35, 60, 55, 70, 65].map((height, i) => (
                      <motion.div 
                        key={i}
                        className="bg-yellow-400 rounded-sm flex-1"
                        style={{ height: `${height}%` }}
                        animate={{ 
                          height: [`${height}%`, `${height + 10}%`, `${height}%`] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-yellow-900">Marketing Channels</h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {[
                  'SEO/SEM', 'Social Media', 'Email Marketing', 'Content Marketing',
                  'PPC Ads', 'Influencer', 'Analytics', 'Automation'
                ].map((channel, index) => (
                  <motion.div
                    key={channel}
                      className="bg-yellow-50 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.05,
                    //   backgroundColor: "#f3f4f6",
                    //   transition: { duration: 0.2 }
                    // }}
                  >
                    {channel}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid enhanced with campaign mockups */}
      <motion.section 
        className="py-16 bg-yellow-50/30 relative overflow-hidden"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Parallax Background Marketing Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: socialY }}
        >
          <div className="absolute top-20 left-1/4 w-20 h-20 bg-yellow-300 rounded-2xl blur-xl"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-violet-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-yellow-300 rounded-xl transform rotate-45 blur-lg"></div>
        </motion.div>

        <div className="container relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "SEO Optimization",
                description: "Improve your search engine rankings and organic visibility with our proven SEO strategies.",
                features: [
                  "Keyword research & analysis",
                  "On-page optimization",
                  "Technical SEO audits",
                  "Link building campaigns"
                ]
              },
              {
                icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                title: "PPC Advertising",
                description: "Drive immediate traffic and conversions with targeted pay-per-click advertising campaigns.",
                features: [
                  "Google Ads management",
                  "Campaign optimization",
                  "Landing page design",
                  "Performance tracking"
                ]
              },
              {
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                title: "Social Media Marketing",
                description: "Build your brand presence and engage with your audience across all major social platforms.",
                features: [
                  "Content creation & scheduling",
                  "Community management",
                  "Social media advertising",
                  "Influencer partnerships"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-yellow-900  transition-all hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <motion.ul 
                  className="text-sm text-yellow-900 space-y-2"
                  variants={containerVariants}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      variants={itemVariants}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3
                      }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-yellow-50 relative overflow-hidden"
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 -right-40 w-80 h-80 rounded-full opacity-20"
            style={{ 
              background: 'radial-gradient(circle, #fef9c3 0%, rgba(254,249,195,0) 70%)' 
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 -left-20 w-60 h-60 rounded-full opacity-20"
            style={{ 
              background: 'radial-gradient(circle, #fef9c3 0%, rgba(254,249,195,0) 70%)' 
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl font-bold mb-4 text-yellow-900"
              variants={fadeInUp}
            >
              Digital Marketing Pricing
            </motion.h2>
            <motion.p 
              className="text-xl text-yellow-700/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Transparent pricing options to maximize your online presence
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* Starter Campaign Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-yellow-100"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white">
                <h3 className="text-xl font-bold mb-2">Starter Campaign</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">$2,499</span>
                  <span className="ml-2 text-sm opacity-80">one-time</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Initial marketing boost for small businesses and startups</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">SEO audit & basic optimization</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Social media profile setup</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Content strategy planning</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">30-day campaign management</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Performance reports</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-yellow-100 text-yellow-700 rounded-lg font-medium text-center transition-all duration-300 hover:bg-yellow-200">
                    Get Started
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Growth Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col transform scale-105 z-10 border-2 border-yellow-500"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className="bg-white text-yellow-600 text-xs font-bold uppercase py-1 px-3 transform rotate-12 translate-x-2 -translate-y-1">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Package</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">$4,999</span>
                  <span className="ml-2 text-sm opacity-80">one-time</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Comprehensive marketing solution for growing businesses</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Complete SEO optimization</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">PPC campaign setup</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Content creation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Social media management</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">60-day campaign management</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Analytics dashboard</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-yellow-600 text-white rounded-lg font-medium text-center transition-all duration-300 hover:bg-yellow-700">
                    Get Started
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Premium Marketing Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-yellow-100"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="p-6 bg-gradient-to-r from-amber-600 to-yellow-700 text-white">
                <h3 className="text-xl font-bold mb-2">Premium Marketing</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold">$9,999</span>
                  <span className="ml-2 text-sm opacity-80">one-time</span>
                </div>
                <p className="mt-3 text-sm opacity-90">Enterprise-level marketing for maximum business impact</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Advanced SEO strategy</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Multi-channel campaigns</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Conversion optimization</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Email marketing automation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">90-day campaign management</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Weekly performance reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href="/contact">
                  <div className="w-full py-3 px-4 bg-yellow-100 text-yellow-700 rounded-lg font-medium text-center transition-all duration-300 hover:bg-yellow-200">
                    Contact Us
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <p className="text-yellow-700/80 mb-6">
              All prices are one-time payments. Need a custom solution? Contact us for a tailored quote.
            </p>
            <Link href="/pricing">
              <div className="inline-flex items-center bg-yellow-800 hover:bg-yellow-900 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                View All Service Packages
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section bg-[#19120b]"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 !text-[#d3c4b4]">Ready to Grow Your Business?</h2>
            <p className="text-xl !text-[#d7c3ae] mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives results and accelerates your growth.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div 
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#5d4200] !text-[#ebc06c] font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                Start Your Campaign
                  </motion.span>
              </Link>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}>
                <Link 
                  href="/#services" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-colors duration-200"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                View All Services
                  </motion.span>
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={digitalMarketingService}
      />

      <Footer />
    </main>
  );
} 