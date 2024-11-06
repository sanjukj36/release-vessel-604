import { useEffect, useState } from "react";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { getDatabaseFileStatusAPI } from "@/infrastructure/inf-module/data-base";
import { REFRESH_TIME } from "@/lib/constants";

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
    const id = setInterval(fetchDataBaseFileData, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchDataBaseFileData = async () => {
    // eslint-disable-next-line no-unused-vars
    const [data, err] = await getDatabaseFileStatusAPI();
    setDataBaseFile(data);
  };

  return (
    <BoxCard>
      <CardContent>
        {dataBaseFile && <DataTable columns={columns} data={dataBaseFile} />}
      </CardContent>
    </BoxCard>
  );
}
