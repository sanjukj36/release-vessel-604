import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import AirCompressorSystemDiagram from "./air-compressor-diagram-svg";

function AirCompressorSystem(props) {
  return (
    <PageWrapper className="">
      <Title title="Air Compressor System" className="uppercase" />
      <AirCompressorSystemDiagram />
    </PageWrapper>
  );
}

AirCompressorSystem.propTypes = {};

export default AirCompressorSystem;
