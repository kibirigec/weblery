export default function Navigation() {
  return (
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
  );
} 