import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node
};
export function Title({ className, title }) {
  return (
    <div className={twMerge("flex justify-center", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
