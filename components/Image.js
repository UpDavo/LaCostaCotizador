import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
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

const Image = ({ img, descripcion }) => {
  return (
    <motion.div variants={fadeInUp}>
      <a className="card lift" href="#!">
        <img
          className="card-img-top"
          src={img}
          alt="..."
          style={{
            minHeight: "330px !important",
            maxHeight: "330px !important",
            objectFit: "cover",
          }}
        />
        <div className="card-body text-center py-3">
          <h6 className="card-title mb-0">{descripcion}</h6>
        </div>
      </a>
    </motion.div>
  );
};

export default Image;
