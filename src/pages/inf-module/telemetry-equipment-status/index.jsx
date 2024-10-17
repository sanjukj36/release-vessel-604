import React, { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { RESPONSE_TES } from "@/dummy/responseTelemetryEquipmenmtStatus";
import {
  getBandWidthStatusAPI,
  getPingStatusAPI,
  getTransboxStorageAPI
} from "@/infrastructure/inf-module/telemtry-equipment-status";
import { BandwidthComponent } from "./bandwidth-component";
import { DiskUsageComponent } from "./disk-usage-component";
import { NetworkPingStatus } from "./network-status";

function TelemetryEquipmentStatus(props) {
  const [bandWidthStatus, setBandWidthStatus] = useState(null);
  const [pingStatus, setPingStatus] = useState(null);
  const [transboxStorage, setTransboxStorage] = useState(null);
  const [mdcStorage, setMdcStorage] = useState(null);

  useEffect(() => {
    fetchBandWidthData();
    fetchPingStatusData();
    fetchTransboxStorageData();
  }, []);

  const fetchBandWidthData = async () => {
    const [data, err] = await getBandWidthStatusAPI();
    if (err) {
      setBandWidthStatus(null);
    } else {
      setBandWidthStatus(data);
    }
  };

  const fetchPingStatusData = async () => {
    const [data, err] = await getPingStatusAPI();
    if (err) {
      setPingStatus(null);
    } else {
      setPingStatus(data);
    }
  };

  const fetchTransboxStorageData = async () => {
    const [data, err] = await getTransboxStorageAPI();
    if (err) {
      setTransboxStorage(null);
    } else {
      setTransboxStorage(data);
    }
  };

  return (
    <PageWrapper className="space-y-2">
      <Title className="col-span-4" title="TELEMETRY EQUIPMENT STATUS" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {bandWidthStatus && <BandwidthComponent data={bandWidthStatus} />}
        {pingStatus && <NetworkPingStatus data={pingStatus} />}
        {transboxStorage && (
          <DiskUsageComponent
            data={transboxStorage}
            title="Transbox Disk Usage"
          />
        )}
        <DiskUsageComponent
          data={RESPONSE_TES.mdcDiskUsage}
          title="MDC Disk Usage"
        />
      </div>
    </PageWrapper>
  );
}

TelemetryEquipmentStatus.propTypes = {};

export default TelemetryEquipmentStatus;
