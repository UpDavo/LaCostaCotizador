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

const Header = () => {
  return (
    <motion.div
      variants={fadeInDown}
      style={{
        marginTop: "-60px",
        marginBottom: "30px",
        color: "white",
      }}
    >
      <h1 className="display-3" style={{ color: "white" }}>
        <b>La Costa Cotizador</b>
      </h1>
    </motion.div>
  );
};

export default Header;
