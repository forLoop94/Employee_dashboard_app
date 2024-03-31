import React from "react";
import { Link } from "react-router-dom";

const NavPanel = () => {
  return (
    <div className="display-none lg:h-full lg:bg-white rounded-l-3xl p-5">
      <div>
        <Link to={"/overview"}>Overview</Link>
      </div>
      <div>
        <Link to={"/login"}>login</Link>
      </div>
    </div>
  );
};

export default NavPanel;

//<div className=""></div>
