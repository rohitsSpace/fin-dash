import React from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartWrapper } from "../WeeklyActivityChart/WeeklyActivityChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ExpenseStatisticsChart = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#343C6A", "#396AFF", "#FC7900", "#232323"],
        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -50,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, context) => {
          return `${value}% \n ${context.chart.data.labels[context.dataIndex]}`;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  return (
    <ChartContainer>
      <ChartWrapper>
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ExpenseStatisticsChart;
