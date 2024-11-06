import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { useAlarms } from "@/context/alarm-context";
import AlarmTable from "./alarm-table";

function AlarmList() {
  const { alarmList } = useAlarms();
  return (
    <PageWrapper className="grid grid-cols-2 gap-2 grid-rows-[auto,1fr]">
      <Title title="Alarm List" className="uppercase col-span-2" />
      <AlarmTable title="Realtime Alarms" data={alarmList} />
      <AlarmTable title="Historical Alarms" data={[]} />
    </PageWrapper>
  );
}

AlarmList.propTypes = {};

export default AlarmList;
