export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark mb-6">
            Transform Your Digital
            <span className="block text-black">Presence</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto mb-10 lead">
            We are a cutting-edge digital media agency specializing in app development, 
            web solutions, AI integration, and strategic marketing. Let us elevate your business 
            to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-black hover-lift">
              Start Your Project
            </button>
            <button className="btn btn-outline hover-lift">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 