import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { DataList } from "./data-list";
import { SearchComponent } from "./search-component";

function Miscellaneous(props) {
  return (
    <PageWrapper>
      <Title title="Miscellaneous" className="uppercase" />
      <SearchComponent />
      <DataList />
    </PageWrapper>
  );
}

Miscellaneous.propTypes = {};

export default Miscellaneous;
