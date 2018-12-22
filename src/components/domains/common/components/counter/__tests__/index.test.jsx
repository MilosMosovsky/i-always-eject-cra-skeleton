import * as React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import Icon from "../";

afterEach(cleanup);

test("init", () => {
  const { container } = render(<Icon />);

  expect(container).toMatchSnapshot();
});

test("change counter on click", () => {
  const { container, getByText } = render(<Icon />);

  const Button = getByText("Increment");
  fireEvent.click(Button);

  expect(container).toMatchSnapshot();
});
