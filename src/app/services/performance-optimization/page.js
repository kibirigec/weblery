import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PerformanceOptimizationPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#FFF9EF]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-xl mb-6 shadow-lg border border-orange-200">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#8e4d2f]">Performance Optimization</h1>
            <p className="text-xl text-[#77574a] max-w-2xl mx-auto lead">
              Lightning-fast websites and applications that deliver exceptional performance and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8e4d2f]">Speed That Converts</h2>
              <p className="text-gray-600 mb-6">
                Optimize your website's performance to improve user experience, search rankings, and conversion rates. 
                Our comprehensive optimization services ensure your digital properties load fast and perform flawlessly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#77574a]">Website speed optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#77574a]">Core Web Vitals optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#77574a]">Database and server optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#77574a]">Image and asset optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#77574a]">CDN and caching strategies</span> {/* On secondary color */}
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <h3 className="text-2xl font-bold mb-6 text-[#ef5f00]">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#FFEED6] rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                  <h4 className="font-semibold text-[#8e4d2f]">Page Speed</h4>
                  <p className="text-sm text-gray-600">3 seconds</p>
                </div>
                <div className="text-center p-4 bg-[#FFEED6] rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                  <h4 className="font-semibold text-[#8e4d2f]">Core Web Vitals</h4>
                  <p className="text-sm text-gray-600">Green scores</p>
                </div>
                <div className="text-center p-4 bg-[#FFEED6] rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                  <h4 className="font-semibold text-[#8e4d2f]">Lighthouse</h4>
                  <p className="text-sm text-gray-600">90+ score</p>
                </div>
                <div className="text-center p-4 bg-[#FFEED6] rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                  <h4 className="font-semibold text-[#8e4d2f]">Mobile Performance</h4>
                  <p className="text-sm text-gray-600">Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
      <section className="section bg-orange-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#8e4d2f]">Optimization Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive performance improvements across all aspects of your digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Frontend Optimization</h3>
              <p className="text-gray-600 mb-4">Optimize client-side performance with modern techniques and best practices.</p>
              <ul className="text-sm text-[#77574a] space-y-2">
                <li>• Code splitting & lazy loading</li>
                <li>• CSS & JavaScript minification</li>
                <li>• Image optimization & compression</li>
                <li>• Browser caching strategies</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Backend Optimization</h3>
              <p className="text-gray-600 mb-4">Improve server response times and database performance for faster loading.</p>
              <ul className="text-sm text-[#77574a] space-y-2">
                <li>• Database query optimization</li>
                <li>• Server-side caching</li>
                <li>• API response optimization</li>
                <li>• Memory usage reduction</li>
              </ul>
            </div>
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Infrastructure Optimization</h3>
              <p className="text-gray-600 mb-4">Optimize hosting, CDN, and network infrastructure for global performance.</p>
              <ul className="text-sm text-[#77574a] space-y-2">
                <li>• CDN configuration</li>
                <li>• Edge computing setup</li>
                <li>• Load balancing</li>
                <li>• Geographic distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#8e4d2f]">Benefits of Performance Optimization</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto"> 
              Fast websites deliver better business results across all metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Higher Conversions</h3>
              <p className="text-gray-600">Faster sites convert visitors to customers at higher rates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Better SEO</h3>
              <p className="text-gray-600">Search engines favor fast-loading websites in rankings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-2-12a12 12 0 110 24 12 12 0 010-24z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">User Satisfaction</h3>
              <p className="text-gray-600">Improved user experience leads to higher engagement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8e4d2f]">Reduced Costs</h3>
              <p className="text-gray-600">Optimized infrastructure reduces hosting and bandwidth costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#1a110f]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#f1dfda]">Ready to Boost Your Performance?</h2>
            <p className="text-xl !text-[#d8c2bc] mb-8 max-w-2xl mx-auto">
              Let's optimize your website for lightning-fast performance and better business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#713719] !text-[#ffb694] font-semibold rounded-lg  transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Optimization
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg  transition-colors duration-200">
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