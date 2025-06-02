import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AIIntegrationPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl mb-6 shadow-lg border border-gray-200">
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Custom AI Integration</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto lead">
              Intelligent automation and AI-powered features to streamline operations and enhance user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Transform Your Business with AI</h2>
              <p className="text-gray-600 mb-6">
                Harness the power of artificial intelligence to automate processes, gain insights from data, 
                and create intelligent user experiences. Our AI integration services help you stay ahead of the competition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom chatbots and virtual assistants</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Machine learning model development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Natural language processing solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Computer vision and image recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predictive analytics and data insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">AI Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <h4 className="font-semibold text-gray-800">OpenAI GPT</h4>
                  <p className="text-sm text-gray-600">ChatGPT, GPT-4</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <h4 className="font-semibold text-gray-800">Machine Learning</h4>
                  <p className="text-sm text-gray-600">TensorFlow, PyTorch</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <h4 className="font-semibold text-gray-800">Computer Vision</h4>
                  <p className="text-sm text-gray-600">OpenCV, YOLO</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <h4 className="font-semibold text-gray-800">NLP</h4>
                  <p className="text-sm text-gray-600">BERT, spaCy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Integration Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how AI can transform different aspects of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Support</h3>
              <p className="text-gray-600 mb-4">AI-powered chatbots that provide 24/7 customer support and resolve queries instantly.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated ticket routing</li>
                <li>• Intelligent responses</li>
                <li>• Multilingual support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Advanced analytics to uncover insights and predict trends from your business data.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Predictive modeling</li>
                <li>• Pattern recognition</li>
                <li>• Real-time insights</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Generation</h3>
              <p className="text-gray-600 mb-4">AI-powered content creation for marketing, documentation, and personalization.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated copywriting</li>
                <li>• Image generation</li>
                <li>• Content optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Integrate AI?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's explore how AI can revolutionize your business operations and customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Your AI Project
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-800 hover:bg-gray-50 transition-colors duration-200">
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