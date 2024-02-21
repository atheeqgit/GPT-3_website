import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
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
const Header = () => (
  //className="section__padding"
  <header>
    <motion.div
      className="header-content"
      id="home"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={leftAnimate}
    >
      <h1 className="gradient__text">
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <div className="header-inputs">
        <input type="text" placeholder="Enter Your Address"></input>
        <button className="button">Get Started</button>
      </div>
      <div className="header-people">
        <img src={people}></img>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </motion.div>
    <motion.img
      src={ai}
      className="ai-img"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={rightAnimate}
    ></motion.img>
    {/* <div className="ai-img"></div> */}
  </header>
);

export default Header;
