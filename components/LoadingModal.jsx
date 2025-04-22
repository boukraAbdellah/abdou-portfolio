import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

export default function LoadingModal({ isOpen, onClose, projectName, projectLink }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Please Note
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <IoCloseOutline size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="animate-spin h-5 w-5 border-2 border-secondary border-t-transparent rounded-full"></div>
              <p className="text-secondary font-medium">
                {projectName} is loading...
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              This project's backend is hosted on a free tier service. It may take
              <span className="font-medium"> up to 30 seconds </span>
              to wake up from sleep mode on first load.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Thank you for your patience!
            </p>

            <div className="pt-4 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  window.open(projectLink, "_blank");
                  onClose();
                }}
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Continue to Project
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}