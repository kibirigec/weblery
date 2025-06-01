import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Web Development</h1>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
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
              <h2 className="text-3xl font-bold mb-6">Professional Web Development</h2>
              <p className="text-gray mb-6">
                We create stunning, high-performance websites and web applications that not only look great but also deliver 
                measurable business results. Our expert team uses cutting-edge technologies to build scalable solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive design that works on all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern frameworks: React, Next.js, Vue.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO optimization and fast loading speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Content management systems and e-commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure, scalable, and maintainable code</span>
                </li>
              </ul>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-gray">React, Next.js, Vue.js</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray">Node.js, Python, PHP</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Database</h4>
                  <p className="text-sm text-gray">MongoDB, MySQL</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Cloud</h4>
                  <p className="text-sm text-gray">AWS, Vercel, Netlify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we have you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Custom Websites</h3>
              <p className="text-gray mb-4">Tailor-made websites designed specifically for your business needs and brand identity.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Unique design & branding</li>
                <li>• Mobile-first approach</li>
                <li>• SEO optimized</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
              <p className="text-gray mb-4">Complete online stores with secure payment processing and inventory management.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Shopping cart functionality</li>
                <li>• Payment gateway integration</li>
                <li>• Order management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-gray mb-4">Complex web apps with advanced functionality and database integration.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Custom functionality</li>
                <li>• User authentication</li>
                <li>• API integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Let's create a powerful web presence that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Start Your Project
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