import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import bilgeSystemAPI from "@/infrastructure/bilge-system";
import BilgeSystemDiagramSvg from "./bilge-system-svg.jsx";

function BilgeSystem() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const [data, err] = await bilgeSystemAPI.getAllDataAPI();
    if (err) {
      console.error("ERR", err);
    } else {
      setAllData(data);
    }
  };

  return (
    <PageWrapper className="">
      <Title title="Bilge System" className="uppercase" />
      <BilgeSystemDiagramSvg data={allData} />
    </PageWrapper>
  );
}

BilgeSystem.propTypes = {};

export default BilgeSystem;
