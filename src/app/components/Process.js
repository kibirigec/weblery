export default function Process() {
  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "We analyze your requirements and understand your business goals to create the perfect strategy."
    },
    {
      number: "2",
      title: "Design",
      description: "Our designers create stunning, user-centric designs that align with your brand identity."
    },
    {
      number: "3",
      title: "Development",
      description: "Our expert developers bring your vision to life using the latest technologies and best practices."
    },
    {
      number: "4",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support to ensure optimal performance."
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-6 md:mb-0">
            <div className="inline-flex items-center bg-black bg-opacity-5 rounded-full px-4 py-2 mb-3">
              {/* <span className="w-2 h-2 rounded-full bg-black mr-2"></span> */}
              <span className="text-sm text-[#C0C0C0] font-medium">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray max-w-2xl lead">
              A streamlined approach to delivering exceptional digital solutions
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:translate-y-24' : ''}`}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative z-10">
                  <div className="absolute -top-8 left-6 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        {index < processSteps.length - 1 ? (
                          <div className="inline-flex items-center text-sm text-black font-medium">
                            Next: {processSteps[index + 1].title}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="inline-flex items-center text-sm text-black font-medium">
                            Ready to start?
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 