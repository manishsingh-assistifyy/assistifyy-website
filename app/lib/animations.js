// ── Framer Motion animation presets ──────────────────────────────────────────
// Shared across pages so every section animates consistently.
// Using smooth easing curves for natural, fluid motion

// Smooth easing: cubic-bezier equivalent to "easeInOutQuart"
const smoothEase = [0.25, 0.46, 0.45, 0.94];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: smoothEase,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.75, 
      ease: smoothEase,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 24px 48px rgba(59, 130, 246, 0.25), 0 0 40px rgba(139, 92, 246, 0.15)",
    transition: { 
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { amount: 0.3 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { amount: 0.3 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: smoothEase },
  viewport: { amount: 0.3 },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: smoothEase },
  viewport: { amount: 0.2 },
};
