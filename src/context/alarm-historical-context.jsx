import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useRecursivePolling } from "@/hooks/use-recursive-polling";
import alarmsAPI from "@/infrastructure/inf-module/alarms";

// Create Context
const AlarmHistoricalContext = createContext(null);

function AlarmHistoricalProvider({ children }) {
  const {
    data: list,
    loading,
    error,
    setData
  } = useRecursivePolling(alarmsAPI.getAlarmsHistoricalAPI, []);

  return (
    <AlarmHistoricalContext.Provider
      value={{
        alarmHistoricalList: list,
        setAlarmHistoricalList: setData,
        loading,
        error
      }}
    >
      {children}
    </AlarmHistoricalContext.Provider>
  );
}

AlarmHistoricalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Hook to consume context
export const useAlarmsHistorical = () => {
  const context = useContext(AlarmHistoricalContext);
  if (!context) {
    throw new Error("useAlarmsHistorical must be used within AlarmHistoricalProvider");
  }
  return context;
};

export { AlarmHistoricalProvider };
