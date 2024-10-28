import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import airCompressorSystemAPI from "@/infrastructure/air-compressor-system";
import AirCompressorSystemDiagram from "./air-compressor-diagram-svg";

function AirCompressorSystem(props) {
  const [allData, setAllData] = useState({});
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const { data, error } =
      await airCompressorSystemAPI.getAirCompressorDataAPI();
    console.log({ data, error });
    if (!error) {
      setAllData(prev => ({ ...prev, ...data }));
    }
  };
  return (
    <PageWrapper className="">
      <Title title="Air Compressor System" className="uppercase" />
      <AirCompressorSystemDiagram data={allData} />
    </PageWrapper>
  );
}

AirCompressorSystem.propTypes = {};

export default AirCompressorSystem;
