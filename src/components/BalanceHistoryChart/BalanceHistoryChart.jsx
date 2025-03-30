import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { COLORS } from "../../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChartWrapper = styled.div`
  height: 300px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BalanceHistoryChart = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [100, 150, 400, 500, 400, 750, 650],
        borderColor: COLORS.blue,
        backgroundColor: "rgba(57, 106, 255, 0.1)",
        borderWidth: 3,
        tension: 0.4,
        fill: {
          target: "origin",
          above: "rgba(57, 106, 255, 0.1)",
        },
        pointBackgroundColor: COLORS.dodgerBlue,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 200,
        },
        max: 800,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <ChartContainer>
      <ChartWrapper>
        <Line data={data} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default BalanceHistoryChart;
