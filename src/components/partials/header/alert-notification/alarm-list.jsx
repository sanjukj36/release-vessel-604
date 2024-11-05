import { IoIosWarning } from "react-icons/io";
import PropTypes from "prop-types";
import { SingleAlertComponent } from "./single-alert-component";

AlarmList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      time: PropTypes.string // format:- hh:mm:ss dd-mm-yyyy
    })
  )
};
export function AlarmList({ data }) {
  return (
    <div className="w-full flex flex-col">
      {data?.length > 0 ? (
        data?.map((item, key) => (
          <SingleAlertComponent key={key} label={item.label} time={item.time} />
        ))
      ) : (
        <div className="shadow-3d  min-h-12 flex items-center gap-2 justify-center">
          <p>No Alerts</p>
        </div>
      )}
    </div>
  );
}
