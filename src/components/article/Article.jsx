import React from "react";
// import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";
import "./article.css";
const Article = ({ imgSrc }) => {
  return (
    <div className="article-component">
      <div className="article-content">
        <img src={imgSrc}></img>
        <div className="article-titles">
          <p>Sep 26, 2021</p>
          <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
        </div>
      </div>
      <a>Read Full Article</a>
    </div>
  );
};

export default Article;
