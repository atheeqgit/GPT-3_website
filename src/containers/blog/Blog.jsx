import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { motion } from "framer-motion";
// import blog01 from "../../assets/blog01.png";
// import blog02 from "../../assets/blog02.png";
// import blog03 from "../../assets/blog03.png";
// import blog04 from "../../assets/blog04.png";
// import blog05 from "../../assets/blog05.png";

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
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";
const Blog = () => {
  return (
    <motion.div
      className="blog-section section__margin"
      id="library"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 className="gradient__text" variants={bottomAnimate}>
        A lot is happening, We are blogging about it.
      </motion.h1>
      <motion.div className="blogs-div" variants={bottomAnimate}>
        <div className="main-blog">
          <Article imgSrc={blog01} />
        </div>
        <div className="side-blog">
          <Article imgSrc={blog02} />
          <Article imgSrc={blog03} />
          <Article imgSrc={blog04} />
          <Article imgSrc={blog05} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
