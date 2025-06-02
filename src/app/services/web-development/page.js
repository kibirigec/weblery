import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-xl mb-6 shadow-lg">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Web Development</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Professional Web Development Services</h2>
              <p className="text-gray-600 mb-6">
                We create high-performance websites and web applications using cutting-edge technologies. 
                Our focus is on delivering scalable, secure, and SEO-optimized solutions that grow with your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern frameworks (React, Next.js, Vue.js)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO optimization and performance tuning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Content management systems (CMS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure, scalable architecture</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors">
                  <h4 className="font-semibold text-blue-700">Frontend</h4>
                  <p className="text-sm text-gray-600">React, Next.js, Vue.js</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors">
                  <h4 className="font-semibold text-blue-700">Backend</h4>
                  <p className="text-sm text-gray-600">Node.js, Python, PHP</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors">
                  <h4 className="font-semibold text-blue-700">Database</h4>
                  <p className="text-sm text-gray-600">MongoDB, MySQL</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-200 transition-colors">
                  <h4 className="font-semibold text-blue-700">Cloud</h4>
                  <p className="text-sm text-gray-600">AWS, Vercel, Netlify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex web applications, we deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Websites</h3>
              <p className="text-gray-600 mb-4">Bespoke websites tailored to your brand and business requirements.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Responsive design</li>
                <li>• SEO optimization</li>
                <li>• Fast loading speeds</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-4">Powerful online stores that drive sales and enhance customer experience.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Payment integration</li>
                <li>• Inventory management</li>
                <li>• Mobile-optimized</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Web Applications</h3>
              <p className="text-gray-600 mb-4">Complex web apps with advanced functionality and user interactions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time features</li>
                <li>• User authentication</li>
                <li>• Data visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Build Your Website?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a powerful web presence that drives your business forward and engages your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your Web Project
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg border-2 border-blue-500 hover:bg-blue-50 transition-colors duration-200">
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