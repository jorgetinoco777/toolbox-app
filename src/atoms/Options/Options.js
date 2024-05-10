import React from "react";

const Options = ({
  searchValue,
  handleChangeSearchValue,
  handleClickSearchValue,
}) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        aria-label="Search file"
        value={searchValue}
        onChange={(e) => handleChangeSearchValue(e.target.value)}
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => handleClickSearchValue()}
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Options;
