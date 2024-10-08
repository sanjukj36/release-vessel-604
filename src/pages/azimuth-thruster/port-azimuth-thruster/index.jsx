import { useState } from "react";
import thrusterImage from "@/assets/images/azimuth.png";
import { ThrusterCardList } from "@/components/common/thruster-card-list";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_PORT_PROPULSION } from "@/dummy/responsePortPropulsion";

PortAzhimuthThruster.propTypes = {};

function PortAzhimuthThruster() {
  return (
    <PageWrapper className="flex flex-col">
      <Title title="PORT AZIMUTH THRUSTER" />
      <div className="flex-1 grid grid-cols-[1fr_1fr_1fr] gap-2 gap-y-0">
        <ThrusterCardList
          title={"AZIMUTH THRUSTER"}
          data={RESPONSE_PORT_PROPULSION.col1}
          image={thrusterImage}
        />

        <ThrusterCardList
          title={"AZIMUTH THRUSTER"}
          data={RESPONSE_PORT_PROPULSION.col2}
          image={thrusterImage}
        />
        <ThrusterCardList
          title={"AZIMUTH THRUSTER"}
          data={RESPONSE_PORT_PROPULSION.col3}
          image={thrusterImage}
        />
      </div>
    </PageWrapper>
  );
}

export default PortAzhimuthThruster;
