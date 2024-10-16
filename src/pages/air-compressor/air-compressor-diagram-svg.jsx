import * as React from "react";
import compressorImage from "./image/compressor.png";
import dgImage from "./image/dg-image.png";
import reservoirImage from "./image/reservoir.png";

const AirCompressorSystemDiagram = props => (
  <svg
    width={"99%"}
    viewBox="0 0 1920 1080"
    id="svg1"
    xmlSpace="preserve"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs1">
      <linearGradient id="linearGradient164">
        <stop
          style={{ stopColor: "#000b1b", stopOpacity: 0.98431402 }}
          offset={0}
          id="stop163"
        />
        <stop
          style={{ stopColor: "#5c9dff", stopOpacity: 1 }}
          offset={1}
          id="stop164"
        />
      </linearGradient>
      <linearGradient id="linearGradient162">
        <stop
          style={{ stopColor: "#001b45", stopOpacity: 0.98431402 }}
          offset={0}
          id="stop161"
        />
        <stop
          style={{ stopColor: "#5c9dff", stopOpacity: 1 }}
          offset={1}
          id="stop162"
        />
      </linearGradient>
      <linearGradient id="linearGradient160">
        <stop
          style={{ stopColor: "#0048b4", stopOpacity: 0.98431402 }}
          offset={0}
          id="stop159"
        />
        <stop
          style={{ stopColor: "#5c9dff", stopOpacity: 1 }}
          offset={1}
          id="stop160"
        />
      </linearGradient>
      <linearGradient id="linearGradient156">
        <stop
          style={{ stopColor: "#0046af", stopOpacity: 0.98431402 }}
          offset={0}
          id="stop155"
        />
        <stop
          style={{ stopColor: "#5c9dff", stopOpacity: 1 }}
          offset={1}
          id="stop156"
        />
      </linearGradient>
      <linearGradient id="linearGradient145">
        <stop
          style={{ stopColor: "#eebbe6", stopOpacity: 1 }}
          offset={0}
          id="stop145"
        />
        <stop
          style={{ stopColor: "#df8dd3", stopOpacity: 1 }}
          offset={1}
          id="stop146"
        />
      </linearGradient>
      <linearGradient id="linearGradient97">
        <stop
          style={{ stopColor: "#350f1d", stopOpacity: 1 }}
          offset={0}
          id="stop97"
        />
        <stop
          style={{ stopColor: "#d46c97", stopOpacity: 1 }}
          offset={1}
          id="stop98"
        />
      </linearGradient>
      <linearGradient id="linearGradient94">
        <stop
          style={{ stopColor: "#d35f8d", stopOpacity: 1 }}
          offset={0}
          id="stop94"
        />
        <stop
          style={{ stopColor: "#561530", stopOpacity: 1 }}
          offset={1}
          id="stop95"
        />
      </linearGradient>
      <linearGradient id="linearGradient44">
        <stop
          style={{ stopColor: "#b2b2b2", stopOpacity: 1 }}
          offset={0}
          id="stop44"
        />
        <stop
          style={{ stopColor: "#323232", stopOpacity: 1 }}
          offset={1}
          id="stop45"
        />
      </linearGradient>
      <filter
        style={{ colorInterpolationFilters: "sRGB" }}
        id="filter10"
        x={-0.31275832}
        y={-0.7277139}
        width={1.6206543}
        height={2.4541531}
      >
        <feFlood
          result="flood"
          in="SourceGraphic"
          floodOpacity={0.498039}
          floodColor="rgb(0,0,0)"
          id="feFlood9"
        />
        <feGaussianBlur
          result="blur"
          in="SourceGraphic"
          stdDeviation={36.532509}
          id="feGaussianBlur9"
        />
        <feOffset
          result="offset"
          in="blur"
          dx={-1.384615}
          dy={-0.153846}
          id="feOffset9"
        />
        <feComposite
          result="comp1"
          operator="in"
          in="flood"
          in2="offset"
          id="feComposite9"
        />
        <feComposite
          result="comp2"
          operator="over"
          in="SourceGraphic"
          in2="comp1"
          id="feComposite10"
        />
      </filter>
      <linearGradient id="linearGradient769">
        <stop
          style={{ stopColor: "#0044aa", stopOpacity: 0.98431402 }}
          offset={0}
          id="stop769"
        />
        <stop
          style={{ stopColor: "#5c9dff", stopOpacity: 1 }}
          offset={1}
          id="stop770"
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient44"
        id="linearGradient45"
        x1={1585.187}
        y1={888.68842}
        x2={1657.9584}
        y2={888.68842}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(34,2)"
      />
      <linearGradient
        xlinkHref="#linearGradient44"
        id="linearGradient62"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-601.46556,2)"
        x1={1585.187}
        y1={888.68842}
        x2={1657.9584}
        y2={888.68842}
      />
      <linearGradient
        xlinkHref="#linearGradient94"
        id="linearGradient95"
        x1={1493.0889}
        y1={91.221191}
        x2={1528.8892}
        y2={91.221191}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,24.689015)"
      />
      <linearGradient
        xlinkHref="#linearGradient97"
        id="linearGradient98"
        x1={1492.0889}
        y1={91.221191}
        x2={1529.8892}
        y2={91.221191}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,24.689015)"
      />
      <linearGradient
        xlinkHref="#linearGradient94"
        id="linearGradient101"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,216.69252)"
        x1={1493.0889}
        y1={91.221191}
        x2={1528.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient97"
        id="linearGradient102"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,216.69252)"
        x1={1492.0889}
        y1={91.221191}
        x2={1529.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient94"
        id="linearGradient103"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,408.68902)"
        x1={1493.0889}
        y1={91.221191}
        x2={1528.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient97"
        id="linearGradient104"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,408.68902)"
        x1={1492.0889}
        y1={91.221191}
        x2={1529.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient94"
        id="linearGradient105"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,600.68902)"
        x1={1493.0889}
        y1={91.221191}
        x2={1528.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient97"
        id="linearGradient106"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.76616996,0,0,0.76616996,357.73411,600.68902)"
        x1={1492.0889}
        y1={91.221191}
        x2={1529.8892}
        y2={91.221191}
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient107"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1460.9093,349.51262)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient108"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1460.9093,541.51262)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient164"
        id="linearGradient109"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1460.9093,733.51267)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient110"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1460.9093,474.48738)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient111"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1317.897,474.48738)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient112"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1188.897,474.48738)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient113"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,832.7935,474.48738)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient114"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1188.897,-101.54967)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient115"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,832.7935,-101.51267)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient116"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,737.11612,186.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient117"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,619.8902,-101.51267)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient118"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,619.8902,474.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient140"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1259.2567,666.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient769"
        id="linearGradient141"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1369.6239,666.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient162"
        id="linearGradient142"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1796.8739,666.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient160"
        id="linearGradient143"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,2085.3041,666.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <linearGradient
        xlinkHref="#linearGradient156"
        id="linearGradient144"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,2011.1165,585.48733)"
        x1={1846.8663}
        y1={-50.758717}
        x2={1875.3568}
        y2={-18.461061}
        spreadMethod="reflect"
      />
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient146"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
        gradientTransform="matrix(1,0,0,0.14984923,0,59.860319)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient149"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,0.14984923,0,250.86083)"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
      />
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient152"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,0.14984923,0,442.67626)"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
      />
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient155"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,0.14984923,0,634.17366)"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
      />
      <filter
        style={{ colorInterpolationFilters: "sRGB" }}
        id="filter7"
        x={-0.1525229}
        y={-0.1525229}
        width={1.3853118}
        height={1.3774168}
      >
        <feFlood
          result="flood"
          in="SourceGraphic"
          floodOpacity={0.639216}
          floodColor="rgb(0,0,0)"
          id="feFlood6"
        />
        <feGaussianBlur
          result="blur"
          in="SourceGraphic"
          stdDeviation={7.430341}
          id="feGaussianBlur6"
        />
        <feOffset
          result="offset"
          in="blur"
          dx={9.384615}
          dy={8.461538}
          id="feOffset6"
        />
        <feComposite
          result="comp1"
          operator="in"
          in="flood"
          in2="offset"
          id="feComposite6"
        />
        <feComposite
          result="comp2"
          operator="over"
          in="SourceGraphic"
          in2="comp1"
          id="feComposite7"
        />
      </filter>
      <filter
        style={{ colorInterpolationFilters: "sRGB" }}
        id="filter11"
        x={-0.13913371}
        y={-0.092879156}
        width={1.3514873}
        height={1.2298288}
      >
        <feFlood
          result="flood"
          in="SourceGraphic"
          floodOpacity={0.639216}
          floodColor="rgb(0,0,0)"
          id="feFlood7"
        />
        <feGaussianBlur
          result="blur"
          in="SourceGraphic"
          stdDeviation={7.430341}
          id="feGaussianBlur7"
        />
        <feOffset
          result="offset"
          in="blur"
          dx={9.384615}
          dy={8.461538}
          id="feOffset7"
        />
        <feComposite
          result="comp1"
          operator="in"
          in="flood"
          in2="offset"
          id="feComposite8"
        />
        <feComposite
          result="comp2"
          operator="over"
          in="SourceGraphic"
          in2="comp1"
          id="feComposite11"
        />
      </filter>
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient68"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,0.14984923,-750.63512,802.52367)"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
      />
      <radialGradient
        xlinkHref="#linearGradient145"
        id="radialGradient71"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1,0,0,0.14984923,-750.63512,250.86099)"
        cx={1469.8047}
        cy={73.950508}
        fx={1469.8047}
        fy={73.950508}
        r={49.976303}
      />
    </defs>
    <g id="layer1">
      <image
        width={284.76505}
        height={120.6956}
        preserveAspectRatio="none"
        xlinkHref={dgImage}
        id="image1"
        x={-1808.7139}
        y={63.652199}
        transform="matrix(-1,0,0,1,-2.2040816,0.07692564)"
        style={{ filter: "url(#filter10)" }}
      />
      <image
        width={284.76505}
        height={120.6956}
        preserveAspectRatio="none"
        xlinkHref={dgImage}
        id="image12"
        x={-1808.7139}
        y={63.652199}
        transform="matrix(-1,0,0,1,-2.2040816,192.07693)"
        style={{ filter: "url(#filter10)" }}
      />
      <image
        width={284.76505}
        height={120.6956}
        preserveAspectRatio="none"
        xlinkHref={dgImage}
        id="image13"
        x={-1808.7139}
        y={63.652199}
        transform="matrix(-1,0,0,1,-2.2040816,384.07693)"
        style={{ filter: "url(#filter10)" }}
      />
      <image
        width={284.76505}
        height={120.6956}
        preserveAspectRatio="none"
        xlinkHref={dgImage}
        id="image14"
        x={-1808.7139}
        y={63.652199}
        transform="matrix(-1,0,0,1,-2.2040816,576.07693)"
        style={{ filter: "url(#filter10)" }}
      />
      <g id="g284-7" transform="translate(442.61765,907.79135)">
        <path
          id="path281-5"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g283-7"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path282-6"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path283-4"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g24" transform="matrix(-1,0,0,1,2502.0447,175.91251)">
        <path
          id="path21"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-67.586411 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g id="g23" transform="translate(0,-2)">
          <path
            id="path22"
            style={{
              fill: "#565656",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path23"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g27" transform="matrix(-1,0,0,1,2502.0447,367.72012)">
        <path
          id="path24"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-67.586411 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g id="g26" transform="translate(0,-2)">
          <path
            id="path25"
            style={{
              fill: "#565656",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path26"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g30" transform="matrix(-1,0,0,1,2502.0447,559.91251)">
        <path
          id="path27"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-67.586411 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g id="g29" transform="translate(0,-2)">
          <path
            id="path28"
            style={{
              fill: "#565656",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path29"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g33" transform="matrix(-1,0,0,1,2502.0447,751.72012)">
        <path
          id="path30"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-67.586411 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g id="g32" transform="translate(0,-2)">
          <path
            id="path31"
            style={{
              fill: "#565656",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path32"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 1539,124 H 1223.9552"
        id="path33"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 1537,316 H 1223.9552"
        id="path34"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 1537,508 H 1223.9552"
        id="path35"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 1537,700 H 1223.9552"
        id="path36"
      />
      <path
        id="path37"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 747.087,700.00001 1190.1968,700"
      />
      <path
        id="path88"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 704.87486,124 H 511 c -8.28427,0 -15,6.71573 -15,15 v 546 c 0,8.28427 6.71573,15 15,15 l 193.9133,10e-6"
      />
      <path
        id="path86"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="M 1190.1968,124 H 747.18928"
      />
      <g id="g41" transform="translate(280.11765,907.79135)">
        <path
          id="path38"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g40"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path39"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path40"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g44" transform="translate(162.11765,907.79135)">
        <path
          id="path41"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g43"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path42"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path43"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <rect
        style={{
          fill: "url(#linearGradient45)",
          stroke: "#1c241f",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeDasharray: "3, 1",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect44"
        width={71.771339}
        height={27.109375}
        x={1619.687}
        y={877.13373}
      />
      <g id="g48" transform="translate(351.97167,826.79135)">
        <path
          id="path45"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g47"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path46"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path47"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <path
        style={{
          fill: "#808080",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1754.4655,891.8076 H 1805.5"
        id="path48"
      />
      <path
        style={{
          fill: "#808080",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1720.7072,891.8076 h -29.2488"
        id="path49"
      />
      <path
        style={{
          fill: "#808080",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1619.687,890.68842 h -27.7215"
        id="path50"
      />
      <path
        style={{
          fill: "#808080",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1558.2072,891.8076 h -84.2417"
        id="path53"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1769.5347,891.8076 0,-73.77162 A 7.0359761,7.0359761 45 0 0 1762.4987,811 h -98.6791"
        id="path54"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1526.6435,891.8076 V 818.09177 A 7.09177,7.09177 135 0 1 1533.7353,811 l 96.3259,0"
        id="path55"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1120,700 V 525.62628 A 17.626282,17.626282 135 0 1 1137.6263,508 h 52.5705"
        id="path56"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1120,124 V 300.49504 A 15.504961,15.504961 45 0 0 1135.505,316 h 54.6918"
        id="path57"
      />
      <path
        id="path58"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1286.1044,892 h 154.1028"
      />
      <path
        id="path90"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 928,124 v 756 c 0,6.62742 5.37258,12 12,12 h 304.2823"
      />
      <g id="g62" transform="translate(-192.84791,907.79135)">
        <path
          id="path59"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g61"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path60"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path61"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <rect
        style={{
          fill: "url(#linearGradient62)",
          stroke: "#1c241f",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeDasharray: "3, 1",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect62"
        width={71.771339}
        height={27.109375}
        x={984.22144}
        y={877.13373}
      />
      <path
        style={{
          fill: "#808080",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="m 1085.2416,891.8076 h -29.2488"
        id="path62"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 267.0668,124 H 367.4 A 16.6,16.6 45 0 1 384,140.6 V 683.4 A 16.6,16.6 135 0 1 367.4,700 H 267.0668"
        id="path81"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 233.3084,124 H 112"
        id="path82"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 233.3084,699.80761 H 112"
        id="path83"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#006f8b",
          strokeWidth: 5,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 384,412 H 496"
        id="path84"
      />
      <circle
        style={{
          fill: "url(#linearGradient95)",
          fillOpacity: 1,
          stroke: "url(#linearGradient98)",
          strokeWidth: 1.53234,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0
        }}
        id="path93"
        cx={1515.4084}
        cy={94.579948}
        r={13.714538}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "14.5218px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          fill: "#e3dbe2",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.4203,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1505.8466}
        y={99.858994}
        id="text98"
      >
        <tspan
          id="tspan98"
          x={1505.8466}
          y={99.858994}
          style={{ strokeWidth: 2.4203 }}
        >
          {"PT"}
        </tspan>
      </text>
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1515.4526,109.06066 V 121.5"
        id="path100"
      />
      <circle
        style={{
          fill: "url(#linearGradient101)",
          fillOpacity: 1,
          stroke: "url(#linearGradient102)",
          strokeWidth: 1.53234,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0
        }}
        id="circle100"
        cx={1515.4084}
        cy={286.58344}
        r={13.714538}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "14.5218px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          fill: "#e3dbe2",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.4203,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1505.8466}
        y={291.86249}
        id="text100"
      >
        <tspan
          id="tspan100"
          x={1505.8466}
          y={291.86249}
          style={{ strokeWidth: 2.4203 }}
        >
          {"PT"}
        </tspan>
      </text>
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1515.4526,301.06416 V 313.5035"
        id="path101"
      />
      <circle
        style={{
          fill: "url(#linearGradient103)",
          fillOpacity: 1,
          stroke: "url(#linearGradient104)",
          strokeWidth: 1.53234,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0
        }}
        id="circle102"
        cx={1515.4084}
        cy={478.57993}
        r={13.714538}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "14.5218px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          fill: "#e3dbe2",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.4203,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1505.8466}
        y={483.85898}
        id="text102"
      >
        <tspan
          id="tspan102"
          x={1505.8466}
          y={483.85898}
          style={{ strokeWidth: 2.4203 }}
        >
          {"PT"}
        </tspan>
      </text>
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1515.4526,493.06066 V 505.5"
        id="path102"
      />
      <circle
        style={{
          fill: "url(#linearGradient105)",
          fillOpacity: 1,
          stroke: "url(#linearGradient106)",
          strokeWidth: 1.53234,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0
        }}
        id="circle104"
        cx={1515.4084}
        cy={670.57996}
        r={13.714538}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "14.5218px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          fill: "#e3dbe2",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.4203,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1505.8466}
        y={675.85901}
        id="text104"
      >
        <tspan
          id="tspan104"
          x={1505.8466}
          y={675.85901}
          style={{ strokeWidth: 2.4203 }}
        >
          {"PT"}
        </tspan>
      </text>
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 2,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        d="M 1515.4526,685.06066 V 697.5"
        id="path104"
      />
      <path
        id="path106"
        style={{ fill: "url(#linearGradient107)", strokeWidth: 0.0996358 }}
        d="m 1153.8053,116.14275 7.9041,4.0236 7.7906,3.7966 -7.8795,3.796 -7.766,4.0983 4.398,-7.8573 z"
      />
      <path
        id="path107"
        style={{ fill: "url(#linearGradient108)", strokeWidth: 0.0996358 }}
        d="m 1153.8053,308.14275 7.9041,4.0236 7.7906,3.7966 -7.8795,3.796 -7.766,4.0983 4.398,-7.8573 z"
      />
      <path
        id="path108"
        style={{ fill: "url(#linearGradient109)", strokeWidth: 0.0996358 }}
        d="m 1153.8053,500.1428 7.9041,4.0236 7.7906,3.7966 -7.8795,3.796 -7.766,4.0983 4.398,-7.8573 z"
      />
      <path
        id="path109"
        style={{ fill: "url(#linearGradient110)", strokeWidth: 0.0996358 }}
        d="m 1153.8053,707.85725 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path110"
        style={{ fill: "url(#linearGradient111)", strokeWidth: 0.0996358 }}
        d="m 1010.793,707.85725 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path111"
        style={{ fill: "url(#linearGradient112)", strokeWidth: 0.0996358 }}
        d="m 881.793,707.85725 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path112"
        style={{ fill: "url(#linearGradient113)", strokeWidth: 0.0996358 }}
        d="m 525.6895,707.85725 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path113"
        style={{ fill: "url(#linearGradient114)", strokeWidth: 0.0996358 }}
        d="m 881.793,131.8202 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path114"
        style={{ fill: "url(#linearGradient115)", strokeWidth: 0.0996358 }}
        d="m 525.6895,131.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path115"
        style={{ fill: "url(#linearGradient116)", strokeWidth: 0.0996358 }}
        d="m 430.01212,419.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path117"
        style={{ fill: "url(#linearGradient117)", strokeWidth: 0.0996358 }}
        d="m 312.7862,131.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path118"
        style={{ fill: "url(#linearGradient118)", strokeWidth: 0.0996358 }}
        d="m 312.7862,707.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <g id="g122" transform="translate(-464.1511,139.98375)">
        <path
          id="path119"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g121"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path120"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path121"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g125" transform="translate(-689.82402,139.98375)">
        <path
          id="path122"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g124"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path123"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path124"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g128" transform="translate(-464.1511,715.98376)">
        <path
          id="path125"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g127"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path126"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path127"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g131" transform="translate(-689.82402,715.98376)">
        <path
          id="path128"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g130"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path129"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path130"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g134" transform="translate(-1045.7811,139.98375)">
        <path
          id="path131"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g133"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path132"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path133"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g137" transform="translate(-1045.7811,716.41057)">
        <path
          id="path134"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g136"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path135"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path136"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <g id="g140" transform="rotate(90,896.24248,15.773779)">
        <path
          id="path137"
          style={{
            fill: "#565656",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000000",
            strokeWidth: 2,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            paintOrder: "stroke fill markers"
          }}
          d="m 1285.2548,-31.657645 v 2.21485 h 1.0488 7.6701 v 13.651441 h 1.9901 v -13.651441 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
        />
        <g
          id="g139"
          transform="translate(0,33.928766)"
          style={{ fill: "#bcbcbc", fillOpacity: 1 }}
        >
          <path
            id="path138"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1278.0895,-59.350013 v 9.4375 9.435546 l 8.1718,-4.71875 8.1719,-4.716796 -8.1719,-4.71875 z"
          />
          <path
            id="path139"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "#000000",
              strokeWidth: 2.00001,
              strokeLinecap: "square",
              strokeLinejoin: "round",
              strokeDasharray: "none",
              paintOrder: "stroke fill markers"
            }}
            d="m 1311.8479,-59.350013 v 9.4375 9.435546 l -8.1718,-4.71875 -8.1719,-4.716796 8.1719,-4.71875 z"
          />
        </g>
      </g>
      <path
        id="path140"
        style={{ fill: "url(#linearGradient140)", strokeWidth: 0.0996358 }}
        d="m 952.15265,899.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path141"
        style={{ fill: "url(#linearGradient141)", strokeWidth: 0.0996358 }}
        d="m 1062.5198,899.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path142"
        style={{ fill: "url(#linearGradient142)", strokeWidth: 0.0996358 }}
        d="m 1489.7698,899.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path143"
        style={{ fill: "url(#linearGradient143)", strokeWidth: 0.0996358 }}
        d="m 1778.2,899.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <path
        id="path144"
        style={{ fill: "url(#linearGradient144)", strokeWidth: 0.0996358 }}
        d="m 1704.0124,818.8572 7.9041,-4.0236 7.7906,-3.7966 -7.8795,-3.796 -7.766,-4.0983 4.398,7.8573 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1345.5355}
        y={51.992733}
        id="text144"
      >
        <tspan id="tspan144" x={1345.5355} y={51.992733}>
          {"START AIR PRESSURE"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1362.5101}
        y={76.227821}
        id="text145"
      >
        <tspan id="tspan145" x={1362.5101} y={76.227821}>
          {"LALM"}
        </tspan>
      </text>
      <rect
        style={{
          fill: "url(#radialGradient146)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect145"
        width={98.952606}
        height={13.977821}
        x={1422.9801}
        y={63.422504}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1471.6595}
        y={74.382782}
        id="text146"
      >
        <tspan id="tspan146" x={1471.6595} y={74.382782}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1345.5355}
        y={242.99324}
        id="text147"
      >
        <tspan id="tspan147" x={1345.5355} y={242.99324}>
          {"START AIR PRESSURE"}
        </tspan>
      </text>
      <path
        id="circle147"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 1352.6406,255.35352 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1362.5101}
        y={267.22833}
        id="text148"
      >
        <tspan id="tspan148" x={1362.5101} y={267.22833}>
          {"LALM"}
        </tspan>
      </text>
      <rect
        style={{
          fill: "url(#radialGradient149)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect148"
        width={98.952606}
        height={13.977821}
        x={1422.9801}
        y={254.42302}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1471.6595}
        y={265.3833}
        id="text149"
      >
        <tspan id="tspan149" x={1471.6595} y={265.3833}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1345.5355}
        y={434.80865}
        id="text150"
      >
        <tspan id="tspan150" x={1345.5355} y={434.80865}>
          {"START AIR PRESSURE"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1362.5101}
        y={459.04376}
        id="text151"
      >
        <tspan id="tspan151" x={1362.5101} y={459.04376}>
          {"LALM"}
        </tspan>
      </text>
      <rect
        style={{
          fill: "url(#radialGradient152)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect151"
        width={98.952606}
        height={13.977821}
        x={1422.9801}
        y={446.23843}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1471.6595}
        y={457.19873}
        id="text152"
      >
        <tspan id="tspan152" x={1471.6595} y={457.19873}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1345.5355}
        y={626.30603}
        id="text153"
      >
        <tspan id="tspan153" x={1345.5355} y={626.30603}>
          {"START AIR PRESSURE"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1362.5101}
        y={650.54114}
        id="text154"
      >
        <tspan id="tspan154" x={1362.5101} y={650.54114}>
          {"LALM"}
        </tspan>
      </text>
      <rect
        style={{
          fill: "url(#radialGradient155)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect154"
        width={98.952606}
        height={13.977821}
        x={1422.9801}
        y={637.73584}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={1471.6595}
        y={648.69611}
        id="text155"
      >
        <tspan id="tspan155" x={1471.6595} y={648.69611}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1633.0355}
        y={51.992733}
        id="text164"
      >
        <tspan id="tspan164" x={1633.0355} y={51.992733}>
          {"NO.1 DG"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1633.0355}
        y={255.11043}
        id="text165"
      >
        <tspan id="tspan165" x={1633.0355} y={255.11043}>
          {"NO.2 DG"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1633.0355}
        y={451.55484}
        id="text166"
      >
        <tspan id="tspan166" x={1633.0355} y={451.55484}>
          {"NO.3 DG"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1633.0355}
        y={647.42346}
        id="text167"
      >
        <tspan id="tspan167" x={1633.0355} y={647.42346}>
          {"NO.4 DG"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1655.6537}
        y={867.14758}
        id="text169"
      >
        <tspan
          id="tspan169"
          x={1655.6537}
          y={867.14758}
          style={{ textAlign: "center", textAnchor: "middle" }}
        >
          {"AIR DRYER"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1862.9037}
        y={895.77551}
        id="text170"
      >
        <tspan
          id="tspan170"
          x={1862.9037}
          y={895.77551}
          style={{ textAlign: "center", textAnchor: "middle" }}
        >
          {"CONSUEMRS"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1026.3705}
        y={851.08899}
        id="text171"
      >
        <tspan
          id="tspan171"
          x={1026.3705}
          y={851.08899}
          style={{ textAlign: "center", textAnchor: "middle" }}
        >
          {"PRESS.REDUCE"}
        </tspan>
        <tspan
          x={1026.3705}
          y={871.08899}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan172"
        >
          {"STATION"}
        </tspan>
      </text>
      <image
        width={128.17036}
        height={192.00021}
        preserveAspectRatio="none"
        xlinkHref={reservoirImage}
        id="image1-1"
        x={661.90515}
        y={38.435375}
        style={{ strokeWidth: 10.4444, filter: "url(#filter11)" }}
      />
      <image
        width={116.91895}
        height={116.91895}
        preserveAspectRatio="none"
        xlinkHref={compressorImage}
        id="image1-60"
        x={55.735249}
        y={57.799774}
        style={{ strokeWidth: 18.2463, filter: "url(#filter7)" }}
      />
      <image
        width={116.91895}
        height={116.91895}
        preserveAspectRatio="none"
        xlinkHref={compressorImage}
        id="image7"
        x={55.735249}
        y={629.99585}
        style={{ strokeWidth: 18.2463, filter: "url(#filter7)" }}
      />
      <image
        width={128.17036}
        height={192.00021}
        preserveAspectRatio="none"
        xlinkHref={reservoirImage}
        id="image11"
        x={661.90515}
        y={602.2691}
        style={{ strokeWidth: 10.4444, filter: "url(#filter11)" }}
      />
      <image
        width={128.17036}
        height={192.00021}
        preserveAspectRatio="none"
        xlinkHref={reservoirImage}
        id="image16"
        x={1201.5778}
        y={791.28461}
        style={{ strokeWidth: 10.4444, filter: "url(#filter11)" }}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={1265.1537}
        y={788.5}
        id="text16"
      >
        <tspan
          id="tspan16"
          x={1265.1537}
          y={788.5}
          style={{ textAlign: "center", textAnchor: "middle" }}
        >
          {"SERVICE AIR"}
        </tspan>
        <tspan
          x={1265.1537}
          y={808.5}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan17"
        >
          {"RESERVOIR"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={730.1709}
        y={596.29565}
        id="text19"
      >
        <tspan
          x={730.1709}
          y={596.29565}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan19"
        >
          {"NO.2 AIR"}
        </tspan>
        <tspan
          x={730.1709}
          y={616.29565}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan20"
        >
          {"RESERVOIR"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={728.75671}
        y={36.351505}
        id="text22"
      >
        <tspan
          x={728.75671}
          y={36.351505}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan21"
        >
          {"NO.1 AIR"}
        </tspan>
        <tspan
          x={728.75671}
          y={56.351505}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan22"
        >
          {"RESERVOIR"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={121.60171}
        y={60.857567}
        id="text24"
      >
        <tspan
          x={121.60171}
          y={60.857567}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan24"
        >
          {"NO1. AIR COMPRESSOR"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: 16,
          fontFamily: "Sans",
          InkscapeFontSpecification: "'Sans Bold'",
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={126.90501}
        y={624.03802}
        id="text25"
      >
        <tspan
          x={126.90501}
          y={624.03802}
          style={{ textAlign: "center", textAnchor: "middle" }}
          id="tspan25"
        >
          {"NO2. AIR COMPRESSOR"}
        </tspan>
      </text>
      <path
        id="path44"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 1352.6406,446.92658 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <path
        id="path63"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 1352.6406,64.352827 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.058586 6.0583316,6.0583316 0 0 0 6.0567,-6.058586 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.355466 5.3571485,5.3571485 0 0 1 -5.3574,-5.355466 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <path
        id="path64"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 1352.6406,638.42396 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={99.354355}
        y={206.8295}
        id="text64"
      >
        <tspan id="tspan64" x={99.354355} y={206.8295}>
          {"RUNNING"}
        </tspan>
      </text>
      <path
        id="path65"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 89.484844,194.95451 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={99.354355}
        y={228.04271}
        id="text65"
      >
        <tspan id="tspan65" x={99.354355} y={228.04271}>
          {"COMMON ALARM"}
        </tspan>
      </text>
      <path
        id="path66"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 89.484844,216.16771 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={99.354355}
        y={772.96698}
        id="text66"
      >
        <tspan id="tspan66" x={99.354355} y={772.96698}>
          {"RUNNING"}
        </tspan>
      </text>
      <path
        id="path67"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 89.484844,761.09199 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "start",
          textAnchor: "start",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={99.354355}
        y={794.18018}
        id="text67"
      >
        <tspan id="tspan67" x={99.354355} y={794.18018}>
          {"COMMON ALARM"}
        </tspan>
      </text>
      <path
        id="path68"
        style={{
          fill: "#55d400",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 0.587628,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        d="m 89.484844,782.30519 a 6.0583316,6.0583316 0 0 0 -6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0586,6.05859 6.0583316,6.0583316 0 0 0 6.0567,-6.05859 6.0583316,6.0583316 0 0 0 -6.0567,-6.05859 z m 0,0.70117 a 5.3571485,5.3571485 0 0 1 5.3574,5.35742 5.3571485,5.3571485 0 0 1 -5.3574,5.35547 5.3571485,5.3571485 0 0 1 -5.3574,-5.35547 5.3571485,5.3571485 0 0 1 5.3574,-5.35742 z m 0,0.88281 a 4.4741774,4.4741774 0 0 0 -4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,4.47461 4.4741774,4.4741774 0 0 0 4.4746,-4.47461 4.4741774,4.4741774 0 0 0 -4.4746,-4.47461 z"
      />
      <rect
        style={{
          fill: "url(#radialGradient68)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect68"
        width={98.952606}
        height={13.977821}
        x={672.34497}
        y={806.08588}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={721.02441}
        y={817.04614}
        id="text68"
      >
        <tspan id="tspan68" x={721.02441} y={817.04614}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "center",
          textAnchor: "middle",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={721.10773}
        y={795.30591}
        id="text69"
      >
        <tspan id="tspan69" x={721.10773} y={795.30591}>
          {"PRESSURE"}
        </tspan>
      </text>
      <rect
        style={{
          fill: "url(#radialGradient71)",
          fillOpacity: 1,
          stroke: "#6a213f",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        id="rect69"
        width={98.952606}
        height={13.977821}
        x={672.34497}
        y={254.4232}
        ry={2.3450089}
        rx={2.3450089}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "10.6667px",
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1
        }}
        x={721.02441}
        y={265.38345}
        id="text70"
      >
        <tspan id="tspan70" x={721.02441} y={265.38345}>
          {"-999 bar"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 16,
          textAlign: "center",
          textAnchor: "middle",
          fill: "#220b28",
          fillOpacity: 0.984314,
          stroke: "none",
          strokeWidth: 5,
          strokeDasharray: "none",
          strokeOpacity: 1
        }}
        x={721.10773}
        y={243.64323}
        id="text71"
      >
        <tspan id="tspan71" x={721.10773} y={243.64323}>
          {"PRESSURE"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default AirCompressorSystemDiagram;
