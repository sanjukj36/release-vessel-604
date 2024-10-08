import React from "react";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

NetworkPingStatus.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      host_name: PropTypes.string,
      host: PropTypes.string,
      status: PropTypes.bool
    })
  )
};

export function NetworkPingStatus({ data }) {
  return (
    <BoxCard className="w-full">
      <CardHeader className="p-2">
        <CardTitle className="flex gap-2 items-center">
          <div className="text-xl text-primary bg-primary/20 size-8 grid place-items-center rounded-sm shadow-lg">
            <ChevronsLeftRightEllipsis />
          </div>
          Networking Ping Status
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <Table>
          <TableBody>
            {data?.length > 0
              ? data.map((item, key) => (
                  <TableRow key={key}>
                    <TableCell>
                      <p className="font-medium">{item.host_name}</p>
                      <p>{item.host}</p>
                    </TableCell>
                    <TableCell className="text-right">
                      <Switch checked={item.status} />
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </CardContent>
    </BoxCard>
  );
}
