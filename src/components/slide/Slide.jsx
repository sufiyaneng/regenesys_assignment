import React from "react";

const Slide = ({ title, image, text, slideNumber }) => {
  return (
    <div className="slide">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} />}
      <p>{text}</p>
      <p>Slide {slideNumber}</p>
    </div>
  );
};

export default Slide;
