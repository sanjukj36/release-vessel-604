import PropTypes from "prop-types";
import iconMenu from "@/assets/icons/menu.svg";
import { AlertNotificationMenu } from "./alert-notification";
import { NavigationMenu } from "./navigation-menu";

Header.propTypes = {};

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
