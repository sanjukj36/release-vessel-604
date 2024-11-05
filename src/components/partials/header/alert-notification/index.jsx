import { IoIosWarning } from "react-icons/io";
import iconChevronDoubleDown from "@/assets/icons/chevrone-single-down.svg";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useAlarms } from "@/context/alarm-context";
import { AlarmList } from "./alarm-list";
import { SingleAlertComponent } from "./single-alert-component";

AlertNotificationMenu.propTypes = {};

export function AlertNotificationMenu() {
  const { alarmList } = useAlarms();
  return (
    <div className="w-[610px] flex">
      <div className="w-full flex flex-col min-h-12">
        {alarmList?.length > 0 ? (
          alarmList
            ?.slice(0, 2)
            ?.map((item, index) => (
              <SingleAlertComponent
                key={index}
                label={item.label}
                time={item.time}
                pulse
              />
            ))
        ) : (
          <div className="shadow-3d h-full flex items-center gap-2 justify-center">
            <p>No Alerts</p>
          </div>
        )}
      </div>
      {/* <Popover side="top"> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="customDanger"
            size="fluid"
            className="h-auto flex flex-col gap-0.5 w-min items-center justify-evenly rounded-none"
          >
            <p className="font-semibold leading-none">
              {alarmList?.length || 0}
            </p>
            <div className="w-[calc(100%_+_1px)] pb-0.5">
              <img src={iconChevronDoubleDown} />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          className="PopoverContent translate-x-[-25px] translate-y-[-3.2rem]"
        >
          <AlarmList data={alarmList} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
