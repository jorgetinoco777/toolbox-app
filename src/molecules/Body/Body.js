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
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <Options
            searchValue={searchValue}
            handleChangeSearchValue={handleChangeSearchValue}
            handleClickSearchValue={handleClickSearchValue}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Body;
