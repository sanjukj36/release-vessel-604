import { useState } from "react";
import thrusterImage from "@/assets/images/azimuth.png";
import { ThrusterCardList } from "@/components/common/thruster-card-list";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_PORT_PROPULSION } from "@/dummy/responsePortPropulsion";

StbdAzhimuthThruster.propTypes = {};

function StbdAzhimuthThruster() {
  return (
    <PageWrapper className="grid grid-cols-[1fr_1fr_1fr] gap-2 gap-y-0">
      <Title className="col-span-3 " title="STBD AZIMUTH THRUSTER" />
      <ThrusterCardList data={RESPONSE_PORT_PROPULSION.col1} />

      <ThrusterCardList
        data={RESPONSE_PORT_PROPULSION.col2}
        image={thrusterImage}
        imageAlign="center"
      />
      <ThrusterCardList data={RESPONSE_PORT_PROPULSION.col3} />
    </PageWrapper>
  );
}

export default StbdAzhimuthThruster;
