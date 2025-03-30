import React from "react";
import styled from "styled-components";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { COLORS } from "../../constants/colors";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartWrapper } from "../WeeklyActivityChart/WeeklyActivityChart";
import { Pie } from "react-chartjs-2";

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
        backgroundColor: [
          COLORS.rhino,
          COLORS.dodgerBlue,
          "#FC7900",
          COLORS.mindShaft,
        ],
        borderColor: [COLORS.white, COLORS.white, COLORS.white, COLORS.white],
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
        color: COLORS.white,
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
