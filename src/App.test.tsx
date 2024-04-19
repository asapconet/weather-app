import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherMain from "./pages";

test("renders text in components", () => {
  render(<WeatherMain />);
  const linkElement = screen.getByText(/city/i);
  expect(linkElement).toBeInTheDocument();
});
