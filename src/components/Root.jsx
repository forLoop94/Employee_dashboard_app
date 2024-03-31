import React from "react";
import { Outlet } from "react-router-dom";
import NavPanel from "./NavPanel";

const Root = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/6">
        <NavPanel />
      </div>
      <div className="w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
