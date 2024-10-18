import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import "./search-component.css";

// import { useStore } from "@/store/store"

SearchComponent.propTypes = {
  className: PropTypes.string
};

export function SearchComponent({ className }) {
  // const { dashboardData, setFilteredData } = useStore(state => state)

  // states.
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  // handling adding and removing animation classess
  const handleClick = () => {
    const { current: inputElement } = inputRef;
    if (inputElement) {
      if (inputElement.classList.contains("active")) {
        inputElement.classList.remove("active");
        inputElement.classList.add("deactive");
        setTimeout(() => {
          setSearch("");
        }, 400);
      } else {
        inputElement.classList.remove("deactive");
        inputElement.classList.add("active");
        inputElement.focus();
      }
    }
  };

  // handling keydown event and when 'Enter' press trigger api call.
  const handleKeydown = e => {
    const { key } = e;

    if (key === "Escape") {
      const { current: inputElement } = inputRef;
      if (inputElement) {
        if (inputElement.classList.contains("active")) {
          inputElement.classList.remove("active");
          inputElement.classList.add("deactive");
        }
        setTimeout(() => {
          setSearch("");
        }, 400);
      }
    }
  };

  const handleFilter = value => {
    console.log("value", value);
    setSearch(value);
    // const filteredData = dashboardData.filter(item => item?.title.toLowerCase().replace(/[.\s]/g, "").includes(value.toLowerCase()) || item?.tag.toLowerCase().replace(/[.\s]/g, "").includes(value.toLowerCase().replace(/[.\s]/g, "")))
    // console.log("filteredData");
    // setFilteredData(filteredData)
  };

  return (
    <div
      className={twMerge(
        "border-2 border-primary/40 rounded-full h-8 w-min min-w-8 p-1 flex justify-center items-center shadow-lg",
        className
      )}
    >
      <Search size={20} onClick={handleClick} className="stroke-primary " />
      <input
        ref={inputRef}
        type="text"
        className="input bg-transparent text-primary border-none outline-none"
        value={search}
        onChange={e => handleFilter(e.target.value)}
      />
    </div>
  );
}
