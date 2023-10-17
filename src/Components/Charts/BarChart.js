import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function BarChart({ labels, chartdata }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: chartdata,
        fill: true,
        backgroundColor: "#8d72d92d",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.8, 
        categoryPercentage: 1, 
        hoverBackgroundColor: "#040440"
      },
    ],
  };

  const customOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, 
        
          
        },
      
        display: false, // Remove the Y-axis line
      },
      x: {
        grid: {
          drawBorder:false,
          display: false, // Remove grid lines on the X-axis
          drawOnChartArea:false,
          lineWidth:5
        },
      
      },
    },
  };

  return (
    <div style={{ maxWidth: "100%", height: "auto" }} className="p-8">
      <Bar data={data} options={customOptions} />
    </div>
  );
}

export default BarChart;
