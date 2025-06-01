import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function DigitalMarketingPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-lg mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Digital Marketing Strategy</h1>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Data-driven marketing campaigns and strategies to maximize your reach and conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Grow Your Business Online</h2>
              <p className="text-gray mb-6">
                Our comprehensive digital marketing strategies help you reach the right audience, 
                increase brand awareness, and drive measurable results across all digital channels.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pay-Per-Click (PPC) advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social media marketing and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Content marketing and strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email marketing automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Marketing Channels</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Search Engines</h4>
                  <p className="text-sm text-gray">Google, Bing</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Social Media</h4>
                  <p className="text-sm text-gray">Facebook, Instagram</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Professional</h4>
                  <p className="text-sm text-gray">LinkedIn, Twitter</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray">Newsletters, Automation</p>
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
            <h2 className="text-3xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Complete digital marketing solutions to grow your online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-gray mb-4">Improve your search rankings and drive organic traffic to your website.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Keyword research</li>
                <li>• On-page optimization</li>
                <li>• Link building</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">PPC Campaigns</h3>
              <p className="text-gray mb-4">Targeted advertising campaigns that deliver immediate results and ROI.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Google Ads management</li>
                <li>• Facebook advertising</li>
                <li>• Campaign optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
              <p className="text-gray mb-4">Build your brand presence and engage with your audience on social platforms.</p>
              <ul className="text-sm text-gray space-y-2">
                <li>• Content planning</li>
                <li>• Community management</li>
                <li>• Social advertising</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Start Your Campaign
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