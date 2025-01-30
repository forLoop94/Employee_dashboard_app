import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarLinear = ({ title, completed, maxCompleted, bgColor }) => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-[10px] text-gray-500">{title}</p>
      <ProgressBar
        completed={completed}
        maxCompleted={maxCompleted}
        bgColor={bgColor}
        height="8px"
        animateOnRender="true"
        className="font-extrabold w-1/2 mt-1"
        labelSize="7px"
      />
    </div>
  );
};

export default ProgressBarLinear;
