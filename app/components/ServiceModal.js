"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Service detail modal ────────────────────────────────────────────────────
// Extracted from home/page.js so the page stays lean.

const ServiceModal = memo(function ServiceModal({ service, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 pointer-events-none overflow-hidden"
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-[calc(100%-0.75rem)] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] sm:max-h-[80vh] overflow-y-scroll pointer-events-auto relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="sticky top-0 ml-auto mr-2 sm:mr-3 mt-2 sm:mt-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-800 transition z-20 flex-shrink-0 text-sm sm:text-base"
              >
                ✕
              </motion.button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08, duration: 0.3 }}
                className="p-3 sm:p-5 md:p-7 pb-3 sm:pb-5"
              >
                <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-slate-800 font-[family-name:var(--font-space-mono)] mb-1">
                  {service.title}
                </h2>
                <p className="text-[#3B82F6] text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Professional Solution
                </p>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-snug mb-2 sm:mb-3">
                  {service.fullDescription}
                </p>

                {/* Benefits grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-4"
                >
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-700 uppercase tracking-wide">
                    Key Benefits
                  </p>
                  <div className="grid grid-cols-1 gap-1 sm:gap-1.5">
                    {service.benefits.map((benefit, idx) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18 + idx * 0.05, duration: 0.25 }}
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-md bg-blue-50 border border-blue-100"
                      >
                        <span className="text-[#3B82F6] text-sm sm:text-base flex-shrink-0">✓</span>
                        <span className="text-[11px] sm:text-xs text-slate-700 font-medium leading-tight">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Animated illustration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="relative h-12 sm:h-24 md:h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center mb-2 sm:mb-4 overflow-hidden"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 sm:w-12 md:w-16 h-6 sm:h-12 md:h-16 opacity-20"
                  >
                    {service.image}
                  </motion.div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.30, duration: 0.3 }}
                  className="flex flex-col gap-1.5 sm:gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:shadow-lg transition"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-full border-2 border-[#3B82F6] text-[#3B82F6] py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-blue-50 transition"
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default ServiceModal;
