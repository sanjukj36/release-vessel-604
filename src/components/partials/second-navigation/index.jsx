import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";
import PropTypes from "prop-types";
import { useStore } from "@/store/second-navigation";
import { hideUrls } from "@/url/url";

SecondNavigation.propTypes = {};

export function SecondNavigation(props) {
  const store = useStore(store => store);

  if (!store.show) {
    return null;
  }

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.89, 1]
      }}
      className="fixed inset-0 z-100 grid place-content-center bg-primary/70"
    >
      <div className="grid grid-cols-3 gap-4 pointer-events-auto">
        {hideUrls?.map((item, index) => (
          <NavigationItem key={index} title={item.title} url={item?.url} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * @param  {{ title: string, url: string }}
 */
const NavigationItem = ({ title, url }) => {
  const navigate = useNavigate();
  const store = useStore(store => store);
  const handleClick = () => {
    navigate(url);
    store.setShow(false);
  };
  return (
    <div
      className="flex flex-col gap-1 rounded-sm bg-primary-foreground/70 items-center justify-center size-36 hover:bg-primary-foreground/90 hover:shadow-lg cursor-pointer transition-colors p-2 group hover:border-2 hover:border-primary/50"
      onClick={handleClick}
    >
      <Layers3
        className="transition-transform transform group-hover:scale-110 group-hover:rotate-180"
        size={48}
      />
      <p className="text-sm text-center font-semibold">{title}</p>
    </div>
  );
};

NavigationItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};
