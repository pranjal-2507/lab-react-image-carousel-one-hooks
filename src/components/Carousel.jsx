import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:

function Carousel() {
  const [currindex, setcurrIndex] = useState(0);

  function handlePre() {
    setcurrIndex(currindex > 0 ? currindex - 1 : images.length - 1);
  }

  function handleNext() {
    setcurrIndex(currindex < images.length - 1 ? currindex + 1 : 0);
  }

  return (
    <div className="carousel-container flex">
      <div className="leftArrow arrowDiv flex" onClick={handlePre}>
        <ArrowBackIosIcon />
      </div>
      <div className="rightArrow arrowDiv flex" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
      <h2 className="title">{images[currindex].title}</h2>
      <h4 className="caption">{images[currindex].subtitle}</h4>
      <img className="image" src={images[currindex].img} alt="" />
    </div>
  );
}

export default Carousel;
