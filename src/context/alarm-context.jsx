import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import alarmsAPI from "@/infrastructure/inf-module/alarms";
import { REFRESH_TIME } from "@/lib/constants";

const alarmContext = createContext();

AlarmContext.propTypes = {
  children: PropTypes.node
};

function AlarmContext({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchAlarms();
    const id = setInterval(fetchAlarms, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchAlarms = async () => {
    const alarms = await alarmsAPI.getAlarmsAPI();
    console.log({ alarms });
    setList(alarms);
  };

  return (
    <alarmContext.Provider
      value={{
        alarmList: list
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
