import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component test", () => {
  test("Should render component", () => {
    render(<Header />);

    const span = screen.getByText(/React Test App/);
    
    expect(span).toBeInTheDocument();
  });
});
