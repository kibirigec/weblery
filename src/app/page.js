import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="nav-brand">MoQube</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="link-gray hover-text">Services</a>
                <a href="#about" className="link-gray hover-text">About</a>
                <a href="#portfolio" className="link-gray hover-text">Portfolio</a>
                <a href="#contact" className="link-gray hover-text">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-dark hover-text">
                <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark mb-6">
              Transform Your Digital
              <span className="block text-black">Presence</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mx-auto mb-10 lead">
              We are a cutting-edge digital media agency specializing in app development, 
              web solutions, AI integration, and strategic marketing. Let us elevate your business 
              to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-black hover-lift">
                Start Your Project
              </button>
              <button className="btn btn-outline hover-lift">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
              <p className="text-gray">Native and cross-platform mobile applications built with the latest technologies for iOS and Android platforms.</p>
            </div>

            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray">Modern, responsive websites and web applications that deliver exceptional user experiences and drive results.</p>
            </div>

            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom AI Integration</h3>
              <p className="text-gray">Intelligent automation and AI-powered features to streamline operations and enhance user engagement.</p>
            </div>

            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Marketing Strategy</h3>
              <p className="text-gray">Data-driven marketing campaigns and strategies to maximize your reach and conversion rates.</p>
            </div>

            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray">Intuitive and beautiful user interfaces that provide seamless experiences across all devices.</p>
            </div>

            <div className="card hover-lift">
              <div className="icon-container mb-4">
                <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray">Speed and performance optimization to ensure your digital products load fast and run smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose MoQube?
              </h2>
              <p className="text-lg text-gray mb-6 lead">
                With years of experience in digital innovation, we combine technical expertise 
                with creative vision to deliver solutions that drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-dark">Expert team of developers and designers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-dark">Cutting-edge technologies and methodologies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-dark">Agile development process</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-dark">24/7 support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-light rounded-2xl p-8 border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">100+</div>
                    <div className="text-gray">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">50+</div>
                    <div className="text-gray">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">5+</div>
                    <div className="text-gray">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">99%</div>
                    <div className="text-gray">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              A streamlined approach to delivering exceptional digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray">We analyze your requirements and understand your business goals to create the perfect strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray">Our designers create stunning, user-centric designs that align with your brand identity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray">Our expert developers bring your vision to life using the latest technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Launch</h3>
              <p className="text-gray">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray max-w-2xl mx-auto lead">
              Let us discuss how we can help transform your digital presence and achieve your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="icon-container mr-4">
                    <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray">hello@moqube.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-container mr-4">
                    <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-container mr-4">
                    <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray">123 Digital Avenue<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-8 rounded-xl border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select>
                    <option>Mobile App Development</option>
                    <option>Web Development</option>
                    <option>AI Integration</option>
                    <option>Digital Marketing</option>
                    <option>UI/UX Design</option>
                    <option>Performance Optimization</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-black w-full hover-lift"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light border-top section-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">MoQube</h3>
              <p className="text-gray">
                Transforming businesses through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray">
                <li><a href="#" className="link-gray">App Development</a></li>
                <li><a href="#" className="link-gray">Web Development</a></li>
                <li><a href="#" className="link-gray">AI Integration</a></li>
                <li><a href="#" className="link-gray">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray">
                <li><a href="#" className="link-gray">About Us</a></li>
                <li><a href="#" className="link-gray">Our Process</a></li>
                <li><a href="#" className="link-gray">Portfolio</a></li>
                <li><a href="#" className="link-gray">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray">
                <li><a href="#" className="link-gray">LinkedIn</a></li>
                <li><a href="#" className="link-gray">Twitter</a></li>
                <li><a href="#" className="link-gray">GitHub</a></li>
                <li><a href="#" className="link-gray">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-top mt-8 pt-8 text-center">
            <p className="text-gray">
              © 2024 MoQube. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
