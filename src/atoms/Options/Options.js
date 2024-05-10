import React from "react";

const Options = () => {
  return (
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Search file" />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Options;
