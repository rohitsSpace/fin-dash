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
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
  }
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

const BalanceHistoryChart = () => {
  const chartData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance ($)",
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

  const chartDescription = `Line chart showing balance history from July to January. 
    July: $${chartData.datasets[0].data[0]}, 
    August: $${chartData.datasets[0].data[1]}, 
    September: $${chartData.datasets[0].data[2]}, 
    October: $${chartData.datasets[0].data[3]}, 
    November: $${chartData.datasets[0].data[4]}, 
    December: $${chartData.datasets[0].data[5]}, 
    January: $${chartData.datasets[0].data[6]}.`;

  const dataTable = (
    <DataTable aria-hidden="true">
      <table>
        <caption>Balance History Data</caption>
        <thead>
          <tr>
            <th>Month</th>
            <th>Balance ($)</th>
          </tr>
        </thead>
        <tbody>
          {chartData.labels.map((label, index) => (
            <tr key={index}>
              <td>{label}</td>
              <td>{chartData.datasets[0].data[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  );

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
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
      aria: {
        enabled: true,
        description: chartDescription,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "#e0e0e0",
        },
        ticks: {
          stepSize: 200,
          color: "#595959",
          font: {
            weight: "bold",
          },
        },
        max: 800,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#595959",
          font: {
            weight: "bold",
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    elements: {
      point: {
        hoverRadius: 8,
        hoverBorderWidth: 2,
      },
      line: {
        borderWidth: 3,
      },
    },
  };

  return (
    <ChartContainer role="region" aria-label="Balance History Chart">
      {dataTable}
      <ChartWrapper>
        <Line
          data={chartData}
          options={options}
          aria-label={chartDescription}
          role="img"
        />
      </ChartWrapper>
    </ChartContainer>
  );
};

export default BalanceHistoryChart;
