import React from "react";
import { DatabaseBackup } from "lucide-react";
import PropTypes from "prop-types";
import { GaugeChart } from "@/components/charts/gauge-chart";
import { PieChart } from "@/components/charts/pie-chart";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

DiskUsageComponent.propTypes = {
  data: PropTypes.shape({
    free_storage: PropTypes.number,
    total_storage: PropTypes.number,
    used_storage: PropTypes.number
  })
};

export function DiskUsageComponent({ data, title }) {
  return (
    <BoxCard className="w-full">
      <CardHeader className="p-2">
        <CardTitle className="flex gap-2 items-center">
          <div className="text-xl text-primary bg-primary/20 size-8 grid place-items-center rounded-sm shadow-lg">
            <DatabaseBackup />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <PieChart data={data} />
      </CardContent>
    </BoxCard>
  );
}
