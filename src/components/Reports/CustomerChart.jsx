import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const CustomerChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "x", // Make bars vertical
    scales: {
      x: {
        display: true, // Hide x-axis
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.x} customers`,
        },
      },
    },
    barThickness: 140, // Set bar thickness
  };

  const data = {
    labels: ["New Customers", "Returning Customers"],
    datasets: [
      {
        data: [10, 60],
        backgroundColor: "#4ade80", // Light green color
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="bg-white px-6 py-2 rounded-lg border">
      <div className="mb-6">
        <h2 className="text-1xl font-semibold border-b pb-2">
          New vs Returning Customers
        </h2>
        <p className="text-xs text-gray-500 pt-2">70 Total Customers</p>
      </div>
      <div className="h-40">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default CustomerChart;
