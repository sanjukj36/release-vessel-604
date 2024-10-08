import React, { useState } from "react";
import { Gauge } from "lucide-react";
import PropTypes from "prop-types";
import { GaugeChart } from "@/components/charts/gauge-chart";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

BandwidthComponent.propTypes = {
  data: PropTypes.shape({
    unit: PropTypes.string,
    speed: PropTypes.number
  })
};

export function BandwidthComponent({ data }) {
  const [gaugeData, setGaugeData] = useState(
    data?.speed !== null ? [data.speed, 100] : [0, 100]
  );

  return (
    <BoxCard className="w-full">
      <CardHeader className="p-2">
        <CardTitle className="flex gap-2 items-center">
          <div className="text-xl text-primary bg-primary/20 size-8 grid place-items-center rounded-sm shadow-lg">
            <Gauge />
          </div>
          Bandwidth Status
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <GaugeChart data={gaugeData} unit={data?.unit ?? ""} />
      </CardContent>
    </BoxCard>
  );
}
