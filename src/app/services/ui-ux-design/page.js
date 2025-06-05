import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function UIUXDesignPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#f4fcef]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-xl mb-6 shadow-lg border-2 border-green-600 ">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-900">UI/UX Design</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              User-centered design solutions that create intuitive, beautiful, and engaging digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Design That Converts</h2>
              <p className="text-gray-600 mb-6">
                Create exceptional user experiences that delight customers and drive business results. Our design approach 
                combines user research, creative vision, and data-driven insights to build products people love to use.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-900">User research and persona development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-900">Wireframing and prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-900">Visual design and branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-900">Usability testing and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-900">Design system development</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#f4fbf6] p-8 rounded-xl border border-[#8dceaa]">
              <h3 className="text-2xl font-bold mb-6 text-green-900">Design Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-[#8dceaa] hover:border-green-300 transition-colors">
                  <h4 className="font-semibold text-green-900">Design</h4>
                  <p className="text-sm text-green-900">Figma, Adobe XD</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[#8dceaa] hover:border-green-300 transition-colors">
                  <h4 className="font-semibold text-green-900">Prototyping</h4>
                  <p className="text-sm text-green-900">InVision, Principle</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[#8dceaa] hover:border-green-300 transition-colors">
                  <h4 className="font-semibold text-green-900">Research</h4>
                  <p className="text-sm text-green-900">Hotjar, Maze</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[#8dceaa] hover:border-green-300 transition-colors">
                  <h4 className="font-semibold text-green-900">Collaboration</h4>
                  <p className="text-sm text-green-900">Miro, FigJam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[#f4fbf6]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-900">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions from concept to final product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#8dceaa] hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">User Research</h3>
              <p className="text-gray-600 mb-4">Understanding your users through research, interviews, and data analysis to inform design decisions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• User interviews & surveys</li>
                <li>• Competitive analysis</li>
                <li>• User journey mapping</li>
                <li>• Persona development</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#8dceaa] hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">Wireframing & Prototyping</h3>
              <p className="text-gray-600 mb-4">Creating interactive prototypes and wireframes to test concepts before development.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Low-fidelity wireframes</li>
                <li>• Interactive prototypes</li>
                <li>• User flow diagrams</li>
                <li>• Clickable mockups</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#8dceaa] hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">Visual Design</h3>
              <p className="text-gray-600 mb-4">Creating beautiful, cohesive visual designs that align with your brand and enhance user experience.</p>
              <ul className="text-sm text-green-900 space-y-2">
                <li>• Visual identity design</li>
                <li>• Component libraries</li>
                <li>• Design systems</li>
                <li>• Brand guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-900">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures great design outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">Research</h3>
              <p className="text-gray-600">Understanding users, goals, and constraints through research and analysis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ideate</h3>
              <p className="text-gray-600">Brainstorming solutions and creating wireframes to explore concepts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600">Creating high-fidelity designs and interactive prototypes.</p>
            </div>
            <div className="text-center">
                <div className="w-16 h-16 bg-[#f4fbf6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Test</h3>
              <p className="text-gray-600">Validating designs through user testing and iterative improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#101410]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#e0e4db]">Ready to Create Amazing Experiences?</h2>
            <p className="text-xl !text-[#c2c9bd] mb-8 max-w-2xl mx-auto">
              Let's design digital experiences that your users will love and your business will benefit from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#205026] !text-[#b9f0b7] font-semibold rounded-lg hover:border-[#b9f0b7] transition-colors  shadow-lg hover:shadow-xl">
                Start Your Design Project
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg  hover:bg-green-50 transition-colors duration-200">
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