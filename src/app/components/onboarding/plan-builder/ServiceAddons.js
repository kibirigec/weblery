import { motion } from 'framer-motion';

export default function ServiceAddons({ service, serviceId, selectedSubServices, onSubServiceSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mt-4 space-y-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="text-sm"
      >
        <p className="font-medium mb-2">Available Add-ons:</p>
        <div className="space-y-2">
          {service.subServices.map((subService, index) => (
            <motion.div
              key={`${serviceId}-${subService.name}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.3 }}
              className={`flex items-center justify-between p-2 rounded-lg ${
                selectedSubServices?.includes(subService.name)
                  ? 'bg-gray-50 border-2 border-black'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div>
                <p className="font-medium">{subService.name}</p>
                <p className="text-sm text-gray-600">{subService.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">${subService.price.toLocaleString()}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const isSelected = !selectedSubServices?.includes(subService.name);
                    onSubServiceSelect(serviceId, subService.name, isSelected);
                  }}
                  className="px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                >
                  {selectedSubServices?.includes(subService.name) ? 'Remove' : 'Add'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 