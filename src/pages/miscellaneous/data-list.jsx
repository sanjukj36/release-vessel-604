import React from "react";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

DataList.propTypes = {};

const data = [
  {
    title: "Speed",
    value: 23.9,
    unit: "rpm",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Coolant Temperature",
    value: null,
    unit: "°C",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Right Exhaust Temp.(Before T/c)",
    value: null,
    unit: "°C",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Left Exhaust Temp.(Before T/c)",
    value: null,
    unit: "°C",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Fuel Rate",
    value: null,
    unit: "L/h",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Engine Hours",
    value: false,
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "L.O. Filter diff.Pressure",
    value: null,
    unit: "kPa",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "System Voltage",
    value: null,
    unit: "V",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Engine Load Factor",
    value: null,
    unit: "%",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Crankcase Pressure",
    value: null,
    unit: "kPa",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Aftercooler Coolant Temperature",
    value: null,
    unit: "°C",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Total Fuel Used",
    value: null,
    unit: "kL",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Turbocharger  2 Boost Pressure",
    value: null,
    unit: "kPa",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "F.o. Filter Diff.Pressure",
    value: null,
    unit: "kPa",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  },
  {
    title: "Coolant Pressure",
    value: null,
    unit: "kPa",
    min: "0",
    max: "1",
    data_type: "VARCHAR(50)"
  }
];

export function DataList(props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 mt-2">
      {data?.length > 0 &&
        data?.map((item, index) => <DataCard data={item} key={index} />)}
    </div>
  );
}

DataCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
  })
};
function DataCard({ data }) {
  return (
    <BoxCard className="p-2 flex items-center text-sm">
      <p>{data?.title}</p>
      {data.unit === undefined ? (
        <Switch className="ml-auto" checked={data.value} />
      ) : (
        <>
          <ReadOnlyInput value={data.value} />
          <p className="min-w-[3em] text-end">{data.unit}</p>
        </>
      )}
    </BoxCard>
  );
}
