import React from "react";
import "./feature.css";
import { motion } from "framer-motion";

const rightAnimate = {
  offScreen: { x: 100, opacity: 0.5 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};
const Feature = ({ title, para }) => {
  return (
    <motion.div className="feature" variants={rightAnimate}>
      <h1 className="feature-title">
        <div />
        {title}
      </h1>
      <p className="feature-para">{para}</p>
    </motion.div>
  );
};

export default Feature;
