import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherMain from "./pages";

test("renders learn react link", () => {
  render(<WeatherMain />);
  const linkElement = screen.getByText(/country/i);
  expect(linkElement).toBeInTheDocument();
});
