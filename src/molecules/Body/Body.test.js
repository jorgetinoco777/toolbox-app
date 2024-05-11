import { render, screen } from "@testing-library/react";
import Body from "./Body";

describe("Body component test", () => {
  let searchValue;
  let data = [];
  const handleChangeSearchValue = jest.fn();
  const handleClickSearchValue = jest.fn();

  afterEach(() => {
    searchValue = "";
    data = [
      {
        file: "test.csv",
        text: "cualquier cosa",
        number: 1,
        hex: "asasd",
      },
    ];
  });

  test("Should render component", () => {
    render(
      <Body
        data={data}
        searchValue={searchValue}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    );

    const table = screen.getByLabelText("files-table");
    const button = screen.getByLabelText("button-search");
    const input = screen.getByLabelText("search-file");

    expect(table).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
