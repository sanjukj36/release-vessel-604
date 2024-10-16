import React from "react";
import PropTypes from "prop-types";
import { ThrusterCard } from "@/components/common/thruster-card";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import JackingSystemDiagramSvg from "./jacking-system-svg";
import { LegComponent } from "./leg-component";

function JackingSystem(props) {
  const leg1Data = [
    {
      title: "Height Signal",
      value: 1_000_000,
      limit: 100,
      unit: "m"
    },
    {
      title: "Load Signal",
      value: 0,
      limit: 100,
      unit: "Ton"
    },
    {
      title: "Run Signal",
      value: true
    },
    {
      title: "Alarm Signal",
      value: true
    },
    {
      title: "Fault Signal",
      value: false
    }
  ];
  const alarms = [
    {
      title: "Rectifier tranformer #1 temperature H",
      value: true
    },
    {
      title: "Rectifier tranformer #1 temperature H H",
      value: true
    },
    {
      title: "Rectifier tranformer #2 temperature H",
      value: true
    },
    {
      title: "Rectifier tranformer #2 temperature H H",
      value: true
    },
    {
      title: "VFD resistor temperature HH",
      value: true
    },
    {
      title: "Breake resistor temperature H",
      value: true
    },
    {
      title: "VFD cooling water temperature H",
      value: true
    }
  ];
  return (
    <PageWrapper className="relative flex flex-col">
      <Title title="Jacking System" className="uppercase" />
      <div className="flex justify-center flex-1 relative">
        <JackingSystemDiagramSvg />
        <LegComponent
          title="Alarm"
          data={alarms}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
        <LegComponent
          title="LEG #1"
          data={leg1Data}
          className="absolute top-5 left-0 lg:left-28 translate-x-1/2"
        />
        <LegComponent
          title="LEG #2"
          data={leg1Data}
          className="absolute top-5 right-0 lg:right-[30%]"
        />
        <LegComponent
          title="LEG #3"
          data={leg1Data}
          className="absolute bottom-5 left-0 lg:left-28 translate-x-1/2"
        />
        <LegComponent
          title="LEG #4"
          data={leg1Data}
          className="absolute bottom-5 right-0 lg:right-[30%]"
        />
      </div>
    </PageWrapper>
  );
}

JackingSystem.propTypes = {};

export default JackingSystem;
