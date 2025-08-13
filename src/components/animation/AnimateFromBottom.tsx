// AnimateFromBottom.jsx
import { motion } from "framer-motion";

const AnimateFromBottom = ({ time = 0.8, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: time,
        ease: [0.25, 0.8, 0.25, 1], // smooth "cool" easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateFromBottom;
