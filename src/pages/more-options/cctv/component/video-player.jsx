import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { twMerge } from "tailwind-merge";
import "@videojs/http-streaming";
// import { VIDEO_REFRESH_TIME } from "@/utils/constants";
import { useStore } from "@/store/more-options/cctv-store";

export const VideoPlayer = ({ className, id, title, ...props }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;
  const [hasError, setHasError] = useState(false);

  const store = useStore(store => store);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        { ...options, muted: true, preload: "auto" },
        () => {
          videojs.log("player is ready");
          onReady && onReady(player);
        }
      ));

      if (options.autoplay) {
        player.play().catch(err => {
          videojs.log("Autoplay prevented", err);
        });
      }

      // You could update an existing player in the `else` block here
      // on prop change, for example:
      player.on("error", () => {
        const error = player.error();
        if (error && error.code === 4) {
          setHasError(true);
        } else {
          setHasError(false);
        }
      });

      // Handle live stream refreshing
      player.on("loadedmetadata", () => {
        if (playerRef.current) {
          playerRef.current.play().catch(err => {
            videojs.log("Autoplay prevented:", err);
          });
        }
      });

      if (playerRef.current) {
        videojs.log("Refreshing player");
        const currentPlayer = playerRef.current;
        currentPlayer.src(options.sources);
        currentPlayer.load();
        if (options.autoplay) {
          currentPlayer.play().catch(err => {
            videojs.log("Autoplay prevented:", err);
            setHasError(true);
          });
        }
      }
      // const id = setInterval(() => {
      // }, VIDEO_REFRESH_TIME);

      return () => clearInterval(id);
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      data-vjs-player
      className={twMerge(
        "aspect-video w-full relative isolate",
        className
        // hasError ? "hidden" : "",
      )}
      onClick={() => store.setCurrentSelection(id)}
    >
      <div ref={videoRef} />
      {store.currentSelection === id && (
        <div className="absolute inset-0 border-2 border-lime-400 pointer-events-none"></div>
      )}
      {title && (
        <div
          className={`${store.currentSelection === id ? "bg-lime-400 " : "bg-lime-400/50"} absolute top-0 left-0 text-black`}
        >
          <h1 className="text-sm font-bold px-2">{title}</h1>
        </div>
      )}
    </div>
  );
};
