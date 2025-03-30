import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { COLORS } from "../../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: ${COLORS.white};
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ChartWrapper = styled.div`
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const WeeklyActivityChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [320, 480, 210, 350, 500, 420, 460],
        backgroundColor: COLORS.mindShaft,
        borderColor: COLORS.mindShaft,
        borderWidth: 1,
        borderRadius: 25,
        borderSkipped: false,
      },
      {
        label: "Withdraw",
        data: [280, 380, 500, 310, 240, 410, 350],
        backgroundColor: COLORS.dodgerBlue,
        borderColor: COLORS.dodgerBlue,
        borderWidth: 1,
        borderRadius: 25,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 12,
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          padding: 10,
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    datasets: {
      bar: {
        categoryPercentage: 0.4,
        barPercentage: 0.6,
      },
    },
  };

  return (
    <ChartContainer>
      <ChartWrapper>
        <Bar data={data} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default WeeklyActivityChart;
