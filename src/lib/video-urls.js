// import { SRC, SRC_PLAYBACK } from "@/utils/constants";

export const SRC = "https://rtspstream.memphis-marine.com/memfs";

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
          src: `${SRC}/410e0981-20d6-45ef-a3e6-0e927ffee536.m3u8`,
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
          src: `${SRC}/ddbd0632-6cac-491d-a95f-3b7cc27713cc.m3u8`,
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
          src: `${SRC}/bd23b694-1e75-498a-8acf-a319bd660a14.m3u8`,
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
          src: `${SRC}/99dbad67-7cf2-40e6-bc44-1d7892049642.m3u8`,
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
          src: `${SRC}/90c566b5-b923-4a46-ab8c-0e9ded38123c.m3u8`,
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
          src: `${SRC}/ac53a368-3dfc-492a-ad21-4aaa50c7fa6f.m3u8`,
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
          src: `${SRC}/e12fc107-bb7e-4c41-afca-66c864f8265b.m3u8`,
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
          src: `${SRC}/bc04f3b7-d682-4cce-be2c-ebfd5cf4dca6.m3u8`,
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
          src: `${SRC}/5c5960d3-f548-428a-a667-8998b2aea715.m3u8`,
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
          src: `${SRC}/faa4d618-e56b-4677-8be1-c3a8625e7659.m3u8`,
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
          src: `${SRC}/07cdd718-1ce2-4e2b-90d8-ff50376018be.m3u8`,
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
          src: `${SRC}/48573f63-355f-4110-ba28-24d0a58db3f0.m3u8`,
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
          src: `${SRC}/1be1ed7e-455c-4720-b999-7f1b0ee6caf3.m3u8`,
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
          src: `${SRC}/9ea7f8bf-7162-41f0-8632-568289d88052.m3u8`,
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
          src: `${SRC}/a561a010-2d6d-4ace-b742-4ec1c8c29121.m3u8`,
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
          src: `${SRC}/c198e309-eed2-490b-ad70-cdcac6c2914e.m3u8`,
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
          src: `${SRC}/aa5be03c-3447-48b0-acf8-0756f29908e3.m3u8`,
          type: "application/x-mpegURL"
        }
      ]
    }
  }
];
