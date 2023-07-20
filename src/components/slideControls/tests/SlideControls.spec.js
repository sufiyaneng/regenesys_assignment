/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import SlideControls from "../SlideControls";

test("SlideControls: previous button disabled when on first slide", () => {
  const { getByText } = render(
    <SlideControls
      currentSlide={1}
      totalSlides={5}
      onPrevClick={() => {}}
      onNextClick={() => {}}
      onRestartClick={() => {}}
    />
  );
  const previousButton = getByText("Previous");
  const nextButton = getByText("Next");
  const restartButton = getByText("Restart");

  expect(previousButton).toBeDisabled();
  expect(nextButton).toBeEnabled();
  expect(restartButton).toBeEnabled();
});

test("SlideControls: next button disabled when on last slide", () => {
  const { getByText } = render(
    <SlideControls
      currentSlide={5}
      totalSlides={5}
      onPrevClick={() => {}}
      onNextClick={() => {}}
      onRestartClick={() => {}}
    />
  );
  const previousButton = getByText("Previous");
  const nextButton = getByText("Next");
  const restartButton = getByText("Restart");

  expect(previousButton).toBeEnabled();
  expect(nextButton).toBeDisabled();
  expect(restartButton).toBeEnabled();
});

test("SlideControls: all buttons enabled when not on first or last slide", () => {
  const { getByText } = render(
    <SlideControls
      currentSlide={3}
      totalSlides={5}
      onPrevClick={() => {}}
      onNextClick={() => {}}
      onRestartClick={() => {}}
    />
  );
  const previousButton = getByText("Previous");
  const nextButton = getByText("Next");
  const restartButton = getByText("Restart");

  expect(previousButton).toBeEnabled();
  expect(nextButton).toBeEnabled();
  expect(restartButton).toBeEnabled();
});
