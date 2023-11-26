import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const LineGraph = ({sampleData}) => {
  const [waveformData, setWaveformData] = useState([]);
  const generateWaveformData = (apiData) => {
    return apiData.map((item) => item.height);
  };
  // const sampleData = [
  //   { month: "Jan", height: 20 },
  //   { month: "Feb", height: 40 },
  //   { month: "Mar", height: 60 },
  //   { month: "Apr", height: 80 },
  //   { month: "May", height: 60 },
  //   { month: "Jun", height: 40 },
  // ];

  useEffect(() => {
    setWaveformData(generateWaveformData(sampleData));
  }, []);

  const data = {
    labels: sampleData.map((item) => item.month), // Update labels to use month names
    datasets: [
      {
        label: "",
        data: waveformData,
        tension: 0.4,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "red",
      fontSize: 14,
      color: "red",
    },
  };

  const options = {
    title: {
      display: true,
      text: "Waveform Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            callback: (value) => `$${value}K`, // Add a prefix "$" and suffix "K"
          },
          scaleLabel: {
            display: true,
            labelString: "Custom Y-Axis Label", // Add a custom y-axis label
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false, // Set display to false to hide vertical grid lines
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
};

export default LineGraph;
