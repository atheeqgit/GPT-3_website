import { useState } from "react";
import { Navbar, Brand, CTA } from "./components";
import {
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Blog,
  Footer,
} from "./containers";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleModeClick = () => {
    setDarkMode(!darkMode);

    console.log(darkMode);
  };
  return (
    <div className="app" id={darkMode ? "" : "light-mode"}>
      <div className="">
        <Navbar onClick={handleModeClick} mode={darkMode} />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
