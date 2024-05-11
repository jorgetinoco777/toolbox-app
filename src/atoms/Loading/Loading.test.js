import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component test", () => {
  test("When isLoading is false it should show modal", () => {
    render(<Loading isLoading={true} />);

    const modal = screen.getByLabelText("modal");

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle({display: "block"});
  });
  test("When isLoading is false it should not show modal", () => {
    render(<Loading isLoading={false} />);

    const modal = screen.getByLabelText("modal");

    expect(modal).toHaveStyle({display: "none"});
  });
});
