import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PerformanceOptimizationPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Performance Optimization</h1>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Speed and performance optimization to ensure your digital products load fast and run smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Lightning-Fast Performance</h2>
              <p className="text-gray mb-6">
                Slow websites lose customers. Our performance optimization services ensure your digital products 
                load quickly, run smoothly, and provide exceptional user experiences that keep visitors engaged.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Website speed optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Database query optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code refactoring and cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Image and asset optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CDN setup and caching strategies</span>
                </li>
              </ul>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">Page Load Time</span>
                  <span className="text-primary font-bold">&lt; 3 seconds</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">Core Web Vitals</span>
                  <span className="text-primary font-bold">90+ Score</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">Performance Gain</span>
                  <span className="text-primary font-bold">50-80% Faster</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-semibold">SEO Improvement</span>
                  <span className="text-primary font-bold">Higher Rankings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Optimize</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Comprehensive performance improvements across all aspects of your digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Frontend Performance</h3>
              <p className="text-gray mb-4">Optimize loading times, rendering, and user interactions for better UX.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Code minification</li>
                <li>• Image compression</li>
                <li>• Lazy loading</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Backend Optimization</h3>
              <p className="text-gray mb-4">Server-side improvements for faster data processing and response times.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Database optimization</li>
                <li>• API performance</li>
                <li>• Server configuration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
              <p className="text-gray mb-4">CDN setup, caching, and hosting optimization for global performance.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• CDN implementation</li>
                <li>• Caching strategies</li>
                <li>• Load balancing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Performance Benefits</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Fast websites deliver better business results and user satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Higher Rankings</h3>
              <p className="text-gray">Improved SEO performance and search visibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">More Conversions</h3>
              <p className="text-gray">Faster sites convert better and reduce bounce rates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Better UX</h3>
              <p className="text-gray">Enhanced user satisfaction and engagement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lower Costs</h3>
              <p className="text-gray">Reduced server costs and bandwidth usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Speed Up Your Site?</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Let's optimize your website for lightning-fast performance and better user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Start Optimization
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