import React, { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ThrusterCard } from "@/components/common/thruster-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ThursterCardList({ title, data, image }) {
  return (
    <BoxCard variant="secondary" className="bg-transparent border-none p-0">
      <CardHeader className="items-center gap-2">
        {title && <CardTitle className="text-xl">{title}</CardTitle>}
        <div className="w-[150px]">
          <img src={image} alt="thruster" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {data?.length > 0 &&
          data?.map((item, index) => (
            <ThrusterCard
              key={index}
              title={item.title ?? ""}
              data={item.data ?? []}
              icon={item.title ? <IoSettings /> : ""}
            />
          ))}
      </CardContent>
    </BoxCard>
  );
}
