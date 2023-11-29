import React from 'react';
import { motion } from 'framer-motion';
import useCheckScreenSize from '../utils/useCheckScreenSize';

const SectionTitle = ({
  title,
  textColor = 'text-[#06171e]',
  lineStyleTablet = 'pencil-style-left-to-right',
  LeftlineStyleMobile = 'pencil-style-right-to-left',
  RightlineStyleMobile = 'pencil-style-left-to-right'
}) => {
  const isTablet = useCheckScreenSize('tablet');

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2.8,
      },
    },
  };

  const leftLineVariants = {
    ...lineVariants,
    hidden: { ...lineVariants.hidden, originX: 1 },
  };

  const rightLineVariants = {
    ...lineVariants,
    hidden: { ...lineVariants.hidden, originX: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      className={isTablet ? 'flex justify-start items-center mb-14 mt-6' : 'text-center flex justify-center items-center mb-14 mt-6'}
      style={{ originX: isTablet ? 0 : '50%' }}
    >
      {!isTablet && (
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={leftLineVariants}
          className={`${LeftlineStyleMobile} w-[100%] mr-8`}
        />
      )}

      <h2 className={`text-2xl breakpoint:text-3xl font-japan-bold laptop:text-5xl ${textColor}`}>{title}</h2>

      {isTablet ? (
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={rightLineVariants}
          className={`${lineStyleTablet} w-[100%] ml-8`}
        />
      ) : (
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={rightLineVariants}
          className={`${RightlineStyleMobile}  w-[100%] ml-8`}
        />
      )}
    </motion.div>
  );
};

export default SectionTitle;
