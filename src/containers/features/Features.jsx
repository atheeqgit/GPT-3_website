import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

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
const Features = () => {
  return (
    <div className="features-section section__padding" id="case">
      <motion.div
        className="features-left"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.1 }}
        variants={leftAnimate}
      >
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </motion.div>
      <motion.div
        className="features-right"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {featuresData.map((item, index) => (
          <Feature title={item.title} para={item.text} />
        ))}
      </motion.div>
    </div>
  );
};
export default Features;
