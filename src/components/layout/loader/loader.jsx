import React, { useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "../page-wrapper";
import { Spinner } from "./spinner";
import "./loader.css";
import DataNotFound from "./data_not_found/DataNotFound";
import Error from "./error/Error";

LoaderComponent.propTypes = {};

export default function LoaderComponent(props) {
  const [isSpinner, setIsSpinner] = useState(false);
  const [isError, setError] = useState(false);
  const [isDataNotFount, setDataNotFount] = useState(true);
  return (
    <PageWrapper className="flex items-center justify-center flex-col gap-2 bg-primary/50">
      {isSpinner ? <Spinner /> : <></>}
      {isError ? <Error />: <></>}
      {isDataNotFount ? <DataNotFound/> : <></>}
    </PageWrapper>
  );
}
