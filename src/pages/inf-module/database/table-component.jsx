import { useEffect, useState } from "react";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { useAlarms } from "@/context/alarm-context";
import { getDatabaseFileStatusAPI } from "@/infrastructure/inf-module/data-base";
import { FILE_SEND_STATUS, FILE_STATUS, REFRESH_TIME } from "@/lib/constants";
import { formatCurrentDateTime } from "@/lib/date-util";

TableComponent.propTypes = {};

const columns = [
  {
    accessorKey: "ID",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("ID")}</div>
  },
  {
    accessorKey: "CreatedOn",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("CreatedOn")}</div>
    )
  },
  {
    accessorKey: "FileName",
    header: "Filename",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("FileName")}</div>
    )
  },
  {
    accessorKey: "TransmissionStatus",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("TransmissionStatus")}</div>
    )
  },
  {
    accessorKey: "ModifiedOn",
    header: "Send On",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ModifiedOn")}</div>
    )
  }
];

export function TableComponent() {
  const [dataBaseFile, setDataBaseFile] = useState(null);
  useEffect(() => {
    fetchDataBaseFileData();
    // const id = setInterval(fetchDataBaseFileData, REFRESH_TIME);
    const id = setInterval(fetchDataBaseFileData, 1000 * 60);
    return () => clearInterval(id);
  }, []);
  const { setAlarmList } = useAlarms();

  const fetchDataBaseFileData = async () => {
    // eslint-disable-next-line no-unused-vars
    const [data, err] = await getDatabaseFileStatusAPI();
    setDataBaseFile(data);
    if (!err && data?.length > 0) {
      checkAlarms(data);
    }
  };

  const checkAlarms = data => {
    let count = 0;
    data.forEach(item => {
      const { TransmissionStatus } = item;
      if (TransmissionStatus !== FILE_STATUS.processed) {
        count++;
      }
    });

    if (count === 10) {
      const alaram = {
        time: formatCurrentDateTime(),
        label: FILE_SEND_STATUS
      };
      setAlarmList(prev => [...prev, alaram]);
    } else {
      setAlarmList(prev => {
        const filteredItem = prev.filter(x => x.label === FILE_SEND_STATUS);
        return filteredItem;
      });
    }
  };

  return (
    <BoxCard>
      <CardContent>
        {dataBaseFile ? (
          <DataTable columns={columns} data={dataBaseFile} />
        ) : (
          <p>No Data found</p>
        )}
      </CardContent>
    </BoxCard>
  );
}
