import { ALARAMS } from "@/lib/alerts";

export const checkBandwidthAlarm = data => {
  if (!data) {
    return [];
  }
  if (data?.speed > 0) {
    return [];
  }
  return [
    {
      label: ALARAMS.bandwidth
    }
  ];
};

export const checkPingAlarm = data => {
  if (!data || data?.length === 0) {
    return [];
  }

  const pingAlarms = [];

  data.forEach(item => {
    if (!item.status) {
      const obj = {};
      obj.label = item?.host_name
        ? `${item.host_name} ${ALARAMS?.ping}`
        : `${ALARAMS?.ping}`;
      pingAlarms.push(obj);
    }
  });

  return pingAlarms;
};
