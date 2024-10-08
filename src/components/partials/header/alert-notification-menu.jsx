import { IoIosWarning } from "react-icons/io";
import iconChevronDoubleDown from "@/assets/icons/chevrone-single-down.svg";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { AlarmList } from "./alarm-list";

AlertNotificationMenu.propTypes = {};

export function AlertNotificationMenu() {
  return (
    <div className="w-[610px] flex">
      <div className="w-full flex flex-col">
        <div className="shadow-3d custom-icon h-full flex items-center gap-2">
          <div className="px-2">
            <IoIosWarning className="text-destructive text-2xl" />
          </div>
          <div className="flex gap-6 text-sm items-center">
            <p>12:35:52 17-05-2024</p>
            <p className="font-semibold">Alert warning</p>
          </div>
        </div>
        <div className="shadow-3d custom-icon h-full flex items-center gap-2">
          <div className="px-2">
            <IoIosWarning className="text-destructive text-2xl" />
          </div>
          <div className="flex gap-6 text-sm items-center">
            <p>12:35:52 17-05-2024</p>
            <p className="font-semibold">Alert warning</p>
          </div>
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="customDanger"
            size="fluid"
            className="h-auto flex flex-col gap-0.5 w-min items-center justify-evenly rounded-none"
          >
            <p className="font-semibold leading-none">6</p>
            <div className="w-[calc(100%_+_1px)] pb-0.5">
              <img src={iconChevronDoubleDown} />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <AlarmList />
        </PopoverContent>
      </Popover>
    </div>
  );
}
