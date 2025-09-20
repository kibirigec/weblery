import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceSummary({ services, selectedServices, calculateServiceTotal }) {
  const total = Object.keys(selectedServices).reduce((total, serviceId) => {
    return total + calculateServiceTotal(serviceId);
  }, 0);
  const selectedCount = Object.keys(selectedServices).length;

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
  };
  
  const subItemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const totalVariants = {
    initial: { opacity: 0, scale: 0.95, y: 5 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.2, ease: 'easeOut' }
  };

  return (
    <div className="bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg p-6">
      <h3 className="text-lg text-[#6e6e73] font-bold mb-4">Your Custom Plan</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span>Selected Services:</span>
          <motion.span
            key={`count-${selectedCount}`}
            variants={totalVariants}
            initial="initial"
            animate="animate"
            transition={totalVariants.transition}
            className="font-medium"
          >
            {selectedCount}
          </motion.span>
        </div>
        
        <AnimatePresence>
          {Object.entries(selectedServices).map(([serviceId, service]) => (
            <motion.div
              key={serviceId}
              // The `layout` prop has been removed from this line.
              // This prevents existing items from animating when the list grows.
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="border-t pt-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{services[serviceId].name}</span>
                <span>UGX{calculateServiceTotal(serviceId).toLocaleString()}</span>
              </div>
              {service.selectedSubServices.length > 0 && (
                <div className="mt-1 pl-2 text-sm text-gray-600">
                  <AnimatePresence>
                    {service.selectedSubServices.map(subService => (
                      <motion.div
                        key={subService}
                        variants={subItemVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex justify-between"
                      >
                        <span>{subService}</span>
                        <span>
                          UGX{services[serviceId].subServices.find(s => s.name === subService).price.toLocaleString()}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <motion.span
              key={`total-${total}`}
              variants={totalVariants}
              initial="initial"
              animate="animate"
              transition={totalVariants.transition}
            >
              UGX{total.toLocaleString()}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}