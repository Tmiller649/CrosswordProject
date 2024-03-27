import { render, screen } from "@testing-library/react";
import HUD from ".";

test("renders learn react link", () => {
  render(<HUD />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
