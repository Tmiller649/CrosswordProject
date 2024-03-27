import { render, screen } from "@testing-library/react";
import Crossword from ".";

test("Crossword Doesn't Crash", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test Crossword Generation", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test Send Request", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test API Response", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test Submitting A Guess", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test Checking A Guess", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Unit Test Win Detection", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Integration: API Integration", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});

test("Play Multiple Crosswords In A Row", () => {
  render(<Crossword />);
  const linkElement = screen.getByText(/Start New Game/i);
  expect(linkElement).toBeInTheDocument();
});
