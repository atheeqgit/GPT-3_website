import React from "react";
import "./footer.css";
import logo from "../../logo.svg";
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
const Footer = () => {
  return (
    <motion.footer
      className="section__padding"
      id="links"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h1 className="gradient__text" variants={bottomAnimate}>
        Do you want to step in to the <br />
        future before others
      </motion.h1>
      <motion.button variants={bottomAnimate}>
        Request Early Access
      </motion.button>
      <motion.div className="Footer-grids" variants={bottomAnimate}>
        <div>
          <h1 className="foot-logo">GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <ul>
          <h3>Links</h3>
          <li>overons</li>
          <li>social media</li>
          <li>counters</li>
          <li>contact</li>
        </ul>
        <ul>
          <h3>company</h3>
          <li>Tearms & conditions</li>
          <li>privacy policy</li>
          <li>contact</li>
        </ul>
        <ul>
          <h3>get in touch</h3>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li>0865 -555 055</li>
          <li>Gpay@payment.net</li>
        </ul>
      </motion.div>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
