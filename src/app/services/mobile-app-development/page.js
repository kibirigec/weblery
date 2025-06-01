import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Mobile App Development?</h2>
              <p className="text-gray mb-6">
                Our mobile app development team creates powerful, user-friendly applications that engage your audience and drive business growth. 
                We specialize in both native and cross-platform solutions to meet your specific needs and budget.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Native iOS and Android development for optimal performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-platform solutions using React Native and Flutter</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>User-centered design and intuitive interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>App Store and Google Play Store optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Native iOS</h4>
                  <p className="text-sm text-gray">Swift, Objective-C</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Native Android</h4>
                  <p className="text-sm text-gray">Kotlin, Java</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">React Native</h4>
                  <p className="text-sm text-gray">Cross-platform</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Flutter</h4>
                  <p className="text-sm text-gray">Dart, Cross-platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              From concept to launch, we follow a proven methodology to deliver exceptional mobile apps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray">Understanding your requirements, target audience, and business goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray">Creating wireframes, prototypes, and visual designs for your app.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray">Building your app with clean code and best development practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray">Testing, deployment, and ongoing support for your mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app project and bring your vision to life.
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