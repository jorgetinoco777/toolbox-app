import React from "react";
import Table from "../../atoms/Table/Table";
import Options from "../../atoms/Options/Options";

const Body = ({
  searchValue,
  data,
  handleChangeSearchValue,
  handleClickSearchValue,
}) => {
  return (
    <div class="container text-center">
      <div class="row mt-4">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
          <Options
            searchValue={searchValue}
            handleChangeSearchValue={handleChangeSearchValue}
            handleClickSearchValue={handleClickSearchValue}
          />
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
