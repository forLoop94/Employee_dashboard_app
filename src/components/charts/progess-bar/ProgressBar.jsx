import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CountUp from "react-countup";

const ProgressBar = ({ currentValue, expectedValue, styles, avatar, title }) => {
  const percentage = (currentValue / expectedValue) * 100;

  return (
    <div className="relative p-1">
      <div className="absolute top-2 right-2 h-8 w-8 font-extrabold text-3xl">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles(styles)}
        />
      </div>
      <div className="grid gap-4">
        {avatar}
        <div>
          <h5 className="text-[10px] font-extrabold text-blue font-montserrat">{title.toUpperCase()}</h5>
          <CountUp start={0} end={currentValue} delay={2} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
