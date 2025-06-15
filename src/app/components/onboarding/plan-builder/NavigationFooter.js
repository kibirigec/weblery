import { motion } from 'framer-motion';

export default function NavigationFooter({ onBack, onContinue, hasSelectedServices }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 z-40">
      <div className="max-w-4xl mx-auto flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
        >
          Back
        </button>
        <motion.button
          onClick={onContinue}
          className={`px-6 py-2 rounded-lg font-medium ${
            !hasSelectedServices
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-900'
          }`}
          whileHover={!hasSelectedServices ? {} : { scale: 1.02 }}
          whileTap={!hasSelectedServices ? {} : { scale: 0.98 }}
          disabled={!hasSelectedServices}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
} 