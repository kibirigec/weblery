import { motion } from 'framer-motion';
import ServiceAddons from './ServiceAddons';

const SERVICE_THEMES = {
  'mobileApp': 'border-black',
  'webDev': 'border-black',
  'aiIntegration': 'border-black',
  'digitalMarketing': 'border-black',
  'uiuxDesign': 'border-black',
  'performanceOptimization': 'border-black'
};

export default function ServiceCard({
  serviceId,
  service,
  isSelected,
  expandedService,
  onServiceSelect,
  onSubServiceSelect,
  onToggleService,
  selectedSubServices
}) {
  const handleToggleService = (e) => {
    e.stopPropagation();
    onToggleService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden border-2 transition-colors duration-200 relative ${
        isSelected 
          ? SERVICE_THEMES[serviceId] || 'border-black'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onServiceSelect(serviceId, false);
          }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-900 transition-colors duration-200 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <div 
        className="p-6 cursor-pointer"
        onClick={() => onServiceSelect(serviceId, !isSelected)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">Base Price: ${service.basePrice.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="font-medium mb-2"
          >
            Base Inclusions:
          </motion.h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            {service.baseInclusions.map((inclusion, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
              >
                {inclusion}
              </motion.li>
            ))}
          </ul>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            onClick={handleToggleService}
            className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 flex justify-between items-center rounded-lg border border-gray-200"
          >
            <span>{expandedService === serviceId ? 'Hide Add-ons' : 'View Add-ons'}</span>
            <motion.div
              animate={{ rotate: expandedService === serviceId ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>

          {expandedService === serviceId && (
            <ServiceAddons
              service={service}
              serviceId={serviceId}
              selectedSubServices={selectedSubServices}
              onSubServiceSelect={onSubServiceSelect}
            />
          )}
        </motion.div>
      )}
    </motion.div>
  );
} 