import { fireEvent, render, screen } from "@testing-library/react";
import Options from "./Options";

describe("Options component test", () => {
  const handleChangeSearchValue = jest.fn();
  const handleClickSearchValue = jest.fn();

  test("Should render component", () => {
    render(
      <Options
        searchValue={""}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    );

    const input = screen.getByLabelText("search-file");
    const button = screen.getByLabelText("button-search");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("When we write in the input-text should call the handleChangeSearchValue function", () => {
    render(
      <Options
        searchValue={""}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    );

    const input = screen.getByLabelText("search-file");
    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChangeSearchValue).toHaveBeenCalledTimes(1);
  });

  test("When we click on the search button should call the handleClickSearchValue function", () => {
    render(
      <Options
        searchValue={""}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    );

    const button = screen.getByLabelText("button-search");
    fireEvent.click(button);

    expect(handleChangeSearchValue).toHaveBeenCalledTimes(0);
    expect(handleClickSearchValue).toHaveBeenCalledTimes(1);
  });
});
