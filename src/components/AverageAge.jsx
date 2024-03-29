import React, { useState } from 'react';
import { ageSet } from '../dummys/employeeData';
import DoughnutChart from './charts/DoughnutChart';

const AverageAge = () => {
  const [ageData, setAgeData] = useState({
    labels: ageSet.map(age => age.department),
    datasets: [
      {
        label: "Average Ages",
        type: 'doughnut',
        data: ageSet.map(age => age.avgAge),
        backgroundColor: [
          "#2697ff",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
      }
    ],
  })

  return <DoughnutChart chartData={ageData} />
}

export default AverageAge