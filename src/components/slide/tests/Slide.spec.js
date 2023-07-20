/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Slide from "..";

test("renders slide correctly", () => {
  const slideData = {
    title: "Test Slide",
    image: "https://example.com/image.jpg",
    text: "This is a test slide",
  };
  const { getByText, getByAltText } = render(
    <Slide {...slideData} slideNumber={1} />
  );

  const titleElement = getByText("Test Slide");
  const imageElement = getByAltText("Test Slide");
  const textElement = getByText("This is a test slide");
  const slideNumberElement = getByText("Slide 1");

  expect(titleElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(slideNumberElement).toBeInTheDocument();
});
