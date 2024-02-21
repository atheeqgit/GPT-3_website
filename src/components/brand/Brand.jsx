import React from "react";
import "./brand.css";
import { google, slack, shopify, dropbox, atlassian } from "../../assets";

const Brand = () => {
  return (
    <div className="brand-component section__margin ">
      <div>
        <img src={google}></img>
      </div>
      <div>
        <img src={slack}></img>
      </div>
      <div>
        <img src={dropbox}></img>
      </div>
      <div>
        <img src={shopify}></img>
      </div>
      <div>
        <img src={atlassian}></img>
      </div>
    </div>
  );
};

export default Brand;
