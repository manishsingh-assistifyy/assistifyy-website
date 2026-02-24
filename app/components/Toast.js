"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

// ── Toast Context ───────────────────────────────────────────────────────────
const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

// ── Toast variants ──────────────────────────────────────────────────────────
const TOAST_STYLES = {
  success: {
    bg: "bg-gradient-to-r from-emerald-500 to-green-500",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  error: {
    bg: "bg-gradient-to-r from-red-500 to-rose-500",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  info: {
    bg: "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-gradient-to-r from-amber-500 to-yellow-500",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86l-8.58 14.86A1 1 0 002.58 20h18.84a1 1 0 00.87-1.28l-8.58-14.86a1 1 0 00-1.42 0z" />
      </svg>
    ),
  },
};

// ── Provider ────────────────────────────────────────────────────────────────
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message, type = "info", duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
    return id;
  }, [removeToast]);

  const toast = useMemo(() => ({
    success: (msg, dur) => addToast(msg, "success", dur),
    error: (msg, dur) => addToast(msg, "error", dur ?? 5000),
    info: (msg, dur) => addToast(msg, "info", dur),
    warning: (msg, dur) => addToast(msg, "warning", dur),
  }), [addToast]);

  // Wrap the object so the reference is always the same
  const value = { toast, addToast, removeToast };

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* ── Toast Container ── */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none max-w-[90vw] sm:max-w-sm">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => {
            const style = TOAST_STYLES[t.type] || TOAST_STYLES.info;
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`${style.bg} pointer-events-auto text-white px-4 py-3 rounded-xl shadow-2xl flex items-start gap-3 backdrop-blur cursor-pointer`}
                onClick={() => removeToast(t.id)}
              >
                <span className="mt-0.5 flex-shrink-0">{style.icon}</span>
                <p className="text-sm font-medium leading-snug">{t.message}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); removeToast(t.id); }}
                  className="ml-auto flex-shrink-0 opacity-70 hover:opacity-100 transition"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
