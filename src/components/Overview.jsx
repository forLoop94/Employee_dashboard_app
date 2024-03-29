import React, { useState } from "react";
import { empData } from "../dummys/employeeData";
import LineChart from "./charts/LineChart";
import DoughnutChart from "./charts/DoughnutChart";
import AverageAge from "./AverageAge";

const Overview = () => {
  const avgPerformanceStat = () => {
    return empData.map((data) => Math.round(data.performance / data.sackables));
  };

  const [employeeData, setEmployeeData] = useState({
    labels: empData.map((singleData) => singleData.department),
    datasets: [
      {
        label: "Progression",
        type: "line",
        data: empData.map((singleData) => singleData.performance),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
        borderColor: "red",
      },
      {
        label: "Regression",
        type: "bar",
        data: empData.map((singleData) => singleData.sackables),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
        borderColor: "rgba(43, 63, 229, 0.8)",
        barThickness: 16,
      },
      {
        label: "Average",
        type: "line",
        data: avgPerformanceStat(),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
      },
    ],
  });

  return (
    <div className="flex h-full">
      <div className="display-none lg:h-full lg:w-1/6 lg:bg-white opacity-80 rounded-l-3xl"></div>
      <div className="rounded-3xl bg-white p-5 w-full h-auto lg:w-5/6 lg:rounded-l-none lg:rounded-r-3xl flex-col justify-between">
        <h1 className="text-black font-extrabold h-6">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 lg:row-span-2 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-2 lg:row-span-2 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 h-auto p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div>
            <AverageAge />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
