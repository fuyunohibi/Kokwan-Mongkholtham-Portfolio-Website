import React from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, className, delay, children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      className={className}
    >
      {children}
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{ delay: index * delay }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Typewriter;
