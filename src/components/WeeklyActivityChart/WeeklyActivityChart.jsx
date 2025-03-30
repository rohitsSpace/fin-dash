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

  const chartDescription = `Weekly activity bar chart showing deposits and withdrawals. 
  Saturday: $${data.datasets[0].data[0]} deposited, $${data.datasets[1].data[0]} withdrawn.
  Sunday: $${data.datasets[0].data[1]} deposited, $${data.datasets[1].data[1]} withdrawn.
  Monday: $${data.datasets[0].data[2]} deposited, $${data.datasets[1].data[2]} withdrawn.
  Tuesday: $${data.datasets[0].data[3]} deposited, $${data.datasets[1].data[3]} withdrawn.
  Wednesday: $${data.datasets[0].data[4]} deposited, $${data.datasets[1].data[4]} withdrawn.
  Thursday: $${data.datasets[0].data[5]} deposited, $${data.datasets[1].data[5]} withdrawn.
  Friday: $${data.datasets[0].data[6]} deposited, $${data.datasets[1].data[6]} withdrawn.`;

  const dataTable = (
    <DataTable aria-hidden="true">
      <table>
        <caption>Weekly Activity Data</caption>
        <thead>
          <tr>
            <th>Day</th>
            <th>Deposit ($)</th>
            <th>Withdraw ($)</th>
          </tr>
        </thead>
        <tbody>
          {data.labels.map((label, index) => (
            <tr key={index}>
              <td>{label}</td>
              <td>{data.datasets[0].data[index]}</td>
              <td>{data.datasets[1].data[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  );

  return (
    <ChartContainer role="region" aria-label="Weekly Activity Chart">
      <ChartWrapper>
        {dataTable}
        <Bar
          data={data}
          options={options}
          aria-label={chartDescription}
          role="img"
        />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default WeeklyActivityChart;
