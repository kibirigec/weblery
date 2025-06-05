import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-pink-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-pink-600 bg-pink-100 rounded-xl mb-6 shadow-lg">
              <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-900">Mobile App Development</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
            </p>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-900">Why Your Business Needs a Mobile App</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's mobile-first world, having a dedicated app isn't just an advantage—it's essential for staying competitive and reaching your customers where they spend most of their time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {/* <h3 className="text-2xl font-bold mb-6 text-gray-900">The Mobile Revolution is Here</h3> */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-900 mb-2">Mobile Usage Dominance</h4>
                    <p className="!text-pink-900/60">Over 60% of all internet traffic now comes from mobile devices, and users spend 90% of their mobile time in apps, not browsers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-900 mb-2">Higher Engagement Rates</h4>
                    <p className="!text-pink-900/60">Mobile apps have 3x higher engagement rates than mobile websites, with push notifications achieving up to 50% open rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-900 mb-2">Revenue Growth</h4>
                    <p className="!text-pink-900/60">Businesses with mobile apps see an average revenue increase of 25-30% within the first year of launch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl border border-pink-200">
              <h3 className="text-2xl font-bold mb-6 text-pink-900">Business Impact Stats</h3>
              <div className="space-y-6">
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-900 mb-2">5.6B</div>
                  <p className="text-sm text-gray-600">Global smartphone users in 2023</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-900 mb-2">70%</div>
                  <p className="text-sm text-gray-600">Of customers prefer apps over mobile websites</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-900 mb-2">2x</div>
                  <p className="text-sm text-gray-600">Faster performance compared to mobile web</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 text-white p-8 rounded-xl border border-pink-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-pink-900">Key Benefits for Your Business</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">A well-designed mobile app doesn't just serve your customers—it transforms your entire business operation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-pink-900">Customer Loyalty</h4>
                <p className="text-gray-300">Direct access builds stronger relationships and increases customer lifetime value.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-pink-900">Data Insights</h4>
                <p className="text-gray-300">Rich analytics and user behavior data to make informed business decisions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-pink-900">Competitive Edge</h4>
                <p className="text-gray-300">Stand out from competitors and capture market share in the mobile space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Our Mobile App Development?</h2>
              <p className="text-gray-600 mb-6">
                Our expert team creates mobile applications that not only look stunning but also perform flawlessly. 
                We focus on user experience, performance, and scalability to ensure your app succeeds in the competitive mobile market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="!text-pink-900">Native iOS and Android development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="!text-pink-900">Cross-platform solutions (React Native, Flutter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="!text-pink-900">User-centered design and intuitive interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="!text-pink-900">App Store optimization and submission</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="!text-pink-900">Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl border border-pink-100">
              <h3 className="text-2xl font-bold mb-6 text-pink-900">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-900">Native iOS</h4>
                  <p className="text-sm text-gray-600">Swift, Objective-C</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-900">Native Android</h4>
                  <p className="text-sm text-gray-600">Kotlin, Java</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-900">React Native</h4>
                  <p className="text-sm text-gray-600">Cross-platform</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-900">Flutter</h4>
                  <p className="text-sm text-gray-600">Dart, Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section bg-pink-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to App Store, we guide you through every step of mobile app development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">1</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-900">Discovery</h3>
              <p className="text-gray-600">Understanding your vision, target audience, and business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">2</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-900">Design</h3>
              <p className="text-gray-600">Creating wireframes, prototypes, and stunning UI/UX designs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">3</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-900">Development</h3>
              <p className="text-gray-600">Building your app with clean code and best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">4</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-900">Launch</h3>
              <p className="text-gray-600">Testing, optimization, and successful App Store deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#191113]"> {/* surface */}
        <div className="container ">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#efdfe1]">Ready to Build Your Mobile App?</h2> {/* on surface */}
            <p className="text-xl !text-[#d6c2c5] mb-8 max-w-2xl mx-auto"> {/* on surface variant */}
              Let's transform your idea into a successful mobile application that users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#891347] !text-[#ffb1c6] font-semibold rounded-lg  transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your App Project
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-50 transition-colors duration-200">
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