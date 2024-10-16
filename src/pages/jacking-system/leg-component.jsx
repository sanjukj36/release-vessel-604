import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { ThrusterCard } from "@/components/common/thruster-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

LegComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool,
        PropTypes.string
      ]),
      unit: PropTypes.string
    })
  )
};

export function LegComponent({ className, title, data }) {
  return (
    <BoxCard variant="secondary" className={twMerge("p-1 text-sm", className)}>
      <CardHeader className="p-1">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-1 pt-0">
        {data?.length > 0 &&
          data?.map((item, key) => (
            <div
              key={key}
              className="text-sm flex w-full border-b border-b-primary/10 py-0.5 items-center"
            >
              <p className="mr-4">{item.title}</p>
              {item.unit === undefined ? (
                <Switch className="ml-auto" checked={item.value} />
              ) : (
                <>
                  <ReadOnlyInput value={`${item.value}  ${item.unit}`} />
                </>
              )}
            </div>
          ))}
      </CardContent>
    </BoxCard>
  );
}
