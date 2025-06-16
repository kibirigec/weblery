import { motion } from 'framer-motion';

export default function ServiceAddons({
  service,
  serviceId,
  selectedSubServices,
  onSubServiceSelect,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each child will animate in 0.1s after the previous one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      // This main container just needs to control the stagger timing
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Ensures a clean exit animation if needed
      className="mt-4 border-t border-gray-200 pt-4"
    >
      <p className="font-semibold text-gray-700 mb-3">Available Add-ons:</p>
      <div className="space-y-3">
        {service.subServices.map((subService) => {
          const isSelected = selectedSubServices?.includes(subService.name);
          return (
            <motion.div
              key={`${serviceId}-${subService.name}`}
              variants={itemVariants}
              className={`rounded-lg transition-colors duration-200 ${
                isSelected
                  ? 'bg-white border-2 border-black'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
            >
              {/* --- RESPONSIVE LAYOUT CONTAINER --- */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 p-3">
                
                {/* Left Side: Name, Description, and Price (on desktop) */}
                <div className="flex-grow">
                  <p className={`font-medium ${isSelected ? 'text-black' : 'text-gray-900'}`}>{subService.name}</p>
                  {subService.description && (
                    <p className={`text-sm ${isSelected ? 'text-gray-800' : 'text-gray-600'} mt-1`}>{subService.description}</p>
                  )}
                  <span className="text-sm font-semibold text-gray-800 md:block mt-2">
                    +${subService.price.toLocaleString()}
                  </span>
                </div>

                {/* Right Side: Button */}
                <div className="flex w-full md:w-auto items-center justify-between md:justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubServiceSelect(serviceId, subService.name, !isSelected);
                    }}
                    aria-label={isSelected ? `Remove ${subService.name}` : `Add ${subService.name}`}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border bg-white text-gray-800 border-gray-300 hover:border-gray-400`}
                  >
                    {isSelected ? 'Remove' : 'Add'}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}