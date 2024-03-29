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
        data: ageSet.map(age => age.avgAge)
      }
    ],
    backgroundColor: [
      "rgba(43, 63, 229, 0.8)",
      "rgba(250, 192, 19, 0.8)",
      "rgba(253, 135, 135, 0.8)",
    ],
    borderColor: "red",
  })

  return (
    <div>
      <DoughnutChart chartData={ageData} />
    </div>
  )
}

export default AverageAge