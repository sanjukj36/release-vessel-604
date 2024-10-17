import React from "react";
import PropTypes from "prop-types";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import AlarmTable from "./alarm-table";

function AlarmList(props) {
  const alarmList = [
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" },
    { label: "Alarm 1", time: "23 min ago" }
  ];
  return (
    <PageWrapper className="grid grid-cols-2 gap-2 grid-rows-[auto,1fr]">
      <Title title="Alarm List" className="uppercase col-span-2" />
      <AlarmTable title="Realtime Alarms" data={alarmList} />
      <AlarmTable title="Historical Alarms" data={alarmList} />
    </PageWrapper>
  );
}

AlarmList.propTypes = {};

export default AlarmList;
