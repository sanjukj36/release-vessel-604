import React, { useEffect } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_TES } from "@/dummy/responseTelemetryEquipmenmtStatus";
import { getBandWidthStatusAPI } from "@/infrastructure/inf-module/all-api";
import { BandwidthComponent } from "./bandwidth-component";
import { DiskUsageComponent } from "./disk-usage-component";
import { NetworkPingStatus } from "./network-status";

function TelemetryEquipmentStatus(props) {
  useEffect(() => {
    fetchBandWidthData();
  }, []);

  const fetchBandWidthData = async () => {
    const [data, err] = await getBandWidthStatusAPI();
    if (err) {
      console.log(err.message);
    }
  };

  return (
    <PageWrapper className="space-y-2">
      <Title className="col-span-4" title="TELEMETRY EQUIPMENT STATUS" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <BandwidthComponent data={RESPONSE_TES.bandwidthStatus} />
        <NetworkPingStatus data={RESPONSE_TES.pingStatus} />
        <DiskUsageComponent
          data={RESPONSE_TES.mdcDiskUsage}
          title="MDC Disk Usage"
        />
        <DiskUsageComponent
          data={RESPONSE_TES.transboxDiskUsage}
          title="Transbox Disk Usage"
        />
      </div>
    </PageWrapper>
  );
}

TelemetryEquipmentStatus.propTypes = {};

export default TelemetryEquipmentStatus;
