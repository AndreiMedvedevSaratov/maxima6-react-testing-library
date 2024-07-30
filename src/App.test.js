import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // 1
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // 2
  // render(<App />);
  // screen.debug();

  // 3
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
