export default function About() {
  const features = [
    {
      title: "Expert Team",
      description: "Our developers and designers bring years of industry experience to every project"
    },
    {
      title: "Cutting-Edge Tech",
      description: "We stay ahead of the curve with the latest technologies and methodologies"
    },
    {
      title: "Agile Process",
      description: "Our adaptive workflow ensures efficient delivery and continuous improvement"
    },
    {
      title: "24/7 Support",
      description: "We provide ongoing maintenance and responsive customer support"
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-3">
              {/*   <span className="w-2 h-2 rounded-full bg-black mr-2"></span> */}
              <span className="text-sm text-[#C0C0C0] font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Weblery?
            </h2>
            <p className="text-lg text-gray mb-8 lead">
              With years of experience in digital innovation, we combine technical expertise 
              with creative vision to deliver solutions that drive real business results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-black bg-opacity-5 flex items-center justify-center mb-3">
                    <span className="text-lg text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-black bg-opacity-5 rounded-lg z-0"></div>
            <div className="bg-white rounded-2xl p-8 border shadow-lg relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Our Impact</h3>
                <p className="text-gray-600">Delivering measurable results since 2019</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ready to work with us?</span>
                  <a href="#contact" className="inline-flex items-center text-sm font-medium text-black hover:underline">
                    Get in touch
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 