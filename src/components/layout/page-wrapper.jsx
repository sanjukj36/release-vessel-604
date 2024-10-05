import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

PageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export function PageWrapper({ children, className }) {
  return (
    <div className={twMerge("w-full flex-1 p-4 bg-radial", className)}>
      {children}
    </div>
  );
}
