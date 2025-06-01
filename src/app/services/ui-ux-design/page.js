import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function UIUXDesignPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Intuitive and beautiful user interfaces that provide seamless experiences across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Design That Converts</h2>
              <p className="text-gray mb-6">
                Our UI/UX design services focus on creating user-centered designs that not only look amazing 
                but also drive user engagement and business growth through thoughtful user experience design.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>User research and persona development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wireframing and prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visual design and branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Usability testing and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive design for all devices</span>
                </li>
              </ul>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Design Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Design</h4>
                  <p className="text-sm text-gray">Figma, Sketch</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Prototyping</h4>
                  <p className="text-sm text-gray">InVision, Principle</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Testing</h4>
                  <p className="text-sm text-gray">Hotjar, UsabilityHub</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Collaboration</h4>
                  <p className="text-sm text-gray">Miro, FigJam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              A systematic approach to creating user-centered designs that deliver results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray">Understanding users, market, and business requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Wireframe</h3>
              <p className="text-gray">Creating structure and layout for optimal user flow.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray">Visual design with focus on usability and aesthetics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Test</h3>
              <p className="text-gray">User testing and iterative improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your UX?</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Let's create a design that your users will love and that drives your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Start Your Design
              </Link>
              <Link href="/#services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 