import React, { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ThrusterCard } from "@/components/common/thruster-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ThrusterCardList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      unit: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
      ])
    })
  ),
  image: PropTypes.string,
  imageAlign: PropTypes.oneOf(["top", "center"]),
  loading: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string)
};
export function ThrusterCardList({
  title,
  data,
  image,
  imageAlign = "top",
  loading,
  error
}) {
  return (
    <BoxCard variant="secondary" className="bg-transparent border-none p-0">
      {/* {imageAlign === "center" && ( */}
      {/*   <CardContent className="space-y-2"> */}
      {/*     {data?.length > 0 && */}
      {/*       data?.map((item, index) => ( */}
      {/*         <ThrusterCard */}
      {/*           loading={loading} */}
      {/*           key={index} */}
      {/*           title={item.title ?? ""} */}
      {/*           data={item.data ?? []} */}
      {/*           icon={item.title ? <IoSettings /> : ""} */}
      {/*         /> */}
      {/*       ))} */}
      {/*   </CardContent> */}
      {/* )} */}
      {title ||
        (image && (
          <CardHeader className="items-center gap-2">
            {title && <CardTitle className="text-xl">{title}</CardTitle>}
            {image && (
              <div className="w-[250px]">
                <img src={image} alt="thruster" />
              </div>
            )}
          </CardHeader>
        ))}
      <CardContent className="space-y-2">
        {error?.map((err, index) => (
          <BoxCard variant="secondary" key={index}>
            {err}
          </BoxCard>
        ))}
        {data?.length > 0 &&
          data?.map((item, index) => (
            <ThrusterCard
              loading={loading}
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
