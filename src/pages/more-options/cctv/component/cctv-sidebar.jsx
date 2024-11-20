import toast from "react-hot-toast";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { CAMERA } from "@/lib/video-urls";
import { useStore } from "@/store/more-options/cctv-store";

CctvSidebar.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  data: PropTypes.array
};

export function CctvSidebar({ className, show, setShow, data }) {
  const store = useStore(store => store);

  const handleActiveClick = id => {
    if (!store.currentSelection) {
      return toast.error("Please select any Pane");
    }
    const findItem = CAMERA.find(x => x.id === id);
    const index = store.currentVideos.findIndex(
      x => x.id === store.currentSelection
    );
    const newVideos = [...store.currentVideos];
    if (index !== -1 && findItem) {
      newVideos.splice(index, 1, findItem);
      store.setCurrentVideos(newVideos);
    } else {
      if (!store.currentVideos.some(x => x.id === store.currentSelection)) {
        toast.error("Please select any Pane");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="grid">
        <div className="px-2 md:px-4 flex items-center gap-2 bg-primary text-primary-foreground h-6 py-2">
          <BsFillCameraVideoFill
            onClick={() => setShow(!show)}
            className="text-sm md:text-lg"
          />
          <p className="text-xs md:text-md">RAWABI 58</p>
        </div>
        {/* layout change  */}
      </div>
      <div className="flex-1 pt-3 bg-gradient-to-l from-primary/20 to-primary/50 gap-0.5 flex flex-col px-0.5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex gap-1 md:gap-3 px-2 md:px-4 py-1 items-center hover:bg-primary/20 transition-colors cursor-pointer h-6 ${store?.currentVideos?.some(x => x.id === item.id) ? "bg-gradient-to-r from-primary/50 to-primary/90  text-primary-foreground " : "text-slate-700"}`}
            onClick={() => handleActiveClick(item.id)}
          >
            <RiLiveFill
              className={`text-sm md:text-lg ${store?.currentVideos?.some(x => x.id === item.id) && "animate-pulse"}`}
            />
            <span>{!show && item?.id}</span>
            <p
              className={cn(
                "hidden md:text-md font-semibold truncate",
                show && "text-sm block"
              )}
            >
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
