import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import CoolingSystemDiagramSvg from "./cooling-system-diagram-svg";

function CoolingSystem(props) {
  return (
    <PageWrapper className="">
      <Title title="Cooling System And Flow Indication" className="uppercase" />
      <CoolingSystemDiagramSvg />
    </PageWrapper>
  );
}

CoolingSystem.propTypes = {};

export default CoolingSystem;
