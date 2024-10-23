import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import miscellaneousApi from "@/infrastructure/miscellaneous";
import { REFRESH_TIME } from "@/lib/constants";
import { useStore } from "@/store/miscellaneous";
import { DataList } from "./data-list";
import { SearchComponent } from "./search-component";

function Miscellaneous() {
  const store = useStore(store => store);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMiscellaneousData();
    const id = setInterval(fetchMiscellaneousData, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchMiscellaneousData = async () => {
    setLoading(true);
    const [data, err] = await miscellaneousApi.getMiscellaneousDataAPI();
    if (data) {
      store.setData(data);
      store.setFilteredData(data);
    } else {
      store.setData(null);
      store.setFilteredData(null);
    }
    setLoading(false);
  };
  return (
    <PageWrapper>
      <Title title="Miscellaneous" className="uppercase" />
      <SearchComponent />
      <DataList loading={loading} />
    </PageWrapper>
  );
}

Miscellaneous.propTypes = {};

export default Miscellaneous;
