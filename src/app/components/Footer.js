export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "App Development", href: "#" },
        { name: "Web Development", href: "#" },
        { name: "AI Integration", href: "#" },
        { name: "Digital Marketing", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Process", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Blog", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-light border-top section-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">ModiQube</h3>
            <p className="text-gray">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="link-gray">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-top mt-8 pt-8 text-center">
          <p className="text-gray">
            © 2024 ModiQube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 