import React from "react";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RESPONSE_DATA_TYPE } from "@/lib/constants";
import { useStore } from "@/store/miscellaneous";

DataList.propTypes = {
  loading: PropTypes.bool
};
export function DataList({ loading }) {
  const { filteredData: data } = useStore(store => store);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 mt-2 pt-2">
      {data?.length > 0 ? (
        data?.map((item, index) => <DataCard data={item} key={index} />)
      ) : (
        <BoxCard
          variant="none"
          loading={loading}
          className="col-start-1 col-end-[-1]"
        >
          <p>No Data found</p>
        </BoxCard>
      )}
    </div>
  );
}

DataCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]),
    unit: PropTypes.string,
    data_type: PropTypes.oneOf([
      RESPONSE_DATA_TYPE.bool,
      RESPONSE_DATA_TYPE.char
    ])
  })
};
function DataCard({ data }) {
  return (
    <BoxCard className="p-2 flex items-center text-sm">
      <p>{data?.title}</p>
      {data?.data_type === RESPONSE_DATA_TYPE.bool ? (
        <Switch className="ml-auto" checked={data.value} />
      ) : (
        <>
          <ReadOnlyInput value={data.value} />
          <p className="min-w-[3em] text-end">{data.unit}</p>
        </>
      )}
    </BoxCard>
  );
}
