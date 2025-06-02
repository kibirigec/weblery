import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-xl mb-6 shadow-lg">
              <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Mobile App Development</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
            </p>
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
                  <span>Native iOS and Android development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-platform solutions (React Native, Flutter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>User-centered design and intuitive interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>App Store optimization and submission</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl border border-pink-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-700">Native iOS</h4>
                  <p className="text-sm text-gray-600">Swift, Objective-C</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-700">Native Android</h4>
                  <p className="text-sm text-gray-600">Kotlin, Java</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-700">React Native</h4>
                  <p className="text-sm text-gray-600">Cross-platform</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100 hover:border-pink-200 transition-colors">
                  <h4 className="font-semibold text-pink-700">Flutter</h4>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to App Store, we guide you through every step of mobile app development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600">Understanding your vision, target audience, and business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Design</h3>
              <p className="text-gray-600">Creating wireframes, prototypes, and stunning UI/UX designs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600">Building your app with clean code and best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">4</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Launch</h3>
              <p className="text-gray-600">Testing, optimization, and successful App Store deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a successful mobile application that users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your App Project
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-500 font-semibold rounded-lg border-2 border-pink-500 hover:bg-pink-50 transition-colors duration-200">
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