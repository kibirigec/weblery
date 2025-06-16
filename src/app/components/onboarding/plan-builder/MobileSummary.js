import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react'; // 1. Import useEffect

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

  // 2. Add the useEffect hook to manage the body scroll
  useEffect(() => {
    // When the dropdown is expanded...
    if (isExpanded) {
      // ...add the 'no-scroll' class to the body element.
      document.body.classList.add('no-scroll');
    }

    // This is a cleanup function that runs when the effect is finished.
    // It runs when isExpanded changes from true to false, or when the component is unmounted.
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isExpanded]); // The hook depends on the 'isExpanded' prop


  // --- All the animation variants remain the same ---

  const containerVariants = {
    hidden: {
      opacity: 0,
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    visible: {
      opacity: 1,
      maxHeight: '60vh',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    },
    exit: {
      opacity: 0,
      y: -30
    }
  };

  const backdropVariants = {
    hidden: {
      clipPath: 'inset(0% 0% 100% 0%)',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };


  return (
    <>
      {/* The rest of your JSX remains exactly the same */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <motion.div
          className="px-4 py-4 flex justify-between items-center cursor-pointer"
          onClick={onToggle}
        >
          <div>
            <span className="font-medium">{selectedCount} Services Selected</span>
            <span className="text-gray-500 ml-2">•</span>
            <span className="text-gray-500 ml-2">${total.toLocaleString()}</span>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="px-4 border-t border-gray-100 max-h-[60vh] overflow-y-auto overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {selectedCount > 0 ? (
                Object.entries(selectedServices).map(([serviceId, service]) => (
                  <motion.div
                    key={serviceId}
                    className="mb-2"
                    variants={itemVariants}
                  >
                     <div className="flex justify-between items-center">
                      <span className="font-medium">{services[serviceId].name}</span>
                      <span>${calculateServiceTotal(serviceId).toLocaleString()}</span>
                    </div>
                    {service.selectedSubServices.length > 0 && (
                      <motion.div
                        className="mt-1 pl-2 text-sm text-gray-600"
                        variants={containerVariants}
                      >
                        {service.selectedSubServices.map((subService) => (
                          <motion.div
                            key={subService}
                            className="flex justify-between"
                            variants={itemVariants}
                          >
                            <span>{subService}</span>
                            <span>
                              ${services[serviceId].subServices.find(s => s.name === subService).price.toLocaleString()}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="text-center text-gray-500 py-4"
                  variants={itemVariants}
                >
                  No services selected.
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isExpanded && selectedCount > 0 && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
}