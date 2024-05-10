import React from "react";
import Table from "../../atoms/Table/Table";
import Options from "../../atoms/Options/Options";

const Body = ({data}) => {
  return (
    <div class="container text-center">
      <div class="row mt-4">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
          <Options />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Body;
