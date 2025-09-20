export default function Contact() {
  const contactInfo = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      title: "Email Us",
      detail: "hello@weblery.com"
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
      title: "Call Us",
      detail: "+256 775 910 888"
    },
    {
      // icon: (
      //   <>
      //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      //   </>
      // ),
    
    }
  ];

  return (
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
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start">
                  <div className="icon-container mr-4">
                    <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {contact.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{contact.title}</h3>
                    <p className="text-gray" style={{ whiteSpace: 'pre-line' }}>{contact.detail}</p>
                  </div>
                </div>
              ))}
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
  );
} 