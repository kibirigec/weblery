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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray max-w-2xl mx-auto lead">
            A streamlined approach to delivering exceptional digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 