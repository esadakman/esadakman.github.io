import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades + slides its children into view once.
 * Usage: <Reveal delay={0.1}>...</Reveal>
 */
const Reveal = ({ children, delay = 0, y = 28, as, className, id, style }) => {
  const MotionTag = as ? motion(as) : motion.div;
  return (
    <MotionTag
      className={className}
      id={id}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
