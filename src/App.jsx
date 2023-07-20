import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from "./components/slide/Slide";
import SlideControls from "./components/slideControls/SlideControls";
import "./App.css";

const App = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const photosDataFromServer = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // For simplicity, we'll take only the first 5 slides
        const slidesData = response.data.slice(0, 5).map((slide) => ({
          title: slide.title,
          image: slide.url,
          text: slide.title,
        }));
        setSlides(slidesData);
      })
      .catch((error) => {
        console.error("Error fetching slides:", error);
      });
  };
  useEffect(() => {
    photosDataFromServer();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slides.length));
  };

  const handleRestartSlides = () => {
    setCurrentSlide(1);
  };

  return (
    <div className="container">
      <Slide
        title={slides[currentSlide - 1]?.title}
        image={slides[currentSlide - 1]?.image}
        text={slides[currentSlide - 1]?.text}
        slideNumber={currentSlide}
      />
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevClick={handlePrevSlide}
        onNextClick={handleNextSlide}
        onRestartClick={handleRestartSlides}
      />
    </div>
  );
};

export default App;
