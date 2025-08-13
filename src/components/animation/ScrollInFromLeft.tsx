// ScrollInFromLeft.jsx
import React from "react";
import { motion } from "framer-motion";

const ScrollInFromLeft = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
    >
      {children}
    </motion.div>
  );
};

export default ScrollInFromLeft;
