import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { urls } from "@/url/url";
import { useNavigate } from "react-router-dom";

Sidebar.propTypes = {};

export function Sidebar() {
  const { pathname } = useLocation();

  const [selection, setSelection] = useState([]);
  const [title, setTitle] = useState("");
  const [subUrl, setSubUrl] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = pathname.split("/")[1];
    const currentUrlObj = urls?.find((item) => item?.url === url);
    if (currentUrlObj) {
      setSubUrl(currentUrlObj?.sub);
      setTitle(currentUrlObj?.title);
    } else {
      setSubUrl([]);
      setTitle("");
    }
  }, [pathname]);

  useEffect(() => {
    if (subUrl?.length > 0) {
      setSelection(subUrl[0]?.url);
    }
  }, [subUrl]);

  const handleNavigate = (url) => {
    setSelection(url);
    const parentPath = getParentUrl(pathname);
    navigate(parentPath + url);
  };

  const getParentUrl = (url) => {
    const segments = url.split("/").filter((segment) => segment !== "");
    if (segments?.length > 1) {
      const newSegment = segments.splice(0, 1);
      return `/${newSegment.join("/")}/`;
    }
    return `/${segments.join("/")}/`;
  };

  return (
    <div className="w-full h-full flex flex-col py-4 px-2 bg-background text-xs">
      <div className="flex flex-col gap-2">
        <p className="border-b border-primary font-semibold">{title}</p>
        <div className="flex flex-col gap-2 font-semibold">
          {subUrl?.map((item, key) => (
            <motion.button
              onClick={() => handleNavigate(item?.url)}
              key={key}
              className={`${selection === item?.url ? "shadow-3d-inverse custom-icon-inverse" : "shadow-3d custom-icon "} py-1`}
              whileTap={{ scale: 0.95 }}
            >
              {item?.title}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
