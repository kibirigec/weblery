export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card hover-lift">
      <div className="icon-container mb-4">
        <svg className="icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray">{description}</p>
    </div>
  );
} 