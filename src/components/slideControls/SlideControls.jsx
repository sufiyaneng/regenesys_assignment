import React from "react";

const SlideControls = ({
  currentSlide,
  totalSlides,
  onPrevClick,
  onNextClick,
  onRestartClick,
}) => {
  const isFirstSlide = currentSlide === 1;
  const isLastSlide = currentSlide === totalSlides;

  return (
    <div className="slide-controls">
      <button onClick={onPrevClick} disabled={isFirstSlide}>
        Previous
      </button>
      <button onClick={onNextClick} disabled={isLastSlide}>
        Next
      </button>
      <button onClick={onRestartClick}>Restart</button>
    </div>
  );
};

export default SlideControls;
