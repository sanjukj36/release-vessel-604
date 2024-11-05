import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { urls } from "@/url/url";

export function NavigationMenu() {
  const { pathname } = useLocation();
  const [selection, setSelection] = useState(() => {
    try {
      const currentItem = urls.find(
        item => item.url === pathname?.split("/")[1]
      );
      return currentItem?.url ?? "";
    } catch (err) {
      return "";
    }
  });
  const navigate = useNavigate();

  const handleNavigation = item => {
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
