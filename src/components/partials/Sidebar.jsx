import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { hideUrls, urls } from "@/url/url";

Sidebar.propTypes = {};

export function Sidebar() {
  const { pathname } = useLocation();

  const [selectionUrl, setSelectionUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [subUrlList, setSubUrlList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = pathname.split("/")[1];
    const currentUrlObj =
      urls?.find(item => item?.url === url) ||
      hideUrls?.find(item => item?.url === url);
    if (currentUrlObj) {
      setSubUrlList(currentUrlObj?.sub);
      setTitle(currentUrlObj?.title);
    } else {
      setSubUrlList([]);
      setTitle("");
    }
  }, [pathname]);

  useEffect(() => {
    if (subUrlList?.length > 0) {
      const subUrl = pathname?.split("/")[2] ?? "";
      // setSelectionUrl(subUrlList[0]?.url);
      setSelectionUrl(subUrl);
    } else {
      setSelectionUrl("");
    }
  }, [subUrlList]);

  const handleNavigate = url => {
    setSelectionUrl(url);
    const parentPath = getParentUrl(pathname);
    navigate(parentPath + url);
  };

  const getParentUrl = url => {
    const segments = url.split("/").filter(segment => segment !== "");
    if (segments?.length > 1) {
      const newSegment = segments.splice(0, 1);
      return `/${newSegment.join("/")}/`;
    }
    return `/${segments.join("/")}/`;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-4 px-2 bg-background text-xs">
      <div className="flex flex-col gap-2">
        <p className="border-b border-primary font-semibold">{title}</p>
        <div className="flex flex-col gap-2 font-semibold">
          {subUrlList?.map((item, key) => (
            <motion.button
              onClick={() => handleNavigate(item?.url)}
              key={key}
              className={`${selectionUrl === item?.url ? "shadow-3d-inverse custom-icon-inverse" : "shadow-3d custom-icon "} py-1`}
              whileTap={{ scale: 0.95 }}
            >
              {item?.title}
            </motion.button>
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
}

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-primary py-4 text-center">
      <p className="text-xs">
        &copy; {currentYear} Memphis. All rights reserved.
      </p>
      <p className="text-xs font-semibold">AMS V0.2</p>
    </footer>
  );
};
