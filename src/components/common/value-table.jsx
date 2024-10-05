import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";

ValueTable.propTypes = {
  data: PropTypes?.array,
  className: PropTypes?.string,
  variant: PropTypes?.string
};

export function ValueTable({ data, className, variant }) {
  return (
    <BoxCard variant={variant} className={classNames("", className)}>
      {data?.length > 0 &&
        data?.map((item, key) => (
          <div
            key={key}
            className="flex w-full border-b border-b-primary/10 py-2 items-center"
          >
            <p>{item.title}</p>
            <input
              className={`${item.value > item?.limit ? "bg-gradient-to-b from-destructive/70 to-destructive text-destructive-foreground" : "bg-gradient-to-b from-secondary to-input text-input-foreground"} ml-auto max-w-[4em] px-2 focus:outline-none font-semibold rounded-xl text-center`}
              readOnly
              value={item.value}
              type="text"
            />
            <p className="min-w-[3em] text-end">{item.unit}</p>
          </div>
        ))}
    </BoxCard>
  );
}
