import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import BilgeSystemDiagramSvg from "./bilge-system-svg.jsx";

function BilgeSystem(props) {
  return (
    <PageWrapper className="">
      <Title title="Bilge System" className="uppercase" />
      <BilgeSystemDiagramSvg />
    </PageWrapper>
  );
}

BilgeSystem.propTypes = {};

export default BilgeSystem;
