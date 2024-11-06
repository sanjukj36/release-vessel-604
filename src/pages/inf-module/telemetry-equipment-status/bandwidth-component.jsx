import React, { useEffect, useState } from "react";
import { Gauge } from "lucide-react";
import PropTypes from "prop-types";
import { GaugeChart } from "@/components/charts/gauge-chart";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecursivePolling } from "@/hooks/use-recursive-polling";
import telemetryApi from "@/infrastructure/inf-module/telemetry";

BandwidthComponent.propTypes = {
  data: PropTypes.shape({
    unit: PropTypes.string,
    speed: PropTypes.number
  })
};

export function BandwidthComponent() {
  // const [bandWidthStatus, setBandWidthStatus] = useState({
  //   data: [0, 100],
  //   unit: ""
  // });
  // const [loading, setLoading] = useState(false);

  const {
    data: bandWidthStatus,
    loading,
    error
  } = useRecursivePolling(
    telemetryApi.getBandWidthStatusAPI,
    { data: [0, 100], unit: "Mbps" },
    x => ({ data: [x.speed, x.range], unit: x.unit })
  );

  /*
  useEffect(() => {
    fetchBandWidthData();
  }, []);

  const fetchBandWidthData = async () => {
    setLoading(true);
    const [data, err] = await telemetryApi.getBandWidthStatusAPI();
    if (data) {
      const { range, speed, unit } = data;
      setBandWidthStatus({ data: [speed, range], unit });
    } else {
      setBandWidthStatus({ data: [0, 100], unit: "Mbps" });
    }
    setLoading(false);
  };
  */

  return (
    <BoxCard loading={loading} className="w-full relative">
      <CardHeader className="p-2">
        <CardTitle className="flex gap-2 items-center">
          <div className="text-xl text-primary bg-primary/20 size-8 grid place-items-center rounded-sm shadow-lg">
            <Gauge />
          </div>
          Bandwidth Status
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <GaugeChart data={bandWidthStatus?.data} unit={bandWidthStatus?.unit} />
      </CardContent>
    </BoxCard>
  );
}
