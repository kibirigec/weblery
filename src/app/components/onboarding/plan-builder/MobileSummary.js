import { motion } from 'framer-motion';

export default function MobileSummary({ 
  services, 
  selectedServices, 
  calculateServiceTotal, 
  isExpanded, 
  onToggle 
}) {
  const total = Object.keys(selectedServices).reduce((total, serviceId) => {
    return total + calculateServiceTotal(serviceId);
  }, 0);
  const selectedCount = Object.keys(selectedServices).length;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <div>
          <span className="font-medium">{selectedCount} Services Selected</span>
          <span className="text-gray-500 ml-2">•</span>
          <span className="text-gray-500 ml-2">${total.toLocaleString()}</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-100 max-h-[60vh] overflow-y-auto">
          {Object.entries(selectedServices).map(([serviceId, service]) => (
            <div key={serviceId} className="mb-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{services[serviceId].name}</span>
                <span>${calculateServiceTotal(serviceId).toLocaleString()}</span>
              </div>
              {service.selectedSubServices.length > 0 && (
                <div className="mt-1 pl-2 text-sm text-gray-600">
                  {service.selectedSubServices.map(subService => (
                    <div key={subService} className="flex justify-between">
                      <span>{subService}</span>
                      <span>
                        ${services[serviceId].subServices.find(s => s.name === subService).price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 