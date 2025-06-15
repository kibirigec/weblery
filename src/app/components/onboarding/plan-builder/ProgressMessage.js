import { motion } from 'framer-motion';

export default function ProgressMessage({ onClose }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed bottom-19 left-0 right-0 bg-[#F5F5F5] border-t border-gray-200 py-3 px-4 z-40"
    >
      <div className="max-w-4xl mx-auto text-center text-gray-600 relative">
        <div className="pr-8">
          You can save your progress and continue later. Your selections will be saved automatically.
        </div>
        <button
          onClick={onClose}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 