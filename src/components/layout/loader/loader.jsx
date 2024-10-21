import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "../page-wrapper";
import { Spinner } from "./spinner";
import "./loader.css";

LoaderComponent.propTypes = {};

export default function LoaderComponent(props) {
  return (
    <PageWrapper className="flex items-center justify-center flex-col gap-2 bg-primary/50">
      <Spinner />
    </PageWrapper>
  );
}
