import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const play = screen.getByRole("link", {
    name: "Play",
  });

  const history = screen.getByRole("link", {
    name: "History",
  });

  expect(play).toBeInTheDocument();
  expect(history).toBeInTheDocument();
});
