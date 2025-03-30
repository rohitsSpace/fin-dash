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

const DataTable = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

  const chartDescription = `Pie chart showing expense distribution: 
    ${data.labels
      .map((label, index) => `${label}: ${data.datasets[0].data[index]}%`)
      .join(", ")}`;

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

  const dataTable = (
    <DataTable aria-hidden="true">
      <table>
        <caption>Expense Statistics Data</caption>
        <thead>
          <tr>
            <th>Category</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.labels.map((label, index) => (
            <tr key={index}>
              <td>{label}</td>
              <td>{data.datasets[0].data[index]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  );

  return (
    <ChartContainer role="region" aria-label="Expense Statistics Chart">
      {dataTable}
      <ChartWrapper>
        <Pie
          data={data}
          options={options}
          plugins={[ChartDataLabels]}
          aria-label={chartDescription}
          role="img"
        />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ExpenseStatisticsChart;
