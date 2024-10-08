import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";
import { normalizeTo100, reverseNormalizeFrom100 } from "@/lib/gauge-utils";

GaugeChart.propTypes = {};

export function GaugeChart({ data, height = 220, unit = " Mbps" }) {
  const [newData, setNewData] = useState(data);
  useEffect(() => {
    setNewData(newData);
  }, [data]);

  const [chartData, setChartData] = useState({
    series: normalizeTo100(data[0], data[1]),
    options: {
      chart: {
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      colors: ["#002b6b"],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "none",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "16px"
            },
            value: {
              formatter: function (x) {
                const reverserValue = reverseNormalizeFrom100(x, newData[1]);
                return reverserValue?.toFixed(2) + unit;
              },
              color: "#111",
              fontSize: "20px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Speed"]
    }
  });

  useEffect(() => {
    if (data) {
      const series = normalizeTo100(data[0], data[1]);
      setChartData({
        ...chartData,
        series
      });
    }
  }, [data]);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={height}
      />
    </div>
  );
}
