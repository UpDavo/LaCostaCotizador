import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Header = () => {
  return (
    <motion.div
      exit="pageExit"
      initial="initial"
      animate="animate"
      variants={stagger}
      style={{ marginTop: "6px" }}
    >
      <motion.div variants={fadeInDown}>
        <h3 className="display-4 texto" style={{ color: "#334447" }}>
          <b>La Costa Cotizador</b>
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default Header;
