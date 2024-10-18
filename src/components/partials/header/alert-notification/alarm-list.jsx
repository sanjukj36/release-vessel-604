import { IoIosWarning } from "react-icons/io";
import { SingleAlertComponent } from "./single-alert-component";

export function AlarmList() {
  return (
    <div className="w-full flex flex-col">
      {[1, 2, 3, 4, 5, 6].map((item, key) => (
        <SingleAlertComponent key={key} />
      ))}
    </div>
  );
}
