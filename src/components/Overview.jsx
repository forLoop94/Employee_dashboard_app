import React, { useState } from "react";
import { empData, singleEmployee } from "../dummys/employeeData";
import LineChart from "./charts/LineChart";
import AverageAge from "./AverageAge";
import ProgressBarCircle from "./charts/progess-bar/ProgressBar";
import { FaCalendarAlt, FaTools, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import {
  meetingStyles,
  missedMeetingStyles,
  taskStyles,
} from "./charts/progess-bar/buildStyles";
import ProgressBarLinear from "./charts/progess-bar/ProgressBarLinear";

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
          "#2697ff",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
        borderColor: "#2697ff",
        borderRadius: 6,
      },
      {
        label: "Average",
        type: "line",
        data: avgPerformanceStat(),
        backgroundColor: [
          "#2697ff",
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
    <div className="rounded-3xl bg-white p-5 w-full lg:h-full lg:rounded-l-none lg:rounded-r-3xl flex-col justify-between">
      <nav className="mb-5">
        <h1 className="text-black font-extrabold h-6">Dashboard</h1>
        <small>Lorem ipsum dolor sit amet consectetur.</small>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={meetingsAttended}
            expectedValue={80}
            styles={meetingStyles}
            avatar={<FaCalendarAlt />}
            title={"Meetings Attended"}
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={meetingsMissed}
            expectedValue={80}
            styles={missedMeetingStyles}
            avatar={<FaCalendarAlt />}
            title={"Absent or late"}
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={TasksCompleted}
            expectedValue={20}
            styles={taskStyles}
            avatar={<FaTools />}
            title={"Tasks completed"}
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={meetingsAttended}
            expectedValue={80}
            styles={meetingStyles}
            avatar={<FaCalendarAlt />}
            title={"Meetings"}
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={meetingsAttended}
            expectedValue={80}
            styles={meetingStyles}
            avatar={<FaCalendarAlt />}
            title={"Meetings"}
          />
        </div>
        <div className="lg:col-span-1 lg:row-span-3 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <div>
            <img src={singleEmployee.image} alt={singleEmployee.firstName} />
            <div className="m-2">
              <h5 className="font-extrabold text-[12px]">
                {singleEmployee.firstName + " " + singleEmployee.lastName}
              </h5>
              <div className="flex justify-between">
                <p className="text-[9px]">
                  {singleEmployee.role} ({singleEmployee.rank})
                </p>
                <p className="text-[10px] text-blue font-bold">
                  {singleEmployee.employmentType}
                </p>
              </div>
              <div className="text-[10px] font-bold mt-2">
                <p className="mb-1">Contact Details</p>
                <div className="text-[10px] font-bold">
                  <div className="flex">
                    <FaLocationDot className="mt-0.5" />
                    <p>
                      Address:{" "}
                      <span className="font-light">
                        {singleEmployee.contact.address}
                      </span>
                    </p>
                  </div>
                  <div className="flex">
                    <FaPhoneAlt className="mt-0.5" />
                    <p>
                      Phone:{" "}
                      <span className="font-light">
                        {singleEmployee.contact.phone}
                      </span>
                    </p>
                  </div>
                  <div className="flex">
                    <HiMail className="mt-0.5" />
                    <p>
                      Mail:{" "}
                      <span className="font-light text-[8px]">
                        {singleEmployee.contact.mail}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2">
              <ProgressBarLinear
                title={"Creativity"}
                completed={79}
                maxCompleted={100}
                bgColor="purple"
              />
              <ProgressBarLinear
                title={"Resilience"}
                completed={88}
                maxCompleted={100}
                bgColor="rgba(250, 192, 19, 0.8)"
              />
              <ProgressBarLinear
                title={"Problem Solving"}
                completed={77}
                maxCompleted={100}
                bgColor="purple"
              />
              <ProgressBarLinear
                title={"Team work"}
                completed={75}
                maxCompleted={100}
                bgColor="rgba(253, 135, 135, 0.8)"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-2 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <AverageAge />
        </div>
        <div className="lg:col-span-3 lg:row-span-3 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <LineChart chartData={employeeData} />
        </div>
        <div className="lg:col-span-1 lg:row-span-1 p-2 w-auto shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl">
          <ProgressBarCircle
            currentValue={meetingsAttended}
            expectedValue={80}
            styles={meetingStyles}
            avatar={<FaCalendarAlt />}
            title={"Meetings"}
          />
        </div>
      </div>
    </div>
  );
};
export default Overview;
