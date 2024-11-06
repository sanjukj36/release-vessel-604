import * as React from "react";

const SVGPmsComponent = ({ data }) => {
  console.log({ data });
  const {
    pms_dg1,
    pms_dg2,
    pms_dg3,
    pms_dg4,
    pms_jt1,
    pms_t1,
    pms_thtr1,
    pms_2msb_bt,
    pms_t1_2msb,
    pms_t2_2msb,
    pms_cra1,
    pms_1msb_bt1,
    pms_jt2,
    pms_1msb_bt2,
    pms_expb,
    pms_thtr2,
    pms_cra2,
    pms_t2,
    pms_1_bow_thruster,
    pms_jacking_vfd,
    pms_1_crane,
    pms_2_crane,
    pms_2_bow_thruster,
    pms_pms_mode_bt1,
    pms_pms_mode_bt2,
    pms_pms_mode_bt3,
    pms_azi_thr_p,
    pms_azi_thr_s,
    pms_690v_main_switchboard,
    pms_440v_main_switchboard,
    pms_dg1_running,
    pms_dg2_running,
    pms_dg3_running,
    pms_dg4_running,
    pms_dg1_voltage,
    pms_dg2_voltage,
    pms_dg3_voltage,
    pms_dg4_voltage
  } = data;

  return (
    <svg
      width={"99%"}
      viewBox="0 0 1920 1080"
      id="svg1"
      xmlSpace="preserve"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <defs id="defs1">
        <linearGradient id="linearGradient638">
          <stop
            style={{ stopColor: "#808080", stopOpacity: 1 }}
            offset={0}
            id="stop637"
          />
          <stop
            style={{ stopColor: "#060606", stopOpacity: 0 }}
            offset={1}
            id="stop638"
          />
        </linearGradient>
        <linearGradient id="linearGradient609">
          <stop
            style={{ stopColor: "#808080", stopOpacity: 1 }}
            offset={0}
            id="stop609"
          />
          <stop
            style={{ stopColor: "#808080", stopOpacity: 0 }}
            offset={1}
            id="stop610"
          />
        </linearGradient>
        <linearGradient id="linearGradient101">
          <stop
            style={{ stopColor: "#ececec", stopOpacity: 1 }}
            offset={0}
            id="stop102"
          />
          <stop
            style={{ stopColor: "#ececec", stopOpacity: 0 }}
            offset={1}
            id="stop103"
          />
        </linearGradient>
        <linearGradient id="linearGradient529">
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            offset={0}
            id="stop529"
          />
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 0 }}
            offset={1}
            id="stop530"
          />
        </linearGradient>
        <linearGradient id="linearGradient527">
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            offset={0}
            id="stop527"
          />
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 0 }}
            offset={1}
            id="stop528"
          />
        </linearGradient>
        <linearGradient id="linearGradient57">
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            offset={0}
            id="stop57"
          />
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 0 }}
            offset={1}
            id="stop58"
          />
        </linearGradient>
        <linearGradient id="linearGradient55">
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 1 }}
            offset={0}
            id="stop55"
          />
          <stop
            style={{ stopColor: "#00ff00", stopOpacity: 0 }}
            offset={1}
            id="stop56"
          />
        </linearGradient>
        <linearGradient id="linearGradient50">
          <stop
            style={{ stopColor: "#000000", stopOpacity: 1 }}
            offset={0}
            id="stop50"
          />
          <stop
            style={{ stopColor: "#000000", stopOpacity: 0 }}
            offset={1}
            id="stop51"
          />
        </linearGradient>
        <linearGradient id="linearGradient48">
          <stop
            style={{ stopColor: "#000000", stopOpacity: 1 }}
            offset={0}
            id="stop48"
          />
          <stop
            style={{ stopColor: "#000000", stopOpacity: 0 }}
            offset={1}
            id="stop49"
          />
        </linearGradient>
        <linearGradient id="linearGradient46">
          <stop
            style={{ stopColor: "#000000", stopOpacity: 1 }}
            offset={0}
            id="stop46"
          />
          <stop
            style={{ stopColor: "#000000", stopOpacity: 0 }}
            offset={1}
            id="stop47"
          />
        </linearGradient>
        <linearGradient id="linearGradient127">
          <stop
            style={{ stopColor: "#333333", stopOpacity: 0.98431402 }}
            offset={0}
            id="stop128"
          />
          <stop
            style={{ stopColor: "#9d9d9d", stopOpacity: 1 }}
            offset={1}
            id="stop129"
          />
        </linearGradient>
        <linearGradient id="linearGradient125">
          <stop
            style={{ stopColor: "#464646", stopOpacity: 0.98431402 }}
            offset={0}
            id="stop125"
          />
          <stop
            style={{ stopColor: "#c9c9c9", stopOpacity: 0.99607843 }}
            offset={0.84453779}
            id="stop127"
          />
          <stop
            style={{ stopColor: "#717171", stopOpacity: 1 }}
            offset={1}
            id="stop126"
          />
        </linearGradient>
        <linearGradient id="linearGradient123">
          <stop
            style={{ stopColor: "#696969", stopOpacity: 0.98431402 }}
            offset={0}
            id="stop123"
          />
          <stop
            style={{ stopColor: "#b1b1b1", stopOpacity: 1 }}
            offset={1}
            id="stop124"
          />
        </linearGradient>
        <linearGradient id="linearGradient118">
          <stop
            style={{ stopColor: "#d4d4d4", stopOpacity: 1 }}
            offset={0}
            id="stop120"
          />
          <stop
            style={{ stopColor: "#4a4a4a", stopOpacity: 1 }}
            offset={1}
            id="stop119"
          />
        </linearGradient>
        <linearGradient id="linearGradient106">
          <stop
            style={{ stopColor: "#404040", stopOpacity: 1 }}
            offset={0.11764705}
            id="stop106"
          />
          <stop
            style={{ stopColor: "#e3e3e3", stopOpacity: 1 }}
            offset={1}
            id="stop107"
          />
        </linearGradient>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter103"
          x={-1.0007574}
          y={-1.0007574}
          width={3.4184972}
          height={3.4184972}
        >
          <feOffset dy={3} dx={3} id="feOffset103" />
          <feGaussianBlur
            stdDeviation={3}
            result="blur"
            id="feGaussianBlur103"
          />
          <feFlood
            floodColor="rgb(0,0,0)"
            floodOpacity={1}
            result="flood"
            id="feFlood103"
          />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite"
            id="feComposite103"
          />
          <feBlend in="blur" in2="composite" mode="normal" id="feBlend103" />
        </filter>
        <filter
          y={-1.4648357}
          height={3.9296713}
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter130-3"
          x={-0.76104331}
          width={2.5220866}
        >
          <feGaussianBlur
            stdDeviation={5}
            result="result6"
            id="feGaussianBlur129-5"
          />
          <feComposite
            result="result8"
            in="SourceGraphic"
            operator="atop"
            in2="result6"
            id="feComposite129-1"
          />
          <feComposite
            result="result9"
            operator="over"
            in2="SourceAlpha"
            in="result8"
            id="feComposite130-0"
          />
          <feColorMatrix
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 "
            result="result10"
            id="feColorMatrix130-6"
          />
          <feBlend
            in="result10"
            mode="normal"
            in2="result6"
            id="feBlend130-1"
          />
        </filter>
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient67"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0,176.82083)"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient68"
          gradientUnits="userSpaceOnUse"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <linearGradient
          xlinkHref="#linearGradient106"
          id="linearGradient69"
          gradientUnits="userSpaceOnUse"
          x1={1792.7169}
          y1={-111.43896}
          x2={1802.3533}
          y2={-65.25}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient123"
          id="linearGradient70"
          gradientUnits="userSpaceOnUse"
          x1={1768.1552}
          y1={-65.6959}
          x2={1787.0134}
          y2={-44.149494}
        />
        <linearGradient
          xlinkHref="#linearGradient125"
          id="linearGradient71"
          gradientUnits="userSpaceOnUse"
          x1={1744.2419}
          y1={-129.15109}
          x2={1824.0706}
          y2={-129.15109}
        />
        <linearGradient
          xlinkHref="#linearGradient127"
          id="linearGradient72"
          gradientUnits="userSpaceOnUse"
          x1={1773.125}
          y1={-157.66043}
          x2={1810}
          y2={-157.66043}
        />
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient73"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,0.19569813,-1929.5,-1818.163)"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <linearGradient
          xlinkHref="#linearGradient46"
          id="linearGradient47"
          x1={1234.7391}
          y1={-346.65134}
          x2={1263.084}
          y2={-372.83438}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-2166.386,1190.8515)"
        />
        <linearGradient
          xlinkHref="#linearGradient48"
          id="linearGradient49"
          x1={1294.3737}
          y1={-347.7157}
          x2={1271.3665}
          y2={-369.00272}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-2166.386,1190.8515)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient51"
          x1={1264.5564}
          y1={-415.19556}
          x2={1264.9246}
          y2={-376.87891}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-2166.386,1190.8515)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient51-2"
          x1={1264.5564}
          y1={-415.19556}
          x2={1264.9246}
          y2={-376.87891}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1281.8307,1121.5955)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient49-5"
          x1={1294.3737}
          y1={-347.7157}
          x2={1271.3665}
          y2={-369.00272}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1281.8307,1121.5955)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient47-1"
          x1={1234.7391}
          y1={-346.65134}
          x2={1263.084}
          y2={-372.83438}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1281.8307,1121.5955)"
        />
        <linearGradient
          xlinkHref="#linearGradient55"
          id="linearGradient56"
          x1={566.30225}
          y1={-130.70731}
          x2={398.05289}
          y2={-262.65521}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.55869452,0,0,0.55324856,15.302428,784.96012)"
        />
        <linearGradient
          xlinkHref="#linearGradient57"
          id="linearGradient58"
          x1={514.77753}
          y1={-140.38618}
          x2={437.81238}
          y2={-241.60651}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.55869452,0,0,0.55324856,-26.910982,783.81495)"
        />
        <filter
          y={-1.4648357}
          height={3.9296713}
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter130-3-5"
          x={-0.76104331}
          width={2.5220866}
        >
          <feGaussianBlur
            stdDeviation={5}
            result="result6"
            id="feGaussianBlur129-5-1"
          />
          <feComposite
            result="result8"
            in="SourceGraphic"
            operator="atop"
            in2="result6"
            id="feComposite129-1-25"
          />
          <feComposite
            result="result9"
            operator="over"
            in2="SourceAlpha"
            in="result8"
            id="feComposite130-0-8"
          />
          <feColorMatrix
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 "
            result="result10"
            id="feColorMatrix130-6-8"
          />
          <feBlend
            in="result10"
            mode="normal"
            in2="result6"
            id="feBlend130-1-9"
          />
        </filter>
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient51-2-9"
          x1={1264.5564}
          y1={-415.19556}
          x2={1264.9246}
          y2={-376.87891}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1724.3025,1121.7958)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient49-5-7"
          x1={1294.3737}
          y1={-347.7157}
          x2={1271.3665}
          y2={-369.00272}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1724.3025,1121.7958)"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient47-1-1"
          x1={1234.7391}
          y1={-346.65134}
          x2={1263.084}
          y2={-372.83438}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.9208885,0,0,1.660887,-1724.3025,1121.7958)"
        />
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient366"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0,176.82083)"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient367"
          gradientUnits="userSpaceOnUse"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <linearGradient
          xlinkHref="#linearGradient106"
          id="linearGradient368"
          gradientUnits="userSpaceOnUse"
          x1={1792.7169}
          y1={-111.43896}
          x2={1802.3533}
          y2={-65.25}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient123"
          id="linearGradient369"
          gradientUnits="userSpaceOnUse"
          x1={1768.1552}
          y1={-65.6959}
          x2={1787.0134}
          y2={-44.149494}
        />
        <linearGradient
          xlinkHref="#linearGradient125"
          id="linearGradient370"
          gradientUnits="userSpaceOnUse"
          x1={1744.2419}
          y1={-129.15109}
          x2={1824.0706}
          y2={-129.15109}
        />
        <linearGradient
          xlinkHref="#linearGradient127"
          id="linearGradient371"
          gradientUnits="userSpaceOnUse"
          x1={1773.125}
          y1={-157.66043}
          x2={1810}
          y2={-157.66043}
        />
        <linearGradient
          xlinkHref="#linearGradient118"
          id="linearGradient372"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,0.19569813,-1929.5,-1818.163)"
          x1={1833.5734}
          y1={-123.71881}
          x2={1848.8839}
          y2={-101.69469}
        />
        <meshgradient
          id="meshgradient35-5"
          gradientUnits="userSpaceOnUse"
          x={1240.6384}
          y={-397.66702}
        >
          <meshrow id="meshrow35-8">
            <meshpatch id="meshpatch35-0">
              <stop
                path="c 16.0391,0  32.0781,0  48.1172,0"
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                id="stop35-5"
              />
              <stop
                path="c 0,14.8595  0,29.719  0,44.5784"
                style={{ stopColor: "#000000", stopOpacity: 1 }}
                id="stop36-6"
              />
              <stop
                path="c -16.0391,0  -32.0781,0  -48.1172,0"
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                id="stop37-4"
              />
              <stop
                path="c 0,-14.8595  0,-29.719  0,-44.5784"
                style={{ stopColor: "#000000", stopOpacity: 1 }}
                id="stop38-4"
              />
            </meshpatch>
          </meshrow>
        </meshgradient>
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient51-9"
          x1={1264.5564}
          y1={-415.19556}
          x2={1264.9246}
          y2={-376.87891}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient49-6"
          x1={1294.3737}
          y1={-347.7157}
          x2={1271.3665}
          y2={-369.00272}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient50"
          id="linearGradient47-0"
          x1={1234.7391}
          y1={-346.65134}
          x2={1263.084}
          y2={-372.83438}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient527"
          id="linearGradient528"
          x1={9.3867111}
          y1={23.56863}
          x2={-13.368182}
          y2={2.3987131}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.0523552,0,0,2.1755284,-1746.1487,-704.42957)"
        />
        <linearGradient
          xlinkHref="#linearGradient529"
          id="linearGradient530"
          x1={450.08524}
          y1={-217.46696}
          x2={538.30408}
          y2={-123.8245}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="swatch65">
          <stop
            style={{ stopColor: "#000000", stopOpacity: 1 }}
            offset={0}
            id="stop65"
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#linearGradient1279"
          id="linearGradient1280"
          x1={479.14188}
          y1={-210.92737}
          x2={479.41245}
          y2={-166.72884}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.3143256,0,0,1.1384393,-267.7944,829.58956)"
        />
        <linearGradient id="linearGradient1279">
          <stop
            style={{ stopColor: "#808080", stopOpacity: 1 }}
            offset={0}
            id="stop1279"
          />
          <stop
            style={{ stopColor: "#808080", stopOpacity: 0 }}
            offset={1}
            id="stop1280"
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#linearGradient1279"
          id="linearGradient1282"
          x1={476.97745}
          y1={-136.43021}
          x2={479.1611}
          y2={-185.8871}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.3143256,0,0,1.1384393,-267.7944,829.58956)"
        />
        <linearGradient
          xlinkHref="#swatch65"
          id="linearGradient1574"
          gradientUnits="userSpaceOnUse"
          x1={975.67834}
          y1={-300.24057}
          x2={1006.7524}
          y2={-300.24057}
          gradientTransform="matrix(1.3143256,0,0,1.1384393,-267.7944,829.58956)"
        />
        <linearGradient
          xlinkHref="#swatch65"
          id="linearGradient1575"
          gradientUnits="userSpaceOnUse"
          x1={975.67834}
          y1={-300.24057}
          x2={1006.7524}
          y2={-300.24057}
          gradientTransform="matrix(1.3143256,0,0,1.1384393,-267.7944,829.58956)"
        />
        <script id="mesh_polyfill-7" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <linearGradient
          xlinkHref="#linearGradient1279"
          id="linearGradient1280-0"
          x1={479.14188}
          y1={-210.92737}
          x2={479.41245}
          y2={-166.72884}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.3143256,0,0,1.1384393,887.23125,748.66179)"
        />
        <linearGradient
          xlinkHref="#linearGradient1279"
          id="linearGradient1282-3"
          x1={476.97745}
          y1={-136.43021}
          x2={479.1611}
          y2={-185.8871}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.3143256,0,0,1.1384393,887.23125,748.66179)"
        />
        <linearGradient
          xlinkHref="#swatch65"
          id="linearGradient1576"
          gradientUnits="userSpaceOnUse"
          x1={975.67834}
          y1={-300.24057}
          x2={1006.7524}
          y2={-300.24057}
          gradientTransform="matrix(1.3143256,0,0,1.1384393,887.23125,748.66179)"
        />
        <linearGradient
          xlinkHref="#swatch65"
          id="linearGradient1577"
          gradientUnits="userSpaceOnUse"
          x1={975.67834}
          y1={-300.24057}
          x2={1006.7524}
          y2={-300.24057}
          gradientTransform="matrix(1.3143256,0,0,1.1384393,887.23125,748.66179)"
        />
        <script id="mesh_polyfill-8" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-47" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter612-3-6-8-4"
          x={-0.13911419}
          y={-0.21387656}
          width={1.3121785}
          height={1.5168684}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.470588}
            floodColor="rgb(88,88,88)"
            id="feFlood610-1-9-4-9"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation="4.93 1.9"
            id="feGaussianBlur610-0-7-1-1"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={2.887538}
            dy={1.9}
            id="feOffset610-4-8-2-0"
          />
          <feComposite
            result="comp1"
            operator="out"
            in="flood"
            in2="offset"
            id="feComposite611-6-0-3-1"
          />
          <feComposite
            result="comp2"
            operator="atop"
            in="comp1"
            in2="SourceGraphic"
            id="feComposite612-0-3-8-9"
          />
        </filter>
        <filter
          style={{ colorInterpolationFilters: "sRGB" }}
          id="filter612-3-6-8-9-3"
          x={-0.19722707}
          y={-0.78677688}
          width={1.4284042}
          height={2.662669}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.470588}
            floodColor="rgb(88,88,88)"
            id="feFlood610-1-9-4-8-5"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation={6.9894339}
            id="feGaussianBlur610-0-7-1-6-3"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={2.887538}
            dy={1.9}
            id="feOffset610-4-8-2-5-5"
          />
          <feComposite
            result="comp1"
            operator="out"
            in="flood"
            in2="offset"
            id="feComposite611-6-0-3-0-9"
          />
          <feComposite
            result="comp2"
            operator="atop"
            in="comp1"
            in2="SourceGraphic"
            id="feComposite612-0-3-8-0-7"
          />
        </filter>
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient610"
          x1={125.13184}
          y1={305.72302}
          x2={212.6151}
          y2={305.72302}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient611"
          x1={125.33204}
          y1={274.03049}
          x2={212.81531}
          y2={274.03049}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient612"
          x1={125.51038}
          y1={243.49808}
          x2={212.99364}
          y2={243.49808}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient613"
          x1={125.39789}
          y1={211.94307}
          x2={212.88115}
          y2={211.94307}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient614"
          x1={125.53345}
          y1={180.85516}
          x2={213.01669}
          y2={180.85516}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient615"
          x1={125.44403}
          y1={150.63416}
          x2={212.92728}
          y2={150.63416}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient616"
          x1={125.18207}
          y1={119.89071}
          x2={212.66533}
          y2={119.89071}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient617"
          x1={1480.1569}
          y1={305.72302}
          x2={1567.6401}
          y2={305.72302}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient618"
          x1={1480.3571}
          y1={274.03049}
          x2={1567.8403}
          y2={274.03049}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient619"
          x1={1480.5354}
          y1={243.49808}
          x2={1568.0186}
          y2={243.49808}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient620"
          x1={1480.4229}
          y1={211.94307}
          x2={1567.9061}
          y2={211.94307}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient621"
          x1={1480.5583}
          y1={180.85516}
          x2={1568.0417}
          y2={180.85516}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient622"
          x1={1480.469}
          y1={150.63416}
          x2={1567.9521}
          y2={150.63416}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient623"
          x1={1480.207}
          y1={119.89071}
          x2={1567.6903}
          y2={119.89071}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient624"
          x1={524.71259}
          y1={305.72302}
          x2={612.1958}
          y2={305.72302}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient625"
          x1={524.91272}
          y1={274.03049}
          x2={612.396}
          y2={274.03049}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient626"
          x1={525.09113}
          y1={243.49808}
          x2={612.57434}
          y2={243.49808}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient627"
          x1={524.97864}
          y1={211.94307}
          x2={612.46185}
          y2={211.94307}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient628"
          x1={525.1142}
          y1={180.85516}
          x2={612.59741}
          y2={180.85516}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient629"
          x1={525.02478}
          y1={150.63416}
          x2={612.508}
          y2={150.63416}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient630"
          x1={524.76282}
          y1={119.89071}
          x2={612.24603}
          y2={119.89071}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient631"
          x1={973.68982}
          y1={305.72302}
          x2={1061.173}
          y2={305.72302}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient632"
          x1={973.89001}
          y1={274.03049}
          x2={1061.3732}
          y2={274.03049}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient633"
          x1={974.06836}
          y1={243.49808}
          x2={1061.5516}
          y2={243.49808}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient634"
          x1={973.95581}
          y1={211.94307}
          x2={1061.4391}
          y2={211.94307}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient635"
          x1={974.09137}
          y1={180.85516}
          x2={1061.5747}
          y2={180.85516}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient609"
          id="linearGradient636"
          x1={974.00201}
          y1={150.63416}
          x2={1061.4852}
          y2={150.63416}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient638"
          id="linearGradient637"
          x1={973.73999}
          y1={119.89071}
          x2={1061.2233}
          y2={119.89071}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g id="layer1" style={{ display: "inline" }}>
        <path
          id="path211-5-09-6-3-0"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.61986,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 359,670.875 v 67.38479"
        />
        <path
          id="path28"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.74176,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="M 820.37036,344 1837.7106,343.9893"
        />
        <path
          id="path33"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.12371,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 441,344.01562 357.65614,10e-6"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle36"
          cx={-344}
          cy={-807.25}
          r={21.724606}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect36"
          width={9.0867147}
          height={9.0867147}
          x={-348.54333}
          y={-823.36523}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        {pms_pms_mode_bt2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 814.27849,344.00002 -14.05709,-3e-5"
            id="path36"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect37"
          width={9.0866575}
          height={9.0866575}
          x={-348.54333}
          y={-800.22137}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={807.38281}
          y={311.20953}
          id="text44"
        >
          <tspan id="tspan44" x={807.38281} y={311.20953}>
            {"BT2"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142"
          cx={62.578953}
          cy={-403.1716}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142"
          width={9.0867147}
          height={9.0867147}
          x={58.035618}
          y={-419.28683}
          transform="scale(1,-1)"
        />
        {pms_1msb_bt2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 62.57894,410.20012 3e-5,-14.05709"
            id="path142"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143"
          width={9.0866575}
          height={9.0866575}
          x={58.035618}
          y={-396.14304}
          transform="scale(1,-1)"
        />
        <path
          id="path148"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 62.60238,419.28771 -0.0234,112.09861"
        />
        <path
          id="path149"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 62.57895,343.55793 v 43.88479"
        />
        <circle
          style={{
            opacity: 0.983379,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle152"
          cx={79.739304}
          cy={107.59727}
          r={3.5972753}
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 95.873694,102.27035 -12.859592,5.32861 12.861038,5.32523 a 13.919714,13.919714 0 0 0 -0.0014,-10.65384 z"
          id="path152"
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 85.066224,123.73166 -5.328615,-12.85959 -5.325225,12.86103 a 13.919714,13.919714 0 0 0 10.65384,-10e-4 z"
          id="path153"
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 63.604914,112.92419 12.859592,-5.32861 -12.861038,-5.32523 a 13.919714,13.919714 0 0 0 0.0014,10.65384 z"
          id="path154"
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <circle
          style={{
            fill: "none",
            fillOpacity: 0.968627,
            stroke: "#002b6b",
            strokeWidth: 2.20435,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle154"
          cx={79.739304}
          cy={107.59727}
          r={18.402721}
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 74.412384,91.462878 5.328615,12.859592 5.325225,-12.861038 a 13.919714,13.919714 0 0 0 -10.65384,0.0014 z"
          id="path155"
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <circle
          style={{
            fill: "none",
            fillOpacity: 0.968627,
            stroke: "#002b6b",
            strokeWidth: 4.40873,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle155"
          cx={79.739304}
          cy={107.59726}
          r={22.760698}
          transform="matrix(0.94816593,0,0,0.94816593,-13.844741,474.44317)"
        />
        <path
          id="path156"
          style={{
            fill: "#002b6b",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter103)"
          }}
          d="m 357.26595,-372.86523 v 24.9707 a 45.809418,45.809418 0 0 1 33.44336,-14.63281 45.809418,45.809418 0 0 1 33.44141,14.51953 v -24.85742 z"
          transform="matrix(0.55300681,0,0,0.55300681,-154.30302,751.61043)"
        />
        <path
          id="path157"
          d="m 341.10471,-398.23038 99.2066,0 a 5.7716992,5.7716992 45 0 1 5.7717,5.7717 l 0,12.1267 a 5.7716992,5.7716992 135 0 1 -5.7717,5.7717 h -99.2066 a 5.7716992,5.7716992 45 0 1 -5.7717,-5.7717 l 0,-12.1267 a 5.7716992,5.7716992 135 0 1 5.7717,-5.7717 z"
          style={{
            fill: "#002b6b",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter103)"
          }}
          transform="matrix(0.55300681,0,0,0.55300681,-154.30302,751.61043)"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle191"
          cx={1835.853}
          cy={-401.68442}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect191"
          width={9.0867147}
          height={9.0867147}
          x={1831.3097}
          y={-417.79965}
          transform="scale(1,-1)"
        />
        {pms_1msb_bt1?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="M 1835.8531,408.71295 V 394.65586"
            id="path191"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect192"
          width={9.0866575}
          height={9.0866575}
          x={1831.3097}
          y={-394.65585}
          transform="scale(1,-1)"
        />
        <path
          id="path192"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1835.8765,417.82126 -0.023,48.09702"
        />
        <path
          id="path193"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="M 1835.8531,341.68441 V 385.5692"
        />
        <circle
          style={{
            opacity: 0.983379,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle193"
          cx={79.739304}
          cy={107.59727}
          r={3.5972753}
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 95.873694,102.27035 -12.859592,5.32861 12.861038,5.32523 a 13.919714,13.919714 0 0 0 -0.0014,-10.65384 z"
          id="path194"
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 85.066224,123.73166 -5.328615,-12.85959 -5.325225,12.86103 a 13.919714,13.919714 0 0 0 10.65384,-10e-4 z"
          id="path195"
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 63.604914,112.92419 12.859592,-5.32861 -12.861038,-5.32523 a 13.919714,13.919714 0 0 0 0.0014,10.65384 z"
          id="path196"
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <circle
          style={{
            fill: "none",
            fillOpacity: 0.968627,
            stroke: "#002b6b",
            strokeWidth: 2.20435,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle196"
          cx={79.739304}
          cy={107.59727}
          r={18.402721}
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <path
          style={{
            opacity: 0.979817,
            fill: "#002a6a",
            fillOpacity: 0.968627,
            stroke: "none",
            strokeWidth: 5.83239,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          d="m 74.412384,91.462878 5.328615,12.859592 5.325225,-12.861038 a 13.919714,13.919714 0 0 0 -10.65384,0.0014 z"
          id="path197"
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <circle
          style={{
            fill: "none",
            fillOpacity: 0.968627,
            stroke: "#002b6b",
            strokeWidth: 4.40873,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 0.984314,
            paintOrder: "stroke markers fill",
            filter: "url(#filter103)"
          }}
          id="circle197"
          cx={79.739304}
          cy={107.59726}
          r={22.760698}
          transform="matrix(0.94816593,0,0,0.94816593,1760.081,407.75841)"
        />
        <path
          id="path198"
          style={{
            fill: "#002b6b",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter103)"
          }}
          d="m 357.26595,-372.86523 v 24.9707 a 45.809418,45.809418 0 0 1 33.44336,-14.63281 45.809418,45.809418 0 0 1 33.44141,14.51953 v -24.85742 z"
          transform="matrix(0.55300681,0,0,0.55300681,1619.6227,684.92567)"
        />
        <path
          id="path199"
          d="m 341.10471,-398.23038 99.2066,0 a 5.7716992,5.7716992 45 0 1 5.7717,5.7717 l 0,12.1267 a 5.7716992,5.7716992 135 0 1 -5.7717,5.7717 h -99.2066 a 5.7716992,5.7716992 45 0 1 -5.7717,-5.7717 l 0,-12.1267 a 5.7716992,5.7716992 135 0 1 5.7717,-5.7717 z"
          style={{
            fill: "#002b6b",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter103)"
          }}
          transform="matrix(0.55300681,0,0,0.55300681,1619.6227,684.92567)"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle36-3"
          cx={-344.1514}
          cy={-436.09073}
          r={21.724606}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect36-7"
          width={9.0867147}
          height={9.0867147}
          x={-348.69473}
          y={-452.20596}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        {pms_pms_mode_bt3?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 443.11925,344.1514 -14.05709,-3e-5"
            id="path36-8"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect37-9"
          width={9.0866575}
          height={9.0866575}
          x={-348.69473}
          y={-429.06216}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <path
          id="path33-8"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.00784,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 60.734017,345.06185 360.922083,2e-5"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={434.20709}
          y={313.33148}
          id="text44-3"
        >
          <tspan id="tspan44-8" x={434.20709} y={313.33148}>
            {"BT3"}
          </tspan>
        </text>
        <path
          id="path211-5-09"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 154.14645,416.78877 v 31.0271"
        />
        <ellipse
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6"
          cx={154.34093}
          cy={-403.35434}
          transform="scale(1,-1)"
          rx={21.724606}
          ry={21.397831}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6"
          width={9.0867147}
          height={8.9500351}
          x={149.79759}
          y={-419.22717}
          transform="scale(1,-1)"
        />
        {pms_expb?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 154.34091,410.27715 3e-5,-13.84564"
            id="path142-6"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8"
          width={9.0866575}
          height={8.9499788}
          x={149.79759}
          y={-396.43152}
          transform="scale(1,-1)"
        />
        <path
          id="path149-3"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 154.34092,344.25684 v 43.22469"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle36-4"
          cx={-343.11597}
          cy={-1387.9292}
          r={21.724606}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect36-8"
          width={9.0867147}
          height={9.0867147}
          x={-347.6593}
          y={-1404.0444}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        {}
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: pms_pms_mode_bt1?.item1?.value ? "#c7c7c7" : "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1394.9577,343.11599 -14.0571,-3e-5"
          id="path36-5"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect37-1"
          width={9.0866575}
          height={9.0866575}
          x={-347.6593}
          y={-1380.9006}
          transform="matrix(0,-1,-1,0,0,0)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1386.8468}
          y={311.13147}
          id="text44-8"
        >
          <tspan id="tspan44-6" x={1386.8468} y={311.13147}>
            {"BT1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={86.110611}
          y={404.03061}
          id="text43-2-5"
        >
          <tspan id="tspan43-8-8" x={86.110611} y={404.03061}>
            {"1MSB"}
          </tspan>
          <tspan x={86.110611} y={424.03061} id="tspan27">
            {"BT2"}
          </tspan>
          <tspan x={86.110611} y={444.03061} id="tspan26" />
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={180.82811}
          y={407.95776}
          id="text43-2-7"
        >
          <tspan id="tspan43-8-0" x={180.82811} y={407.95776}>
            {"EXPB"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle158"
          cx={359.88736}
          cy={-404.39459}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect158"
          width={9.0867147}
          height={9.0867147}
          x={355.34402}
          y={-420.50983}
          transform="scale(1,-1)"
        />
        {pms_t2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 359.88735,411.4231 3e-5,-14.05709"
            id="path158"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect159"
          width={9.0866575}
          height={9.0866575}
          x={355.34402}
          y={-397.366}
          transform="scale(1,-1)"
        />
        <path
          id="path159"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 5.15643,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 359.82236,420.23645 -0.0233,170.71106"
        />
        <path
          id="path160"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 359.88736,344.39456 v 43.88479"
        />
        <path
          id="path211-5-0"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.80538,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 604.81312,737.47661 -248.13944,0.12961"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={390.0481}
          y={409.38205}
          id="text43-2-7-1"
        >
          <tspan id="tspan43-8-0-3" x={390.0481} y={409.38205}>
            {"T2"}
          </tspan>
        </text>
        <rect
          style={{
            opacity: 0.297894,
            fill: "#ffffff",
            stroke: "#666666",
            strokeWidth: 1,
            strokeOpacity: 1
          }}
          id="rect53"
          width={144}
          height={77}
          x={88.345985}
          y={447.44983}
          rx={11.764706}
          ry={11.764707}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={98.712502}
          y={473.79376}
          id="text43-2-5-8"
        >
          <tspan id="tspan43-8-8-1" x={98.712502} y={473.79376}>
            {"690V EXTR."}
          </tspan>
          <tspan x={98.712502} y={493.79376} id="tspan55">
            {"POWER SUPPLY"}
          </tspan>
          <tspan x={98.712502} y={513.79376} id="tspan56">
            {"BOX"}
          </tspan>
          <tspan x={98.712502} y={533.79376} id="tspan27-5" />
          <tspan x={98.712502} y={553.79376} id="tspan26-0" />
        </text>
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.52751,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1350.3456,736.91805 h 166.649"
          id="path10-3-1"
        />
        <path
          id="path211-5-09-6-3-1"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.38896,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="M 923.97844,851.25197 602.38835,850.7438"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6-0-6-3"
          cx={840.29462}
          cy={946.6272}
          r={21.724606}
          transform="matrix(-0.01163609,0.9999323,0.9999323,0.01163609,0,0)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6-9-8-4"
          width={9.0867147}
          height={9.0867147}
          x={835.75128}
          y={930.51196}
          transform="matrix(-0.01163609,0.9999323,0.9999323,0.01163609,0,0)"
        />
        {pms_2msb_bt?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 929.75733,851.17097 14.05614,0.1636"
            id="path142-6-7-1-4"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8-1-1-3"
          width={9.0866575}
          height={9.0866575}
          x={835.75128}
          y={953.65576}
          transform="matrix(-0.01163609,0.9999323,0.9999323,0.01163609,0,0)"
        />
        <path
          id="path149-3-1-8-5"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.00001,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="M 1352.9148,852.59696 952.01079,851.50162"
        />
        <path
          id="path211-5-09-6-3-9"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.99628,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 603.9589,809.07408 v 43.8031"
        />
        <ellipse
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 3.99628,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6-0-6-5"
          cx={604.15326}
          cy={-795.45996}
          transform="scale(1,-1)"
          rx={21.724606}
          ry={21.68417}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 3.99628,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6-9-8-3"
          width={9.0867147}
          height={9.0698013}
          x={599.60992}
          y={-811.54523}
          transform="scale(1,-1)"
        />
        {pms_t2_2msb?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 3.99628,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 604.15329,802.4754 3e-5,-14.03092"
            id="path142-6-7-1-1"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 3.99628,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8-1-1-1"
          width={9.0866575}
          height={9.0697441}
          x={599.60992}
          y={-788.44452}
          transform="scale(1,-1)"
        />
        <path
          id="path149-3-1-8-0"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.99628,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 604.1534,735.57153 v 43.80311"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={2036.4028}
          y={375.7421}
          id="text385-5-8-5"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-0"
            x={2036.4028}
            y={375.7421}
            style={{ strokeWidth: 1.85364 }}
          >
            {"1MSB -"}
          </tspan>
          <tspan
            x={2036.4028}
            y={394.27859}
            style={{ strokeWidth: 1.85364 }}
            id="tspan14"
          >
            {" BT1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1719.1649}
          y={517.31628}
          id="text385-5-8-1"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-4"
            x={1719.1649}
            y={517.31628}
            style={{ strokeWidth: 1.85364 }}
          >
            {"690V/450V #1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={474.23428}
          y={590.02771}
          id="text385-5-8-80-07"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-1"
            x={474.23428}
            y={590.02771}
            style={{ strokeWidth: 1.85364 }}
          >
            {"690V/450V #2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={291.04807}
          y={410.39499}
          id="text43-2-7-7"
        >
          <tspan id="tspan43-8-0-0" x={291.04807} y={410.39499}>
            {"JT2"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-3"
          cx={262.63181}
          cy={-403.94144}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-3"
          width={9.0867147}
          height={9.0867147}
          x={258.08847}
          y={-420.05667}
          transform="scale(1,-1)"
        />
        {pms_jt2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 262.6318,410.96997 3e-5,-14.05709"
            id="path142-0"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-6"
          width={9.0866575}
          height={9.0866575}
          x={258.08847}
          y={-396.91287}
          transform="scale(1,-1)"
        />
        <path
          id="path148-9"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 262.65525,420.05756 -0.0234,112.09861"
        />
        <path
          id="path149-4"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 262.63181,343.94143 v 43.88479"
        />
        <path
          id="path211-5-9"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 240.98738,602.25179 v 58.63479"
        />
        <path
          id="path211-5"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 283.51707,602.37109 v 58.63479"
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient51)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2"
          cx={263.75134}
          cy={555.13086}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient49)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-1"
          cx={280.8855}
          cy={579.4892}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient47)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-3"
          cx={245.02643}
          cy={579.65192}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            fill: "url(#linearGradient1280)",
            fillOpacity: 1,
            stroke: "url(#linearGradient1574)",
            strokeWidth: 4.02519,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle58-5-3-3"
          cx={360.20865}
          cy={615.35126}
          rx={29.210367}
          ry={25.30135}
        />
        <ellipse
          style={{
            fill: "url(#linearGradient1282)",
            fillOpacity: 1,
            stroke: "url(#linearGradient1575)",
            strokeWidth: 4.02519,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-1-8"
          cx={360.20865}
          cy={647.06549}
          rx={29.210367}
          ry={25.301365}
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 4.92608,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 281.09944,658.53564 c 12.15587,11.03648 15.37666,4.65786 16.66914,1.8008"
          id="path10-3-8-5-9-72-4"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 4.92608,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 283.61165,660.68709 c -10.50412,-9.39644 -11.90276,-5.40426 -15.25731,-1.35701"
          id="path10-3-8-5-2-9"
        />
        <ellipse
          style={{
            fill: "url(#linearGradient56)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.84747,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle58-5-0-9"
          cx={282.25443}
          cy={680.8465}
          rx={12.416765}
          ry={12.295724}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontSize: "32.0016px",
            whiteSpace: "pre",
            inlineSize: 22.1886,
            display: "inline",
            fill: "#000000",
            strokeWidth: 5.25904
          }}
          x={463.63797}
          y={-179.83815}
          id="text38-9-2"
          transform="matrix(0.56214977,0,0,0.54984802,15.302428,784.96012)"
        >
          <tspan x={463.63797} y={-179.83815} id="tspan1">
            {"B"}
          </tspan>
        </text>
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 4.92608,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 238.88603,657.39047 c 12.15587,11.03648 15.37666,4.65786 16.66914,1.8008"
          id="path10-3-8-5-9-72-4-5"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 4.92608,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 241.39824,659.54192 c -10.50412,-9.39644 -11.90276,-5.40426 -15.25731,-1.35701"
          id="path10-3-8-5-2-9-3"
        />
        <ellipse
          style={{
            fill: "url(#linearGradient58)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.84747,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle58-5-0-9-4"
          cx={240.04103}
          cy={679.70135}
          rx={12.416765}
          ry={12.295724}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontSize: "32.0016px",
            whiteSpace: "pre",
            inlineSize: 22.1886,
            display: "inline",
            fill: "#000000",
            strokeWidth: 5.25904
          }}
          x={463.63797}
          y={-179.83815}
          id="text38-9-2-3"
          transform="matrix(0.56214977,0,0,0.54984802,-26.910982,783.81495)"
        >
          <tspan x={463.63797} y={-179.83815} id="tspan2">
            {"A"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={346.82303}
          y={515.51233}
          id="text385-5-8-80-3"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-0"
            x={346.82303}
            y={515.51233}
            style={{ strokeWidth: 1.85364 }}
          >
            {"JT #2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={287.96597}
          y={669.05518}
          id="text385-5-8-80-07-5"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-1-2"
            x={287.96597}
            y={669.05518}
            style={{ strokeWidth: 1.85364 }}
          >
            {"TO JACKING VFD"}
          </tspan>
        </text>
        <g id="g502">
          <path
            id="circle804-5-5"
            className={
              typeof pms_2_bow_thruster?.item3?.value === "number"
                ? pms_2_bow_thruster?.item3?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 146.32031,664.99023 a 12.629166,12.629166 0 0 0 -12.6289,12.63086 12.629166,12.629166 0 0 0 12.6289,12.62891 12.629166,12.629166 0 0 0 12.62891,-12.62891 12.629166,12.629166 0 0 0 -12.62891,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.09375,11.09179 11.092436,11.092436 0 0 1 -11.09375,11.0918 11.092436,11.092436 0 0 1 -11.09179,-11.0918 11.092436,11.092436 0 0 1 11.09179,-11.09179 z m 0,1.20117 a 9.8890877,9.8890877 0 0 0 -9.88867,9.89062 9.8890877,9.8890877 0 0 0 9.88867,9.88868 9.8890877,9.8890877 0 0 0 9.88867,-9.88868 9.8890877,9.8890877 0 0 0 -9.88867,-9.89062 z"
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={144.5152}
            y={656.37317}
            id="text158-5-24"
          >
            <tspan id="tspan158-6-7" x={144.5152} y={656.37317}>
              {/* {"RUN"} */}
              {pms_2_bow_thruster?.item3?.title ?? "RUN"}
            </tspan>
          </text>
        </g>
        <g id="g501">
          <path
            id="circle804-63-0"
            className={
              typeof pms_2_bow_thruster?.item2?.value === "number"
                ? pms_2_bow_thruster?.item2?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 96.55469,665.95312 a 12.629166,12.629166 0 0 0 -12.62696,12.62891 12.629166,12.629166 0 0 0 12.62696,12.63086 12.629166,12.629166 0 0 0 12.63086,-12.63086 12.629166,12.629166 0 0 0 -12.63086,-12.62891 z m 0,1.53711 a 11.092436,11.092436 0 0 1 11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0957,11.09375 11.092436,11.092436 0 0 1 -11.0918,-11.09375 11.092436,11.092436 0 0 1 11.0918,-11.0918 z m 0.002,1.20313 a 9.8890877,9.8890877 0 0 0 -9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88867,9.89063 9.8890877,9.8890877 0 0 0 9.88867,-9.89063 9.8890877,9.8890877 0 0 0 -9.88867,-9.88867 z"
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={97.415169}
            y={656.5791}
            id="text158-0-8"
          >
            <tspan id="tspan158-4-9" x={97.415169} y={656.5791}>
              {/* {"AVAIL"} */}
              {pms_2_bow_thruster?.item2?.title ?? "AVAIL"}
            </tspan>
          </text>
        </g>
        <g id="g500">
          <path
            id="circle804-6-0"
            className={
              typeof pms_2_bow_thruster?.item1?.value === "number"
                ? pms_2_bow_thruster?.item1?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 47.93322,666.3641 A 12.629166,12.629166 0 0 0 35.30627,678.99496 12.629166,12.629166 0 0 0 47.93322,691.62387 12.629166,12.629166 0 0 0 60.56408,678.99496 12.629166,12.629166 0 0 0 47.93322,666.3641 Z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0.002,1.20312 a 9.8890877,9.8890877 0 0 0 -9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88868,-9.88867 9.8890877,9.8890877 0 0 0 -9.88868,-9.88867 z"
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={49.757942}
            y={656.47424}
            id="text158-4-14"
          >
            <tspan id="tspan158-93-7" x={49.757942} y={656.47424}>
              {/* {"REQ"} */}
              {pms_2_bow_thruster?.item1?.title ?? "REQ"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={95.27198}
          y={624.47424}
          id="text158-2-98"
        >
          <tspan id="tspan158-9-8" x={95.27198} y={624.47424}>
            {"2#BOW THRUSTER"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={718.51428}
          y={746.30914}
          id="text385-5-8-80-0-7"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-3-9"
            x={718.51428}
            y={746.30914}
            style={{ strokeWidth: 1.85364 }}
          >
            {"T2-2MSB"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1011.7358}
          y={835.66797}
          id="text385-5-8-80-0-7-4"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-3-9-4"
            x={1011.7358}
            y={835.66797}
            style={{ strokeWidth: 1.85364 }}
          >
            {"2MSB=BT"}
          </tspan>
        </text>
        <path
          id="path17-0"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 1.61183,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1739.1552,685.76884 v 12.1094"
        />
        <path
          id="path17-7"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 1.5621,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1784.2225,685.75044 v 12.0527"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 5.34033,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1744.2237,687.65481 c -12.1304,-10.61678 -15.3349,-4.46854 -16.6206,-1.71485"
          id="path10-3-8-5-9-72-4-5-9-9"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 5.34033,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1741.7169,685.58535 c 10.4819,9.03892 11.8722,5.19165 15.2125,1.28902"
          id="path10-3-8-5-2-9-3-8-4"
        />
        <ellipse
          style={{
            fill: "url(#linearGradient528)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 6.33918,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle58-5-0-9-4-1-1"
          cx={-1742.3409}
          cy={-668.24408}
          rx={12.379198}
          ry={11.844251}
          transform="matrix(-0.99999929,0.0011933,-0.001062,-0.99999944,0,0)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontSize: "32.0016px",
            whiteSpace: "pre",
            inlineSize: 22.1886,
            display: "inline",
            fill: "#000000",
            strokeWidth: 5.81774
          }}
          x={463.63797}
          y={-179.83815}
          id="text38-9-2-3-17-3"
          transform="matrix(0.56028566,-0.01433757,0.012059,0.52950455,1479.842,773.65718)"
        >
          <tspan x={463.63797} y={-179.83815} id="tspan4">
            {"A"}
          </tspan>
        </text>
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 5.34033,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1787.0771,688.38029 c -12.0658,-10.69915 -15.3075,-4.57286 -16.6098,-1.82798"
          id="path10-3-8-5-9-72-4-54-0"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 5.34033,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1784.5829,686.2938 c 10.4269,9.1101 11.8405,5.27238 15.2044,1.39257"
          id="path10-3-8-5-2-9-34-9"
        />
        <g
          id="g59-1-2-4-4-8"
          transform="matrix(0.55680643,-0.01572891,0.01339335,0.53274538,1522.5036,774.65316)"
          style={{ display: "inline", strokeWidth: 3.87833 }}
        >
          <ellipse
            style={{
              fill: "url(#linearGradient530)",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 11.635,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="circle58-5-0-9-5-6"
            cx={477.8139}
            cy={-188.18596}
            rx={22.224606}
            ry={22.224592}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "32.0016px",
              whiteSpace: "pre",
              inlineSize: 22.1886,
              display: "inline",
              fill: "#000000",
              strokeWidth: 5.81774
            }}
            x={463.63797}
            y={-179.83815}
            id="text38-9-2-67-7"
            transform="scale(1.0061845,0.99385351)"
          >
            <tspan x={463.63797} y={-179.83815} id="tspan5">
              {"B"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1725.5784}
          y={645.38647}
          id="text43-2-7-9-5-2"
        >
          <tspan id="tspan43-8-0-1-8-4" x={1725.5784} y={645.38647}>
            {"FROM JT #2"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-3-5"
          cx={1660.1978}
          cy={-401.3562}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-3-2"
          width={9.0867147}
          height={9.0867147}
          x={1655.6544}
          y={-417.47144}
          transform="scale(1,-1)"
        />
        {pms_jt1?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="M 1660.1978,408.38472 V 394.32763"
            id="path142-0-7"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-6-5"
          width={9.0866575}
          height={9.0866575}
          x={1655.6544}
          y={-394.32764}
          transform="scale(1,-1)"
        />
        <path
          id="path148-9-1"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.06809,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1659.9712,416.01546 -0.023,172.82484"
        />
        <path
          id="path149-4-0"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1660.6977,341.23118 v 45.00979"
        />
        <path
          id="path531"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1680.476,658.2992 v 39.54291"
        />
        <path
          id="path211-5-9-4"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1637.9463,658.1799 v 39.50979"
        />
        <g
          id="g17-2"
          transform="matrix(1.9208885,0,0,1.660887,-769.4271,1246.7796)"
          style={{ fill: "url(#meshgradient35-5)", fillOpacity: 1 }}
        >
          <ellipse
            style={{
              display: "inline",
              fill: "url(#linearGradient51-9)",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 3,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="circle59-1-2-4"
            cx={1265.1111}
            cy={-382.75974}
            rx={14.724606}
            ry={14.907297}
          />
          <ellipse
            style={{
              display: "inline",
              fill: "url(#linearGradient49-6)",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 3,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="circle59-1-2-1-6"
            cx={1274.031}
            cy={-368.09387}
            rx={14.724606}
            ry={14.907297}
          />
          <ellipse
            style={{
              display: "inline",
              fill: "url(#linearGradient47-0)",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 3,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="circle59-1-2-3-6"
            cx={1255.363}
            cy={-367.99588}
            rx={14.724606}
            ry={14.907297}
          />
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1729.0363}
          y={562.26392}
          id="text385-5-8-8"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-60"
            x={1729.0363}
            y={562.26392}
            style={{ strokeWidth: 1.85364 }}
          >
            {"JT #1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1834.5127}
          y={379.07037}
          id="text385-5-8-0"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-7"
            x={1834.5127}
            y={379.07037}
            style={{ strokeWidth: 1.85364 }}
          >
            {"JT1"}
          </tspan>
        </text>
        <g
          id="g60-9"
          style={{ opacity: 0.313312, strokeWidth: 0.73711 }}
          transform="matrix(1.4984192,0,0,1.2282923,2042.7022,-175.88882)"
        >
          <rect
            style={{
              opacity: 1,
              fill: "#ffffff",
              stroke: "#666666",
              strokeWidth: 0.73711,
              strokeOpacity: 1
            }}
            id="rect65-2"
            width={136.44951}
            height={74.577667}
            x={-289.47183}
            y={710.97375}
            rx={7.8514113}
            ry={9.5780993}
          />
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1774.3389}
          y={748.35504}
          id="text158-5-2"
        >
          <tspan id="tspan158-6-0" x={1774.3389} y={748.35504}>
            {/* {"RUN"} */}
            {pms_jacking_vfd?.item3?.title ?? "RUN"}
          </tspan>
        </text>
        <path
          id="circle804-6-0-23-9"
          className={
            typeof pms_jacking_vfd?.item3?.value === "number"
              ? pms_jacking_vfd?.item3?.value
                ? "fill-success"
                : "fill-destructive animate-pulse"
              : "fill-primary/50"
          }
          style={{
            display: "inline",
            // fill: "#4bbc4b",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1774.3096,755.73583 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
        />
        <g id="g515">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1711.2389}
            y={749.56097}
            id="text158-0-9"
          >
            <tspan id="tspan158-4-3" x={1711.2389} y={749.56097}>
              {/* {"AVAIL"} */}
              {pms_jacking_vfd?.item2?.title ?? "AVAIL"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-23-05"
            className={
              typeof pms_jacking_vfd?.item2?.value === "number"
                ? pms_jacking_vfd?.item2?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1710.9401,755.67333 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
          />
        </g>
        <g id="g514">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1651.5817}
            y={750.45612}
            id="text158-4-1"
          >
            <tspan id="tspan158-93-6" x={1651.5817} y={750.45612}>
              {/* {"REQ"} */}
              {pms_jacking_vfd?.item1?.title ?? "REQ"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-23-0"
            className={
              typeof pms_jacking_vfd?.item1?.value === "number"
                ? pms_jacking_vfd?.item1?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1651.9157,755.73583 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
          />
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1711.0957}
          y={722.45612}
          id="text158-2-9"
        >
          <tspan id="tspan158-9-6" x={1711.0957} y={722.45612}>
            {"JACKING VFD"}
          </tspan>
        </text>
        <script id="mesh_polyfill" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <path
          id="path211-5-09-6"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 532.31781,416.27125 v 27.70972"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6-0"
          cx={532.51227}
          cy={-402.63165}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6-9"
          width={9.0867147}
          height={9.0867147}
          x={527.96893}
          y={-418.74689}
          transform="scale(1,-1)"
        />
        {pms_cra2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 532.51227,409.66018 3e-5,-14.05709"
            id="path142-6-7"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8-1"
          width={9.0866575}
          height={9.0866575}
          x={527.96893}
          y={-395.60309}
          transform="scale(1,-1)"
        />
        <path
          id="path149-3-1"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 532.51228,342.63164 v 43.88479"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={559.37988}
          y={416.64291}
          id="text43-2-7-9"
        >
          <tspan id="tspan43-8-0-1" x={559.37988} y={416.64291}>
            {"CRA2"}
          </tspan>
        </text>
        <rect
          style={{
            opacity: 0.212056,
            fill: "#ffffff",
            stroke: "#666666",
            strokeWidth: 1.2536,
            strokeOpacity: 1
          }}
          id="rect65-6"
          width={175.79895}
          height={100.73768}
          x={444.04221}
          y={443.43225}
          rx={11.764707}
          ry={11.764708}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={531.32562}
          y={467.23203}
          id="text158-2-8"
        >
          <tspan id="tspan158-9-2" x={531.32562} y={467.23203}>
            {"2# CRANE"}
          </tspan>
        </text>
        <g id="g503">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={485.81161}
            y={499.23203}
            id="text158-4-4"
          >
            <tspan id="tspan158-93-5" x={485.81161} y={499.23203}>
              {/* {"REQ"} */}
              {pms_2_crane?.item1?.title ?? "REQ"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-5"
            className={
              typeof pms_2_crane?.item1?.value === "number"
                ? pms_2_crane?.item1?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 485.40512,506.32062 a 12.629166,12.629166 0 0 0 -12.62695,12.63086 12.629166,12.629166 0 0 0 12.62695,12.62891 12.629166,12.629166 0 0 0 12.63086,-12.62891 12.629166,12.629166 0 0 0 -12.63086,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0.002,1.20312 a 9.8890877,9.8890877 0 0 0 -9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88868,-9.88867 9.8890877,9.8890877 0 0 0 -9.88868,-9.88867 z"
          />
        </g>
        <g id="g504">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={533.46881}
            y={499.33688}
            id="text158-0-5"
          >
            <tspan id="tspan158-4-1" x={533.46881} y={499.33688}>
              {/* {"AVAIL"} */}
              {pms_2_crane?.item2?.title ?? "AVAIL"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-2"
            className={
              typeof pms_2_crane?.item2?.value === "number"
                ? pms_2_crane?.item2?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 531.96485,505.84574 a 12.629166,12.629166 0 0 0 -12.62695,12.63086 12.629166,12.629166 0 0 0 12.62695,12.62891 12.629166,12.629166 0 0 0 12.63086,-12.62891 12.629166,12.629166 0 0 0 -12.63086,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0.002,1.20312 a 9.8890877,9.8890877 0 0 0 -9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88868,-9.88867 9.8890877,9.8890877 0 0 0 -9.88868,-9.88867 z"
          />
        </g>
        <g id="g505">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={580.56885}
            y={499.13095}
            id="text158-5-3"
          >
            <tspan id="tspan158-6-5" x={580.56885} y={499.13095}>
              {/* {"RUN"} */}
              {pms_2_crane?.item3?.title ?? "RUN"}
            </tspan>
          </text>
          <path
            className={
              typeof pms_2_crane?.item3?.value === "number"
                ? pms_2_crane?.item3?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            id="circle804-6-0-9"
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 581.51079,506.02251 a 12.629166,12.629166 0 0 0 -12.62695,12.63086 12.629166,12.629166 0 0 0 12.62695,12.62891 12.629166,12.629166 0 0 0 12.63086,-12.62891 12.629166,12.629166 0 0 0 -12.63086,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0.002,1.20312 a 9.8890877,9.8890877 0 0 0 -9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88867,9.88867 9.8890877,9.8890877 0 0 0 9.88868,-9.88867 9.8890877,9.8890877 0 0 0 -9.88868,-9.88867 z"
          />
        </g>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-3-7-2"
          cx={705.3031}
          cy={-403.74185}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-3-6-4"
          width={9.0867147}
          height={9.0867147}
          x={700.75977}
          y={-419.85709}
          transform="scale(1,-1)"
        />
        {pms_thtr2?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 705.30308,410.77037 3e-5,-14.05709"
            id="path142-0-6-8"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-6-1-1"
          width={9.0866575}
          height={9.0866575}
          x={700.75977}
          y={-396.71329}
          transform="scale(1,-1)"
        />
        <path
          id="path148-9-7-6"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 705.32652,419.87538 -0.0234,43.56282"
        />
        <path
          id="path149-4-6-29"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 705.30309,343.74183 v 43.88479"
        />
        <path
          id="path65-8"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 6.24119,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 705.84541,579.58823 1.43231,78.06632"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient366)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3-5)"
          }}
          id="ellipse120-5-7"
          cx={1841}
          cy={60.126144}
          rx={7.883914}
          ry={20.930311}
          transform="matrix(0.82954,0,0,-0.73322441,-777.72709,752.85444)"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient367)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3-5)"
          }}
          id="ellipse118-7-4"
          cx={1841}
          cy={-116.69469}
          rx={7.883914}
          ry={20.930311}
          transform="matrix(0.82954,0,0,0.73322441,-777.72709,752.85444)"
        />
        <ellipse
          style={{
            fill: "url(#linearGradient368)",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3-5)"
          }}
          id="path103-4-5"
          cx={1781.75}
          cy={-88.5}
          rx={69.75}
          ry={23.25}
          transform="matrix(0.82954,0,0,0.73322441,-777.72709,752.85444)"
        />
        <path
          id="rect104-4-5"
          style={{
            fill: "url(#linearGradient369)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            filter: "url(#filter130-3-5)"
          }}
          d="m 1757.1551,-66.743381 c 12.8911,1.519929 26.0316,1.90881 38.8341,1.003747 l -8.9758,21.590139 -24.7114,-0.265165 z"
          transform="matrix(0.82954,0,0,0.73322441,-777.72709,752.85444)"
        />
        <path
          id="rect105-1-9"
          style={{
            fill: "url(#linearGradient370)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            filter: "url(#filter130-3-5)"
          }}
          d="m 1751.8571,-151.32085 h 66.468 v 34.82502 l 5.7454,9.51449 c -23.1277,-5.93345 -55.0068,-6.25403 -79.8286,-1.12082 l 7.6152,-8.39367 z"
          transform="matrix(0.82954,0,0,0.73322441,-777.72709,752.85444)"
        />
        <rect
          style={{
            fill: "url(#linearGradient371)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3-5)"
          }}
          id="rect106-8-37"
          width={36.875}
          height={12.67915}
          x={1773.125}
          y={-164}
          transform="matrix(0.82954,0,0,0.73322441,-777.72709,752.85444)"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient372)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3-5)"
          }}
          id="ellipse121-5-9"
          cx={-88.5}
          cy={-1841}
          rx={7.883914}
          ry={4.0960226}
          transform="matrix(0,0.73322441,-0.82954,0,-777.72709,752.85444)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={850.51001}
          y={557.01813}
          id="text385-5-8-09-3-0"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-65-3-5"
            x={850.51001}
            y={557.01813}
            style={{ strokeWidth: 1.85364 }}
          >
            {"VFD2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={815.15186}
          y={378.24814}
          id="text385-5-8-3"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-1"
            x={815.15186}
            y={378.24814}
            style={{ strokeWidth: 1.85364 }}
          >
            {"THTR2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={845.76941}
          y={458.81607}
          id="text385-5-8-59-5-6"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-5-2-0"
            x={845.76941}
            y={458.81607}
            style={{ strokeWidth: 1.85364 }}
          >
            {"TRANS #2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={867.38544}
          y={640.8714}
          id="text385-5-8-80-0-6"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-3-1"
            x={867.38544}
            y={640.8714}
            style={{ strokeWidth: 1.85364 }}
          >
            {"AZI. THR. S."}
          </tspan>
        </text>
        <path
          id="path211-5-9-7-7"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 683.07085,533.19613 v 58.63479"
        />
        <path
          id="path211-5-2-2"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 725.60054,533.31543 v 58.63479"
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient51-2-9)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-2-5"
          cx={705.83484}
          cy={486.07513}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient49-5-7)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-1-4-8"
          cx={722.96899}
          cy={510.43347}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient47-1-1)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-3-78-7"
          cx={687.10992}
          cy={510.59622}
          rx={28.284325}
          ry={24.759336}
        />
        <rect
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            stroke: "#666666",
            strokeWidth: 1.20766,
            strokeOpacity: 1
          }}
          id="rect67-6"
          width={119.87951}
          height={58.735245}
          x={644.8551}
          y={558.05701}
        />
        <path
          d="m 719.26094,602.62028 c -0.6267,-0.52976 -1.4246,-0.79027 -0.73306,-1.27036 l 11.84299,-7.17393 -2.33522,-0.91533 c 1.32953,-0.2006 2.27302,0.35292 0.0308,0.0137 l 7.55718,-2.04329 c -0.40252,0.74925 -0.8557,0.60877 0.007,-0.005 l -1.49951,5.87575 c -1.31876,-1.17413 -1.4202,-1.72334 0.005,-0.0181 l -1.9168,-1.54762 -11.42202,7.73269 c -0.69154,0.48008 -0.80625,-0.0367 -1.43295,-0.56646 z"
          style={{ fill: "#d45500", strokeWidth: 1.20766 }}
          id="path1-2-5"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 724.96189,597.21131 c 11.27934,8.41785 14.26789,3.55269 15.46717,1.37352"
          id="path10-3-8-5-9-72-4-4-8-0-7"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 727.29296,598.85228 c -9.74671,-7.16694 -11.04449,-4.12198 -14.15715,-1.03502"
          id="path10-3-8-5-2-9-4-1-3-2"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 674.35561,579.10897 c 9.56437,5.9186 12.09852,2.4979 13.11546,0.96573"
          id="path10-3-8-5-9-72-4-4-6-5"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 676.33225,580.26274 c -8.26477,-5.03909 -9.36523,-2.89817 -12.00463,-0.72773"
          id="path10-3-8-5-2-9-4-2-5"
        />
        <path
          style={{
            fill: "#000000",
            stroke: "#666666",
            strokeWidth: 1.20766,
            strokeOpacity: 1
          }}
          d="M 644.8551,616.79224 764.20418,558.89607"
          id="path73-51"
        />
        <script id="mesh_polyfill-4" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-3-7"
          cx={1147.7749}
          cy={-403.54153}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-3-6"
          width={9.0867147}
          height={9.0867147}
          x={1143.2316}
          y={-419.65677}
          transform="scale(1,-1)"
        />
        {pms_thtr1?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="M 1147.7749,410.57004 V 396.51295"
            id="path142-0-6"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-6-1"
          width={9.0866575}
          height={9.0866575}
          x={1143.2316}
          y={-396.51294}
          transform="scale(1,-1)"
        />
        <path
          id="path148-9-7"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1147.7983,419.67505 -0.023,43.56282"
        />
        <path
          id="path149-4-6"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1147.7749,343.5415 v 43.88479"
        />
        <path
          id="path65"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 6.24119,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1148.3172,579.3879 1.4323,78.06632"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient67)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3)"
          }}
          id="ellipse120-5"
          cx={1841}
          cy={60.126144}
          rx={7.883914}
          ry={20.930311}
          transform="matrix(0.82954,0,0,-0.73322441,-335.25528,752.65411)"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient68)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3)"
          }}
          id="ellipse118-7"
          cx={1841}
          cy={-116.69469}
          rx={7.883914}
          ry={20.930311}
          transform="matrix(0.82954,0,0,0.73322441,-335.25528,752.65411)"
        />
        <ellipse
          style={{
            fill: "url(#linearGradient69)",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3)"
          }}
          id="path103-4"
          cx={1781.75}
          cy={-88.5}
          rx={69.75}
          ry={23.25}
          transform="matrix(0.82954,0,0,0.73322441,-335.25528,752.65411)"
        />
        <path
          id="rect104-4"
          style={{
            fill: "url(#linearGradient70)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            filter: "url(#filter130-3)"
          }}
          d="m 1757.1551,-66.743381 c 12.8911,1.519929 26.0316,1.90881 38.8341,1.003747 l -8.9758,21.590139 -24.7114,-0.265165 z"
          transform="matrix(0.82954,0,0,0.73322441,-335.25528,752.65411)"
        />
        <path
          id="rect105-1"
          style={{
            fill: "url(#linearGradient71)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            filter: "url(#filter130-3)"
          }}
          d="m 1751.8571,-151.32085 h 66.468 v 34.82502 l 5.7454,9.51449 c -23.1277,-5.93345 -55.0068,-6.25403 -79.8286,-1.12082 l 7.6152,-8.39367 z"
          transform="matrix(0.82954,0,0,0.73322441,-335.25528,752.65411)"
        />
        <rect
          style={{
            fill: "url(#linearGradient72)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3)"
          }}
          id="rect106-8"
          width={36.875}
          height={12.67915}
          x={1773.125}
          y={-164}
          transform="matrix(0.82954,0,0,0.73322441,-335.25528,752.65411)"
        />
        <ellipse
          style={{
            opacity: 0.979215,
            fill: "url(#linearGradient73)",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 1,
            filter: "url(#filter130-3)"
          }}
          id="ellipse121-5"
          cx={-88.5}
          cy={-1841}
          rx={7.883914}
          ry={4.0960226}
          transform="matrix(0,0.73322441,-0.82954,0,-335.25528,752.65411)"
        />
        <path
          id="path211-5-9-7"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1125.5427,532.9958 v 58.63479"
        />
        <path
          id="path211-5-2"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.6236,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1168.0724,533.1151 v 58.63479"
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient51-2)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-2"
          cx={1148.3066}
          cy={485.87482}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient49-5)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-1-4"
          cx={1165.4408}
          cy={510.23318}
          rx={28.284325}
          ry={24.759336}
        />
        <ellipse
          style={{
            display: "inline",
            fill: "url(#linearGradient47-1)",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 5.35849,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-2-3-78"
          cx={1129.5817}
          cy={510.39594}
          rx={28.284325}
          ry={24.759336}
        />
        <rect
          style={{
            fill: "#ffffff",
            fillOpacity: 1,
            stroke: "#666666",
            strokeWidth: 1.20766,
            strokeOpacity: 1
          }}
          id="rect67"
          width={119.87951}
          height={58.735245}
          x={1087.3269}
          y={557.85669}
        />
        <path
          d="m 1161.7328,602.41995 c -0.6267,-0.52976 -1.4246,-0.79027 -0.7331,-1.27036 l 11.843,-7.17393 -2.3352,-0.91533 c 1.3295,-0.2006 2.273,0.35292 0.031,0.0137 l 7.5572,-2.04329 c -0.4025,0.74925 -0.8557,0.60877 0.01,-0.005 l -1.4995,5.87575 c -1.3187,-1.17413 -1.4202,-1.72334 0.01,-0.0181 l -1.9168,-1.54762 -11.422,7.73269 c -0.6916,0.48008 -0.8063,-0.0367 -1.433,-0.56646 z"
          style={{ fill: "#d45500", strokeWidth: 1.20766 }}
          id="path1-2"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1167.4337,597.01098 c 11.2794,8.41785 14.2679,3.55269 15.4672,1.37352"
          id="path10-3-8-5-9-72-4-4-8-0"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1169.7648,598.65195 c -9.7467,-7.16694 -11.0445,-4.12198 -14.1572,-1.03502"
          id="path10-3-8-5-2-9-4-1-3"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1116.8274,578.90864 c 9.5644,5.9186 12.0985,2.4979 13.1155,0.96573"
          id="path10-3-8-5-9-72-4-4-6"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#d45500",
            strokeWidth: 3.05213,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1118.8041,580.06241 c -8.2648,-5.03909 -9.3653,-2.89817 -12.0047,-0.72773"
          id="path10-3-8-5-2-9-4-2"
        />
        <path
          style={{
            fill: "#000000",
            stroke: "#666666",
            strokeWidth: 1.20766,
            strokeOpacity: 1
          }}
          d="M 1087.3269,616.59191 1206.676,558.69574"
          id="path73"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1295.8096}
          y={378.16812}
          id="text385-5-8-6-4"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-6-9"
            x={1295.8096}
            y={378.16812}
            style={{ strokeWidth: 1.85364 }}
          >
            {"THTR1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1150.9231}
          y={461.45224}
          id="text385-5-8-59-0"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-5-1"
            x={1150.9231}
            y={461.45224}
            style={{ strokeWidth: 1.85364 }}
          >
            {"TRANS #1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1148.9708}
          y={558.01819}
          id="text385-5-8-09-1"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-65-4"
            x={1148.9708}
            y={558.01819}
            style={{ strokeWidth: 1.85364 }}
          >
            {"VFD1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1342.179}
          y={641.97821}
          id="text385-5-8-80-2"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-03"
            x={1342.179}
            y={641.97821}
            style={{ strokeWidth: 1.85364 }}
          >
            {"AZI. THR. P."}
          </tspan>
        </text>
        <path
          id="path211-5-09-6-3"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.71081,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1351.5323,803.48515 v 51.13208"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6-0-6"
          cx={1351.8208}
          cy={-794.33002}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6-9-8"
          width={9.0867147}
          height={9.0867147}
          x={1347.2775}
          y={-810.44525}
          transform="scale(1,-1)"
        />
        {pms_t1_2msb?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 1351.8207,801.35852 10e-5,-14.05709"
            id="path142-6-7-1"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8-1-1"
          width={9.0866575}
          height={9.0866575}
          x={1347.2775}
          y={-787.30145}
          transform="scale(1,-1)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "14.8292px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1.85364,
            strokeOpacity: 1
          }}
          x={1395.7114}
          y={739.90649}
          id="text385-5-8-80-0-7-3"
          transform="scale(0.92682237,1.0789554)"
        >
          <tspan
            id="tspan385-9-5-3-3-9-8"
            x={1395.7114}
            y={739.90649}
            style={{ strokeWidth: 1.85364 }}
          >
            {"T1-2MSB"}
          </tspan>
        </text>
        <path
          id="path211-5-09-6-3-4"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.00227,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1351.8459,736.223 v 50.42627"
        />
        <script id="mesh_polyfill-0" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-1" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-2" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-9" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-5" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <path
          id="path18-9"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.77493,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1124.5399,266.47849 v 78.39025"
        />
        <path
          id="path19-7"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.55032,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1124.7546,196.35918 0.033,50.9376"
        />
        <circle
          style={{
            fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 3,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle9-3"
          cx={1124.7167}
          cy={166.88033}
          r={28.608997}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "18.6667px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "'Arial Bold'",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1106.369}
          y={173.56133}
          id="text10-0"
        >
          <tspan id="tspan10-2" x={1106.369} y={173.56133}>
            {"DG2"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle14-7"
          cx={1124.667}
          cy={258.97849}
          r={21.724606}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect15-9"
          width={9.0867147}
          height={9.0867147}
          x={1120.1237}
          y={243.48737}
        />
        {pms_dg2_running?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 1124.667,252.57408 v 13.18209"
            id="path15-6"
          />
        )}

        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect16-66"
          width={9.0866575}
          height={9.0866575}
          x={1120.1237}
          y={265.75616}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1156.088}
          y={263.98483}
          id="text43-2-7-78-2"
        >
          <tspan id="tspan43-8-0-2-5" x={1156.088} y={263.98483}>
            {"-G2"}
          </tspan>
        </text>
        <script id="mesh_polyfill-96" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <path
          id="path18-9-0"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.77493,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1632.8735,265.25919 v 78.39025"
        />
        <path
          id="path19-7-6"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.55032,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1633.0883,195.13988 0.033,50.9376"
        />
        <circle
          style={{
            fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 3,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle9-3-2"
          cx={1633.0503}
          cy={165.66103}
          r={28.608997}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "18.6667px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "'Arial Bold'",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1614.7026}
          y={172.34203}
          id="text10-0-8"
        >
          <tspan id="tspan10-2-3" x={1614.7026} y={172.34203}>
            {"DG1"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle14-7-3"
          cx={1633.0006}
          cy={257.75919}
          r={21.724606}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect15-9-5"
          width={9.0867147}
          height={9.0867147}
          x={1628.4573}
          y={242.26807}
        />
        {pms_dg1_running?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 1633.0006,251.35478 10e-5,13.18209"
            id="path15-6-0"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect16-66-2"
          width={9.0866575}
          height={9.0866575}
          x={1628.4573}
          y={264.53687}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1664.4216}
          y={262.76553}
          id="text43-2-7-78-2-4"
        >
          <tspan id="tspan43-8-0-2-5-5" x={1664.4216} y={262.76553}>
            {"-G1"}
          </tspan>
        </text>
        <script id="mesh_polyfill-82" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <script id="mesh_polyfill-79" type="text/javascript">
          {
            '\n!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();\n'
          }
        </script>
        <path
          id="path211-5-9-0"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4.74214,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1514.6465,589.69769 v 127.153 18.8317"
        />
        <path
          id="path159-0"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1514.6005,407.83669 -0.023,102.9595"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1545.1217}
          y={403.11157}
          id="text43-2-7-1-5"
        >
          <tspan id="tspan43-8-0-3-6" x={1545.1217} y={403.11157}>
            {"T1"}
          </tspan>
        </text>
        <ellipse
          style={{
            fill: "url(#linearGradient1280-0)",
            fillOpacity: 1,
            stroke: "url(#linearGradient1576)",
            strokeWidth: 4.02519,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle58-5-3"
          cx={1515.2343}
          cy={534.42352}
          rx={29.210367}
          ry={25.30135}
        />
        <ellipse
          style={{
            fill: "url(#linearGradient1282-3)",
            fillOpacity: 1,
            stroke: "url(#linearGradient1577)",
            strokeWidth: 4.02519,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          id="circle59-1-1"
          cx={1515.2343}
          cy={566.13776}
          rx={29.210367}
          ry={25.301365}
        />
        <ellipse
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle158-9"
          cx={1514.5682}
          cy={-394.58139}
          transform="scale(1,-1)"
          rx={21.724606}
          ry={19.953463}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect158-0"
          width={9.0867147}
          height={8.3459015}
          x={1510.0249}
          y={-409.38281}
          transform="scale(1,-1)"
        />

        {pms_t1?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 1514.5682,401.0369 10e-5,-12.91105"
            id="path158-8"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect159-2"
          width={9.0866575}
          height={8.345849}
          x={1510.0249}
          y={-388.12585}
          transform="scale(1,-1)"
        />
        <path
          id="path160-4"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1514.745,341.50594 v 40.30699"
        />
        <path
          id="path211-5-09-6-8"
          style={{
            display: "inline",
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1344.2812,419.82782 v 27.70972"
        />
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle142-6-0-4"
          cx={1344.4757}
          cy={-406.18823}
          r={21.724606}
          transform="scale(1,-1)"
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect142-6-9-6"
          width={9.0867147}
          height={9.0867147}
          x={1339.9324}
          y={-422.30347}
          transform="scale(1,-1)"
        />
        {pms_cra1?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 1344.4756,413.21674 10e-5,-14.05709"
            id="path142-6-7-2"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect143-8-1-6"
          width={9.0866575}
          height={9.0866575}
          x={1339.9324}
          y={-399.15964}
          transform="scale(1,-1)"
        />
        <path
          id="path149-3-1-62"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 1344.4756,346.1882 v 43.88479"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1371.3433}
          y={420.19946}
          id="text43-2-7-9-7"
        >
          <tspan id="tspan43-8-0-1-5" x={1371.3433} y={420.19946}>
            {"CRA1"}
          </tspan>
        </text>
        <rect
          style={{
            opacity: 0.212056,
            fill: "#ffffff",
            stroke: "#666666",
            strokeWidth: 1.2536,
            strokeOpacity: 1
          }}
          id="rect65-6-2"
          width={175.79895}
          height={100.73768}
          x={1256.0056}
          y={446.98883}
          rx={11.764707}
          ry={11.764708}
        />
        <g id="g508">
          <path
            id="circle804-6-0-50"
            className={
              typeof pms_1_crane?.item3?.value === "number"
                ? pms_1_crane?.item3?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1393.9718,509.33794 a 12.629166,12.629166 0 0 0 -12.6269,12.63086 12.629166,12.629166 0 0 0 12.6269,12.62891 12.629166,12.629166 0 0 0 12.6309,-12.62891 12.629166,12.629166 0 0 0 -12.6309,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8886,9.88867 9.8890877,9.8890877 0 0 0 9.8886,9.88867 9.8890877,9.8890877 0 0 0 9.8887,-9.88867 9.8890877,9.8890877 0 0 0 -9.8887,-9.88867 z"
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1392.5322}
            y={502.6875}
            id="text158-5-3-02"
          >
            <tspan id="tspan158-6-5-3" x={1392.5322} y={502.6875}>
              {/* {"RUN"} */}
              {pms_1_crane?.item3?.title ?? "RUN"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1343.2889}
          y={470.78857}
          id="text158-2-8-5"
        >
          <tspan id="tspan158-9-2-5" x={1343.2889} y={470.78857}>
            {"1# CRANE"}
          </tspan>
        </text>
        <g id="g506">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1297.7749}
            y={502.78857}
            id="text158-4-4-6"
          >
            <tspan id="tspan158-93-5-7" x={1297.7749} y={502.78857}>
              {/* {"REQ"} */}
              {pms_1_crane?.item1?.title ?? "REQ"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-54"
            className={
              typeof pms_1_crane?.item1?.value === "number"
                ? pms_1_crane?.item1?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1298.1088,509.94455 a 12.629166,12.629166 0 0 0 -12.6269,12.63086 12.629166,12.629166 0 0 0 12.6269,12.62891 12.629166,12.629166 0 0 0 12.6309,-12.62891 12.629166,12.629166 0 0 0 -12.6309,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,-9.88867 9.8890877,9.8890877 0 0 0 -9.8887,-9.88867 z"
          />
        </g>
        <g id="g507">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1345.4321}
            y={502.89343}
            id="text158-0-5-3"
          >
            <tspan id="tspan158-4-1-5" x={1345.4321} y={502.89343}>
              {/* {"AVAIL"} */}
              {pms_1_crane?.item2?.title ?? "AVAIL"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-99"
            className={
              typeof pms_1_crane?.item2?.value === "number"
                ? pms_1_crane?.item2?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1343.8055,509.24264 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6309,-12.62891 12.629166,12.629166 0 0 0 -12.6309,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,-9.88867 9.8890877,9.8890877 0 0 0 -9.8887,-9.88867 z"
          />
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1835.3213}
          y={550.8916}
          id="text44-5"
        >
          <tspan id="tspan44-5" x={1835.3213} y={550.8916}>
            {"1#BOW THRUSTER"}
          </tspan>
        </text>
        <g id="g509">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1779.0414}
            y={576.76068}
            id="text158-4-1-7-9"
          >
            <tspan id="tspan158-93-6-4-6" x={1779.0414} y={576.76068}>
              {/* {"REQ"} */}
              {pms_1_bow_thruster?.item1?.title ?? "REQ"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-23"
            className={
              typeof pms_1_bow_thruster?.item1?.value === "number"
                ? pms_1_bow_thruster?.item1?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1779.4014,586.39162 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
          />
        </g>
        <g id="g510">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1838.6986}
            y={575.86554}
            id="text158-0-9-2-4"
          >
            <tspan id="tspan158-4-3-7-3" x={1838.6986} y={575.86554}>
              {/* {"AVAIL"} */}
              {pms_1_bow_thruster?.item2?.title ?? "AVAIL"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-1"
            className={
              typeof pms_1_bow_thruster?.item2?.value === "number"
                ? pms_1_bow_thruster?.item2?.value
                  ? "fill-success"
                  : "fill-destructive animate-pulse"
                : "fill-primary/50"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1839.3172,586.48566 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
          />
        </g>
        <g id="g511">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={1891.8993}
            y={577.48804}
            id="text158-5-2-3-3"
          >
            <tspan id="tspan158-6-0-6-6" x={1891.8993} y={577.48804}>
              {/* {"RUN"} */}
              {pms_1_bow_thruster?.item3?.title ?? "RUN"}
            </tspan>
          </text>
          <path
            id="circle804-6-0-3"
            className={
              typeof pms_dg4?.bool?.item3?.value === "number"
                ? pms_dg4?.bool?.item3?.value
                  ? "fill-success"
                  : "fill-[#bdbdbd]"
                : "fill-[#bdbdbd]"
            }
            style={{
              display: "inline",
              // fill: "#4bbc4b",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1894.8564,586.30951 a 12.629166,12.629166 0 0 0 -12.627,12.63086 12.629166,12.629166 0 0 0 12.627,12.62891 12.629166,12.629166 0 0 0 12.6308,-12.62891 12.629166,12.629166 0 0 0 -12.6308,-12.63086 z m 0,1.53907 a 11.092436,11.092436 0 0 1 11.0957,11.09179 11.092436,11.092436 0 0 1 -11.0957,11.0918 11.092436,11.092436 0 0 1 -11.0918,-11.0918 11.092436,11.092436 0 0 1 11.0918,-11.09179 z m 0,1.20312 a 9.8890877,9.8890877 0 0 0 -9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8887,9.88867 9.8890877,9.8890877 0 0 0 9.8886,-9.88867 9.8890877,9.8890877 0 0 0 -9.8886,-9.88867 z"
          />
        </g>
        <path
          id="path2"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.77493,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 278.16653,267.85239 -1e-5,78.39025"
        />
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect365-1-5"
          width={176.19356}
          height={23.232233}
          x={55.469246}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item1?.value === "number"
              ? pms_dg4?.bool?.item1?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect366-25-3"
          width={175.51285}
          height={21.320709}
          x={54.596745}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={144.16922}
          y={32.341972}
          id="text368-5-8"
        >
          <tspan id="tspan368-8-6" x={144.16922} y={32.341972}>
            {/* {"READY TO START"} */}
            {pms_dg4?.bool?.item1?.title ?? "READY TO START"}
          </tspan>
        </text>
        <path
          id="path3"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.55032,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 278.38125,197.73308 0.0333,50.9376"
        />
        <circle
          style={{
            fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 3,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle3"
          cx={278.34329}
          cy={168.25423}
          r={28.608997}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "18.6667px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "'Arial Bold'",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={259.99561}
          y={174.93523}
          id="text3"
        >
          <tspan id="tspan3" x={259.99561} y={174.93523}>
            {"DG4"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle5"
          cx={278.29367}
          cy={260.35236}
          r={21.724606}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect5"
          width={9.0867147}
          height={9.0867147}
          x={273.75027}
          y={244.86127}
        />
        {pms_dg4_running?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 278.29364,253.94798 3e-5,13.18209"
            id="path5"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect6"
          width={9.0866575}
          height={9.0866575}
          x={273.75034}
          y={267.13007}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={309.7146}
          y={265.3587}
          id="text11"
        >
          <tspan id="tspan11" x={309.7146} y={265.3587}>
            {"-G4"}
          </tspan>
        </text>
        <g id="g111" transform="translate(-1.859401e-6,0.93934308)">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect665-4-4-8-0"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={255.21638}
            y={133.28348}
            id="text385-5-8-2-1"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan385-9-5-3-06"
              x={255.21638}
              y={133.28348}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {pms_dg4_voltage?.item1?.value ?? "__"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect665-4-4-8-8-8"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
        </g>
        <path
          id="path18-4"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 3.77493,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 676.66473,267.09119 -10e-6,78.39025"
        />
        <path
          id="path19-0"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#666a71",
            strokeWidth: 2.55032,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          d="m 676.87945,196.97188 0.0333,50.9376"
        />
        <circle
          style={{
            fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 3,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle9-4"
          cx={676.84149}
          cy={167.49303}
          r={28.608997}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "18.6667px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "'Arial Bold'",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={658.49384}
          y={174.17403}
          id="text10-11"
        >
          <tspan id="tspan10-4" x={658.49384} y={174.17403}>
            {"DG3"}
          </tspan>
        </text>
        <circle
          style={{
            fill: "none",
            stroke: "#666a71",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="circle14-3"
          cx={676.79187}
          cy={259.59116}
          r={21.724606}
        />
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect15-0"
          width={9.0867147}
          height={9.0867147}
          x={672.24847}
          y={244.10007}
        />
        {pms_dg3_running?.item1?.value && (
          <path
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#666a71",
              strokeWidth: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke markers fill"
            }}
            d="m 676.79181,253.18678 3e-5,13.18209"
            id="path15-1"
          />
        )}
        <rect
          style={{
            fill: "#666a71",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke markers fill"
          }}
          id="rect16-6"
          width={9.0866575}
          height={9.0866575}
          x={672.24854}
          y={266.36887}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            display: "inline",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={708.21283}
          y={264.5975}
          id="text43-2-7-78-8"
        >
          <tspan id="tspan43-8-0-2-4" x={708.21283} y={264.5975}>
            {"-G3"}
          </tspan>
        </text>
        <g id="g112" transform="translate(397.39754)">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect111"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={255.21638}
            y={133.28348}
            id="text111"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan111"
              x={255.21638}
              y={133.28348}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {pms_dg3_voltage?.item1?.value ?? "__"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect112"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
        </g>
        <g id="g121" transform="translate(846.1182)">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect116"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={255.21638}
            y={133.28348}
            id="text116"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan116"
              x={255.21638}
              y={133.28348}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {/* {"0.00"} */}
              {pms_dg2_voltage?.item1?.value ?? "__"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect118"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
        </g>
        <g id="g122" transform="translate(1354.7498)">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect121"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={255.21638}
            y={133.28348}
            id="text121"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan121"
              x={255.21638}
              y={133.28348}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {/* {"0.00"} */}
              {pms_dg1_voltage?.item1?.value ?? "__"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect122"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.1565412,0,0,1.5225007,224.91645,162.16095)"
            rx={10.660355}
          />
        </g>
        <g id="g125">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect123"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.6496972,0,0,1.5225007,624.23431,797.79015)"
            rx={7.473577}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={644.2785}
            y={823.79517}
            id="text123"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan123"
              x={644.2785}
              y={823.79517}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {/* {"00.0 kW"} */}
              {pms_azi_thr_s?.item1?.value
                ? `${pms_azi_thr_s?.item1?.value} ${pms_azi_thr_p?.item1?.unit}`
                : "__ kW"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect124"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.6496972,0,0,1.5225007,624.23431,797.79015)"
            rx={7.473577}
          />
        </g>
        <g id="g126" transform="translate(450.56773)">
          <rect
            style={{
              fill: "#666666",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-4)"
            }}
            id="rect125"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.6496972,0,0,1.5225007,624.23431,797.79015)"
            rx={7.473577}
          />
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.4485px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.43105,
              strokeOpacity: 1
            }}
            x={644.2785}
            y={823.79517}
            id="text125"
            transform="scale(1.0863436,0.92051906)"
          >
            <tspan
              id="tspan125"
              x={644.2785}
              y={823.79517}
              style={{ fill: "#ffffff", strokeWidth: 2.43105 }}
            >
              {/* {"00.0 kW"} */}
              {pms_azi_thr_p?.item1?.value
                ? `${pms_azi_thr_p?.item1?.value} ${pms_azi_thr_p?.item1?.unit}`
                : "__ kW"}
            </tspan>
          </text>
          <rect
            style={{
              display: "inline",
              opacity: 0.38992,
              mixBlendMode: "normal",
              fill: "#00ff00",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              paintOrder: "stroke fill markers",
              filter: "url(#filter612-3-6-8-9-3)"
            }}
            id="rect126"
            width={85.052429}
            height={21.320709}
            x={3.3523562}
            y={-40.110184}
            ry={10.660355}
            transform="matrix(1.6496972,0,0,1.5225007,624.23431,797.79015)"
            rx={7.473577}
          />
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient637)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect170"
          width={83.458054}
          height={17.885628}
          x={975.75262}
          y={110.9479}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient636)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect172"
          width={83.458054}
          height={17.885628}
          x={976.01459}
          y={141.69135}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient635)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect174"
          width={83.458054}
          height={17.885628}
          x={976.104}
          y={171.91235}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient634)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect176"
          width={83.458054}
          height={17.885628}
          x={975.96844}
          y={203.00026}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient633)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect180"
          width={83.458054}
          height={17.885628}
          x={976.08093}
          y={234.55527}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient632)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect182"
          width={83.458054}
          height={17.885628}
          x={975.90259}
          y={265.08768}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g328">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={280.51038}
            id="text170"
          >
            <tspan id="tspan170" x={943.27106} y={280.51038}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item6?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.2485}
            y={282.72992}
            id="text183"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan183"
              x={1037.2485}
              y={282.72992}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg2?.char?.item6?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={282.4574}
            id="text184"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan184"
              x={1021.4471}
              y={282.4574}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item6?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient631)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect184"
          width={83.458054}
          height={17.885628}
          x={975.70239}
          y={296.78021}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g329">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={311.89447}
            id="text328"
          >
            <tspan id="tspan328" x={943.27106} y={311.89447}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item7?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0499}
            y={314.14496}
            id="text185"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan185"
              x={1037.0499}
              y={314.14496}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"%"} */}
              {pms_dg2?.char?.item7?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={313.87241}
            id="text186"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan186"
              x={1021.4471}
              y={313.87241}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item7?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect256"
          width={176.19356}
          height={23.232233}
          x={55.469246}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item3?.value === "number"
              ? pms_dg4?.bool?.item3?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect257"
          width={175.51285}
          height={21.320709}
          x={54.596745}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={144.16922}
          y={59.742363}
          id="text257"
        >
          <tspan id="tspan257" x={144.16922} y={59.742363}>
            {/* {"CB CLOSED"} */}
            {pms_dg4?.bool?.item3?.title ?? "CB CLOSED"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect258"
          width={176.19356}
          height={23.232233}
          x={55.469246}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item5?.value === "number"
              ? pms_dg4?.bool?.item5?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect259"
          width={175.51285}
          height={21.320709}
          x={54.596745}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={144.16922}
          y={87.142754}
          id="text259"
        >
          <tspan id="tspan259" x={144.16922} y={87.142754}>
            {/* {"AUTO MODE"} */}
            {pms_dg4?.bool?.item5?.title ?? "AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect260"
          width={176.19356}
          height={23.232233}
          x={241.19505}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item2?.value === "number"
              ? pms_dg4?.bool?.item2?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect261"
          width={175.51285}
          height={21.320709}
          x={240.32256}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={329.89502}
          y={32.341972}
          id="text261"
        >
          <tspan id="tspan261" x={329.89502} y={32.341972}>
            {/* {"RUNNING"} */}
            {pms_dg4?.bool?.item2?.title ?? "RUNNING"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect262"
          width={176.19356}
          height={23.232233}
          x={241.19505}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item4?.value === "number"
              ? pms_dg4?.bool?.item4?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect263"
          width={175.51285}
          height={21.320709}
          x={240.32256}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={329.89502}
          y={59.742363}
          id="text263"
        >
          <tspan id="tspan263" x={329.89502} y={59.742363}>
            {/* {"PMS MODE"} */}
            {pms_dg4?.bool?.item4?.title ?? "PMS MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect264"
          width={176.19356}
          height={23.232233}
          x={241.19505}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg4?.bool?.item6?.value === "number"
              ? pms_dg4?.bool?.item6?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect265"
          width={175.51285}
          height={21.320709}
          x={240.32256}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={329.89502}
          y={87.142754}
          id="text265"
        >
          <tspan id="tspan265" x={329.89502} y={87.142754}>
            {/* {"SEMI-AUTO MODE"} */}
            {pms_dg4?.bool?.item6?.title ?? "SEMI-AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect266"
          width={176.19356}
          height={23.232233}
          x={469.24094}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item1?.value === "number"
              ? pms_dg3?.bool?.item1?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect267"
          width={175.51285}
          height={21.320709}
          x={468.36844}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={557.94092}
          y={32.341972}
          id="text267"
        >
          <tspan id="tspan267" x={557.94092} y={32.341972}>
            {/* {"READY TO START"} */}
            {pms_dg3?.bool?.item1?.title ?? "READY TO START"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect268"
          width={176.19356}
          height={23.232233}
          x={469.24094}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item3?.value === "number"
              ? pms_dg3?.bool?.item3?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect269"
          width={175.51285}
          height={21.320709}
          x={468.36844}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={557.94092}
          y={59.742363}
          id="text269"
        >
          <tspan id="tspan269" x={557.94092} y={59.742363}>
            {/* {"CB CLOSED"} */}
            {pms_dg3?.bool?.item3?.title ?? "CB CLOSED"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect270"
          width={176.19356}
          height={23.232233}
          x={469.24094}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item5?.value === "number"
              ? pms_dg3?.bool?.item5?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect271"
          width={175.51285}
          height={21.320709}
          x={468.36844}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={557.94092}
          y={87.142754}
          id="text271"
        >
          <tspan id="tspan271" x={557.94092} y={87.142754}>
            {/* {"AUTO MODE"} */}
            {pms_dg3?.bool?.item5?.title ?? "AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect272"
          width={176.19356}
          height={23.232233}
          x={654.96674}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item2?.value === "number"
              ? pms_dg3?.bool?.item2?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect273"
          width={175.51285}
          height={21.320709}
          x={654.09424}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={743.66675}
          y={32.341972}
          id="text273"
        >
          <tspan id="tspan273" x={743.66675} y={32.341972}>
            {/* {"RUNNING"} */}
            {pms_dg3?.bool?.item2?.title ?? "RUNNING"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect274"
          width={176.19356}
          height={23.232233}
          x={654.96674}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item4?.value === "number"
              ? pms_dg3?.bool?.item4?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect275"
          width={175.51285}
          height={21.320709}
          x={654.09424}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={743.66675}
          y={59.742363}
          id="text275"
        >
          <tspan id="tspan275" x={743.66675} y={59.742363}>
            {/* {"PMS MODE"} */}
            {pms_dg3?.bool?.item4?.title ?? "PMS MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect276"
          width={176.19356}
          height={23.232233}
          x={654.96674}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg3?.bool?.item6?.value === "number"
              ? pms_dg3?.bool?.item6?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect277"
          width={175.51285}
          height={21.320709}
          x={654.09424}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={743.66675}
          y={87.142754}
          id="text277"
        >
          <tspan id="tspan277" x={743.66675} y={87.142754}>
            {/* {"SEMI-AUTO MODE"} */}
            {pms_dg3?.bool?.item6?.title ?? "SEMI-AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect278"
          width={176.19356}
          height={23.232233}
          x={885.03406}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item1?.value === "number"
              ? pms_dg2?.bool?.item1?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect279"
          width={175.51285}
          height={21.320709}
          x={884.16156}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={973.73401}
          y={32.341972}
          id="text279"
        >
          <tspan id="tspan279" x={973.73401} y={32.341972}>
            {/* {"READY TO START"} */}
            {pms_dg2?.bool?.item1?.title ?? "READY TO START"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect280"
          width={176.19356}
          height={23.232233}
          x={885.03406}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item3?.value === "number"
              ? pms_dg2?.bool?.item3?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect281"
          width={175.51285}
          height={21.320709}
          x={884.16156}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={973.73401}
          y={59.742363}
          id="text281"
        >
          <tspan id="tspan281" x={973.73401} y={59.742363}>
            {/* {"CB CLOSED"} */}
            {pms_dg2?.bool?.item3?.title ?? "CB CLOSED"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect282"
          width={176.19356}
          height={23.232233}
          x={885.03406}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item5?.value === "number"
              ? pms_dg2?.bool?.item5?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect283"
          width={175.51285}
          height={21.320709}
          x={884.16156}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={973.73401}
          y={87.142754}
          id="text283"
        >
          <tspan id="tspan283" x={973.73401} y={87.142754}>
            {/* {"AUTO MODE"} */}
            {pms_dg2?.bool?.item5?.title ?? "AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect284"
          width={176.19356}
          height={23.232233}
          x={1070.7599}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item2?.value === "number"
              ? pms_dg2?.bool?.item2?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect285"
          width={175.51285}
          height={21.320709}
          x={1069.8873}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1159.4598}
          y={32.341972}
          id="text285"
        >
          <tspan id="tspan285" x={1159.4598} y={32.341972}>
            {/* {"RUNNING"} */}
            {pms_dg2?.bool?.item2?.title ?? "RUNNING"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect286"
          width={176.19356}
          height={23.232233}
          x={1070.7599}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item4?.value === "number"
              ? pms_dg2?.bool?.item4?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect287"
          width={175.51285}
          height={21.320709}
          x={1069.8873}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1159.4598}
          y={59.742363}
          id="text287"
        >
          <tspan id="tspan287" x={1159.4598} y={59.742363}>
            {/* {"PMS MODE"} */}
            {pms_dg2?.bool?.item4?.title ?? "PMS MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect288"
          width={176.19356}
          height={23.232233}
          x={1070.7599}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg2?.bool?.item6?.value === "number"
              ? pms_dg2?.bool?.item6?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect289"
          width={175.51285}
          height={21.320709}
          x={1069.8873}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1159.4598}
          y={87.142754}
          id="text289"
        >
          <tspan id="tspan289" x={1159.4598} y={87.142754}>
            {/* {"SEMI-AUTO MODE"} */}
            {pms_dg2?.bool?.item6?.title ?? "SEMI-AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect290"
          width={176.19356}
          height={23.232233}
          x={1407.5952}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item1?.value === "number"
              ? pms_dg1?.bool?.item1?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect291"
          width={175.51285}
          height={21.320709}
          x={1406.7228}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1496.2952}
          y={32.341972}
          id="text291"
        >
          <tspan id="tspan291" x={1496.2952} y={32.341972}>
            {pms_dg1?.bool?.item1?.title ?? "READY TO START"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect292"
          width={176.19356}
          height={23.232233}
          x={1407.5952}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item3?.value === "number"
              ? pms_dg1?.bool?.item3?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect293"
          width={175.51285}
          height={21.320709}
          x={1406.7228}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1496.2952}
          y={59.742363}
          id="text293"
        >
          <tspan id="tspan293" x={1496.2952} y={59.742363}>
            {/* {"CB CLOSED"} */}
            {pms_dg1?.bool?.item3?.title ?? "CB CLOSED"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect294"
          width={176.19356}
          height={23.232233}
          x={1407.5952}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item5?.value === "number"
              ? pms_dg1?.bool?.item5?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect295"
          width={175.51285}
          height={21.320709}
          x={1406.7228}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1496.2952}
          y={87.142754}
          id="text295"
        >
          <tspan id="tspan295" x={1496.2952} y={87.142754}>
            {/* {"AUTO MODE"} */}
            {pms_dg1?.bool?.item5?.title ?? "AUTO MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect296"
          width={176.19356}
          height={23.232233}
          x={1593.321}
          y={15.35285}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item2?.value === "number"
              ? pms_dg1?.bool?.item2?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect297"
          width={175.51285}
          height={21.320709}
          x={1592.4485}
          y={15.424734}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1682.021}
          y={32.341972}
          id="text297"
        >
          <tspan id="tspan297" x={1682.021} y={32.341972}>
            {/* {"RUNNING"} */}
            {pms_dg1?.bool?.item2?.title ?? "RUNNING"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect298"
          width={176.19356}
          height={23.232233}
          x={1593.321}
          y={42.753239}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item4?.value === "number"
              ? pms_dg1?.bool?.item4?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect299"
          width={175.51285}
          height={21.320709}
          x={1592.4485}
          y={42.825123}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1682.021}
          y={59.742363}
          id="text299"
        >
          <tspan id="tspan299" x={1682.021} y={59.742363}>
            {/* {"PMS MODE"} */}
            {pms_dg1?.bool?.item4?.title ?? "PMS MODE"}
          </tspan>
        </text>
        <rect
          style={{
            fill: "#4d4d4d",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect300"
          width={176.19356}
          height={23.232233}
          x={1593.321}
          y={70.153625}
          ry={11.616117}
        />
        <rect
          className={
            typeof pms_dg1?.bool?.item6?.value === "number"
              ? pms_dg1?.bool?.item6?.value
                ? "fill-success"
                : "fill-[#bdbdbd]"
              : "fill-[#bdbdbd]"
          }
          style={{
            // fill: "#bdbdbd",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect301"
          width={175.51285}
          height={21.320709}
          x={1592.4485}
          y={70.22551}
          ry={10.660355}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: 16,
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2,
            strokeOpacity: 1
          }}
          x={1682.021}
          y={87.142754}
          id="text301"
        >
          <tspan id="tspan301" x={1682.021} y={87.142754}>
            {/* {"SEMI-AUTO MODE"} */}
            {pms_dg1?.bool?.item6?.title ?? "SEMI-AUTO MODE"}
          </tspan>
        </text>
        <g id="g330">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4255}
            y={251.16681}
            id="text181"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan181"
              x={1037.4255}
              y={251.16681}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"%"} */}
              {pms_dg2?.char?.item5?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={251.20558}
            id="text182"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan182"
              x={1021.4471}
              y={251.20558}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item5?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={249.45692}
            id="text329"
          >
            <tspan id="tspan329" x={943.27106} y={249.45692}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item5?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g331">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3138}
            y={219.64708}
            id="text177"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan177"
              x={1037.3138}
              y={219.64708}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg2?.char?.item4?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={219.37454}
            id="text178"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan178"
              x={1021.4471}
              y={219.37454}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item4?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={217.90677}
            id="text330"
          >
            <tspan id="tspan330" x={943.27106} y={217.90677}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item4?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g332">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4485}
            y={188.32118}
            id="text175"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan175"
              x={1037.4485}
              y={188.32118}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"Hz"} */}
              {pms_dg2?.char?.item3?.unit ?? "Hz"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={188.24753}
            id="text176"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan176"
              x={1021.4471}
              y={188.24753}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item3?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={186.97717}
            id="text331"
          >
            <tspan id="tspan331" x={943.27106} y={186.97717}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item3?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g335">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3597}
            y={157.86882}
            id="text173"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan173"
              x={1037.3597}
              y={157.86882}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"A"} */}
              {pms_dg2?.char?.item2?.unit ?? "A"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={157.79517}
            id="text174"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan174"
              x={1021.4471}
              y={157.79517}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item2?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={156.75616}
            id="text332"
          >
            <tspan id="tspan332" x={943.27106} y={156.75616}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item2?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g336">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0997}
            y={126.89002}
            id="text171"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan171"
              x={1037.0997}
              y={126.89002}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"V"} */}
              {pms_dg2?.char?.item1?.unit ?? "V"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={126.74474}
            id="text172"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan172"
              x={1021.4471}
              y={126.74474}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg2?.char?.item1?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={125.94164}
            id="text335"
          >
            <tspan id="tspan335" x={943.27106} y={125.94164}>
              {/* {"AVAIL"} */}
              {pms_dg2?.char?.item1?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient630)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect336"
          width={83.458054}
          height={17.885628}
          x={526.77539}
          y={110.9479}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient629)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect337"
          width={83.458054}
          height={17.885628}
          x={527.03735}
          y={141.69135}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient628)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect338"
          width={83.458054}
          height={17.885628}
          x={527.12677}
          y={171.91235}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient627)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect339"
          width={83.458054}
          height={17.885628}
          x={526.99121}
          y={203.00026}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient626)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect340"
          width={83.458054}
          height={17.885628}
          x={527.1037}
          y={234.55527}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient625)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect341"
          width={83.458054}
          height={17.885628}
          x={526.92535}
          y={265.08768}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g343" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={280.51038}
            id="text341"
          >
            <tspan id="tspan341" x={943.27106} y={280.51038}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item6?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.2485}
            y={282.72992}
            id="text342"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan342"
              x={1037.2485}
              y={282.72992}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg3?.char?.item6?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={282.4574}
            id="text343"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan343"
              x={1021.4471}
              y={282.4574}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item6?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient624)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect343"
          width={83.458054}
          height={17.885628}
          x={526.72516}
          y={296.78021}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g346" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={311.89447}
            id="text344"
          >
            <tspan id="tspan344" x={943.27106} y={311.89447}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item7?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0499}
            y={314.14496}
            id="text345"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan345"
              x={1037.0499}
              y={314.14496}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {"%"}
              {pms_dg3?.char?.item7?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={313.87241}
            id="text346"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan346"
              x={1021.4471}
              y={313.87241}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item7?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <g id="g349" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4255}
            y={251.16681}
            id="text347"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan347"
              x={1037.4255}
              y={251.16681}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"%"} */}
              {pms_dg3?.char?.item5?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={251.20558}
            id="text348"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan348"
              x={1021.4471}
              y={251.20558}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item5?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={249.45692}
            id="text349"
          >
            <tspan id="tspan349" x={943.27106} y={249.45692}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item5?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g352" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3138}
            y={219.64708}
            id="text350"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan350"
              x={1037.3138}
              y={219.64708}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg3?.char?.item4?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={219.37454}
            id="text351"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan351"
              x={1021.4471}
              y={219.37454}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item4?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={217.90677}
            id="text352"
          >
            <tspan id="tspan352" x={943.27106} y={217.90677}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item4?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g355" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4485}
            y={188.32118}
            id="text353"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan353"
              x={1037.4485}
              y={188.32118}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"Hz"} */}
              {pms_dg3?.char?.item3?.unit ?? "Hz"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={188.24753}
            id="text354"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan354"
              x={1021.4471}
              y={188.24753}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item3?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={186.97717}
            id="text355"
          >
            <tspan id="tspan355" x={943.27106} y={186.97717}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item3?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g359" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3597}
            y={157.86882}
            id="text356"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan356"
              x={1037.3597}
              y={157.86882}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"A"} */}
              {pms_dg3?.char?.item2?.unit ?? "A"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={157.79517}
            id="text358"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan358"
              x={1021.4471}
              y={157.79517}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item2?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={156.75616}
            id="text359"
          >
            <tspan id="tspan359" x={943.27106} y={156.75616}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item2?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g362" transform="translate(-448.97726)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0997}
            y={126.89002}
            id="text360"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan360"
              x={1037.0997}
              y={126.89002}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"V"} */}
              {pms_dg3?.char?.item1?.unit ?? "V"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={126.74474}
            id="text361"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan361"
              x={1021.4471}
              y={126.74474}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg3?.char?.item1?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={125.94164}
            id="text362"
          >
            <tspan id="tspan362" x={943.27106} y={125.94164}>
              {/* {"AVAIL"} */}
              {pms_dg3?.char?.item1?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient623)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect396"
          width={83.458054}
          height={17.885628}
          x={1482.2196}
          y={110.9479}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient622)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect397"
          width={83.458054}
          height={17.885628}
          x={1482.4816}
          y={141.69135}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient621)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect398"
          width={83.458054}
          height={17.885628}
          x={1482.571}
          y={171.91235}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient620)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect399"
          width={83.458054}
          height={17.885628}
          x={1482.4354}
          y={203.00026}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient619)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect400"
          width={83.458054}
          height={17.885628}
          x={1482.548}
          y={234.55527}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient618)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect401"
          width={83.458054}
          height={17.885628}
          x={1482.3696}
          y={265.08768}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g403" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={280.51038}
            id="text401"
          >
            <tspan id="tspan401" x={943.27106} y={280.51038}>
              {pms_dg1?.char?.item6?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.2485}
            y={282.72992}
            id="text402"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan402"
              x={1037.2485}
              y={282.72992}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item6?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={282.4574}
            id="text403"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan403"
              x={1021.4471}
              y={282.4574}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item6?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient617)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect403"
          width={83.458054}
          height={17.885628}
          x={1482.1694}
          y={296.78021}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g406" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={311.89447}
            id="text404"
          >
            <tspan id="tspan404" x={943.27106} y={311.89447}>
              {pms_dg1?.char?.item7?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0499}
            y={314.14496}
            id="text405"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan405"
              x={1037.0499}
              y={314.14496}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item7?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={313.87241}
            id="text406"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan406"
              x={1021.4471}
              y={313.87241}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item7?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <g id="g409" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4255}
            y={251.16681}
            id="text407"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan407"
              x={1037.4255}
              y={251.16681}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item5?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={251.20558}
            id="text408"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan408"
              x={1021.4471}
              y={251.20558}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item5?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={249.45692}
            id="text409"
          >
            <tspan id="tspan409" x={943.27106} y={249.45692}>
              {pms_dg1?.char?.item5?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g412" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3138}
            y={219.64708}
            id="text410"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan410"
              x={1037.3138}
              y={219.64708}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item4?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={219.37454}
            id="text411"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan411"
              x={1021.4471}
              y={219.37454}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item4?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={217.90677}
            id="text412"
          >
            <tspan id="tspan412" x={943.27106} y={217.90677}>
              {pms_dg1?.char?.item4?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g415" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4485}
            y={188.32118}
            id="text413"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan413"
              x={1037.4485}
              y={188.32118}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item3?.unit ?? "Hz"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={188.24753}
            id="text414"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan414"
              x={1021.4471}
              y={188.24753}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item3?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={186.97717}
            id="text415"
          >
            <tspan id="tspan415" x={943.27106} y={186.97717}>
              {/* {"AVAIL"} */}
              {pms_dg1?.char?.item3?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g418" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3597}
            y={157.86882}
            id="text416"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan416"
              x={1037.3597}
              y={157.86882}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item2?.unit ?? "A"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={157.79517}
            id="text417"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan417"
              x={1021.4471}
              y={157.79517}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item2?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={156.75616}
            id="text418"
          >
            <tspan id="tspan418" x={943.27106} y={156.75616}>
              {pms_dg1?.char?.item2?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g421" transform="translate(506.46698)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0997}
            y={126.89002}
            id="text419"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan419"
              x={1037.0997}
              y={126.89002}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item1?.unit ?? "V"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={126.74474}
            id="text420"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan420"
              x={1021.4471}
              y={126.74474}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {pms_dg1?.char?.item1?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={125.94164}
            id="text421"
          >
            <tspan id="tspan421" x={943.27106} y={125.94164}>
              {pms_dg1?.char?.item1?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient616)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect448"
          width={83.458054}
          height={17.885628}
          x={127.19467}
          y={110.9479}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient615)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect449"
          width={83.458054}
          height={17.885628}
          x={127.45663}
          y={141.69135}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient614)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect450"
          width={83.458054}
          height={17.885628}
          x={127.54605}
          y={171.91235}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient613)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect451"
          width={83.458054}
          height={17.885628}
          x={127.41049}
          y={203.00026}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient612)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect452"
          width={83.458054}
          height={17.885628}
          x={127.52298}
          y={234.55527}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient611)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect453"
          width={83.458054}
          height={17.885628}
          x={127.34464}
          y={265.08768}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g455" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={280.51038}
            id="text453"
          >
            <tspan id="tspan453" x={943.27106} y={280.51038}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item6?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.2485}
            y={282.72992}
            id="text454"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan454"
              x={1037.2485}
              y={282.72992}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg4?.char?.item6?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={282.4574}
            id="text455"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan455"
              x={1021.4471}
              y={282.4574}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item6?.value ?? "__"}
            </tspan>
          </text>
        </g>
        <rect
          style={{
            opacity: 0.99,
            fill: "url(#linearGradient610)",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#b3b3b3",
            strokeWidth: 4.0252,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.984314,
            paintOrder: "stroke fill markers"
          }}
          id="rect455"
          width={83.458054}
          height={17.885628}
          x={127.14444}
          y={296.78021}
          ry={5.598471e-14}
          rx={5.598471e-14}
        />
        <g id="g458" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={311.89447}
            id="text456"
          >
            <tspan id="tspan456" x={943.27106} y={311.89447}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item7?.subTitle ?? ""}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0499}
            y={314.14496}
            id="text457"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan457"
              x={1037.0499}
              y={314.14496}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"%"} */}
              {pms_dg4?.char?.item7?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={313.87241}
            id="text458"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan458"
              x={1021.4471}
              y={313.87241}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item7?.unit ?? "__"}
            </tspan>
          </text>
        </g>
        <g id="g461" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4255}
            y={251.16681}
            id="text459"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan459"
              x={1037.4255}
              y={251.16681}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"%"} */}
              {pms_dg4?.char?.item5?.unit ?? "%"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={251.20558}
            id="text460"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan460"
              x={1021.4471}
              y={251.20558}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item5?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={249.45692}
            id="text461"
          >
            <tspan id="tspan461" x={943.27106} y={249.45692}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item5?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g464" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3138}
            y={219.64708}
            id="text462"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan462"
              x={1037.3138}
              y={219.64708}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"kW"} */}
              {pms_dg4?.char?.item4?.unit ?? "kW"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={219.37454}
            id="text463"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan463"
              x={1021.4471}
              y={219.37454}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item4?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={217.90677}
            id="text464"
          >
            <tspan id="tspan464" x={943.27106} y={217.90677}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item4?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g467" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.4485}
            y={188.32118}
            id="text465"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan465"
              x={1037.4485}
              y={188.32118}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"Hz"} */}
              {pms_dg4?.char?.item3?.unit ?? "Hz"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={188.24753}
            id="text466"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan466"
              x={1021.4471}
              y={188.24753}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item3?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={186.97717}
            id="text467"
          >
            <tspan id="tspan467" x={943.27106} y={186.97717}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item3?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g470" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.3597}
            y={157.86882}
            id="text468"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan468"
              x={1037.3597}
              y={157.86882}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"A"} */}
              {pms_dg4?.char?.item2?.unit ?? "A"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={157.79517}
            id="text469"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan469"
              x={1021.4471}
              y={157.79517}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item2?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={156.75616}
            id="text470"
          >
            <tspan id="tspan470" x={943.27106} y={156.75616}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item2?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
        <g id="g473" transform="translate(-848.55798)">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1037.0997}
            y={126.89002}
            id="text471"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan471"
              x={1037.0997}
              y={126.89002}
              style={{
                textAlign: "center",
                textAnchor: "middle",
                fill: "#000000",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"V"} */}
              {pms_dg4?.char?.item1?.unit ?? "V"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "15.8784px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "end",
              textAnchor: "end",
              fill: "#0000ff",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.98481,
              strokeOpacity: 1,
              paintOrder: "fill markers stroke"
            }}
            x={1021.4471}
            y={126.74474}
            id="text472"
            transform="scale(1.0076553,0.99240286)"
          >
            <tspan
              id="tspan472"
              x={1021.4471}
              y={126.74474}
              style={{
                textAlign: "end",
                textAnchor: "end",
                fill: "#0000ff",
                strokeWidth: 1.98481,
                paintOrder: "fill markers stroke"
              }}
            >
              {/* {"0.0000"} */}
              {pms_dg4?.char?.item1?.value ?? "__"}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: 16,
              fontFamily: "Arial",
              InkscapeFontSpecification: "Arial",
              textAlign: "center",
              textAnchor: "middle",
              display: "inline",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeOpacity: 1
            }}
            x={943.27106}
            y={125.94164}
            id="text473"
          >
            <tspan id="tspan473" x={943.27106} y={125.94164}>
              {/* {"AVAIL"} */}
              {pms_dg4?.char?.item1?.subTitle ?? ""}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};
export default SVGPmsComponent;
