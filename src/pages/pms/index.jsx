import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import { SVGPowerManagementSystem } from "@/components/diagrams/SVGPowerManagementSystem";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow
} from "@/components/ui/table";
import { RESPONSE_PW_SYSTEM } from "@/dummy/responsePMSystem";
import pmsSystemAPI from "@/infrastructure/pms-system";
import { REFRESH_TIME } from "@/lib/constants";
import SVGPmsComponent from "./svg-pms-component";

PowerManagementSystemOverview.propTypes = {};

export function PowerManagementSystemOverview() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetchAllData();
    /*
    const id = setInterval(fetchAllData, REFRESH_TIME);
    return () => clearInterval(id);
    */
  }, []);

  const fetchAllData = async () => {
    const [data, error] = await pmsSystemAPI.getAllDataAPI();
    if (error) {
      console.error("ERR", error);
    }
    setAllData(data);
  };

  return (
    <div className="p-2 pt-4 relative w-full flex items-start">
      <SVGPmsComponent data={allData} />
      {allData?.pms_690v_main_switchboard && (
        <BooleanTable
          data={allData?.pms_690v_main_switchboard}
          className="absolute bottom-8 right-[10%]"
        />
      )}
      {allData?.pms_440v_main_switchboard && (
        <BooleanTable
          data={allData?.pms_440v_main_switchboard}
          className="absolute bottom-8 left-[10%]"
        />
      )}
    </div>
  );
}

BooleanTable.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
};
function BooleanTable({ data, className }) {
  if (data && typeof data === "string") {
    return (
      <BoxCard variant="secondary" className={twMerge("", className)}>
        {data}
      </BoxCard>
    );
  }

  return (
    <BoxCard variant="secondary" className={twMerge("text-sm p-1", className)}>
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
