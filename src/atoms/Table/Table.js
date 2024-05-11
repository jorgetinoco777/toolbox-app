import React from "react";

const Table = ({ data }) => {
  return (
    <table aria-label="files-table" className="table table-striped">
      <thead>
        <tr>
          <th align="left">
            File Name
          </th>
          <th align="left">
            Text
          </th>
          <th align="left">
            Number
          </th>
          <th align="left">
            Hex
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.hex}>
              <td scope="col" align="left">{item.name}</td>
              <td scope="col" align="left">{item.text}</td>
              <td scope="col" align="left">{item.number}</td>
              <td scope="col" align="left">{item.hex}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td role="column" colSpan={4} align="left">
              No existen datos.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
