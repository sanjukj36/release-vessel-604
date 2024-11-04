import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { REFRESH_TIME } from "@/lib/constants";

const alarmContext = createContext();

AlarmContext.propTypes = {};

function AlarmContext({ children }) {
  const [sample, setSample] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSample(prev => ++prev);
    }, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  return (
    <alarmContext.Provider
      value={{
        sample
      }}
    >
      {children}
    </alarmContext.Provider>
  );
}

export const useAlarms = () => {
  const context = useContext(alarmContext);
  if (!context) {
    throw new Error("useAlarms Hook must be used in AlarmContext");
  }
  return context;
};

export default AlarmContext;
