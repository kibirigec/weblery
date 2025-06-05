import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function DigitalMarketingPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-xl mb-6 shadow-lg border-2 border-yellow-600">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-900">Digital Marketing</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              Strategic digital marketing campaigns that drive growth, increase brand awareness, and maximize ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-900">Strategic Digital Growth</h2>
              <p className="text-gray-600 mb-6">
                Accelerate your business growth with data-driven digital marketing strategies. From SEO to social media, 
                we create comprehensive campaigns that deliver measurable results and connect you with your target audience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-yellow-900">Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-yellow-900">Pay-Per-Click (PPC) advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-yellow-900">Social media marketing and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-yellow-900">Content marketing and strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-yellow-900">Email marketing automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
              <h3 className="text-2xl font-bold mb-6 text-yellow-900">Marketing Channels</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-yellow-200 hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-900">Search Marketing</h4>
                  <p className="text-sm text-yellow-900">Google Ads, SEO</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-yellow-200 hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-900">Social Media</h4>
                  <p className="text-sm text-yellow-900">Facebook, Instagram, LinkedIn</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-yellow-200 hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-900">Email Marketing</h4>
                  <p className="text-sm text-yellow-900">Mailchimp, ConvertKit</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-yellow-200 hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-900">Analytics</h4>
                  <p className="text-sm text-yellow-900">Google Analytics, Data Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-yellow-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-900">Marketing Services</h2>
            <p className="text-xl !text-[#5d4200] max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-900">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">Improve your search engine rankings and organic visibility with our proven SEO strategies.</p>
              <ul className="text-sm text-yellow-900 space-y-2">
                <li>• Keyword research & analysis</li>
                <li>• On-page optimization</li>
                <li>• Technical SEO audits</li>
                <li>• Link building campaigns</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-900">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">Drive immediate traffic and conversions with targeted pay-per-click advertising campaigns.</p>
                <ul className="text-sm text-yellow-900 space-y-2">
                <li>• Google Ads management</li>
                <li>• Campaign optimization</li>
                <li>• Landing page design</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-900">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">Build your brand presence and engage with your audience across all major social platforms.</p>
              <ul className="text-sm text-yellow-900 space-y-2">
                <li>• Content creation & scheduling</li>
                <li>• Community management</li>
                <li>• Social media advertising</li>
                <li>• Influencer partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section  bg-[#19120b]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 !text-[#d3c4b4]">Ready to Grow Your Business?</h2>
            <p className="text-xl !text-[#d7c3ae] mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives results and accelerates your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#5d4200] !text-[#ebc06c] font-semibold rounded-lg  transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your Campaign
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-yellow-600 font-semibold rounded-lg  border-yellow-500 hover:bg-yellow-50 transition-colors duration-200">
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