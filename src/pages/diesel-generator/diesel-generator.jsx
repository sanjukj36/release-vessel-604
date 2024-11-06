import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import shipImage from "@/assets/images/diesel-generator.png";
import { BoxCard } from "@/components/common/BoxCard";
import { GaugeCard } from "@/components/common/gauge-card";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import DgAPI from "@/infrastructure/dg";
import { REFRESH_TIME } from "@/lib/constants";

DieselGenerator.propTypes = {};

export default function DieselGenerator() {
  const { pathname } = useLocation();
  const [mainTableData, setMainTableData] = useState(null);
  const [imageTableData, setImageTableData] = useState(null);
  const [bottomSectionData, setBottomSectionData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const pathnameArray = pathname.split("/").filter(item => item !== "");
      // eslint-disable-next-line no-unused-vars
      const [_, dg] = pathnameArray;

      switch (dg) {
        case "dg1":
          getDGData("dg_dg1");
          break;
        case "dg2":
          getDGData("dg_dg2");
          break;
        case "dg3":
          getDGData("dg_dg3");
          break;
        case "dg4":
          getDGData("dg_dg4");
          break;
        default:
          getDGData([]);
          break;
      }
    };

    fetchData();
    const id = setInterval(fetchData, REFRESH_TIME);

    return () => clearInterval(id);
  }, [pathname]);

  const getDGData = async url => {
    const dgDataObj = new DgAPI.DgData(url);
    const { error, data } = await dgDataObj.getAllData();

    if (error) {
      setMainTableData(null);
      setImageTableData(null);
      setBottomSectionData(null);
      return;
    }
    setMainTableData(data?.row1_col1);
    const imageTableData = {
      row1_col2_row3: data?.row1_col2_row3,
      row1_col2_row2: data?.row1_col2_row2,
      row1_col2_row1: data?.row1_col2_row1,
      row1_col3_row1: data?.row1_col3_row1,
      row1_col4_row1: data?.row1_col4_row1,
      winding: data?.winding,
      nde_bearing_temp: data?.nde_bearing_temp,
      de_bearing_temp: data?.de_bearing_temp
      // pending...
    };
    setImageTableData(imageTableData);
    const bottomSectionData = {
      row2_col1: data?.row2_col1,
      row2_col2: data?.row2_col2,
      row2_col3: data?.row2_col3,
      row2_col4: data?.row2_col4
    };
    setBottomSectionData(bottomSectionData);
  };

  return (
    <div className="p-2 space-y-2 flex-1 bg-radial">
      <div className="diesel-generator w-full gap-2">
        {/* table one section */}
        <TableComponent
          className="diesel-generator_table1 text-xs"
          data={mainTableData}
        />

        {/* image section */}
        <ImageComponent
          className="diesel-generator_picture"
          data={imageTableData}
        />
      </div>

      {/* table two section */}
      <BottomSection data={bottomSectionData} />
    </div>
  );
}

TableComponent.propTypes = {
  data: PropTypes?.array,
  className: PropTypes?.string,
  variant: PropTypes?.string
};
function TableComponent({ className, data, variant }) {
  if (!data)
    return (
      <BoxCard
        variant={variant}
        className={classNames("flex justify-center items-center", className)}
      >
        No data found.
      </BoxCard>
    );
  return (
    <BoxCard variant={variant} className={classNames("", className)}>
      {data?.length > 0 &&
        data?.map((item, key) => (
          <div
            key={key}
            className="flex w-full border-b border-b-primary/10 py-2 items-center"
          >
            <p className="mr-2">{item.title}</p>
            <input
              className={`${item.value > item?.limit ? "bg-gradient-to-b from-destructive/70 to-destructive text-destructive-foreground" : "bg-gradient-to-b from-secondary to-input text-input-foreground"} ml-auto max-w-[4em] px-2 focus:outline-none font-semibold rounded-xl text-center`}
              readOnly
              value={item.value ?? "__"}
              type="text"
            />
            <p className="min-w-[2em] text-end">{item.unit}</p>
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
  if (!data) {
    return null;
  }

  const { row1_col2_row3, winding, nde_bearing_temp, de_bearing_temp } = data;
  const [row1_col2_row1] = data?.row1_col2_row1 ?? [null];
  const [row1_col2_row2] = data?.row1_col2_row2 ?? [null];
  const [row1_col3_row1] = data?.row1_col3_row1 ?? [null];
  const [row1_col4_row1] = data?.row1_col4_row1 ?? [null];

  return (
    <div
      className={classNames(
        " relative isolate flex flex-col text-sm 2xl:text-md  overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-[1fr,1fr,1fr] grid-rows-[1fr,1fr,auto] text-xs gap-2 flex-grow items-start">
        <div className="col-start-1 row-start-1 row-span-3 grid grid-rows-subgrid gap-2">
          {/* <TableComponent data={data?.imageTable2} variant="secondary" /> */}
          {/* <TableComponent data={data?.imageTable22} variant="secondary" /> */}
          {/* <TableComponent data={data?.imageTable2} variant="secondary" /> */}

          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[ */}
          {/*     data?.row1_col2_row1 ? data?.row1_col2_row1[0]?.value : 0, */}
          {/*     data?.row1_col2_row1 ? data?.row1_col2_row1[0]?.limit : 100 */}
          {/*   ]} */}
          {/*   className="" */}
          {/*   title={data?.row1_col2_row1[0]?.title} */}
          {/*   unit={data?.row1_col2_row1[0]?.unit} */}
          {/*   variant="secondary" */}
          {/* /> */}
          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[ */}
          {/*     data?.row1_col2_row2[0]?.value, */}
          {/*     data?.row1_col2_row2[0]?.limit */}
          {/*   ]} */}
          {/*   className="" */}
          {/*   title={data?.row1_col2_row2[0]?.title} */}
          {/*   unit={data?.row1_col2_row2[0]?.unit} */}
          {/*   variant="secondary" */}
          {/* /> */}
          {!!row1_col2_row1 && (
            <GaugeCard
              height={130}
              data={[+row1_col2_row1.value, +row1_col2_row1.max]}
              className=""
              title={row1_col2_row1.title}
              unit={row1_col2_row1.unit}
              variant="secondary"
            />
          )}
          {!!row1_col2_row2 && (
            <GaugeCard
              height={130}
              data={[+row1_col2_row2.value, +row1_col2_row2.max]}
              className=""
              title={row1_col2_row2.title}
              unit={row1_col2_row2.unit}
              variant="secondary"
            />
          )}
          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[60, 100]} */}
          {/*   className="" */}
          {/*   title="L.O. TEMPERATURE" */}
          {/*   unit={"°C"} */}
          {/*   variant="secondary" */}
          {/* /> */}
          <TableComponent data={row1_col2_row3} variant="secondary" />
        </div>

        <div className="col-start-2 col-end-4 row-start-1 row-end-2 grid grid-cols-subgrid gap-2">
          {/* <TableComponent data={data?.imageTable2} variant="secondary" /> */}
          {/* <TableComponent data={data?.imageTable22} variant="secondary" /> */}
          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[ */}
          {/*     data?.row1_col3_row1[0]?.value, */}
          {/*     data?.row1_col3_row1[0]?.limit */}
          {/*   ]} */}
          {/*   className="" */}
          {/*   title={data?.row1_col3_row1[0]?.title} */}
          {/*   unit={data?.row1_col3_row1[0]?.unit} */}
          {/*   variant="secondary" */}
          {/* /> */}
          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[ */}
          {/*     data?.row1_col3_row1[0]?.value, */}
          {/*     data?.row1_col3_row1[0]?.limit */}
          {/*   ]} */}
          {/*   className="" */}
          {/*   title={data?.row1_col3_row1[0]?.title} */}
          {/*   unit={data?.row1_col3_row1[0]?.unit} */}
          {/*   variant="secondary" */}
          {/* /> */}

          {!!row1_col3_row1 && (
            <GaugeCard
              height={130}
              data={[+row1_col3_row1.value, +row1_col3_row1.max]}
              className=""
              title={row1_col3_row1.title}
              unit={row1_col3_row1.unit}
              variant="secondary"
            />
          )}

          {!!row1_col4_row1 && (
            <GaugeCard
              height={130}
              data={[+row1_col4_row1.value, +row1_col4_row1.max]}
              className=""
              title={row1_col4_row1.title}
              unit={row1_col4_row1.unit}
              variant="secondary"
            />
          )}

          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[60, 100]} */}
          {/*   className="" */}
          {/*   title="L.O. PRESSURE" */}
          {/*   unit={"Kpa"} */}
          {/*   variant="secondary" */}
          {/* /> */}
          {/* <GaugeCard */}
          {/*   height={130} */}
          {/*   data={[60, 100]} */}
          {/*   className="" */}
          {/*   title="L.O. TEMPERATURE" */}
          {/*   unit={"°C"} */}
          {/*   variant="secondary" */}
          {/* /> */}
        </div>

        <div className="grid col-start-2 row-start-2 col-end-4 row-end-4 w-full h-full place-items-center">
          <div className="w-full relative">
            <img className="w-full" src={shipImage} alt="" />

            {!!winding && (
              <TableComponent
                data={winding}
                variant="secondary"
                className="absolute text-xs top-[27%] left-[15%]"
              />
            )}

            {!!nde_bearing_temp && (
              <TableComponent
                data={nde_bearing_temp}
                variant="secondary"
                className="absolute text-xs top-[70%] left-0"
              />
            )}

            {!!de_bearing_temp && (
              <TableComponent
                data={de_bearing_temp}
                variant="secondary"
                className="absolute text-xs top-[60%] left-[35%]"
              />
            )}

            {/*
            <TableComponent
              data={data?.nde_bearing_temp}
              variant="secondary"
              className="absolute text-xs top-[70%] left-0"
            />
            <TableComponent
              data={data?.de_bearing_temp}
              variant="secondary"
              className="absolute text-xs top-[60%] left-[35%]"
            />
            */}
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
  if (!data) return null;
  const { row2_col1, row2_col2, row2_col3, row2_col4 } = data;
  return (
    <div className="diesel-generator_table2 grid grid-cols-4 gap-2 text-sm 2xl:text-md">
      <BooleanTable data={row2_col1} />
      <BooleanTable data={row2_col2} />
      <BooleanTable data={row2_col3} />
      <BooleanTable data={row2_col4} />
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
    <BoxCard className="min-h-8">
      {data?.length > 0 ? (
        data.map((item, key) => (
          <div
            key={key}
            className="flex gap-2 items-center w-full border-b border-b-slate-300 py-1"
          >
            <FaCircleDot
              className={`${item.value === true ? "text-success" : "text-destructive"}`}
            />
            <p className="">{item.title}</p>
          </div>
        ))
      ) : (
        <p>No Data found.</p>
      )}
    </BoxCard>
  );
}
