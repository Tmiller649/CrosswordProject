import { render, screen } from "@testing-library/react";
import Crossword from ".";

test("renders learn react link", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
