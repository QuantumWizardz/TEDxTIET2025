import React, { useEffect } from "react";
import "./HeroSection.css";

import bgd2 from "../assets/HeroSection/bgd2.webp";
import img1 from "../assets/HeroSection/1.webp";
import img2 from "../assets/HeroSection/2.webp";
import img3copy from "../assets/HeroSection/31.webp";
import img3 from "../assets/HeroSection/3.webp";
import img5 from "../assets/HeroSection/5.webp";
import img6 from "../assets/HeroSection/6.webp";
import img7 from "../assets/HeroSection/7.webp";
import img4 from "../assets/HeroSection/4.webp";
import CustomNavbar from "./navbar";

const allImages = [bgd2, img1, img2, img3copy, img3, img5, img6, img7, img4];

const HeroSection = () => {
  // ✅ Preload images once when component mounts
  useEffect(() => {
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (<>
    <CustomNavbar/>
    <section className="homefnt" style={{ backgroundImage: `url(${bgd2})` }}>
      <div className="home">
        <span className="textmask" style={{ "--bg-img": `url(${img1})` }}>T</span>
        <span className="textmask" style={{ "--bg-img": `url(${img2})` }}>E</span>
        <span className="textmask" style={{ "--bg-img": `url(${img3copy})` }}>D</span>
        <span className="textmask" style={{ "--bg-img": `url(${img3})` }}>x</span>
        <span className="textmask" style={{ "--bg-img": `url(${img5})` }}>T</span>
        <span className="textmask" style={{ "--bg-img": `url(${img6})` }}>I</span>
        <span className="textmask" style={{ "--bg-img": `url(${img7})` }}>E</span>
        <span className="textmask" style={{ "--bg-img": `url(${img4})` }}>T</span>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
