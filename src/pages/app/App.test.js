import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./state/useAppState", () => ({
  useAppState: () => ({
    data: [],
    searchValue: "",
    handleChangeSearchValue: jest.fn(),
    handleClickSearchValue: jest.fn(),
  }),
}));

describe("App component test", () => {
  test("Should render component", () => {
    render(<App />);

    const navbar = screen.getByText(/React Test App/);

    expect(navbar).toBeInTheDocument();
  });
});
