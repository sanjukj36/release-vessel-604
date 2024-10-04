import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import shipImage from "@/assets/MicrosoftTeams-image.png";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { Button } from "@/components/ui/button";
import { RESPONSE_DG_1 } from "@/dummy/responseDg1.js";
import { RESPONSE_DG_2 } from "@/dummy/responseDg2.js";
import { RESPONSE_DG_3 } from "@/dummy/responseDg3.js";
import { RESPONSE_DG_4 } from "@/dummy/responseDg4.js";

No1DieselGenerator.propTypes = {};

export function No1DieselGenerator() {
  const { pathname } = useLocation();
  const [allData, setAllData] = useState({});

  useEffect(() => {
    const pathnameArray = pathname.split("/").filter(item => item !== "");
    const [_, dg] = pathnameArray;

    switch (dg) {
      case "dg-1":
        getDGData(RESPONSE_DG_1);
        break;
      case "dg-2":
        getDGData(RESPONSE_DG_2);
        break;
      case "dg-3":
        getDGData(RESPONSE_DG_3);
        break;
      case "dg-4":
        getDGData(RESPONSE_DG_4);
        break;
      default:
        getDGData([]);
        break;
    }
  }, [pathname]);

  const getDGData = data => {
    setAllData(data);
  };

  return (
    <div className="p-2 space-y-2 flex-1 bg-radial">
      <div className="diesel-generator w-full gap-2">
        {/* table one section */}
        <TableComponent
          className="diesel-generator_table1 text-xs"
          data={allData?.tableOneValues}
        />
        {/* table one section end */}

        {/* image section */}
        <ImageComponent className="diesel-generator_picture" data={allData} />
        {/* image section end */}
      </div>
      {/* table two section */}
      <BottomSection data={allData} />
      {/* table two section end */}
    </div>
  );
}

TableComponent.propTypes = {
  data: PropTypes?.array,
  className: PropTypes?.string,
  variant: PropTypes?.string
};
function TableComponent({ className, data, variant }) {
  return (
    <BoxCard variant={variant} className={classNames("", className)}>
      {data?.length > 0 &&
        data?.map((item, key) => (
          <div
            key={key}
            className="flex w-full border-b border-b-primary/10 py-2 items-center"
          >
            <p>{item.title}</p>
            <input
              className={`${item.value > item?.limit ? "bg-gradient-to-b from-destructive/70 to-destructive text-destructive-foreground" : "bg-gradient-to-b from-secondary to-input text-input-foreground"} ml-auto max-w-[4em] px-2 focus:outline-none font-semibold rounded-xl text-center`}
              readOnly
              value={item.value}
              type="text"
            />
            <p className="min-w-[3em] text-end">{item.unit}</p>
          </div>
        ))}
    </BoxCard>
  );
}

ImageComponent.propTypes = {
  className: PropTypes?.string,
  data: PropTypes?.object
};
function ImageComponent({ className, data }) {
  return (
    <div
      className={classNames(
        " relative isolate flex flex-col text-sm 2xl:text-md  overflow-hidden",
        className
      )}
    >
      {/* exh gas temp cyl table*/}
      {/* <GasTempComponent data={data?.exh_gas_temp_cyl} /> */}

      <div className="grid grid-cols-[1fr,1fr,1fr] grid-rows-[1fr,1fr,1fr] text-xs gap-2 flex-grow items-start">
        <div className="col-start-1 row-start-1 row-span-3 grid grid-rows-subgrid gap-2">
          <TableComponent data={data?.imageTable2} variant="secondary" />
          <TableComponent data={data?.imageTable22} variant="secondary" />
          <TableComponent data={data?.imageTable2} variant="secondary" />
        </div>

        <div className="col-start-2 col-end-4 row-start-1 row-end-2 grid grid-cols-subgrid gap-2">
          <TableComponent data={data?.imageTable2} variant="secondary" />
          <TableComponent data={data?.imageTable22} variant="secondary" />
        </div>

        <div className="grid col-start-2 row-start-2 col-end-4 row-end-4 w-full h-full place-items-center">
          <div className="w-full relative">
            <img className="w-full" src={shipImage} alt="" />
            <TableComponent
              data={data?.windTemperature}
              variant="secondary"
              className="absolute text-xs top-[27%] left-[10%]"
            />
          </div>
        </div>

        {/* <div className="relative h-full "> */}
        {/*   <div className="absolute bottom-0 right-0 p-2 space-y-2 rounded-lg shadow-md bg-primary text-secondary"> */}
        {/*     <h3 className="font-semibold text-lg">Running Hour</h3> */}
        {/*     <div className="flex gap-2 items-center"> */}
        {/*       <button className="bg-gradient-to-t from-success/50 to-success rounded-sm px-4 py-1"> */}
        {/*         Reset */}
        {/*       </button> */}
        {/*       <input */}
        {/*         className={`bg-gradient-to-t from-muted to-secondary text-secondary-foreground ml-auto max-w-[6em] px-2 py-[2px] focus:outline-none font-semibold rounded-xl text-center`} */}
        {/*         readOnly */}
        {/*         value={162350.23} */}
        {/*         type="text" */}
        {/*       /> */}
        {/*       <p className="min-w-[2em]">H</p> */}
        {/*     </div> */}
        {/*     <div className="flex gap-2"> */}
        {/*       <p>TOTAL HOURS</p> */}
        {/*       <input */}
        {/*         className={`bg-gradient-to-t from-muted to-secondary text-secondary-foreground ml-auto max-w-[6em] px-2 py-[2px] focus:outline-none font-semibold rounded-xl text-center`} */}
        {/*         readOnly */}
        {/*         value={162350.23} */}
        {/*         type="text" */}
        {/*       /> */}
        {/*       <p className="min-w-[2em]">H</p> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
BottomSection.propTypes = {
  data: PropTypes.object
};
function BottomSection({ data }) {
  return (
    <div className="diesel-generator_table2 grid grid-cols-4 gap-2 text-sm 2xl:text-md">
      <BooleanTable data={data?.table21Values} />
      <BooleanTable data={data?.table22Values} />
      <BooleanTable data={data?.table23Values} />
      <BooleanTable data={data?.table24Values} />
    </div>
  );
}
GasTempComponent.propTypes = {
  data: PropTypes.array
};
function GasTempComponent({ data }) {
  return (
    <BoxCard
      variant="secondary"
      className="flex flex-wrap items-center justify-between px-2 w-full"
    >
      <p className="text-center font-semibold">DG DRIVE END BEARING TEMP</p>
      {data?.length > 0 &&
        data?.map((item, key) => (
          <div key={key} className={`p-2 gap-1 flex flex-col items-center`}>
            <p>NO.{item.no}</p>
            <div className="flex">
              <ReadOnlyInput value={item?.value} />
              <p className="ml-1">{item.unit}</p>
            </div>
          </div>
        ))}
    </BoxCard>
  );
}

BooleanTable.propTypes = {
  data: PropTypes.array
};
function BooleanTable({ data }) {
  return (
    <BoxCard>
      {data?.length > 0 &&
        data.map((item, key) => (
          <div
            key={key}
            className="flex gap-2 items-center w-full border-b border-b-slate-300 py-1"
          >
            <FaCircleDot
              className={`${item.status === true ? "text-success" : "text-destructive"}`}
            />
            <p className="">{item.title}</p>
          </div>
        ))}
    </BoxCard>
  );
}
