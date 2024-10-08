import React from "react";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { RESPONSE_DATABASE } from "@/dummy/responseInfModuleDatabase";

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
  return (
    <BoxCard>
      <CardContent>
        <DataTable columns={columns} data={RESPONSE_DATABASE} />
      </CardContent>
    </BoxCard>
  );
}
