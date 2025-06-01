export default function About() {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and methodologies",
    "Agile development process",
    "24/7 support and maintenance"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose MoQube?
            </h2>
            <p className="text-lg text-gray mb-6 lead">
              With years of experience in digital innovation, we combine technical expertise 
              with creative vision to deliver solutions that drive real business results.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-light rounded-2xl p-8 border">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                    <div className="text-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 