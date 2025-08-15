import { motion } from "framer-motion";

const ScrollInFromBothSides = ({ index, children }) => {
  return (
    <div className="space-y-4">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollInFromBothSides;
