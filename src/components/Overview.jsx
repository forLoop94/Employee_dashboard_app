import React from "react";

const Overview = () => {
  return (
    <div className="flex h-full">
      <div className="display-none lg:h-full lg:w-1/6 lg:bg-white opacity-80 rounded-l-3xl"></div>

      <nav className="rounded-3xl bg-white p-5 w-full h-full z-0 opacity-40 lg:w-5/6 lg:rounded-l-none lg:rounded-r-3xl flex justify-between">
        <h1 className="text-black font-extrabold h-6">Dashboard</h1>
        <input type="text" className="input bg-white opacity-80" placeholder="search" />
      </nav>
    </div>
  );
};
export default Overview;
