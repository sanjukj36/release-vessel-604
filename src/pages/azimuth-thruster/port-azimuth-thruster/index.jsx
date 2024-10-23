import { useEffect, useState } from "react";
import thrusterImage from "@/assets/images/azimuth.png";
import { ThrusterCardList } from "@/components/common/thruster-card-list";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_PORT_PROPULSION } from "@/dummy/responsePortPropulsion";
import { portAPI } from "@/infrastructure/azhimuth-thruster";
import { REFRESH_TIME } from "@/lib/constants";

PortAzhimuthThruster.propTypes = {};

function PortAzhimuthThruster() {
  const [col1Data, setCol1Data] = useState([]);
  const [col2Data, setCol2Data] = useState([]);
  const [col3Data, setCol3Data] = useState([]);
  const [col1Loading, setCol1DataLoading] = useState(false);
  const [col2Loading, setCol2DataLoading] = useState(false);
  const [col3Loading, setCol3DataLoading] = useState(false);

  useEffect(() => {
    makeAllApiCalls();
    const id = setInterval(makeAllApiCalls, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const makeAllApiCalls = () => {
    fetchCol1Data();
    fetchCol2Data();
    fetchCol3Data();
  };

  const fetchCol1Data = async () => {
    setCol1DataLoading(true);
    const [data, err] = await portAPI.default.getPortCol1DataAPI();
    if (data) {
      setCol1Data(data);
    }
    setCol1DataLoading(false);
  };

  const fetchCol2Data = async () => {
    setCol2DataLoading(true);
    const [data, err] = await portAPI.default.getPortCol2DataAPI();
    if (data) {
      setCol2Data(data);
    }
    setCol2DataLoading(false);
  };

  const fetchCol3Data = async () => {
    setCol3DataLoading(true);
    const [data, err] = await portAPI.default.getPortCol3DataAPI();
    if (data) {
      setCol3Data(data);
    }
    setCol3DataLoading(false);
  };
  return (
    <PageWrapper className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto_1fr] gap-2 gap-y-0">
      <Title className="col-span-3" title="PORT AZIMUTH THRUSTER" />
      <ThrusterCardList loading={col1Loading} data={col1Data} />
      <ThrusterCardList
        loading={col2Loading}
        data={col2Data}
        image={thrusterImage}
        imageAlign="center"
      />
      <ThrusterCardList loading={col3Loading} data={col3Data} />
    </PageWrapper>
  );
}

export default PortAzhimuthThruster;
