import { ChevronsLeftRightEllipsis } from "lucide-react";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useRecursivePolling } from "@/hooks/use-recursive-polling";
import telemetryApi from "@/infrastructure/inf-module/telemetry";

NetworkPingStatus.propTypes = {};

export function NetworkPingStatus() {
  const { data: pingStatus, loading } = useRecursivePolling(
    telemetryApi.getPingStatusAPI,
    null
  );

  return (
    <BoxCard loading={loading} className="w-full">
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
            {pingStatus?.length > 0 ? (
              pingStatus.map((item, key) => (
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
            ) : (
              <TableRow>
                <TableCell>No Data found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </BoxCard>
  );
}
