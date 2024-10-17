import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

AlarmTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      time: PropTypes.string
    })
  )
};
function AlarmTable({ title, data }) {
  return (
    <BoxCard className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col divide-y">
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <ListItems key={index} label={item.label} time={item.time} />
          ))
        ) : (
          <p className="mt-4 text-sm text-muted-foreground text-center">
            No Alarms.
          </p>
        )}
      </CardContent>
    </BoxCard>
  );
}

AlarmTable.propTypes = {};

export default AlarmTable;

const ListItems = ({ label = "", time = "", className }) => {
  return (
    <div className={twMerge("flex justify-between py-1", className)}>
      <div className="flex gap-1 items-center text-destructive">
        <TiWarningOutline />
        <p>{label}</p>
      </div>
      <div className="text-muted-foreground text-sm">{time}</div>
    </div>
  );
};
ListItems.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string,
  className: PropTypes.string
};
