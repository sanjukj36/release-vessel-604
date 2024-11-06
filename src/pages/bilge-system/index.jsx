import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import bilgeSystemAPI from "@/infrastructure/bilge-system";
import { REFRESH_TIME } from "@/lib/constants";
import BilgeSystemDiagramSvg from "./bilge-system-svg.jsx";

function BilgeSystem() {
  const [allData, setAllData] = useState({});

  useEffect(() => {
    fetchAllData();
    const id = setInterval(fetchAllData, REFRESH_TIME);
    return () => clearInterval(id);
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
