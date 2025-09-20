'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewHero() {
  return (
    <motion.section
      className="text-center py-20 md:py-32 lg:py-48 flex flex-col justify-center items-center"
      style={{ backgroundColor: '#f2f0ef' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={containerVariants} className="mt-16 md:mt-0">
        <motion.h2 className="text-lg font-medium text-gray-600" variants={itemVariants}>Weblery</motion.h2>
        <motion.h1 className="text-[clamp(2rem,8vw,6rem)] font-bold" variants={itemVariants}>Your Business.<br />Now Automated.</motion.h1>
      </motion.div>
    </motion.section>
  );
}
