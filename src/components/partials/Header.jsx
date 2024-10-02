import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { IoIosWarning } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { urls } from "@/url/url";

import iconMenu from "@/assets/icons/menu.svg";
import iconChevronDoubleDown from "@/assets/icons/chevrone-single-down.svg";

Header.propTypes = {};
NavigationMenu.propTypes = {
  selection: PropTypes.string,
  setSelection: PropTypes.func,
};

export function Header() {
  return (
    <div className="w-full z-10 py-0.5 flex gap-2 shadow-[0_0_5px_1px_rgba(0,0,0,0.5)] bg-accent h-[55px]">
      <div className="basis-1 flex-grow h-full flex items-center p-0.5">
        <div className="hover:bg-secondary transition-colors">
          <img className="w-[40px] cursor-pointer" src={iconMenu} />
        </div>
      </div>
      <div className="basis-1 flex-grow ml-auto p-0.5">
        <AlertNotificationMenu />
      </div>
      <div className="basis-1 flex-grow ml-auto flex items-end p-0.5">
        <NavigationMenu />
      </div>
    </div>
  );
}

function AlertNotificationMenu() {
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
        <PopoverTrigger>
          <Button
            variant="customDanger"
            size="fluid"
            className="flex flex-col gap-0.5 w-min items-center justify-evenly rounded-none"
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

function NavigationMenu() {
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    setSelection(item?.url);
    navigate(item?.url);
  };

  return (
    <div className="ml-auto h-[calc(100%)] flex flex-wrap flex-col text-xs font-semibold">
      {urls.map((item, key) => (
        <motion.div
          onClick={() => handleNavigation(item)}
          whileTap={{ scale: 0.95 }}
          key={key}
          className={`${selection === item?.url ? "shadow-3d-inverse custom-icon-inverse " : "shadow-3d custom-icon "} px-4 py-0.5 cursor-pointer flex-1 flex justify-center items-center`}
        >
          <p>{item.title}</p>
        </motion.div>
      ))}
    </div>
  );
}

function AlarmList() {
  return (
    <div className="w-full flex flex-col">
      {[1, 2, 3, 4, 5, 6].map((item, key) => (
        <div
          key={key}
          className="shadow-3d py-1 custom-icon h-full flex items-center gap-2"
        >
          <div className="px-2">
            <IoIosWarning className="text-destructive text-2xl" />
          </div>
          <div className="flex gap-6 text-sm items-center">
            <p>12:35:52 17-05-2024</p>
            <p className="font-semibold">Alert warning</p>
          </div>
        </div>
      ))}
    </div>
  );
}
