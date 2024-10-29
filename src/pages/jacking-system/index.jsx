import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import jackingSystemAPI from "@/infrastructure/jacking-system";
import { REFRESH_TIME } from "@/lib/constants";
import JackingSystemDiagramSvg from "./jacking-system-svg";
import { LegComponent } from "./leg-component";

function JackingSystem() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetchAllData();
    const id = setInterval(fetchAllData, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchAllData = async () => {
    const [data, error] = await jackingSystemAPI.getAllDataAPI();
    if (error) {
      console.error("ERR", error);
    }
    setAllData(data);
  };
  return (
    <PageWrapper className="relative flex flex-col border-2">
      <Title title="Jacking System" className="uppercase" />
      <div className="flex justify-center flex-1 relative">
        <JackingSystemDiagramSvg />
        {allData?.alarm?.length > 0 && (
          <LegComponent
            title="Alarm"
            data={allData.alarm}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        )}
        {allData?.leg_1?.length > 0 && (
          <LegComponent
            title="LEG #1"
            data={allData.leg_1}
            className="absolute bottom-[55%] left-0 lg:left-[13%]"
          />
        )}
        {allData?.leg_2?.length > 0 && (
          <LegComponent
            title="LEG #2"
            data={allData.leg_2}
            className="absolute bottom-[55%] right-0 lg:right-[12%]"
          />
        )}
        {allData?.leg_3?.length > 0 && (
          <LegComponent
            title="LEG #3"
            data={allData.leg_3}
            className="absolute top-[55%] left-0 lg:left-[13%]"
          />
        )}
        {allData?.leg_4?.length > 0 && (
          <LegComponent
            title="LEG #4"
            data={allData.leg_4}
            className="absolute top-[55%] right-0 lg:right-[12%]"
          />
        )}
      </div>
    </PageWrapper>
  );
}

JackingSystem.propTypes = {};

export default JackingSystem;
