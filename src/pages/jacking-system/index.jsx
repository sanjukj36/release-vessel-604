import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import JackingSystemDiagramSvg from "./jacking-system-svg";

function JackingSystem(props) {
  return (
    <PageWrapper className="grid">
      <Title title="Jacking System" className="uppercase" />
      <JackingSystemDiagramSvg />
    </PageWrapper>
  );
}

JackingSystem.propTypes = {};

export default JackingSystem;
