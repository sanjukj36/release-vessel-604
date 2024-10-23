import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import "./search-component.css";
import { useDebounce } from "@/hooks/use-debounce";
import { useStore } from "@/store/miscellaneous";

SearchComponent.propTypes = {
  className: PropTypes.string
};

export function SearchComponent({ className }) {
  const [searchInput, setSearchInput] = useState("");
  const searchBounceValue = useDebounce(searchInput, 400);
  const inputRef = useRef(null);

  const store = useStore(store => store);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  // Filtering the data.
  useEffect(() => {
    const { data, setFilteredData } = store;

    const filteredData = data?.filter(x =>
      x?.title.toLowerCase().includes(searchBounceValue.toLowerCase())
    );
    setFilteredData(filteredData);
  }, [searchBounceValue, store.data]);

  // handling adding and removing animation classess
  const handleClick = () => {
    const { current: inputElement } = inputRef;
    if (inputElement) {
      if (inputElement.classList.contains("active")) {
        inputElement.classList.remove("active");
        inputElement.classList.add("deactive");
        setTimeout(() => {
          setSearchInput("");
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
          setSearchInput("");
        }, 400);
      }
    }
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
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>
  );
}
