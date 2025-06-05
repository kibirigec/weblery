import ParticleNetwork from './ParticleNetwork';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
              <span className="text-sm font-medium">Award-Winning Digital Agency</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
              Transform Your Digital
              <span className="block text-black">Presence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray mb-6 lead max-w-2xl">
              We are a cutting-edge digital media agency specializing in app development, 
              web solutions, AI integration, and strategic marketing. Let us elevate your business 
              to the next level.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom Solutions</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cutting-Edge Tech</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Team</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Result-Driven</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn btn-black hover-lift">
                Start Your Project
              </Link>
              <Link href="#portfolio" className="btn btn-outline hover-lift">
                View Our Work
              </Link>
            </div>
          </div>
          
          {/* Right Column - Particle Network Animation */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg h-96 rounded-lg overflow-hidden bg-gray-50 relative">
              <ParticleNetwork />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                <div className="text-xs text-gray-500 mb-1">Trusted by industry leaders</div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 