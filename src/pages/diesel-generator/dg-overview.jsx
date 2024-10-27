import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import { GaugeCard } from "@/components/common/gauge-card";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { ThrusterCard } from "@/components/common/thruster-card";
import { CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RESPONSE_DG_OVERVIEW } from "@/dummy/responseDgOverview";
import DgAPI from "@/infrastructure/dg";
import { REFRESH_TIME, RESPONSE_DATA_TYPE } from "@/lib/constants";

export function GEOverview() {
  const [row1Col1Data, setRow1Col1Data] = useState(null);
  const [row1Col2, setRow1Col2] = useState({ guage: null, table: null });
  const [row2Col2, setRow2Col2] = useState({ guage: null, table: null });
  const [row3Col2, setRow3Col2] = useState({ guage: null, table: null });
  const [row4Col2, setRow4Col2] = useState({ guage: null, table: null });

  useEffect(() => {
    fetchAllApis();
    const id = setInterval(fetchAllApis, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchAllApis = () => {
    fetchRow1Col1Data();
    fetchRow1Col2Data();
    fetchRow2Col2Data();
    fetchRow3Col2Data();
    fetchRow4Col2Data();
  };

  const fetchRow1Col1Data = async () => {
    const [data, error] = await DgAPI.getRow1Col1DataAPI();
    if (data) {
      setRow1Col1Data(data);
    }
  };

  const fetchRow1Col2Data = async () => {
    const [data, error] = await DgAPI.getRow1Col2DataAPI();
    if (data) {
      setRow1Col2(data);
    }
  };

  const fetchRow2Col2Data = async () => {
    const [data, error] = await DgAPI.getRow2Col2DataAPI();
    if (data) {
      setRow2Col2(data);
    }
  };

  const fetchRow3Col2Data = async () => {
    const [data, error] = await DgAPI.getRow3Col2DataAPI();
    if (data) {
      setRow3Col2(data);
    }
  };

  const fetchRow4Col2Data = async () => {
    const [data, error] = await DgAPI.getRow4Col2DataAPI();
    if (data) {
      setRow4Col2(data);
    }
  };

  return (
    <div className="w-full p-2 gap-2 grid grid-cols-2 grid-rows-4">
      <DetailsTable
        data={row1Col1Data}
        className="col-start-1 row-start-1 row-end-[-1]"
      />
      <GETableFoo title={"NO.1 G/E"} data={row1Col2} className="col-start-2" />
      <GETableFoo
        title={"NO.2 G/E"}
        data={row2Col2}
        className="col-start-2 row-start-2"
      />
      <GETableFoo
        title={"NO.3 G/E"}
        data={row3Col2}
        className="col-start-2 row-start-3"
      />
      <GETableFoo
        title={"NO.4 G/E"}
        data={row4Col2}
        className="col-start-2 row-start-4"
      />
    </div>
  );
}

function GETableFoo({ title, data, className }) {
  const { guage, table } = data;
  return (
    <BoxCard
      className={twMerge(
        "p-2 gap-1 text-xs text-primary grid grid-cols-3",
        className
      )}
    >
      <div className="col-span-3 max-w-max flex items-center gap-2">
        <h2 className="p-1 pl-0 font-semibold text-lg text-primary">{title}</h2>
      </div>
      {guage && (
        <GaugeCard
          height={120}
          data={[+guage.value, +guage.max]}
          className="p-0.5"
          title={guage.title}
          unit={guage.unit}
          variant=""
          size="small"
        />
      )}
      <DECard className="col-span-2" data={table} />
    </BoxCard>
  );
}

function DetailsTable({ valueData, booleanData, className, data }) {
  return (
    <BoxCard className={twMerge("text-xs flex flex-col gap-2 p-0", className)}>
      <table className="w-full h-full border-separate border-spacing-y-1 py-2 px-2">
        <thead>
          <tr className="font-medium">
            <td className="pl-2 border-b">ITEMS</td>
            <td className="text-center border-b">NO.1</td>
            <td className="text-center border-b">NO.2</td>
            <td className="text-center border-b">NO.3</td>
            <td className="text-center border-b px-1">NO.4</td>
          </tr>
        </thead>
        <tbody className="max-h-max gap-2">
          {data?.map((item, key) => {
            if (item.data_type === RESPONSE_DATA_TYPE.bool) {
              return <BooleanRow key={key} item={item} />;
            } else {
              return <CharData key={key} item={item} />;
            }
          })}
        </tbody>
      </table>
    </BoxCard>
  );
}

const BooleanRow = ({ item }) => {
  return (
    <tr className="">
      <td className="pl-2">{item.title}</td>
      <td className="text-center">
        <div className="flex gap-2 items-center justify-center">
          <FaCircleDot
            className={`text-sm ${item.no_1 ? "text-success" : "text-destructive"}`}
          />
        </div>
      </td>
      <td className="text-center">
        <div className="flex gap-2 items-center justify-center">
          <FaCircleDot
            className={`text-sm ${item.no_2 ? "text-success" : "text-destructive"}`}
          />
        </div>
      </td>
      <td className="text-center">
        <div className="flex gap-2 items-center justify-center">
          <FaCircleDot
            className={`text-sm ${item.no_3 ? "text-success" : "text-destructive"}`}
          />
        </div>
      </td>
      <td className="text-center rounded-r-md">
        <div className="flex gap-2 items-center justify-center">
          <FaCircleDot
            className={`text-sm ${item.no_4 ? "text-success" : "text-destructive"}`}
          />
        </div>
      </td>
    </tr>
  );
};

const CharData = ({ item }) => {
  return (
    <tr className="">
      <td className="rounded-l-md pl-2 flex">
        {item.title}
        <span className="ml-auto mr-5">{item.unit}</span>
      </td>
      <td className="text-center">
        <ReadOnlyInput
          value={item.no_1}
          variant={
            item?.no_1 > item?.max || item?.no_1 < item?.min
              ? "danger"
              : "default"
          }
          className="mx-auto"
        />
      </td>
      <td className="text-start">
        <ReadOnlyInput
          value={item.no_2}
          variant={
            item?.no_2 > item?.max || item?.no_2 < item?.min
              ? "danger"
              : "default"
          }
          className="mx-auto"
        />
      </td>
      <td className="text-start">
        <ReadOnlyInput
          value={item.no_3}
          variant={
            item?.no_3 > item?.max || item?.no_3 < item?.min
              ? "danger"
              : "default"
          }
          className="mx-auto"
        />
      </td>
      <td className="text-start">
        <ReadOnlyInput
          value={item.no_4}
          variant={
            item?.no_4 > item?.max || item?.no_4 < item?.min
              ? "danger"
              : "default"
          }
          className="mx-auto"
        />
      </td>
    </tr>
  );
};

function DECard({ data, className }) {
  return (
    <CardContent className={twMerge("p-2 py-0", className)}>
      {data?.length > 0 &&
        data?.map((item, key) => (
          <div
            key={key}
            className="text-sm flex w-full border-b border-b-primary/10 py-1 items-center"
          >
            <p>{item.title}</p>
            {item.data_type === RESPONSE_DATA_TYPE.bool ? (
              <Switch className="ml-auto" checked={item.value} />
            ) : (
              <>
                <ReadOnlyInput value={item.value} />
                <p className="min-w-[2em] text-end">{item.unit}</p>
              </>
            )}
          </div>
        ))}
    </CardContent>
  );
}
