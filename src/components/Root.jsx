import React from "react";
import { Outlet } from "react-router-dom";
import NavPanel from "./NavPanel";

const Root = () => {
  return (
    <div className="lg:flex h-full">
      <div className="absolute lg:relative w-1/6">
        <NavPanel />
      </div>
      <div className="px-5 pb-5 pt-[60px] lg:p-5 rounded-3xl bg-white w-full lg:h-full lg:rounded-l-none lg:rounded-r-3xl lg:w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
