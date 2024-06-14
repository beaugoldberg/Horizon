"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: accounts.map((account) => account.name),
    datasets: [
      {
        label: "Banks",
        data: accounts.map((account) => account.currentBalance),
        backgroundColor: accounts.map((account) => account.mask),
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
