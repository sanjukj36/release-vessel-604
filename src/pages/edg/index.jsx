import React from "react";
import PropTypes from "prop-types";
import dgImage from "@/assets/images/diesel-generator.png";
import { GaugeCard } from "@/components/common/gauge-card";
import { ThrusterCard } from "@/components/common/thruster-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_EDG } from "@/dummy/responseEdg";

Edg.propTypes = {};

export function Edg() {
  return (
    <PageWrapper className="grid grid-cols-6 grid-rows-[auto,auto,auto,auto] gap-y-2">
      <Title title="EDG" className="col-span-6" />
      <div className="col-span-6 row-span-3 grid grid-cols-subgrid grid-rows-subgrid gap-2">
        <GaugeCard
          data={[60, 100]}
          className="col-start-2"
          title="SYSTEM CONTROL VOLTAGE"
          unit={"V"}
        />
        <GaugeCard
          data={[60, 100]}
          className="col-start-3"
          title="L.O. PRESSURE"
          unit={"Mpa"}
        />
        <GaugeCard
          data={[60, 100]}
          className="col-start-4"
          title="L.O. TEMPERATURE"
          unit={"°C"}
        />
        <GaugeCard
          data={[60, 100]}
          className="col-start-5"
          title="COOLANT TEMERATURE"
          unit={"°C"}
        />
        <ThrusterCard
          className="col-start-6"
          title={RESPONSE_EDG.edg_state_alarm.title}
          data={RESPONSE_EDG.edg_state_alarm.data}
        />
        <ThrusterCard
          className="col-start-1 col-end-2 row-start-[-2] row-end-[-1]"
          title={RESPONSE_EDG.gen_parameter.title}
          data={RESPONSE_EDG.gen_parameter.data}
        />
        <div className="col-start-2 col-end-[-1] row-start-2 row-end-[-1] flex justify-center items-center">
          <img src={dgImage} className="w-[90%]" />
        </div>
        <GaugeCard
          variant="secondary"
          data={[60, 100]}
          className="col-start-5 col-end-6 row-start-[-3] row-end-[-2] translate-y-1/2 place-self-start"
          title="ENGINE RPM"
          unit={"rpm"}
          titleSide="bottom"
        />
      </div>
    </PageWrapper>
  );
}
