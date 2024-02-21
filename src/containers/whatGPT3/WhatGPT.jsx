import React from "react";
import "./whatGPT.css";
import Feature from "../../components/feature/Feature";
import { motion } from "framer-motion";
const bottomAnimate = {
  offScreen: { y: 100, opacity: 0.5 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const WhatGPT3 = () => {
  return (
    <motion.div
      className="whatGPT-section section__padding section__margin "
      id="wgpt"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      variants={bottomAnimate}
    >
      <div className="feature-top">
        <Feature
          title="What is GPT-3"
          para="
        We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        "
        />
      </div>
      <div className="feature-middle">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <motion.div
        className="feature-bottom"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <Feature
          title="Chatbots"
          para="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />

        <Feature
          title="Knowledgebase"
          para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />

        <Feature
          title="Education"
          para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </motion.div>
    </motion.div>
  );
};

export default WhatGPT3;
