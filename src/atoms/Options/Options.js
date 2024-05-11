import React from "react";

const Options = ({
  searchValue,
  handleChangeSearchValue,
  handleClickSearchValue,
}) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="search-file"
        value={searchValue}
        onChange={(e) => handleChangeSearchValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-search"
        aria-label="button-search"
        onClick={() => handleClickSearchValue()}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Options;
