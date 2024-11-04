import React from "react";
import { IoIosWarning } from "react-icons/io";
import PropTypes from "prop-types";

SingleAlertComponent.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string
};

export function SingleAlertComponent(props) {
  return (
    <div className="shadow-3d h-full flex items-center gap-2">
      <div className="px-2">
        <IoIosWarning className="text-destructive text-2xl" />
      </div>
      <div className="flex gap-6 text-sm items-center">
        {/*<p className="w-[18ch]">12:35:52 17-05-2024</p> */}
        {/*<p className="font-semibold max-w-[50ch] truncate">*/}
        <p className="font-semibold truncate">
          Alert warning Alert warning alert Alert warning Alert warning alert
        </p>
      </div>
    </div>
  );
}
