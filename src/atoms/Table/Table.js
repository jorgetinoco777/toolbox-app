import React from "react";

const Table = ({data}) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" align="left">
            File Name
          </th>
          <th scope="col" align="left">
            Text
          </th>
          <th scope="col" align="left">
            Number
          </th>
          <th scope="col" align="left">
            Hex
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr>
              <td align="left">{item.name}</td>
              <td align="left">{item.text}</td>
              <td align="left">{item.number}</td>
              <td align="left">{item.hex}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
