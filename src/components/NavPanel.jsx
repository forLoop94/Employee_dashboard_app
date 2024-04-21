import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";

const NavPanel = () => {
  const [tray, setTray] = useState(false);
  const { pathname } = useLocation();

  const setNavPanelBackground = (targetLocation) => {
    if (pathname === targetLocation)
      return { backgroundColor: "#2697ff", color: "white" };
    return {};
  };

  return (
    <div className="w-full lg:h-full p-5 lg:bg-white rounded-l-3xl lg:shadow-[8px_0_10px_-6px_rgba(0, 0, 0, 0.5)]">
      <div role="button" onClick={() => setTray(!tray)} className="absolute top-5 left-5 z-20 lg:hidden">
        <FaBars className="text-pink-500 text-2xl" />
      </div>
      <div className={!tray ? "invisible lg:relative lg:visible" : "absolute top-0 left-0 bg-blue lg:bg-white min-w-64 h-screen z-10"}>
        <h1 className="text-blue">LOGO</h1>
        <ul className="pt-[40px] font-extrabold text-gray-400 text-[12px]">
          <li style={setNavPanelBackground("/overview")}
            className="px-2 py-3 rounded-2xl flex">
            <GrOverview className="text-xl mr-2" />
            <Link to={"/overview"}>Overview</Link>
          </li>
          <li
            style={setNavPanelBackground("/analytics")}
            className="px-2 py-3 rounded-2xl flex"
          >
            <IoAnalyticsOutline className="text-xl mr-2" />
            <Link to={"/analytics"}>Analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPanel;
