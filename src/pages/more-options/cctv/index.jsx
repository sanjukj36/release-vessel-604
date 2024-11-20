import React, { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { CAMERA } from "@/lib/video-urls";
import { useStore } from "@/store/more-options/cctv-store";
import { CctvSidebar } from "./component/cctv-sidebar";
import { VideoPlayer } from "./component/video-player";

CctvPage.propTypes = {};

function CctvPage() {
  const [slideShow, setSlideShow] = useState(true);
  const store = useStore(store => store);

  return (
    <div
      className={cn(
        "flex-1 p-2 grid md:grid-cols-[200px,_1fr] items-start border",
        slideShow ? " grid-cols-[100px,_1fr] " : " grid-cols-[50px,_1fr] "
      )}
    >
      {/* side bar */}
      <CctvSidebar
        className="self-stretch"
        show={slideShow}
        setShow={setSlideShow}
        data={CAMERA}
      />
      {/* camera section */}
      <div className="grid md:grid-cols-2 flex-1">
        {store.currentVideos?.map((item, index) => (
          <VideoPlayer
            key={index}
            options={item.ops}
            id={item.id}
            title={item.title}
            className="border-2 border-slate-500"
          />
        ))}
      </div>
    </div>
  );
}

export default CctvPage;
