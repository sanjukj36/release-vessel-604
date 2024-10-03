import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

AreaChart.propTypes = {
  height: PropTypes.number,
  seriesData: PropTypes.array
};

export function AreaChart({ height = 350, seriesData }) {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: seriesData
      }
    ],
    options: {
      chart: {
        height: height,
        type: "area",
        toolbar: {
          show: false
        },
        zoom: false,
        tooltip: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: "smooth"
      },
      colors: ["#3c3c34"],
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        min: undefined,
        max: undefined
      },
      yaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        min: 0,
        max: undefined
      },
      tooltip: {
        enabled: true,
        shared: false,
        intersect: false,
        inverseOrder: true,
        theme: false,
        style: {
          fontSize: "12px",
          fontFamily: undefined
        },
        onDatasetHover: {
          highlightDataSeries: false
        },
        x: {
          show: true,
          format: "dd MMM",
          formatter: undefined
        },
        y: {
          show: false,
          formatter: undefined,
          title: {
            formatter: seriesName => seriesName
          }
        }
      }
    }
  });

  return (
    <div className="w-full h-full">
      <Chart options={chartData.options} series={chartData.series} />
    </div>
  );
}
