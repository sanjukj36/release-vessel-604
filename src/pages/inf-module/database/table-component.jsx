import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { RESPONSE_DATABASE } from "@/dummy/responseInfModuleDatabase";
import { getDatabaseFileStatusAPI } from "@/infrastructure/inf-module/data-base";

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

export function TableComponent(props) {
  const [dataBaseFile, setDataBaseFile] = useState(null);
  useEffect(() => {
    fetchDataBaseFileData();
  }, []);

  const fetchDataBaseFileData = async () => {
    const [data, err] = await getDatabaseFileStatusAPI();
    console.log({ data, err });
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
