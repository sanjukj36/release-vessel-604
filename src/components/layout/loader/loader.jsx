import React, { useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "../page-wrapper";
import { Spinner } from "./spinner";
import "./loader.css";
import DataNotFound from "./data-not-found";
import Error from "./error";

LoaderComponent.propTypes = {};

export default function LoaderComponent(props) {
  const [isSpinner, setIsSpinner] = useState(false);
  const [isError, setError] = useState(true);
  const [isDataNotFount, setDataNotFount] = useState(true);
  return (
    <PageWrapper className="flex items-center justify-center flex-col gap-2 bg-accent">
      {isSpinner ? <Spinner /> : <></>}
      {isError ? <Error /> : <></>}
      {isDataNotFount ? <DataNotFound /> : <></>}
    </PageWrapper>
  );
}
