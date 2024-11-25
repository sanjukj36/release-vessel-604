// import { SRC, SRC_PLAYBACK } from "@/utils/constants";

export const SRC = "https://rtspstream.memphis-marine.com";

export const CAMERA = [
  {
    title: "STBD AFT",
    id: 1,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera1.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "PORT FWD",
    id: 2,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera2.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "PORT MID",
    id: 3,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera3.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "FWD",
    id: 4,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera4.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "STBD MID",
    id: 5,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera5.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "AFT",
    id: 6,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera6.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "BT ROOM",
    id: 7,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera7.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "STBD FWD",
    id: 8,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera8.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "STEERING ROOM",
    id: 9,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera9.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "MAIN DECK",
    id: 10,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera10.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "BRIDGE AFT",
    id: 11,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera11.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "BRIDGE FWD",
    id: 12,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera12.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "ENGINE ROOM STBD",
    id: 13,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera13.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "ENGINE ROOM PORT",
    id: 14,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera14.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "ECR",
    id: 15,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera15.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "ENGINE ROOM FWD",
    id: 16,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera16.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  },
  {
    title: "MESS ROOM",
    id: 17,
    ops: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `${SRC}/camera17.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  }
];
