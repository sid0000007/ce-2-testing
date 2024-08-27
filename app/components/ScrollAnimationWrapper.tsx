import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";

interface ScrollAnimationWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = "",
  variants = defaultVariants,
  ...motionProps
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
