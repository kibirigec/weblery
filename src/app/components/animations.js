export const navContainerVariants = {
  visible: {
    width: "calc(100% - 64px)",
    height: "64px",
    borderRadius: "20px",
    y: 0,
    transition: {
      width: { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      y: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  scrolled: {
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    y: -100,
    transition: {
      y: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      default: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
    },
  },
  returning: {
    y: 0,
    transition: {
      y: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};