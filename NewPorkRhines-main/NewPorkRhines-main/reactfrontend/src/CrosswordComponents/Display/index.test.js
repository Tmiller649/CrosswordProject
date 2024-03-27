import { render, screen } from "@testing-library/react";
import Display from ".";

test("Unit Test Row", () => {
  render(
    <Display
      crossword={[
        {
          vertical: true,
          initialHorizontal: 0,
          initialVertical: 0,
          answer: "here",
          clue: "The answer is here",
          complete: true,
          number: 1,
        },
      ]}
      horzSize={9}
      vertSize={9}
    />
  );
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/h/i);
  expect(linkElement2).toBeInTheDocument();
});
