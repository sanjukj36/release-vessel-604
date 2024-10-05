import { useState } from "react";
import thrusterImage from "@/assets/images/azimuth.png";
import { ThursterCardList } from "@/components/common/thruster-card-list";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { RESPONSE_PORT_PROPULSION } from "@/dummy/responsePortPropulsion";

PortAzhimuthThruster.propTypes = {};

function PortAzhimuthThruster() {
  return (
    <PageWrapper className="grid grid-cols-[1fr_1fr_1fr] gap-2 gap-y-0">
      <div className="col-span-3 flex justify-center">
        <h1 className="text-2xl font-bold">PORT AZIMUTH THRUSTER</h1>
      </div>
      <ThursterCardList
        title={"AZIMUTH THRUSTER"}
        data={RESPONSE_PORT_PROPULSION.col1}
        image={thrusterImage}
      />

      <ThursterCardList
        title={"AZIMUTH THRUSTER"}
        data={RESPONSE_PORT_PROPULSION.col2}
        image={thrusterImage}
      />
      <ThursterCardList
        title={"AZIMUTH THRUSTER"}
        data={RESPONSE_PORT_PROPULSION.col3}
        image={thrusterImage}
      />
    </PageWrapper>
  );
}

export default PortAzhimuthThruster;
