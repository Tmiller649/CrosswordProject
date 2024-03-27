import { render, screen } from "@testing-library/react";
import Square from ".";

test("Unit Test Square", () => {
  render(<Square inputArray={[1, "a", 1]} />);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/a/i);
  expect(linkElement2).toBeInTheDocument();
});
