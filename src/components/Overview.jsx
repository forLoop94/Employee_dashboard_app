import React, { useState } from "react";
import { empData } from "../dummys/employeeData";
import LineChart from "./charts/LineChart";
import DoughnutChart from "./charts/DoughnutChart";
import AverageAge from "./AverageAge";
import ProgressBar from "./charts/progess-bar/ProgressBar";
import { FaCalendarAlt, FaTools } from "react-icons/fa";
import { meetingStyles, missedMeetingStyles, taskStyles } from "./charts/progess-bar/buildStyles";

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
        borderColor: "red"
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

  const meetingsAttended = 65;
  const meetingsMissed = 15;
  const TasksCompleted = 12;

  return (
    <div className="flex h-full">
      <div className="display-none lg:h-full lg:w-1/6 lg:bg-white opacity-80 rounded-l-3xl"></div>
      <div className="rounded-3xl bg-white p-5 w-full h-auto lg:w-5/6 lg:rounded-l-none lg:rounded-r-3xl flex-col justify-between">
        <nav className="mb-5">
          <h1 className="text-black font-extrabold h-6">Dashboard</h1>
          <small>Lorem ipsum dolor sit amet consectetur.</small>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={meetingsAttended}
              expectedValue={80}
              styles={meetingStyles}
              avatar={<FaCalendarAlt />}
              title={"Meetings Attended"}
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={meetingsMissed}
              expectedValue={80}
              styles={missedMeetingStyles}
              avatar={<FaCalendarAlt />}
              title={"Absent or late"}
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={TasksCompleted}
              expectedValue={20}
              styles={taskStyles}
              avatar={<FaTools />}
              title={"Tasks completed"}
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={meetingsAttended}
              expectedValue={80}
              styles={meetingStyles}
              avatar={<FaCalendarAlt />}
              title={"Meetings"}
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={meetingsAttended}
              expectedValue={80}
              styles={meetingStyles}
              avatar={<FaCalendarAlt />}
              title={"Meetings"}
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-3 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            {/* <LineChart chartData={employeeData} /> */}
          </div>
          <div className="lg:col-span-1 lg:row-span-2 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <AverageAge />
          </div>
          <div className="lg:col-span-3 lg:row-span-3 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <LineChart chartData={employeeData} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
            <ProgressBar
              currentValue={meetingsAttended}
              expectedValue={80}
              styles={meetingStyles}
              avatar={<FaCalendarAlt />}
              title={"Meetings"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
