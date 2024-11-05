import React from "react";
import { IoIosWarning } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

SingleAlertComponent.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string,
  pulse: PropTypes.bool
};

export function SingleAlertComponent({ label, pulse, time = "" }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/inf-module/alarm-list")}
      className="shadow-3d h-full flex items-center gap-2 cursor-pointer hover:bg-primary-foreground/70"
    >
      <div className="px-2">
        <IoIosWarning
          className={`text-destructive text-2xl ${pulse && "animate-pulse"}`}
        />
      </div>
      <div className="flex gap-6 text-sm items-center">
        <p className="w-[18ch]">{time}</p>
        {/*<p className="font-semibold max-w-[50ch] truncate">*/}
        <p className="font-semibold truncate">{label}</p>
      </div>
    </div>
  );
}
