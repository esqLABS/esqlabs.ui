import React, { useState, useEffect, useInsertionEffect } from "react";
import "./IntroScreen.css";
import logo from "./assets/img/esqlabs_logo.png";
import { motion } from "framer-motion";

function LoaderESQlabs() {
  return (
    <div class="wrapper">
      <div id="dot1"> </div>
      <div id="dot2"></div>
      <div id="dot3"></div>
      <div id="dot4"></div>
      <div id="dot5"></div>
      <div id="dot6"></div>
      <div id="dot7"></div>
      <div id="dot8"></div>
      <div id="dot9"></div>
      <div id="dot10"></div>
      <div id="base1"></div>
      <div id="base2"></div>
      <div id="base3"></div>
      <div id="base4"></div>
      <div id="base5"></div>
    </div>
  );
}

function LogoComponent(props) {
  return (
    <div
      className="logo_container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <img width={"35%"} src={props.logoPath} />
    </div>
  );
}

function Slider() {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

function IntroScreen(props) {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const components = [<LoaderESQlabs />, <LogoComponent logoPath={props.img_path} />, <Slider />];

  const updateCSS = (isHidden) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `html { overflow: ${isHidden ? 'hidden' : 'auto'}; } .intro_screen { height: ${isHidden ? '100%' : '0px !important'}; }`;
    document.head.appendChild(styleElement);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentComponentIndex(prevIndex =>
        prevIndex < components.length - 1 ? prevIndex + 1 : prevIndex
      );
    }, 3500);

    currentComponentIndex === 2 ? updateCSS(false) : updateCSS(true);

    return () => clearTimeout(timer);
  }, [currentComponentIndex]);

  return (
    <div
      style={
        currentComponentIndex === 2
          ? { height: "0vh", width: "0%" }
          : { height: "100vh", width: "100%", overflow: "hidden", position: "absolute", background: "#ffffff" }
      }
    >
      {components[currentComponentIndex]}
    </div>
  );
}

export default IntroScreen;
