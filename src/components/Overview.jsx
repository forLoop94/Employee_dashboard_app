import React, { useState } from "react";
import BarChart from "./charts/BarChart";
import { empData } from "../dummys/employeeData";
import LineChart from "./charts/LineChart";

const Overview = () => {
  const avgPerformanceStat = () => {
    return empData.map((data) => Math.round(data.performance / data.sackables));
  };

  console.log(avgPerformanceStat());

  const [employeeData, setEmployeeData] = useState({
    labels: empData.map((singleData) => singleData.department),
    datasets: [
      {
        label: "performance statistic",
        data: empData.map((singleData) => singleData.performance),
      },
      {
        label: "Poor performance statistic",
        data: empData.map((singleData) => singleData.sackables),
      },
      {
        label: "Average performance statistic",
        data: avgPerformanceStat(),
      },
    ],
  });

  return (
    <div className="flex h-full">
      <div className="display-none lg:h-full lg:w-1/6 lg:bg-white opacity-80 rounded-l-3xl"></div>

      <nav className="rounded-3xl bg-white p-5 w-full h-full z-0 opacity-40 lg:w-5/6 lg:rounded-l-none lg:rounded-r-3xl flex-col justify-between">
        <h1 className="text-black font-extrabold h-6">Dashboard</h1>
        <div className="flex border-red-500 border">
          <div className="border-red-500 border">
            <BarChart chartData={employeeData} />
          </div>
          <div>
            <LineChart chartData={employeeData} />
          </div>
        </div>
        {/* <input type="text" className="input bg-white opacity-80" placeholder="search" /> */}
      </nav>
    </div>
  );
};
export default Overview;
