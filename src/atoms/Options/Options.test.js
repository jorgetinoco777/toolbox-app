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

    const input = screen.getAllByLabelText("search-file");
    const button = screen.getAllByLabelText("button-search");

    expect(input.length).toEqual(1);
    expect(input[0]).toBeInTheDocument();

    expect(button.length).toEqual(1);
    expect(button[0]).toBeInTheDocument();
  });

  test("Should handleChangeSearchValue is called", () => {
    render(
      <Options
        searchValue={""}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    );

    const input = screen.getAllByLabelText("search-file");
    fireEvent.change(input[0], { target: { value: "test" } });

    expect(handleChangeSearchValue).toHaveBeenCalledTimes(1);
    expect(input[0].value).toEqual("test");
  });
});
