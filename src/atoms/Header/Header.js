import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-bg navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="toolbox-color mb-0 h1 pt-2 pb-2">React Test App</span>
        <>{process.env.PORT}</>
      </div>
    </nav>
  );
};

export default Header;
