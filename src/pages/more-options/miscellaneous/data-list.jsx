import { useEffect, useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { Switch } from "@/components/ui/switch";
import { RESPONSE_DATA_TYPE } from "@/lib/constants";
import { useStore } from "@/store/miscellaneous";

DataList.propTypes = {
  loading: PropTypes.bool
};
export function DataList({ loading }) {
  const [tableHeight, setTableHeight] = useState(() => {
    const allPadings = 32 + 32 + 50 + 55; // paddings
    const height = window.innerHeight;
    return height - allPadings || 600;
  });
  const { filteredData: data } = useStore(store => store);

  useEffect(() => {
    const changeHeight = () => {
      const allPadings = 32 + 32 + 50 + 55; // paddings
      const height = window.innerHeight;
      const tableHeight = height - allPadings;
      setTableHeight(tableHeight);
    };

    window.addEventListener("resize", changeHeight);
    return () => window.removeEventListener("resize", changeHeight);
  }, []);

  const columnWidth = 350;
  const rowHeight = 50;
  const numColumns = Math.floor(window.innerWidth / columnWidth);

  const renderCell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * numColumns + columnIndex;
    if (index >= data.length) return null;

    return (
      <div style={style} className="pr-1 pb-1">
        <DataCard data={data[index]} />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-2 mt-2 pt-2">
      {data?.length > 0 ? (
        <Grid
          columnCount={numColumns}
          columnWidth={() => columnWidth}
          height={tableHeight}
          rowCount={Math.ceil(data.length / numColumns)}
          rowHeight={() => rowHeight}
          width={window.innerWidth}
        >
          {renderCell}
        </Grid>
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
    ]),
    register_no: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })
};
function DataCard({ data }) {
  return(
        // <BoxCard className="p-4 w-full h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition">
        <BoxCard className="p-4 w-full h-full bg-white  shadow-sm hover:shadow-md transition">
     {/* <BoxCard className="p-2 flex items-center text-sm w-full h-full"> */}
  <div className="flex items-center justify-between">
    {/* Left Side: Title (truncate + tooltip) */}
    <p
      className="text-gray-700 font-medium truncate max-w-[90%]"
      title={data?.title} // 👈 shows full text on hover
    >
      {data?.title}
    </p>

    {/* Right Side: Value */}
    <div className="ml-auto min-w-[5em] max-w-min px-2 focus:outline-none font-semibold rounded-xl text-center text-nowrap bg-gradient-to-b from-secondary to-input text-accent-foreground">
    <span className="text-gray-900 font-semibold">
      {data?.value}
    </span>
    </div>
  </div>
</BoxCard>


  )
  return (
    <BoxCard className="p-2 flex items-center text-sm w-full h-full">
      <div className="flex justify-between">
        <p>{data?.title}</p>
        <ReadOnlyInput value={data.value} />
      </div>
    </BoxCard>
  );
  return (
    <BoxCard className="p-2 flex items-center text-sm w-full h-full">
      <div className="mr-2 text-muted-foreground font-semibold">
        <p>{data?.register_no}</p>
      </div>
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
