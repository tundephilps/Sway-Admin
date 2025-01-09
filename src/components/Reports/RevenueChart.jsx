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

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const RevenueChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
          drawBorder: false,
        },
        ticks: {
          color: "#666",
          callback: (value) => `${value}k`,
          stepSize: 5,
          max: 20,
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
          label: (context) => `${context.parsed.y}k bookings`,
        },
      },
    },
  };

  const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  const data = {
    labels,
    datasets: [
      {
        data: [10, 20, 10, 15, 9, 10, 10, 18, 10, 10, 15, 10],
        backgroundColor: "rgba(147, 51, 234, 0.5)",
        hoverBackgroundColor: "rgba(147, 51, 234, 0.7)",
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-lg font-semibold mb-6">Booking Revenue</h2>
      <div className="h-48">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default RevenueChart;
