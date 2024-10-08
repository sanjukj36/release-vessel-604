import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

PieChart.propTypes = {};

export function PieChart({ data }) {
  const [chartData, setChartData] = useState({
    series: [data?.free_storage, data?.used_storage],
    options: {
      chart: {
        width: "100%",
        type: "pie"
      },
      labels: ["Free", "Used"],
      theme: {
        monochrome: {
          enabled: true,
          color: "#002b6b",
          shadeTo: "dark",
          shadeIntensity: 0.6,
          reverse: true
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -20
          }
        }
      },
      title: {
        // text: "Total Storage: " + Math.floor(data?.total_storage) + " Gb",
        text: ""
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          // return val.toFixed(1) + '%'
          return [name, val.toFixed(1) + "%"];
          // return val + 'gb'
        }
      },
      legend: {
        show: false,
        formatter(val) {
          return val + " Storage";
        }
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      },
      tooltip: {
        enabled: true,
        y: {
          formatter(val) {
            return Math.floor(val) + " Gb";
          }
        },
        x: {
          show: false
        }
      }
    }
  });

  useEffect(() => {
    if (data) {
      setChartData({
        ...chartData,
        series: [data?.free_storage, data?.used_storage]
      });
    }
  }, [data]);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={190}
      />
    </div>
  );
}
