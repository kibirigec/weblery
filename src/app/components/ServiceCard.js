import Link from 'next/link';

export default function ServiceCard({ icon, title, description, hoverColor = "black", slug }) {
  return (
    <Link href={`/services/${slug}`} className="block no-underline service-card-link">
      <div className={`card hover-lift group service-card-${hoverColor} cursor-pointer transition-all duration-300`}>
        <div className="icon-container mb-4">
          <svg className="icon text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {icon}
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray mb-4">{description}</p>
        
        <div className="inline-flex items-center text-black hover:text-gray-600 font-medium transition-colors duration-200 hover:underline">
          Learn More
          <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 