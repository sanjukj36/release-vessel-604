import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { GaugeChart2 } from "../charts/gauge-chart2";
import { ReadOnlyInput } from "./ReadOnlyInput";

GaugeCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
  unit: PropTypes.string,
  variant: PropTypes.string,
  titleSide: PropTypes.oneOf(["bottom", "top"]),
  height: PropTypes.number
};

export function GaugeCard({
  className,
  data = [0, 100],
  title = "",
  unit = "",
  variant = "",
  titleSide = "top",
  height,
  size = "medium"
}) {
  return (
    <BoxCard variant={variant} className={twMerge(className)}>
      {title && titleSide === "top" && (
        <CardHeader className={size === "medium" ? "p-2" : "p-0.5"}>
          <CardTitle className="text-center text-lg uppercase">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={size === "medium" ? "p-2 pt-0" : "p-0.5 pt-0"}>
        <GaugeChart2 unit={""} data={data} height={height} />
      </CardContent>
      <CardFooter className="p-2 pt-0 flex flex-col gap-2 justify-center items-center">
        {title && titleSide === "bottom" && (
          <CardTitle className="text-center">{title}</CardTitle>
        )}
        <ReadOnlyInput value={`${data[0]} ${unit}`} className="ml-0 text-lg" />
      </CardFooter>
    </BoxCard>
  );
}
