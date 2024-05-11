import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table component test", () => {
  let data = [];

  afterEach( () => {
    data = [{
      file: "test.csv",
      text: "cualquier cosa",
      "number": 1,
      hex: "asasd"
    }];
  });

  test("Should render component", () => {
    render(<Table data={ data } />);

    expect(screen.getByLabelText("files-table")).toBeInTheDocument();
  });

  test("When the list has data should render the columns", () => {
    render(<Table data={ data } />);

    expect(screen.getByText(/cualquier cosa/)).toBeInTheDocument();
  });

  test("When the list has no data it should render a single column", () => {
    render(<Table data={ [] } />);

    const columns = screen.getAllByRole('column', { colSpan: 4, align: "left" });
    
    expect(columns.length).toEqual(1);
    expect(screen.getByText(/No existen datos./)).toBeInTheDocument();
  });
});
