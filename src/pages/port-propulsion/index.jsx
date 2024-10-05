import { useState } from "react";
import thrusterImage from "@/assets/images/azimuth.png";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { RESPONSE_BOW_THRUSTER_OVERVIEW } from "@/dummy/responseBowThruster";
import { RESPONSE_PORT_PROPULSION } from "@/dummy/responsePortPropulsion";
import { ThursterCardList } from "./thruster-card-list";

const TITLE = "PORT AZIMUTH THRUSTER";

PortPropulsion.propTypes = {};

const b1PitchAlarms = [];

const b2PitchAlarms = [];

//TODO:
// 1. Divide the UI into Components.
function PortPropulsion() {
  const [b1ControlSystemAlamrs, setB1ControlSystemAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b1ControlSystemAlamrs
  );
  const [b2ControlSystemAlamrs, setB2ControlSystemAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b2ControlSystemAlamrs
  );
  const [b2MotorAlamrs, setB2MotorAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b2MotorAlamrs
  );
  const [b1MotorAlamrs, setB1MotorAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b1MotorAlamrs
  );
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

export default PortPropulsion;
