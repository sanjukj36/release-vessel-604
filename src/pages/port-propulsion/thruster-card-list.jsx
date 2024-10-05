import React, { useEffect, useState } from "react";
import { BsFan } from "react-icons/bs";
import { CgGhost } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThrusterCard } from "./thruster-card";

export function ThursterCardList({ title, data, image }) {
  return (
    <BoxCard variant="secondary" className="bg-transparent border-none p-0">
      <CardHeader className="items-center gap-2">
        {title && <CardTitle className="text-xl">{title}</CardTitle>}
        <div className="w-[120px]">
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
