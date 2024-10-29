import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import coolingSystemAPI from "@/infrastructure/cooling-system";
import { REFRESH_TIME } from "@/lib/constants";
import CoolingSystemDiagramSvg from "./cooling-system-diagram-svg";

function CoolingSystem() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetchAllData();
    const id = setInterval(fetchAllData, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchAllData = async () => {
    const [data, error] = await coolingSystemAPI.getAllDataAPI();
    if (error) {
      console.error("ERR", error);
    }
    setAllData(data);
  };

  return (
    <PageWrapper className="">
      <Title title="Cooling System And Flow Indication" className="uppercase" />
      <CoolingSystemDiagramSvg data={allData} />
    </PageWrapper>
  );
}

CoolingSystem.propTypes = {};

export default CoolingSystem;
