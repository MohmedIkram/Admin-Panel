import React from "react";

import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Direct", "Social", "Referral"],
  datasets: [
    {
      label: "My First Dataset",
      data: [15, 30, 55],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function DoughnutCharts() {
  return (
    <div className="charts">
      <Doughnut data={data} />
    </div>
  );
}
