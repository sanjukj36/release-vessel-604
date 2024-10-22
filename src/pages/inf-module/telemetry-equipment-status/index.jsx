import React, { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import telemetryApi from "@/infrastructure/inf-module/telemetry";
import { BandwidthComponent } from "./bandwidth-component";
import { DiskUsageComponent } from "./disk-usage-component";
import { NetworkPingStatus } from "./network-status";

function TelemetryEquipmentStatus() {
  const [transboxStorage, setTransboxStorage] = useState({
    free_storage: 10,
    total_storage: 0,
    used_storage: 0
  });
  const [mdcStorage, setMdcStorage] = useState({
    free_storage: 10,
    total_storage: 0,
    used_storage: 0
  });
  const [transboxLoading, setTransboxLoading] = useState(false);
  const [mdcStorageLoading, setMdcStorageLoading] = useState(false);

  useEffect(() => {
    fetchMdcStorageData();
    fetchTransboxStorageData();
  }, []);

  const fetchMdcStorageData = async () => {
    setMdcStorageLoading(true);
    const [data, err] = await telemetryApi.getMdcStorageAPI();
    if (data) {
      setMdcStorage(data);
    } else {
      setMdcStorage({
        free_storage: 10,
        total_storage: 0,
        used_storage: 0
      });
    }
    setMdcStorageLoading(false);
  };

  const fetchTransboxStorageData = async () => {
    setTransboxLoading(true);
    const [data, err] = await telemetryApi.getTransboxStorageAPI();
    if (data) {
      setTransboxStorage(data);
    } else {
      setTransboxStorage({
        free_storage: 10,
        total_storage: 0,
        used_storage: 0
      });
    }
    setTransboxLoading(false);
  };

  return (
    <PageWrapper className="space-y-2">
      <Title className="col-span-4" title="TELEMETRY EQUIPMENT STATUS" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <BandwidthComponent />
        <NetworkPingStatus />
        <DiskUsageComponent
          loading={transboxLoading}
          data={transboxStorage}
          title="Transbox Disk Usage"
        />
        <DiskUsageComponent
          loading={mdcStorageLoading}
          data={mdcStorage}
          title="MDC Disk Usage"
        />
      </div>
    </PageWrapper>
  );
}

TelemetryEquipmentStatus.propTypes = {};

export default TelemetryEquipmentStatus;
