import React from "react";
import { Carousel } from "react-responsive-carousel";
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

const CarouselPlanos = ({
  urlImage,
  imageDescription,
  urlPlano,
  planoDescription,
}) => (
  <motion.div variants={fadeInUp}>
    <Carousel
      showThumbs={false}
      showStatus={true}
      showIndicators={false}
      useKeyboardArrows
      className="presentation-mode"
    >
      <div key="content-0" className="my-slide content">
        <img
          src={urlImage}
          style={{
            objectFit: "cover",
          }}
        />
        {urlImage == "images/la-costa.png" ? (
          ""
        ) : (
          <>
            <p
              className="legend"
              style={{
                bottom: "3px !important",
                left: "47% !important",
                width: "96% !important",
                opacity: 1,
              }}
            >
              <b>{imageDescription}</b>
            </p>
          </>
        )}
      </div>
      <div key="content-1" className="my-slide content">
        <img
          src={urlPlano}
          style={
            urlPlano == "images/la-costa.png"
              ? { objectFit: "cover" }
              : {
                  objectFit: "Fill",
                }
          }
        />
        {urlPlano == "images/la-costa.png" ? (
          ""
        ) : (
          <>
            <p
              className="legend"
              style={{
                bottom: "3px !important",
                left: "47% !important",
                width: "96% !important",
                opacity: 1,
              }}
            >
              <b>{planoDescription}</b>
            </p>
          </>
        )}
      </div>
    </Carousel>
  </motion.div>
);

export default CarouselPlanos;
