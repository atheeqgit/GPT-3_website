import React from "react";
import "./possibility.css";
import { possibility } from "../../assets";
import { motion } from "framer-motion";

const leftAnimate = {
  offScreen: { x: -100, opacity: 0.5 },
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

const Possibility = () => {
  return (
    <div className="possibility-section section__padding " id="openai">
      <motion.div
        className="possibility-left"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.1 }}
        variants={leftAnimate}
      >
        <img src={possibility}></img>
      </motion.div>
      <motion.div
        className="possibility-right"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.1 }}
        variants={rightAnimate}
      >
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h3>Request Early Access to Get Started</h3>
      </motion.div>
    </div>
  );
};

export default Possibility;
