import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
              Transform Your Digital
              <span className="block text-black">Presence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray mb-10 lead max-w-2xl">
              We are a cutting-edge digital media agency specializing in app development, 
              web solutions, AI integration, and strategic marketing. Let us elevate your business 
              to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-black hover-lift">
                Start Your Project
              </button>
              <button className="btn btn-outline hover-lift">
                View Our Work
              </button>
            </div>
          </div>
          
          {/* Right Column - Particle Network Animation */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg h-96 rounded-lg overflow-hidden bg-gray-50">
              <ParticleNetwork />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 