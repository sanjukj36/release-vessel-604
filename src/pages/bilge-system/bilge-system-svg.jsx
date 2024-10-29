const BilgeSystemDiagramSvg = ({ data }) => {
  console.log(data);
  const {
    oily_water_separator,
    dirty_oil_tank,
    bilge_water_tk,
    er_aft_p,
    er_forward_middle,
    er_aft_s,
    jack_house_1,
    jack_house_3,
    rudder_pro_rm_p,
    rudder_pro_rm_s,
    void_1p,
    void_2p,
    void_3p,
    void_5p,
    void_6p,
    lower_deck_store_p,
    b_t_room,
    echo_spl_tk,
    jack_house_2,
    jack_house_4,
    cascade_rm_lower_deck,
    void_1s,
    void_2s,
    void_3s,
    void_4s,
    void_5s,
    void_6s
  } = data;

  return (
    <svg
      className="uppercase"
      width={"99%"}
      viewBox="0 0 1920 1080"
      id="svg1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs1">
        <linearGradient id="linearGradient6">
          <stop
            style={{
              stopColor: "#008e1f",
              stopOpacity: 1
            }}
            offset={0}
            id="stop6"
          />
          <stop
            style={{
              stopColor: "#10350e",
              stopOpacity: 1
            }}
            offset={1}
            id="stop5"
          />
        </linearGradient>
        <linearGradient id="linearGradient4">
          <stop
            style={{
              // stopColor: "#20691c",
              stopColor: "#00d035",
              stopOpacity: 1
            }}
            offset={0}
            id="stop1"
          />
          <stop
            style={{
              stopColor: "#00d035",
              stopOpacity: 1
            }}
            offset={1}
            id="stop4"
          />
        </linearGradient>
        <linearGradient id="linearGradient769">
          <stop
            style={{
              stopColor: "#0044aa",
              stopOpacity: 0.98431402
            }}
            offset={0}
            id="stop769"
          />
          <stop
            style={{
              stopColor: "#5c9dff",
              stopOpacity: 1
            }}
            offset={1}
            id="stop770"
          />
        </linearGradient>
        <linearGradient id="linearGradient584">
          <stop
            style={{
              stopColor: "#929292",
              stopOpacity: 1
            }}
            offset={0}
            id="stop584"
          />
          <stop
            style={{
              stopColor: "#4a4a4a",
              stopOpacity: 1
            }}
            offset={1}
            id="stop585"
          />
        </linearGradient>
        <linearGradient id="linearGradient479">
          <stop
            style={{
              stopColor: "#ffffff",
              stopOpacity: 1
            }}
            offset={0}
            id="stop480"
          />
          <stop
            style={{
              stopColor: "#ffffff",
              stopOpacity: 1
            }}
            offset={1}
            id="stop479"
          />
        </linearGradient>
        <linearGradient id="linearGradient478">
          <stop
            style={{
              stopColor: "#344043",
              stopOpacity: 1
            }}
            offset={0}
            id="stop476"
          />
          <stop
            style={{
              stopColor: "#95adb2",
              stopOpacity: 1
            }}
            offset={0.79761851}
            id="stop477"
          />
          <stop
            style={{
              stopColor: "#4a5b5f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop478"
          />
        </linearGradient>
        <linearGradient id="linearGradient472">
          <stop
            style={{
              stopColor: "#344043",
              stopOpacity: 1
            }}
            offset={0}
            id="stop470"
          />
          <stop
            style={{
              stopColor: "#95adb2",
              stopOpacity: 1
            }}
            offset={0.5885638}
            id="stop471"
          />
          <stop
            style={{
              stopColor: "#4a5b5f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop472"
          />
        </linearGradient>
        <linearGradient id="linearGradient468">
          <stop
            style={{
              stopColor: "#344043",
              stopOpacity: 1
            }}
            offset={0}
            id="stop466"
          />
          <stop
            style={{
              stopColor: "#95adb2",
              stopOpacity: 1
            }}
            offset={0.80046403}
            id="stop467"
          />
          <stop
            style={{
              stopColor: "#4a5b5f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop468"
          />
        </linearGradient>
        <linearGradient id="linearGradient457">
          <stop
            style={{
              stopColor: "#111516",
              stopOpacity: 1
            }}
            offset={0}
            id="stop458"
          />
          <stop
            style={{
              stopColor: "#6d868f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop459"
          />
        </linearGradient>
        <linearGradient id="linearGradient456">
          <stop
            style={{
              stopColor: "#718b90",
              stopOpacity: 0.98863637
            }}
            offset={0}
            id="stop456"
          />
          <stop
            style={{
              stopColor: "#404f52",
              stopOpacity: 1
            }}
            offset={1}
            id="stop457"
          />
        </linearGradient>
        <linearGradient id="linearGradient454">
          <stop
            style={{
              stopColor: "#4f8087",
              stopOpacity: 1
            }}
            offset={0}
            id="stop454"
          />
          <stop
            style={{
              stopColor: "#2c3a3f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop455"
          />
        </linearGradient>
        <linearGradient id="linearGradient450">
          <stop
            style={{
              stopColor: "#344043",
              stopOpacity: 1
            }}
            offset={0}
            id="stop450"
          />
          <stop
            style={{
              stopColor: "#95adb2",
              stopOpacity: 1
            }}
            offset={0.89791185}
            id="stop452"
          />
          <stop
            style={{
              stopColor: "#4a5b5f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop451"
          />
        </linearGradient>
        <linearGradient id="linearGradient45">
          <stop
            style={{
              stopColor: "#79002e",
              stopOpacity: 1
            }}
            offset={0}
            id="stop46"
          />
          <stop
            style={{
              stopColor: "#020202",
              stopOpacity: 0.98431402
            }}
            offset={1}
            id="stop45"
          />
        </linearGradient>
        <linearGradient id="linearGradient43">
          <stop
            style={{
              stopColor: "#50162d",
              stopOpacity: 1
            }}
            offset={0}
            id="stop43"
          />
          <stop
            style={{
              stopColor: "#8c2650",
              stopOpacity: 1
            }}
            offset={1}
            id="stop44"
          />
        </linearGradient>
        <linearGradient id="linearGradient2">
          <stop
            style={{
              stopColor: "#7ecada",
              stopOpacity: 1
            }}
            offset={0}
            id="stop3"
          />
          <stop
            style={{
              stopColor: "#33959f",
              stopOpacity: 1
            }}
            offset={1}
            id="stop2"
          />
        </linearGradient>
        <linearGradient id="linearGradient530">
          <stop
            style={{
              stopColor: "#ff7721",
              stopOpacity: 1
            }}
            offset={0}
            id="stop530"
          />
          <stop
            style={{
              stopColor: "#aa4400",
              stopOpacity: 1
            }}
            offset={1}
            id="stop531"
          />
        </linearGradient>
        <linearGradient id="linearGradient163">
          <stop
            style={{
              stopColor: "#c5f3ff",
              stopOpacity: 1
            }}
            offset={0}
            id="stop163"
          />
          <stop
            style={{
              stopColor: "#c5f3ff",
              stopOpacity: 0
            }}
            offset={1}
            id="stop164"
          />
        </linearGradient>
        <linearGradient id="linearGradient185">
          <stop
            style={{
              stopColor: "#2e8299",
              stopOpacity: 1
            }}
            offset={0}
            id="stop185"
          />
          <stop
            style={{
              stopColor: "#2e8299",
              stopOpacity: 0
            }}
            offset={1}
            id="stop191"
          />
        </linearGradient>
        <linearGradient id="linearGradient210">
          <stop
            style={{
              stopColor: "#3696b0",
              stopOpacity: 0
            }}
            offset={0}
            id="stop210"
          />
          <stop
            style={{
              stopColor: "#3696b0",
              stopOpacity: 1
            }}
            offset={1}
            id="stop211"
          />
        </linearGradient>
        <linearGradient id="linearGradient303">
          <stop
            style={{
              stopColor: "#77c1d5",
              stopOpacity: 0.21017701
            }}
            offset={0}
            id="stop303"
          />
          <stop
            style={{
              stopColor: "#77c1d5",
              stopOpacity: 0
            }}
            offset={1}
            id="stop304"
          />
        </linearGradient>
        <linearGradient id="linearGradient305">
          <stop
            style={{
              stopColor: "#d3ebf1",
              stopOpacity: 0.60176996
            }}
            offset={0}
            id="stop305"
          />
          <stop
            style={{
              stopColor: "#d3ebf1",
              stopOpacity: 0
            }}
            offset={1}
            id="stop306"
          />
        </linearGradient>
        <linearGradient id="linearGradient307">
          <stop
            style={{
              stopColor: "#f0f8fb",
              stopOpacity: 0.840708
            }}
            offset={0}
            id="stop307"
          />
          <stop
            style={{
              stopColor: "#f0f8fb",
              stopOpacity: 0
            }}
            offset={1}
            id="stop308"
          />
        </linearGradient>
        <linearGradient id="linearGradient313">
          <stop
            style={{
              stopColor: "#2a7793",
              stopOpacity: 0.63938051
            }}
            offset={0}
            id="stop313"
          />
          <stop
            style={{
              stopColor: "#abdae5",
              stopOpacity: 0.05319149
            }}
            offset={1}
            id="stop314"
          />
        </linearGradient>
        <linearGradient id="linearGradient315">
          <stop
            style={{
              stopColor: "#b8ddeb",
              stopOpacity: 0.76991152
            }}
            offset={0}
            id="stop315"
          />
          <stop
            style={{
              stopColor: "#b8ddeb",
              stopOpacity: 0
            }}
            offset={1}
            id="stop316"
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#linearGradient4"
          id="linearGradient48"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,154.23484,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient6"
          id="linearGradient49"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,154.23484,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient66"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,251.44903,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient67"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,251.44903,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient71"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,348.66323,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient72"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,348.66323,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient76"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,445.87747,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient77"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,445.87747,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient81"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,543.09169,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient82"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,543.09169,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient86"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient87"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient91"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,737.5202,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient92"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,737.5202,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient96"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,858.73446,125.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient97"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,858.73446,125.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient160"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,3.42863,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient161"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,3.42863,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient408"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient409"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient410"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,543.09169,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient411"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,543.09169,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient412"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,445.87747,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient413"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,445.87747,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient414"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,348.66323,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient415"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,348.66323,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient416"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,251.44903,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient417"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,251.44903,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient418"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,154.23484,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient419"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,154.23484,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient429"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-1232.0463,-955.92425)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient430"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-1232.0463,-955.92425)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient434"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient435"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,640.30594,95.85849)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient445"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-1493.0535,-955.92425)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient446"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-1493.0535,-955.92425)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient12"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,83.907286,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient13"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,83.907286,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient22"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,114.60673,215.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient23"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,114.60673,215.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient32"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-713.0915,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient33"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-713.0915,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient42"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-718.76479,215.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient47"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-718.76479,215.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient101"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-873.04817,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient102"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-873.04817,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient43"
          id="linearGradient121"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-953.0265,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <linearGradient
          xlinkHref="#linearGradient45"
          id="linearGradient122"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.66828454,0,0,0.66828454,-953.0265,239.5155)"
          x1={305.00778}
          y1={-92.563103}
          x2={338.00778}
          y2={-92.563103}
        />
        <radialGradient
          xlinkHref="#linearGradient2"
          id="radialGradient272"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,0.66283398,0,-25.166456)"
          cx={815.021}
          cy={-88.253395}
          fx={815.021}
          fy={-88.253395}
          r={41.340866}
        />
        <linearGradient
          xlinkHref="#linearGradient163"
          id="linearGradient272"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={150.18002}
          y1={191.60149}
          x2={233.49075}
          y2={191.60149}
        />
        <linearGradient
          xlinkHref="#linearGradient185"
          id="linearGradient273"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={149.99774}
          y1={108.12324}
          x2={196.94878}
          y2={108.12324}
        />
        <linearGradient
          xlinkHref="#linearGradient210"
          id="linearGradient274"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={209.5881}
          y1={108.38067}
          x2={234.76968}
          y2={108.38067}
        />
        <linearGradient
          xlinkHref="#linearGradient303"
          id="linearGradient277"
          gradientUnits="userSpaceOnUse"
          x1={138.50516}
          y1={-205.19026}
          x2={146.16573}
          y2={-205.19026}
        />
        <linearGradient
          xlinkHref="#linearGradient305"
          id="linearGradient278"
          gradientUnits="userSpaceOnUse"
          x1={139.08807}
          y1={-207.35176}
          x2={143.69107}
          y2={-207.35176}
        />
        <linearGradient
          xlinkHref="#linearGradient307"
          id="linearGradient279"
          gradientUnits="userSpaceOnUse"
          x1={139.67557}
          y1={-208.56285}
          x2={141.77135}
          y2={-208.56285}
        />
        <linearGradient
          xlinkHref="#linearGradient313"
          id="linearGradient280"
          gradientUnits="userSpaceOnUse"
          x1={163.50319}
          y1={-207.26732}
          x2={157.13112}
          y2={-207.36655}
        />
        <linearGradient
          xlinkHref="#linearGradient315"
          id="linearGradient281"
          gradientUnits="userSpaceOnUse"
          x1={162.86342}
          y1={-206.75275}
          x2={160.28473}
          y2={-206.70598}
        />
        <radialGradient
          xlinkHref="#linearGradient530"
          id="radialGradient411"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,0.66283426,0,48.84)"
          cx={1591.3276}
          cy={120.9153}
          fx={1591.3276}
          fy={120.9153}
          r={47.74155}
        />
        <linearGradient
          xlinkHref="#linearGradient163"
          id="linearGradient420"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={150.18002}
          y1={191.60149}
          x2={233.49075}
          y2={191.60149}
        />
        <linearGradient
          xlinkHref="#linearGradient185"
          id="linearGradient421"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={149.99774}
          y1={108.12324}
          x2={196.94878}
          y2={108.12324}
        />
        <linearGradient
          xlinkHref="#linearGradient210"
          id="linearGradient422"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.29470157,0,0,0.29470157,94.392104,-249.53485)"
          x1={209.5881}
          y1={108.38067}
          x2={234.76968}
          y2={108.38067}
        />
        <linearGradient
          xlinkHref="#linearGradient303"
          id="linearGradient423"
          gradientUnits="userSpaceOnUse"
          x1={138.50516}
          y1={-205.19026}
          x2={146.16573}
          y2={-205.19026}
        />
        <linearGradient
          xlinkHref="#linearGradient305"
          id="linearGradient424"
          gradientUnits="userSpaceOnUse"
          x1={139.08807}
          y1={-207.35176}
          x2={143.69107}
          y2={-207.35176}
        />
        <linearGradient
          xlinkHref="#linearGradient307"
          id="linearGradient425"
          gradientUnits="userSpaceOnUse"
          x1={139.67557}
          y1={-208.56285}
          x2={141.77135}
          y2={-208.56285}
        />
        <linearGradient
          xlinkHref="#linearGradient313"
          id="linearGradient426"
          gradientUnits="userSpaceOnUse"
          x1={163.50319}
          y1={-207.26732}
          x2={157.13112}
          y2={-207.36655}
        />
        <linearGradient
          xlinkHref="#linearGradient315"
          id="linearGradient427"
          gradientUnits="userSpaceOnUse"
          x1={162.86342}
          y1={-206.75275}
          x2={160.28473}
          y2={-206.70598}
        />
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter478"
          x={-0.74528266}
          y={-1.0408257}
          width={2.4905653}
          height={3.0816514}
        >
          <feGaussianBlur stdDeviation={13.349976} id="feGaussianBlur478" />
        </filter>
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter509"
          x={-0.69467192}
          y={-0.3994253}
          width={2.3664027}
          height={1.8579628}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
            id="feFlood508"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation={3}
            id="feGaussianBlur508"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={6}
            id="feOffset508"
          />
          <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite508"
          />
          <feComposite
            result="fbSourceGraphic"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite509"
          />
          <feColorMatrix
            result="fbSourceGraphicAlpha"
            in="fbSourceGraphic"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            id="feColorMatrix509"
          />
          <feFlood
            id="feFlood509"
            result="flood"
            in="fbSourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
          />
          <feGaussianBlur
            id="feGaussianBlur509"
            result="blur"
            in="fbSourceGraphic"
            stdDeviation={15.479877}
          />
          <feOffset
            id="feOffset509"
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={6}
          />
          <feComposite
            id="feComposite510"
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
          />
          <feComposite
            id="feComposite511"
            result="fbSourceGraphic"
            operator="over"
            in="fbSourceGraphic"
            in2="comp1"
          />
          <feColorMatrix
            result="fbSourceGraphicAlpha"
            in="fbSourceGraphic"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            id="feColorMatrix515"
          />
          <feFlood
            id="feFlood515"
            result="flood"
            in="fbSourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
          />
          <feGaussianBlur
            id="feGaussianBlur515"
            result="blur"
            in="fbSourceGraphic"
            stdDeviation={32.198143}
          />
          <feOffset
            id="feOffset515"
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={6}
          />
          <feComposite
            id="feComposite515"
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
          />
          <feComposite
            id="feComposite516"
            result="comp2"
            operator="over"
            in="fbSourceGraphic"
            in2="comp1"
          />
        </filter>
        <linearGradient
          xlinkHref="#linearGradient457"
          id="linearGradient521"
          gradientUnits="userSpaceOnUse"
          x1={1660.7012}
          y1={595.82758}
          x2={1759.5515}
          y2={595.82758}
        />
        <linearGradient
          xlinkHref="#linearGradient454"
          id="linearGradient522"
          gradientUnits="userSpaceOnUse"
          x1={1658.5366}
          y1={655.71075}
          x2={1771.1963}
          y2={655.71075}
        />
        <linearGradient
          xlinkHref="#linearGradient450"
          id="linearGradient523"
          gradientUnits="userSpaceOnUse"
          x1={1660.7012}
          y1={626.01367}
          x2={1837.4375}
          y2={626.01367}
        />
        <linearGradient
          xlinkHref="#linearGradient468"
          id="linearGradient524"
          gradientUnits="userSpaceOnUse"
          x1={1658.5366}
          y1={540.82898}
          x2={1839.6021}
          y2={540.82898}
        />
        <radialGradient
          xlinkHref="#linearGradient456"
          id="radialGradient524"
          gradientUnits="userSpaceOnUse"
          cx={1686.027}
          cy={641.27234}
          fx={1686.027}
          fy={641.27234}
          r={36.872746}
        />
        <linearGradient
          xlinkHref="#linearGradient472"
          id="linearGradient525"
          gradientUnits="userSpaceOnUse"
          x1={1678.9578}
          y1={503.18988}
          x2={1826.5787}
          y2={472.49927}
        />
        <linearGradient
          xlinkHref="#linearGradient468"
          id="linearGradient526"
          gradientUnits="userSpaceOnUse"
          x1={1729.7498}
          y1={421.00867}
          x2={1768.2288}
          y2={421.00867}
        />
        <linearGradient
          xlinkHref="#linearGradient478"
          id="linearGradient527"
          gradientUnits="userSpaceOnUse"
          x1={1735.6606}
          y1={405.09549}
          x2={1762.3179}
          y2={405.09549}
        />
        <linearGradient
          xlinkHref="#linearGradient479"
          id="linearGradient528"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-34.367608,-73.743424)"
          x1={1761.8773}
          y1={531.27557}
          x2={1868.9475}
          y2={531.27557}
        />
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter585"
          x={-0.70116497}
          y={-0.70116497}
          width={2.4023299}
          height={2.4023299}
        >
          <feGaussianBlur stdDeviation={3.179638} id="feGaussianBlur585" />
        </filter>
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter590"
          x={-1.0387461}
          y={-0.90138681}
          width={2.940351}
          height={3.0596405}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
            id="feFlood589"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation={8.668731}
            id="feGaussianBlur589"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={6}
            id="feOffset589"
          />
          <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite589"
          />
          <feComposite
            result="fbSourceGraphic"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite590"
          />
          <feColorMatrix
            result="fbSourceGraphicAlpha"
            in="fbSourceGraphic"
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            id="feColorMatrix590"
          />
          <feFlood
            id="feFlood590"
            result="flood"
            in="fbSourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
          />
          <feGaussianBlur
            id="feGaussianBlur590"
            result="blur"
            in="fbSourceGraphic"
            stdDeviation={8.668731}
          />
          <feOffset
            id="feOffset590"
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={6}
          />
          <feComposite
            id="feComposite591"
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
          />
          <feComposite
            id="feComposite592"
            result="comp2"
            operator="over"
            in="fbSourceGraphic"
            in2="comp1"
          />
        </filter>
        <radialGradient
          xlinkHref="#linearGradient584"
          id="radialGradient593"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1,0,0,1.0002369,0,0.04820971)"
          cx={1584.1597}
          cy={-211.48387}
          fx={1584.1597}
          fy={-211.48387}
          r={23.852751}
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient771"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,911.49643,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient772"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,848.08044,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient773"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,750.86609,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient774"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,653.39577,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient775"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,556.43758,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient776"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,459.22336,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient777"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,362.00912,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient778"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,264.79492,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient779"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,167.58073,393.71918)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient780"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,443.80014)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient781"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,483.39092)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient782"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,563.86958)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient783"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,524.2788)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient784"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,644.34823)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient785"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,604.75745)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient786"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,724.32656)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient787"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,684.73578)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient788"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,804.3049)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient789"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,764.71412)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient790"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,883.70229)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient791"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,844.11151)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient792"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,504.76307,963.68061)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient793"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,506.01307,924.08983)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient794"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,941.19112,520.886)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient795"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,875.07664,594.40004)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient796"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,875.07664,829.35223)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient797"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,941.19112,759.30055)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient798"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1274.1522,665.7894)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient799"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1352.8179,594.49567)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient800"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1352.8179,829.35223)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient801"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1518.2809,710.70905)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient802"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,0.15730762,0.13661716,-0.1448351,1081.8281,-2.127005)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient803"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,0.15730762,0.13661716,-0.1448351,1131.8942,-2.127005)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient804"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,1265.5621,589.31284)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient805"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.15730762,0.12578513,-0.1448351,0.13661716,1251.6157,125.55087)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient806"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,1844.8291,328.0224)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient807"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.15730762,0.12578513,-0.1448351,0.13661716,1401.4925,125.55087)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient808"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,0.12578513,0.1448351,0.13661716,2119.3093,220.80469)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient809"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,-0.15730762,-0.13661716,0.1448351,2081.6989,920.23656)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient810"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.15730762,0.12578513,-0.1448351,0.13661716,1236.0937,375.56874)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient811"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,1236.8055,846.80639)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient812"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,1196.8684,846.80639)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient813"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.15730762,-0.12578513,-0.1448351,-0.13661716,551.5629,908.3628)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient814"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.15730762,-0.12578513,-0.1448351,-0.13661716,550.68689,975.21875)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient815"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.15730762,-0.12578513,0.1448351,-0.13661716,1569.6459,1024.3293)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient816"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.12578513,-0.15730762,0.13661716,0.1448351,1132.6828,1213.2658)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient817"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,580.59229,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient818"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,679.38782,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient819"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,778.00413,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient820"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,876.97893,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient821"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,975.59532,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient822"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1074.5701,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient823"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1179.5404,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient824"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1242.7004,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient825"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1335.5774,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient826"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1440.5476,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <linearGradient
          xlinkHref="#linearGradient769"
          id="linearGradient827"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.12578513,0.15730762,-0.13661716,-0.1448351,1503.7076,686.82348)"
          x1={1846.8663}
          y1={-50.758717}
          x2={1875.3568}
          y2={-18.461061}
          spreadMethod="reflect"
        />
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter846"
          x={-0.21865403}
          y={-0.17118425}
          width={1.4236642}
          height={1.3411119}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
            id="feFlood844"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation={8.668731}
            id="feGaussianBlur844"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={-0.153846}
            id="feOffset844"
          />
          <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite845"
          />
          <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite846"
          />
        </filter>
        <filter
          style={{
            colorInterpolationFilters: "sRGB"
          }}
          id="filter848"
          x={-0.25250778}
          y={-0.19768829}
          width={1.4892592}
          height={1.3939255}
        >
          <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity={0.498039}
            floodColor="rgb(0,0,0)"
            id="feFlood846"
          />
          <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation={8.668731}
            id="feGaussianBlur846"
          />
          <feOffset
            result="offset"
            in="blur"
            dx={-1.384615}
            dy={-0.153846}
            id="feOffset846"
          />
          <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite847"
          />
          <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite848"
          />
        </filter>
      </defs>
      <g id="layer1">
        <path
          id="path173"
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 787.83779,604.26581 H 527.01788 a 10.463134,10.463134 0 0 1 -10.4631,-10.48674 l 0.48343,-214.30935 a 10.510446,10.510446 0 0 1 10.51042,-10.48674 v 0 l 260.309,-10e-6"
        />
        <path
          id="path174"
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 809.85768,338.98296 300.58842,2e-5 c 5.7917,-2e-5 10.4868,4.69507 10.4868,10.48676 v 211.12484 a 16.187803,16.187803 143.33186 0 1 -18.3627,13.67123 l -292.64267,0"
          transform="translate(24,30)"
        />
        <g id="g167" transform="translate(-634.25226,708.48099)">
          <path
            id="path164"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g166" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path165"
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
              id="path166"
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
        <g id="g172" transform="translate(-417.98849,665.50218)">
          <g id="g171">
            <path
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 3,
                strokeDasharray: "none"
              }}
              d="m 1224.8466,-83.607718 21.6458,21.645846 -21.6458,21.645845"
              id="path170"
            />
            <circle
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 2.70831,
                strokeOpacity: 1
              }}
              id="circle170"
              cx={1228.8466}
              cy={-61.961872}
              r={21.645845}
            />
          </g>
        </g>
        <g id="g337" transform="translate(24,30)">
          <rect
            style={{
              fill: void_6p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient418)",
              //  stroke: void_6p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient419)",
              // fill: "url(#linearGradient418)",
              stroke: "url(#linearGradient419)",
              fillOpacity: 1,
              strokeWidth: 1.337,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect48"
            width={20.048536}
            height={20.048536}
            x={359.06927}
            y={23.975731}
          />
          <g id="g60" transform="rotate(90,726.89563,-462.69959)">
            <path
              id="path57"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g59" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path58"
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
                id="path59"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 369.09354,44.040855 V 88.49428"
            id="path60"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 369.09354,122.25268 v 30.38688"
            id="path61"
          />
        </g>
        <g id="g338" transform="translate(24,30)">
          <rect
            style={{
              fill: void_5p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient66)",
              // stroke: void_5p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient67)",
              // fill: "url(#linearGradient66)",
              stroke: "url(#linearGradient67)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect61"
            width={20.048536}
            height={20.048536}
            x={456.28348}
            y={23.975731}
          />
          <g id="g65" transform="rotate(90,775.50272,-414.09249)">
            <path
              id="path62"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g64" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path63"
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
                id="path64"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 466.30773,44.040855 V 88.49428"
            id="path65"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 466.30773,122.25268 v 30.38688"
            id="path66"
          />
        </g>
        <g id="g339" transform="translate(24,30)">
          <rect
            style={{
              // fill: void_4p?.item1?.value ? "url(#linearGradient48)" : "url(#linearGradient71)",
              // stroke: void_4p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient72)",
              fill: "url(#linearGradient71)",
              stroke: "url(#linearGradient72)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect67"
            width={20.048536}
            height={20.048536}
            x={553.49768}
            y={23.975731}
          />
          <g id="g70" transform="rotate(90,824.10983,-365.48539)">
            <path
              id="path67"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g69" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path68"
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
                id="path69"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 563.52193,44.040855 V 88.49428"
            id="path70"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 563.52193,122.25268 v 30.38688"
            id="path71"
          />
        </g>
        <g id="g340" transform="translate(24,30)">
          <rect
            style={{
              fill: void_3p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient76)",
              // stroke: void_3p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient77)",
              // fill: "url(#linearGradient76)",
              stroke: "url(#linearGradient77)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect72"
            width={20.048536}
            height={20.048536}
            x={650.71185}
            y={23.975731}
          />
          <g id="g75" transform="rotate(90,872.71695,-316.87827)">
            <path
              id="path72"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g74" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path73"
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
                id="path74"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 660.73617,44.040855 V 88.49428"
            id="path75"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 660.73617,122.25268 v 30.38688"
            id="path76"
          />
        </g>
        <g id="g341" transform="translate(24,30)">
          <rect
            style={{
              fill: void_2p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient81)",
              // stroke: void_2p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient82)",
              // fill: "url(#linearGradient81)",
              stroke: "url(#linearGradient82)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect77"
            width={20.048536}
            height={20.048536}
            x={747.92609}
            y={23.975731}
          />
          <g id="g80" transform="rotate(90,921.32407,-268.27116)">
            <path
              id="path77"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g79" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path78"
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
                id="path79"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 757.95039,44.040855 V 88.49428"
            id="path80"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 757.95039,122.25268 v 30.38688"
            id="path81"
          />
        </g>
        <g id="g342" transform="translate(24,30)">
          <rect
            style={{
              fill: void_1p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient86)",
              // stroke: void_1p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient87)",
              // fill: "url(#linearGradient86)",
              stroke: "url(#linearGradient87)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect82"
            width={20.048536}
            height={20.048536}
            x={845.14032}
            y={23.975731}
          />
          <g id="g85" transform="rotate(90,969.9312,-219.66403)">
            <path
              id="path82"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g84" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path83"
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
                id="path84"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 855.16464,44.040855 V 88.49428"
            id="path85"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 855.16464,122.25268 v 30.38688"
            id="path86"
          />
        </g>
        <g id="g343" transform="translate(24,30)">
          <rect
            style={{
              fill: lower_deck_store_p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient91)",
              // stroke: lower_deck_store_p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient92)",
              // fill: "url(#linearGradient91)",
              stroke: "url(#linearGradient92)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect87"
            width={20.048536}
            height={20.048536}
            x={942.35461}
            y={23.975731}
          />
          <g id="g90" transform="rotate(90,1018.5383,-171.0569)">
            <path
              id="path87"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g89" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path88"
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
                id="path89"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 952.3789,44.040855 V 88.49428"
            id="path90"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 952.3789,122.25268 v 30.38688"
            id="path91"
          />
        </g>
        <rect
          style={{
            fill: jack_house_1?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient96)",
            // stroke: jack_house_1?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient97)",
            // fill: "url(#linearGradient96)",
            stroke: "url(#linearGradient97)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect92"
          width={20.048536}
          height={20.048536}
          x={1063.5688}
          y={53.975731}
        />
        <g id="g95" transform="rotate(90,1064.1455,-95.44978)">
          <path
            id="path92"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g94" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path93"
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
              id="path94"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1073.5932,74.040855 V 118.49428"
          id="path95"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1073.5932,152.25268 v 30.38688"
          id="path96"
        />
        <g id="g112" transform="rotate(90,1095.2603,-63.148571)">
          <path
            id="path109"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g111" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path110"
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
              id="path111"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.33279,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1137.0092,153.43915 v 22.81822"
          id="path113"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1059.6174,60 46.2269,-0.252137 a 7.1260789,7.1260789 44.843746 0 1 7.1649,7.125973 v 48.806814"
          id="path114"
          transform="translate(24,4)"
        />
        <g id="g159" transform="translate(-1044.8845,362.51952)">
          <path
            id="path156"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g158" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path157"
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
              id="path158"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96348,257.62207 h 43.1632"
          id="path159"
        />
        <path
          id="path160"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 177.43226,220.93542 -0.16006,29.34794 a 7.126077,7.126077 0 0 0 7.12597,7.16494 h 48.80681"
        />
        <rect
          style={{
            fill: jack_house_3?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient160)",
            // stroke: jack_house_3?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient161)",
            stroke: "url(#linearGradient161)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect150"
          width={20.048536}
          height={20.048536}
          x={208.26302}
          y={167.63275}
          transform="matrix(0,1,1,0,0,0)"
        />
        <g id="g154" transform="translate(-1046.0709,323.10353)">
          <path
            id="path151"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g153" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path152"
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
              id="path153"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 187.56519,218.28733 h 44.45342"
          id="path154"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 265.77701,218.28733 h 49.15154"
          id="path155"
        />
        <path
          id="path216"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1231.5634,182.59069 H 336.52248 C 325.18824,182.59069 316,191.77893 316,203.11317 v 670.84965 a 22.965754,22.965754 0 0 0 22.96575,22.96575 h 975.03395"
        />
        <g id="g376" transform="matrix(1,0,0,-1,-14.014074,1050.5963)">
          <rect
            style={{
              fill: void_6s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient418)",
              // stroke: void_6s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient419)",
              // fill: "url(#linearGradient418)",
              stroke: "url(#linearGradient419)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect344"
            width={20.048536}
            height={20.048536}
            x={359.06927}
            y={23.975731}
          />
          <g id="g375" transform="rotate(90,726.89563,-462.69959)">
            <path
              id="path363"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g374" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path373"
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
                id="path374"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 369.09354,44.040855 V 88.49428"
            id="path375"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 369.09354,122.25268 v 30.38688"
            id="path376"
          />
        </g>
        <g id="g381" transform="matrix(1,0,0,-1,-12.432734,1050.5963)">
          <rect
            style={{
              fill: void_5s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient416)",
              // stroke: void_5s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient417)",
              // fill: "url(#linearGradient416)",
              stroke: "url(#linearGradient417)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect376"
            width={20.048536}
            height={20.048536}
            x={456.28348}
            y={23.975731}
          />
          <g id="g380" transform="rotate(90,775.50272,-414.09249)">
            <path
              id="path377"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g379" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path378"
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
                id="path379"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 466.30773,44.040855 V 88.49428"
            id="path380"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 466.30773,122.25268 v 30.38688"
            id="path381"
          />
        </g>
        <g id="g386" transform="matrix(1,0,0,-1,-10.851415,1050.5963)">
          <rect
            style={{
              fill: void_3s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient414)",
              // stroke: void_3s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient415)",
              // fill: "url(#linearGradient414)",
              stroke: "url(#linearGradient415)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect381"
            width={20.048536}
            height={20.048536}
            x={553.49768}
            y={23.975731}
          />
          <g id="g385" transform="rotate(90,824.10983,-365.48539)">
            <path
              id="path382"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g384" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path383"
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
                id="path384"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 563.52193,44.040855 V 88.49428"
            id="path385"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 563.52193,122.25268 v 30.38688"
            id="path386"
          />
        </g>
        <g id="g391" transform="matrix(1,0,0,-1,-9.270058,1050.5963)">
          <rect
            style={{
              fill: void_2s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient412)",
              // stroke: void_2s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient413)",
              // fill: "url(#linearGradient412)",
              stroke: "url(#linearGradient413)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect386"
            width={20.048536}
            height={20.048536}
            x={650.71185}
            y={23.975731}
          />
          <g id="g390" transform="rotate(90,872.71695,-316.87827)">
            <path
              id="path387"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g389" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path388"
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
                id="path389"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 660.73617,44.040855 V 88.49428"
            id="path390"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 660.73617,122.25268 v 30.38688"
            id="path391"
          />
        </g>
        <g id="g396" transform="matrix(1,0,0,-1,-7.688695,1050.5963)">
          <rect
            style={{
              fill: void_1s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient410)",
              // stroke: void_1s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient411)",
              // fill: "url(#linearGradient410)",
              stroke: "url(#linearGradient411)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect391"
            width={20.048536}
            height={20.048536}
            x={747.92609}
            y={23.975731}
          />
          <g id="g395" transform="rotate(90,921.32407,-268.27116)">
            <path
              id="path392"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g394" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path393"
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
                id="path394"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 757.95039,44.040855 V 88.49428"
            id="path395"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 757.95039,122.25268 v 30.38688"
            id="path396"
          />
        </g>
        <g id="g401" transform="matrix(1,0,0,-1,-6.107335,1050.5963)">
          <rect
            style={{
              fill: cascade_rm_lower_deck?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient408)",
              // stroke: cascade_rm_lower_deck?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient409)",
              // fill: "url(#linearGradient408)",
              stroke: "url(#linearGradient409)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect396"
            width={20.048536}
            height={20.048536}
            x={845.14032}
            y={23.975731}
          />
          <g id="g400" transform="rotate(90,969.9312,-219.66403)">
            <path
              id="path397"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g399" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path398"
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
                id="path399"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 855.16464,44.040855 V 88.49428"
            id="path400"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 855.16464,122.25268 v 30.38688"
            id="path401"
          />
        </g>
        <rect
          style={{
            fill: jack_house_2?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient429)",
            // stroke: jack_house_2?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient430)",
            // fill: "url(#linearGradient429)",
            stroke: "url(#linearGradient430)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect419"
          width={20.048536}
          height={20.048536}
          x={-1027.2119}
          y={-1027.807}
          transform="scale(-1)"
        />
        <g id="g422" transform="rotate(-90,1681.7316,559.64647)">
          <path
            id="path419"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g421" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path420"
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
              id="path421"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1017.1876,1007.7419 V 963.28846"
          id="path422"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1017.1876,929.53006 V 899.14318"
          id="path423"
        />
        <g id="g427" transform="rotate(-90,1649.4303,590.76127)">
          <path
            id="path424"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g426" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path425"
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
              id="path426"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.07756,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 953.7716,928.34359 V 903.56274"
          id="path427"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1059.6174,60 46.2269,-0.252137 a 7.1260789,7.1260789 44.843746 0 1 7.1649,7.125973 v 48.806814"
          id="path428"
          transform="rotate(180,1033.3904,538.89137)"
        />
        <g id="g434" transform="matrix(1,0,0,-1,254.89994,1050.5963)">
          <rect
            style={{
              fill: echo_spl_tk?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient434)",
              // stroke: echo_spl_tk?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient435)",
              // fill: "url(#linearGradient434)",
              stroke: "url(#linearGradient435)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect430"
            width={20.048536}
            height={20.048536}
            x={845.14032}
            y={23.975731}
          />
          <g id="g433" transform="rotate(90,969.9312,-219.66403)">
            <path
              id="path430"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g432" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path431"
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
                id="path432"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 855.16464,44.040855 V 88.49428"
            id="path433"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 855.16464,122.25268 v 30.38688"
            id="path434"
          />
        </g>
        <rect
          style={{
            fill: b_t_room?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient445)",
            // stroke: b_t_room?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient446)",
            // fill: "url(#linearGradient445)",
            stroke: "url(#linearGradient446)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect435"
          width={20.048536}
          height={20.048536}
          x={-1288.2191}
          y={-1027.807}
          transform="scale(-1)"
        />
        <g id="g438" transform="rotate(-90,1812.2352,429.14287)">
          <path
            id="path435"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g437" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path436"
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
              id="path437"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1278.1948,1007.7419 V 963.28846"
          id="path438"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1278.1948,929.53006 V 899.14318"
          id="path439"
        />
        <g id="g443" transform="rotate(-90,1779.9339,460.25767)">
          <path
            id="path440"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g442" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path441"
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
              id="path442"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.51989,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1214.7788,928.34359 v -24.8314"
          id="path443"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1059.6174,60 46.2269,-0.252137 a 7.1260789,7.1260789 44.843746 0 1 7.1649,7.125973 v 48.806814"
          id="path444"
          transform="rotate(180,1163.894,538.89137)"
        />
        <g id="g6" transform="translate(-1044.8845,442.99818)">
          <path
            id="path1"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g5" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path2"
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
              id="path3"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96348,338.10073 h 43.1632"
          id="path6"
        />
        <path
          id="path7"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 177.43226,301.41408 -0.16006,29.34794 a 7.126077,7.126077 0 0 0 7.12597,7.16494 h 48.80681"
        />
        <rect
          style={{
            fill: rudder_pro_rm_p?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient12)",
            // stroke: rudder_pro_rm_p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient13)",
            // fill: "url(#linearGradient12)",
            stroke: "url(#linearGradient13)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect7"
          width={20.048536}
          height={20.048536}
          x={288.74167}
          y={167.63275}
          transform="matrix(0,1,1,0,0,0)"
        />
        <g id="g11" transform="translate(-1046.0709,403.58219)">
          <path
            id="path8"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g10" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path9"
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
              id="path10"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 187.56519,298.76599 h 44.45342"
          id="path11"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 265.77701,298.76599 h 49.15154"
          id="path12"
        />
        <g id="g16" transform="translate(-1044.8845,523.47684)">
          <path
            id="path13"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g15" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path14"
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
              id="path15"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96348,418.57939 h 43.1632"
          id="path16"
        />
        <g id="g124" transform="translate(24,49.779212)">
          <path
            id="path17"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 153.43226,332.11352 -0.16006,29.34794 a 7.126077,7.126077 0 0 0 7.12597,7.16494 h 48.80681"
          />
          <rect
            style={{
              fill: er_aft_p?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient22)",
              // stroke: er_aft_p?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient23)",
              stroke: "url(#linearGradient23)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect17"
            width={20.048536}
            height={20.048536}
            x={319.4411}
            y={143.63275}
            transform="matrix(0,1,1,0,0,0)"
          />
          <g id="g21" transform="translate(-1070.0709,434.28163)">
            <path
              id="path18"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g20" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path19"
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
                id="path20"
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
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 163.56519,329.46543 h 44.45342"
            id="path21"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 241.77701,329.46543 h 49.15154"
            id="path22"
          />
        </g>
        <g id="g26" transform="translate(-1044.8845,564.5395)">
          <path
            id="path23"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g25" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path24"
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
              id="path25"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96348,459.64205 h 43.1632"
          id="path26"
        />
        <path
          id="path27"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 177.43226,495.58471 -0.16006,-29.34794 a 7.126077,7.126077 0 0 1 7.12597,-7.16494 h 48.80681"
        />
        <rect
          style={{
            fill: er_forward_middle?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient32)",
            // stroke: er_forward_middle?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient33)",
            // fill: "url(#linearGradient32)",
            stroke: "url(#linearGradient33)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect27"
          width={20.048536}
          height={20.048536}
          x={-508.25714}
          y={167.63275}
          transform="rotate(-90)"
        />
        <g id="g31" transform="translate(-1046.0709,603.45516)">
          <path
            id="path28"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g30" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path29"
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
              id="path30"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 187.56519,498.2328 h 44.45342"
          id="path31"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 265.77701,498.2328 h 49.15154"
          id="path32"
        />
        <g id="g36" transform="translate(-1044.8845,644.51788)">
          <path
            id="path33"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g35" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path34"
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
              id="path35"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96352,539.62043 h 43.16316"
          id="path36"
        />
        <g id="g126" transform="translate(24,74.305054)">
          <path
            id="path37"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 153.43226,501.258 -0.16006,-29.34794 a 7.126077,7.126077 0 0 1 7.12597,-7.16494 h 48.80681"
          />
          <rect
            style={{
              fill: er_aft_s?.item1?.value
                ? "url(#linearGradient48)"
                : "url(#linearGradient42)",
              // stroke: er_aft_s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient47)",
              // fill: "url(#linearGradient42)",
              stroke: "url(#linearGradient47)",
              fillOpacity: 1,
              strokeWidth: 1.33657,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            id="rect37"
            width={20.048536}
            height={20.048536}
            x={-513.93042}
            y={143.63275}
            transform="rotate(-90)"
          />
          <g id="g41" transform="translate(-1070.0709,609.12845)">
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g40" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path39"
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
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 163.56519,503.90609 h 44.45342"
            id="path41"
          />
          <path
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1,
              stroke: "#2b0011",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 241.77701,503.90609 h 49.15154"
            id="path42"
          />
        </g>
        <g id="g50" transform="translate(-1044.8845,724.49615)">
          <path
            id="path47"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g49" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path48"
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
              id="path49"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68553,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96345,619.5987 h 43.16323"
          id="path50"
        />
        <path
          id="path53"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 177.43226,655.54138 -0.16006,-29.34794 a 7.126077,7.126077 0 0 1 7.12597,-7.16494 h 48.80681"
        />
        <rect
          style={{
            fill: rudder_pro_rm_s?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient101)",
            // stroke: rudder_pro_rm_s?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient102)",
            // fill: "url(#linearGradient101)",
            stroke: "url(#linearGradient102)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect53"
          width={20.048536}
          height={20.048536}
          x={-668.21387}
          y={167.63275}
          transform="rotate(-90)"
        />
        <g id="g100" transform="translate(-1046.0709,763.41183)">
          <path
            id="path97"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g99" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path98"
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
              id="path99"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 187.56519,658.18948 h 44.45342"
          id="path100"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 265.77701,658.18948 h 49.15154"
          id="path101"
        />
        <g id="g114" transform="translate(-1044.8845,804.47451)">
          <path
            id="path102"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g113" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path103"
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
              id="path112"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 4.68552,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 266.96349,699.57706 h 43.16319"
          id="path115"
        />
        <path
          id="path116"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 177.43226,735.51971 -0.16006,-29.34794 a 7.126077,7.126077 0 0 1 7.12597,-7.16494 h 48.80681"
        />
        <rect
          style={{
            fill: jack_house_4?.item1?.value
              ? "url(#linearGradient48)"
              : "url(#linearGradient121)",
            // stroke: jack_house_4?.item1?.value ? "url(#linearGradient49)" : "url(#linearGradient122)",
            // fill: "url(#linearGradient121)",
            stroke: "url(#linearGradient122)",
            fillOpacity: 1,
            strokeWidth: 1.33657,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect116"
          width={20.048536}
          height={20.048536}
          x={-748.19214}
          y={167.63275}
          transform="rotate(-90)"
        />
        <g id="g120" transform="translate(-1046.0709,843.39016)">
          <path
            id="path117"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g119" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path118"
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
              id="path119"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 187.56519,738.1678 h 44.45342"
          id="path120"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 265.77701,738.1678 h 49.15154"
          id="path121"
        />
        <path
          id="path217"
          style={{
            fill: "none",
            stroke: "#2f839a",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="M 1181,225 H 373.22718 a 14.459944,14.459944 0 0 0 -14.45994,14.45994 V 840.54006 A 14.459944,14.459944 0 0 0 373.22718,855 h 907.46812"
        />
        <g id="g147" transform="translate(-634.25226,474.62341)">
          <path
            id="path144"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g146" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path145"
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
              id="path146"
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
        <g id="g150" transform="translate(-333.96901,474.62341)">
          <path
            id="path147"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g149" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path148"
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
              id="path149"
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
        <g id="g164" transform="translate(-417.98849,431.6446)">
          <g id="g163">
            <path
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 3,
                strokeDasharray: "none"
              }}
              d="m 1224.8466,-83.607718 21.6458,21.645846 -21.6458,21.645845"
              id="path162"
            />
            <circle
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 2.70831,
                strokeOpacity: 1
              }}
              id="circle162"
              cx={1228.8466}
              cy={-61.961872}
              r={21.645845}
            />
          </g>
        </g>
        <g id="g190" transform="translate(24,30)">
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 593.33855,265.37237 h 116.11172 a 8.1103271,8.1103271 45 0 1 8.11033,8.11033 v 65.03177"
            id="path175"
          />
          <g id="g189" transform="translate(-624.10058,370.01476)">
            <path
              id="path178"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g188" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path187"
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
                id="path188"
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
        </g>
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 593.33855,265.37237 h 116.11172 a 8.1103271,8.1103271 45 0 1 8.11033,8.11033 v 65.03177"
          id="path190"
          transform="rotate(180,800.74268,352.82407)"
        />
        <g id="g194" transform="matrix(-1,0,0,1,2225.586,544.91816)">
          <path
            id="path191"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g193" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path192"
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
              id="path193"
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
        <g id="g201" transform="translate(24,268.41455)">
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 593.33855,265.37237 h 116.11172 a 8.1103271,8.1103271 45 0 1 8.11033,8.11033 v 65.03177"
            id="path196"
          />
          <g id="g200" transform="translate(-624.10058,370.01476)">
            <path
              id="path197"
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
              d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
            />
            <g id="g199" transform="rotate(180,1294.9687,-77.27745)">
              <path
                id="path198"
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
                id="path199"
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
        </g>
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 3.22352,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 318.22987,488.3773 h 81.54026"
          id="path202"
        />
        <g id="g206" transform="translate(-634.25226,903.45906)">
          <path
            id="path203"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g205" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path204"
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
              id="path205"
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
        <g id="g211" transform="translate(-417.98849,860.48025)">
          <g id="g210">
            <path
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 3,
                strokeDasharray: "none"
              }}
              d="m 1224.8466,-83.607718 21.6458,21.645846 -21.6458,21.645845"
              id="path209"
            />
            <circle
              style={{
                fill: "none",
                stroke: "#800066",
                strokeWidth: 2.70831,
                strokeOpacity: 1
              }}
              id="circle209"
              cx={1228.8466}
              cy={-61.961872}
              r={21.645845}
            />
          </g>
        </g>
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 570.55059,825 v -45.71476 a 10.766857,10.766857 135 0 1 10.76686,-10.76686 h 38.51979"
          id="path211"
          transform="translate(24,30)"
        />
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 677.59564,798.81667 H 789.21428"
          id="path213"
        />
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 832.50391,798.51838 H 944.12049"
          id="path214"
        />
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 977.87889,798.81667 H 1355.5713"
          id="path215"
        />
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1120.9329,455.03216 h 150.3156 a 12.092305,12.092305 135 0 0 12.0923,-12.09231 V 99.160325 a 12.092305,12.092305 135 0 1 12.0923,-12.092305 h 250.7749"
          id="path218"
          transform="translate(24,30)"
        />
        <g id="g222" transform="translate(292.70993,221.71041)">
          <path
            id="path219"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g221" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path220"
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
              id="path221"
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
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1604.5578,117.06802 h 93.6765"
          id="path222"
        />
        <path
          style={{
            fill: "none",
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1495.6387,134.27842 h -146.5956 a 15.791866,15.791866 134.96297 0 0 -15.7919,15.81228 l 1.0411,805.42447"
          id="path233"
          transform="translate(24,30)"
        />
        <g
          id="g272"
          transform="translate(679.30317,451.71197)"
          style={{
            filter: "url(#filter848)"
          }}
        >
          <g id="g242">
            <path
              id="path234"
              style={{
                fill: "url(#radialGradient272)",
                fillOpacity: 0.612805,
                fillRule: "evenodd",
                strokeWidth: 0.301652,
                strokeLinecap: "square",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers"
              }}
              d="m 771.55714,-102.04327 v 48.354717 c 0,3.572499 18.43809,6.449543 41.34087,6.449543 22.90281,0 41.34086,-2.877044 41.34086,-6.449543 v -48.354717 c 0,3.572496 -19.22463,-0.62856 -57.6088,2.979057 -11.60297,1.090535 -24.77599,-0.382221 -25.07293,-2.979057 z"
            />
            <path
              style={{
                fill: "#003380",
                fillOpacity: 0.422566,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 835.13737,-52.661863 c 0,0 11.80993,0.227246 13.03687,-3.523539 1.22702,-3.750855 1.22702,-8.865627 1.22702,-9.320284 0,-0.454665 1.68718,-24.891986 1.68718,-24.891986 0,0 -0.38387,24.31429 0.2803,25.544967 0.15353,0.284311 0.45297,8.266351 -0.58727,9.462972 -0.55039,0.633176 -5.36816,2.955186 -15.64426,2.72787 z"
              id="path235"
            />
            <path
              style={{
                fill: "#0055d4",
                fillOpacity: 0.10177,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 851.60176,-98.045264 c 0,0 -3.03673,30.800617 -20.2807,33.945762 -17.24398,3.145119 -26.89629,1.952145 -31.23441,0.86761 -4.33813,-1.084525 -21.25675,-0.108535 -22.88353,-17.786266 -1.62682,-17.677801 -3.68741,-18.97925 -3.68741,-18.97925 0,0 0.43381,39.693746 0.54226,40.561365 0.10854,0.867644 -0.21676,5.856459 -0.21676,5.856459 0,0 14.53268,8.567773 43.48956,5.422654 28.95695,-3.145145 33.62042,-2.385984 34.92183,-6.181824 1.3014,-3.79584 -0.65066,-43.70651 -0.65066,-43.70651 z"
              id="path236"
            />
            <path
              style={{
                fill: "#0044aa",
                fillOpacity: 0.303097,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 774.26717,-97.114103 c 0,0 -0.32529,19.087725 0.21676,22.992013 0.54228,3.904315 0.43381,15.508767 0.3253,17.027098 -0.10855,1.518339 -0.21675,3.362043 -0.21675,3.362043 0,0 2.60286,-17.027106 2.81975,-19.304615 0.21675,-2.2775 -3.14512,-24.076539 -3.14512,-24.076539 z"
              id="path237"
            />
            <path
              style={{
                fill: "#0066ff",
                fillOpacity: 0.232301,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 850.75973,-68.586302 c 0,0 -2.96607,11.343452 -19.80849,12.501798 -16.84249,1.158286 -26.27007,0.718965 -30.50716,0.319398 -4.23713,-0.399444 -20.76189,-0.03966 -22.35072,-6.550476 -1.58898,-6.51053 -3.60156,-6.989823 -3.60156,-6.989823 0,0 0.42371,14.618694 0.52959,14.938257 0.10625,0.31939 -0.2115,2.156859 -0.2115,2.156859 0,0 14.19432,3.15538 42.47694,1.997069 28.28269,-1.158277 32.83757,-0.878729 34.10875,-2.276652 1.2711,-1.397992 -0.63559,-16.09656 -0.63559,-16.09656 z"
              id="path238"
            />
            <path
              style={{
                fill: "#062f00",
                fillOpacity: 0.232301,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 776.32777,-62.300722 c 0.10853,0.542245 -1.30143,7.808603 6.29026,8.567773 7.59172,0.759161 10.41148,0.759161 13.33971,1.084525 2.92823,0.325296 23.96806,-0.65072 25.59487,-0.65072 1.62679,0 14.96648,0.54228 17.35247,-0.325295 2.38597,-0.867619 9.86916,-7.374773 9.86916,-7.374773 0,0 -3.7958,7.049408 -6.83245,8.350858 -3.03671,1.301415 -7.37484,1.40989 -10.08615,1.40989 -2.71134,0 -20.93142,-0.433805 -22.66664,-0.325295 -1.73526,0.108544 -2.16906,0.650729 -10.08612,0.650729 -7.91708,0 -11.60447,-1.19301 -16.26793,-1.409899 -4.66349,-0.216751 -7.91708,-0.433805 -7.59172,-2.819789 0.3253,-2.38595 1.08454,-7.157874 1.08454,-7.157874 z"
              id="path239"
            />
            <path
              style={{
                fill: "#0066ff",
                fillOpacity: 0.738938,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 771.94418,-101.3662 c 0,0 -0.37132,1.921177 8.77262,2.289111 9.14393,0.367934 12.88967,1.391359 12.88967,1.391359 0,0 -3.40732,-0.571618 -6.47728,0 -3.06996,0.571627 -6.88447,-0.708452 -9.10867,-0.9446 -2.22419,-0.236148 -4.62086,2.630765 -5.36399,-0.06746 -0.74314,-2.69823 -0.71235,-2.66839 -0.71235,-2.66839 z"
              id="path240"
            />
            <path
              style={{
                fill: "#f1ffef",
                fillOpacity: 0.632743,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 782.37244,-98.52912 c 5.13674,-0.08761 7.37596,0.375771 7.37596,0.375771 0,0 -1.919,-0.273738 -2.53487,-0.08902 -0.50603,0.151771 -4.84109,-0.286753 -4.84109,-0.286753 z"
              id="path241"
            />
            <path
              style={{
                fill: "#0066ff",
                fillOpacity: 0.632743,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 854.20891,-101.87045 c 0,0 0,2.003806 -5.0095,1.62213 -5.00958,-0.38168 -8.49235,0.333963 -8.49235,0.333963 0,0 4.15075,0.09542 5.96375,0.14313 1.81291,0.04771 4.72322,1.383583 5.77281,0.858777 1.04959,-0.524806 1.76529,-2.958 1.76529,-2.958 z"
              id="path242"
            />
          </g>
          <g
            id="g271"
            transform="matrix(3.2792041,0,0,3.2792041,317.78139,580.75604)"
            style={{
              strokeWidth: 1.15257
            }}
          >
            <path
              style={{
                fill: "#006580",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 138.42952,-195.48661 c -1e-5,-6e-5 0.003,-2.98276 0.003,-2.98276 0,0 0.0861,2.79463 0.26144,3.13373 0.1754,0.3391 1.91767,0.88867 1.91767,0.88867 l 0.61973,0.18709 c 0,0 -2.70072,-0.33995 -2.80176,-1.22673 z"
              id="path243"
            />
            <path
              style={{
                fill: "#006580",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 163.7193,-195.4789 -0.0992,-8.73125 c 0,0 -0.0661,6.91224 -0.33073,8.00365 -0.26459,1.0914 -1.68672,1.78594 -1.68672,1.78594 0,0 1.85208,-0.39688 2.11666,-1.05834 z"
              id="path244"
            />
            <g
              id="g247"
              transform="translate(32.801963,3.1805074)"
              style={{
                strokeWidth: 1.15257
              }}
            >
              <path
                id="path245"
                style={{
                  fill: "#014a59",
                  fillOpacity: 1,
                  fillRule: "evenodd",
                  stroke: "none",
                  strokeWidth: 0.0547343,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  paintOrder: "stroke fill markers"
                }}
                d="m 119.44519,-224.93882 v 2.56215 c 0.19711,0.003 0.38823,0.009 0.58251,0.0128 v -2.57494 z m -3.78292,0.0445 v 2.5457 c 0.19103,-0.006 0.38841,-0.009 0.58252,-0.0131 v -2.53261 z m 7.58457,0.0734 v 2.59245 c 0.19798,0.0129 0.3899,0.0272 0.58236,0.0416 v -2.63403 z m -11.24138,0.11741 v 2.55789 c 0.1902,-0.0159 0.38631,-0.0302 0.58251,-0.0446 v -2.51326 z m -3.30792,0.36657 v 2.59199 c 0.1897,-0.0323 0.37852,-0.0646 0.58251,-0.0949 v -2.49712 z m 18.34272,0.41073 v 2.07984 c 0.20348,0.0299 0.39305,0.0616 0.58251,0.0935 v -2.17335 z m -21.46256,0.73937 v 2.67774 c 0,-0.19768 0.20537,-0.38771 0.58251,-0.56637 v -2.11137 z m 24.63144,0.0391 v 2.07223 c 0.37707,0.17865 0.58251,0.36871 0.58251,0.56637 v -2.6386 z"
              />
              <path
                id="path246"
                style={{
                  fill: "#014a59",
                  fillOpacity: 1,
                  fillRule: "evenodd",
                  strokeWidth: 0.08987,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  paintOrder: "stroke fill markers"
                }}
                d="m 118.18467,-225.02456 c -6.98425,0 -12.60697,0.83702 -12.60697,1.87684 v 0.61251 c 0,-1.03981 5.62272,-1.87683 12.60697,-1.87683 6.98426,0 12.60698,0.83702 12.60698,1.87683 v -0.61251 c 0,-1.03982 -5.62272,-1.87684 -12.60698,-1.87684 z"
              />
              <path
                id="path247"
                style={{
                  fill: "#014a59",
                  fillOpacity: 1,
                  fillRule: "evenodd",
                  stroke: "none",
                  strokeWidth: 0.200379,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  paintOrder: "stroke fill markers"
                }}
                d="m 104.65954,-226.5161 a 0.21236945,0.21236945 0 0 0 -0.2123,0.2123 v 0.35544 h -0.005 v 28.61964 0.40296 a 0.16483118,0.16483118 0 0 0 0.16478,0.16478 h 0.97086 v -0.56774 h -0.44926 a 0.11858203,0.11858203 0 0 1 -0.11863,-0.11863 v -2.49925 h 0.56789 v -0.5679 h -0.56789 v -2.94638 h 0.56789 v -0.56774 h -0.56789 v -3.49219 h 0.56789 v -0.56774 h -0.56789 v -3.26604 h 0.56789 v -0.5679 h -0.56789 v -3.23831 h 0.56789 v -0.56775 h -0.56789 v -3.11938 h 0.56789 v -0.56789 h -0.56789 v -6.36776 a 0.16483118,0.16483118 0 0 1 0.16478,-0.16478 h 0.233 a 0.16483118,0.16483118 0 0 1 0.16478,0.16478 v 2.59672 h 0.56789 v -2.7615 -0.35544 a 0.21236945,0.21236945 0 0 0 -0.21229,-0.2123 z"
              />
            </g>
            <path
              id="path248"
              style={{
                opacity: 0.245798,
                fill: "#006680",
                fillOpacity: 1,
                fillRule: "evenodd",
                strokeWidth: 0.0919892,
                strokeLinecap: "square",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers"
              }}
              d="m 151.03941,-219.46168 c 6.98427,0 12.60698,0.87706 12.60698,1.9665 v 21.9998 c 0,1.08944 -5.62271,1.9665 -12.60698,1.9665 -6.98426,0 -12.60697,-0.87706 -12.60697,-1.9665 v -21.9998 c 0,-1.08944 5.62271,-1.9665 12.60697,-1.9665 z"
            />
            <path
              id="path249"
              style={{
                fill: "#2b7a8f",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.08987,
                strokeLinecap: "square",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers"
              }}
              d="m 151.02601,-219.4425 c -6.98426,0 -12.94885,0.7481 -12.85253,1.78345 l 0.24555,2.63955 c 0,-1.03982 5.62272,-1.87699 12.60698,-1.87699 6.98425,0 12.61937,0.8165 12.61937,1.85632 l 0.20977,-2.54872 c 0.0853,-1.03632 -5.84489,-1.85361 -12.82914,-1.85361 z"
            />
            <path
              id="path250"
              style={{
                opacity: 0.918067,
                fill: "#006580",
                fillOpacity: 0.595133,
                fillRule: "evenodd",
                strokeWidth: 0.0919892,
                strokeLinecap: "square",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers"
              }}
              d="m 138.43247,-195.49543 c -0.85147,1.20638 -0.42704,1.86595 0,2.52439 0.59281,0.91404 5.62273,1.96629 12.60698,1.96629 6.98426,0 11.95814,-0.96222 12.60699,-1.96629 0.44861,-0.69421 0.60177,-1.52364 0,-2.52439 0,1.08944 -5.62273,1.9668 -12.60699,1.9668 -6.98425,0 -12.60698,-0.87736 -12.60698,-1.9668 z"
            />
            <path
              style={{
                fill: "#006580",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 137.98645,-194.4762 c 0,0 0.27479,-0.88282 0.47357,-0.70743 0.19878,0.1754 0.4268,0.24556 0.4268,0.24556 0,0 -0.39172,-0.15201 -0.45019,-0.52619 -0.0585,-0.37418 0.006,-0.0117 0.006,-0.0117 0,0 -0.39172,0.43849 -0.45604,0.99976 z"
              id="path251"
            />
            <path
              style={{
                fill: "#006580",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 163.58701,-195.24739 c 0,0 0.42168,0.47129 0.33073,0.94258 -0.091,0.47129 -0.11575,1.0418 -0.32246,1.30638 -0.2067,0.26458 -0.47956,0.43822 -0.47956,0.43822 0,0 0.48783,-0.0579 0.81856,-1.01699 0.33073,-0.95912 -0.23151,-1.83555 -0.23151,-1.83555 z"
              id="path252"
            />
            <path
              style={{
                opacity: 0.277311,
                fill: "#006580",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 138.156,-194.85038 c 0,0 -0.0994,0.0643 0.0468,0.48526 0.14616,0.42095 0.35663,0.98222 0.53203,1.11669 0.17539,0.13447 1.12238,0.66341 1.99882,0.87838 0.87643,0.21498 2.46393,0.44649 2.81119,0.4961 0.34727,0.0496 5.20899,0.39687 6.06889,0.39687 0.85989,0 4.31601,-0.0331 5.10976,-0.0992 0.79375,-0.0661 5.17591,-0.16537 6.74688,-0.92605 1.57096,-0.76067 2.06705,-1.17408 2.18281,-1.43867 0.11575,-0.26458 0.21497,-0.89297 0.21497,-0.89297 0,0 0.16537,0.24805 0.0992,0.61185 -0.0661,0.3638 -0.16536,0.8599 -0.26458,1.09141 -0.0992,0.23151 -0.57878,0.63665 -1.15342,0.83096 -0.57464,0.1943 -2.8236,0.80615 -5.54385,1.03766 -2.72024,0.23151 -7.85481,0.339 -9.13639,0.17363 -1.28158,-0.16536 -5.4901,-0.38861 -7.00319,-0.85163 -1.51309,-0.46302 -2.14974,-0.55397 -2.53835,-1.2485 -0.3886,-0.69453 -0.42995,-0.91777 -0.35553,-1.28157 0.0744,-0.36381 0.18396,-0.38021 0.18396,-0.38021 z"
              id="path253"
            />
            <path
              style={{
                opacity: 0.39916,
                fill: "#c5f3ff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 163.61175,-195.19532 c 0.28064,0.43264 0.23386,0.49111 0.23386,0.49111 0,0 0,0.37417 -0.14031,0.6548 -0.14032,0.28064 -0.49111,0.43265 -0.49111,0.43265 0,0 0.3391,-0.25725 0.37418,-0.5028 0.0351,-0.24556 -0.0234,-0.32741 -0.11693,-0.44434 -0.0935,-0.11693 -0.63143,-0.0468 -0.63143,-0.0468 0,0 -0.17539,-0.0585 0.14032,-0.19878 0.31571,-0.14032 0.46772,-0.18709 0.54957,-0.28063 0.0819,-0.0935 0.0819,-0.10524 0.0819,-0.10524 z"
              id="path254"
            />
            <path
              style={{
                opacity: 0.39916,
                fill: "url(#linearGradient272)",
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 139.56648,-194.19833 c 0,0 -0.62763,-0.27178 -0.79429,-0.22454 -0.17465,0.0495 -0.13572,0.38287 -0.0432,0.66579 0.0823,0.25182 0.35079,0.49111 0.57296,0.60804 0.22217,0.11693 2.04932,0.65168 2.37415,0.75178 0.33083,0.10195 2.93449,0.44091 3.35544,0.47599 0.42095,0.0351 3.30913,0.22217 3.695,0.24555 0.38587,0.0234 3.44945,-0.0117 4.0341,-0.0117 0.58465,0 3.13373,-0.1637 3.39098,-0.1637 0.25725,0 2.82972,-0.32741 3.32083,-0.42095 0.4911,-0.0935 2.45554,-0.88867 2.6894,-0.98222 0.23386,-0.0935 0.93544,-0.63142 1.0056,-0.81851 0.0702,-0.18709 0.0702,-0.37418 -0.3508,-0.39756 -0.42094,-0.0234 -0.96284,0.31653 -1.47332,0.56127 -0.49769,0.2386 -2.9438,0.57946 -3.15428,0.64962 -0.21048,0.0702 -1.96727,0.19227 -3.06641,0.16889 -1.09915,-0.0234 -3.66335,0.0827 -4.03753,0.0827 -0.37417,0 -2.56562,-0.0234 -3.05673,-0.0234 -0.49111,0 -1.95474,-0.0595 -2.92751,-0.14742 -0.88169,-0.0797 -2.51318,-0.35622 -3.19137,-0.44977 -0.6782,-0.0935 -1.44155,-0.28335 -1.86959,-0.41114 -0.35431,-0.10578 -0.47753,-0.16288 -0.47753,-0.16288 z"
              id="path255"
            />
            <path
              style={{
                fill: "#dcf7ff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 141.22972,-193.58134 c 0,0 -1.11208,-0.27285 -1.30638,-0.27699 -0.26913,-0.006 0.11989,0.27286 0.11989,0.27286 0,0 1.05006,0.30592 1.38079,0.32246 0.33073,0.0165 0.99633,0.091 1.17823,-0.008 0.1819,-0.0992 -0.48783,-0.11162 -0.48783,-0.11162 z"
              id="path256"
            />
            <path
              style={{
                fill: "#1c505e",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 138.41439,-215.05393 0.0207,1.32292 c 0,0 -0.0289,-1.2113 0.0785,-1.37666 0.10749,-0.16537 0.12816,-0.20671 0.42168,-0.36381 0.29353,-0.15709 0.65733,-0.339 0.65733,-0.339 0,0 -1.12448,0.3018 -1.17823,0.75655 z"
              id="path257"
            />
            <path
              style={{
                fill: "#1c505e",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 162.25169,-215.90556 c 0,0 1.06577,0.32169 1.27745,0.58705 0.1628,0.20409 0.11988,0.23151 0.11988,0.23151 l -0.004,0.92604 c 0,0 -5.9e-4,-0.72782 -0.0992,-0.95912 -0.0992,-0.23254 -0.24288,-0.32349 -0.57051,-0.46302 -0.29942,-0.12751 -0.72347,-0.32246 -0.72347,-0.32246 z"
              id="path258"
            />
            <path
              style={{
                fill: "#266c7f",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 140.30752,-218.67495 c 0,0 -2.15445,0.42387 -2.12229,0.94421 0.0322,0.52034 0.23971,2.63971 0.23971,2.63971 0,0 0.0526,-0.20755 0.27771,-0.35371 0.22509,-0.14617 1.68964,-0.5905 1.68964,-0.5905 0,0 -0.83605,-0.0234 -1.07283,0.0731 -0.23679,0.0965 -0.62558,0.24263 -0.6665,0.0614 -0.0409,-0.18125 -0.0994,-1.03776 -0.0994,-1.03776 0,0 -0.26894,-0.61973 -0.0702,-0.83021 0.19879,-0.21047 1.82412,-0.90621 1.82412,-0.90621 z"
              id="path259"
            />
            <path
              style={{
                fill: "#266c7f",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 161.67655,-218.61064 c 0,0 2.18076,0.38003 2.14568,0.93545 -0.0351,0.55542 -0.16955,2.50231 -0.16955,2.50231 0,0 -0.15509,-0.44678 -0.48527,-0.46919 -0.37934,-0.0258 -0.47039,-0.24286 -0.73666,-0.32009 -0.27104,-0.0786 -0.39756,-0.25141 -0.39756,-0.25141 0,0 0.63727,0.0935 0.86529,0.16371 0.22801,0.0702 0.42094,0.1754 0.55542,-0.0175 0.13447,-0.19293 0.0935,-0.37417 0.10523,-0.53788 0.0117,-0.1637 -0.0994,-0.39756 -0.0994,-0.50865 0,-0.11108 -0.0643,-0.51449 -0.28648,-0.64896 -0.22217,-0.13447 -0.47357,-0.29817 -0.6665,-0.44433 -0.19293,-0.14617 -0.46772,-0.19294 -0.67235,-0.30402 -0.20463,-0.11109 -0.54957,-0.14616 -0.54957,-0.14616 z"
              id="path260"
            />
            <path
              style={{
                fill: "url(#linearGradient273)",
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 140.36599,-218.4177 c -0.0936,0.0234 -0.65481,0.0468 -1.05238,0.42095 -0.39756,0.37418 -1.0056,0.8419 -0.56126,1.19269 0.44433,0.35079 0.56126,0.77174 1.12253,0.67819 0.56126,-0.0935 0.56126,-0.28063 1.47332,-0.39756 0.91206,-0.11693 4.81753,-0.58465 6.05699,-0.60804 1.23947,-0.0234 1.56687,0.0234 2.6894,0.0468 1.12254,0.0234 2.31523,-0.0468 2.31523,-0.0468 l 0.0234,-2.0112 c 0,0 -6.03362,-0.25725 -7.71741,0.11693 -1.6838,0.37418 -1.61364,-0.18709 -3.01681,0.23386 -1.40316,0.42095 -1.33301,0.37418 -1.33301,0.37418 z"
              id="path261"
            />
            <path
              style={{
                fill: "#3696b0",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 139.27853,-217.82135 c 0,0 -0.3274,0.3274 -0.0234,0.5028 0.30402,0.17539 0.56127,-0.12863 0.77174,-0.1754 0.21048,-0.0468 1.46163,-0.42095 1.71888,-0.44434 0.25725,-0.0234 1.47332,-0.35079 2.10475,-0.40925 0.63142,-0.0585 -1.63703,-0.23386 -1.95274,-0.12863 -0.31571,0.10524 -1.53179,0.19878 -1.73057,0.28064 -0.19878,0.0819 -0.63142,0.0935 -0.88867,0.37418 z"
              id="path262"
            />
            <path
              style={{
                fill: "url(#linearGradient274)",
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 161.55303,-218.60513 c 0,0 0.39687,0.10748 0.80202,0.3638 0.40514,0.25631 0.39687,0.1819 0.61184,0.37207 0.21498,0.19017 0.29766,0.0165 0.38034,0.32246 0.0827,0.30593 0.0331,0.31419 0.11576,0.50436 0.0827,0.19017 0.0661,0.10749 0.0827,0.339 0.0165,0.23151 0.0661,0.23978 0,0.40514 -0.0661,0.16537 0.0496,0.21498 -0.1819,0.28112 -0.23151,0.0661 -0.19844,0 -0.48783,-0.0496 -0.28939,-0.0496 -0.37207,-0.11575 -0.61185,-0.12402 -0.23978,-0.008 0.0579,0.12402 -0.66972,-0.0827 -0.72761,-0.20671 -1.77767,-0.38034 -2.1084,-0.38861 -0.33073,-0.008 -0.68626,-0.0165 -0.90124,-0.0579 -0.21497,-0.0413 -2.36471,-0.21497 -2.41432,-0.19843 -0.0496,0.0165 0.0661,-2.28204 0.0661,-2.28204 0,0 4.53926,0.30593 5.31648,0.59532 z"
              id="path263"
            />
            <path
              style={{
                fill: "#77c1d5",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.914853
              }}
              d="m 162.47168,-217.87398 c 0.15786,0.16955 0.39756,0.43265 0.37418,0.50281 -0.0234,0.0702 0.006,0.15785 -0.15786,0.19878 -0.1637,0.0409 -0.61973,-0.19294 -0.66066,-0.21632 -0.0409,-0.0234 -0.77758,-0.52034 -1.07576,-0.5905 -0.29817,-0.0702 -0.76004,-0.19879 -0.94713,-0.23971 -0.18709,-0.0409 -0.45018,-0.0877 -0.68404,-0.12277 -0.23387,-0.0351 -0.8419,-0.11109 -0.8419,-0.11109 0,0 1.7598,-0.11108 2.42046,0.0643 0.66065,0.1754 0.84189,0.20463 0.97636,0.25725 0.13448,0.0526 0.2631,0.076 0.40341,0.17539 0.14032,0.0994 0.19294,0.0819 0.19294,0.0819 z"
              id="path264"
            />
            <g
              id="g270"
              style={{
                strokeWidth: 1.15257
              }}
            >
              <path
                style={{
                  opacity: 1,
                  fill: "url(#linearGradient277)",
                  fillOpacity: 0.210177,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 138.51774,-214.77694 c 0,0 0.13053,-1.07791 3.86953,-1.4056 3.67937,-0.32247 3.77846,0.22038 3.77846,0.22038 0,0 -0.64537,21.58877 -1.76531,21.84326 -0.94362,0.21442 -5.21247,-1.11788 -5.55786,-1.43925 -0.43558,-0.40531 -0.32482,-19.21879 -0.32482,-19.21879 z"
                id="path265"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "url(#linearGradient278)",
                  fillOpacity: 0.60177,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 141.79196,-215.55416 c 0.91475,0 1.53946,0.0106 1.82727,0.19844 0.18645,0.12167 -0.0413,5.82083 -0.10753,6.44922 -0.0661,0.62839 -0.72761,5.42396 -0.76068,5.88698 -0.0331,0.46302 -0.49609,3.80338 -1.55443,3.86953 -1.05833,0.0661 -2.21588,-5.02708 -2.05052,-5.78776 0.16537,-0.76068 -0.0331,-5.68854 -0.0331,-6.08542 0,-0.39687 -0.10744,-3.55886 0.12403,-3.86952 0.15121,-0.20296 1.69273,-0.66147 2.53008,-0.66147 z"
                id="path266"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "url(#linearGradient279)",
                  fillOpacity: 0.840708,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 139.882,-214.52062 c 0,0 -0.10749,1.87688 -0.008,3.59667 0.0992,1.71979 -0.19844,4.96094 -0.19844,5.45703 0,0.4961 0.26458,3.30729 0.3638,3.47266 0.0992,0.16536 0,-2.61276 0.19844,-3.47266 0.19844,-0.85989 0.16536,-2.87734 0.16536,-3.34036 0,-0.46302 -0.16536,-4.66328 0.1323,-5.35781 0.29765,-0.69453 1.30637,-0.87643 1.23197,-0.92604 -0.2537,-0.16915 -1.8769,0.14884 -1.8769,0.4134 0,0.26459 0.008,0.16537 0.008,0.16537 z"
                id="path267"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "url(#linearGradient280)",
                  fillOpacity: 0.639381,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 157.08703,-216.50004 c 0,0 5.84652,0.74835 6.08038,1.21607 0.23386,0.46773 0.28064,1.07577 0.28064,1.07577 l -0.20906,16.64096 c -0.0262,0.15086 0.21405,1.17985 -0.67962,2.04452 -1.44812,1.40113 -2.05797,1.4967 -3.64822,0.65481 -1.59026,-0.8419 -0.93545,-6.64165 -0.74836,-8.41899 0.18709,-1.77735 -0.28063,-6.82874 -0.18709,-7.95127 0.0936,-1.12253 -0.88867,-5.26187 -0.88867,-5.26187 z"
                id="path268"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "url(#linearGradient281)",
                  fillOpacity: 0.769912,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 160.19738,-215.58799 c 0,0 2.17491,-0.0234 2.33861,0.42095 0.1637,0.44434 0.30402,0.86529 0.25725,1.33301 -0.0468,0.46772 0.0935,6.45456 -0.0234,7.2263 -0.11693,0.77174 0.39756,9.19073 0.0702,9.61168 -0.3274,0.42095 -1.77734,1.05238 -1.89427,0.93544 -0.11693,-0.11693 -0.8419,-1.19269 -0.8419,-1.37977 0,-0.18709 0.11693,-7.71741 0.21048,-8.09159 0.0935,-0.37418 0.46772,-4.49013 0.46772,-4.95785 0,-0.46772 -0.58465,-5.09817 -0.58465,-5.09817 z"
                id="path269"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#e2f1f7",
                  fillOpacity: 0.769912,
                  stroke: "none",
                  strokeWidth: 0.914853
                }}
                d="m 160.42854,-215.02499 c 0.8599,0.0165 1.09141,0.0827 1.19063,0.0992 0.0992,0.0165 0.33073,0.59531 0.31419,0.79375 -0.0165,0.19844 0.0992,13.89062 0.0992,13.89062 0,0 -0.19844,-12.96458 -0.59531,-13.55989 -0.39688,-0.59531 -0.76068,-0.95912 -0.99219,-1.05834 -0.23151,-0.0992 -0.0165,-0.16536 -0.0165,-0.16536 z"
                id="path270"
              />
            </g>
          </g>
        </g>
        <g id="g287" transform="rotate(90,1286.6403,217.20706)">
          <path
            id="path284"
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
            id="g286"
            transform="translate(0,33.928766)"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1
            }}
          >
            <path
              id="path285"
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
              id="path286"
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
        <g id="g290" transform="rotate(90,1257.98,188.54682)">
          <path
            id="path287"
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
            id="g289"
            transform="translate(0,33.928766)"
            style={{
              fill: "#bcbcbc",
              fillOpacity: 1
            }}
          >
            <path
              id="path288"
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
              id="path289"
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
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1519.6387,117.06802 v 91.58824"
          id="path290"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1462.3182,164.27842 v 44.3779"
          id="path291"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1438.5106,212.41472 v 20.6735 a 4.9507863,4.9507863 45 0 0 4.9508,4.95079 l 47.2265,0 a 4.9507863,4.9507863 135 0 0 4.9508,-4.95079 v -20.67356"
          id="path292"
          transform="translate(24,30)"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1491.0747,268.03901 v 37.23394"
          id="path293"
        />
        <g id="g297" transform="rotate(90,1087.716,269.23631)">
          <path
            id="path294"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g296" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path295"
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
              id="path296"
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
        <g id="g300" transform="rotate(90,1068.6092,250.1295)">
          <path
            id="path297"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g299" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path298"
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
              id="path299"
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
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1461.5947,459.60981 V 403.65574"
          id="path300"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1399.3811,429.6098 -6e-4,-12.2061 a 7.9341486,7.9341486 134.99711 0 1 7.9337,-7.93454 l 31.004,-0.002"
          id="path301"
          transform="translate(24,30)"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1328.1873,720.75135 -724.57827,-1.51832 a 9.6060425,9.6060425 134.94438 0 0 -9.62609,9.6448 l 0.15114,37.43884"
          id="path302"
          transform="translate(24,30)"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1328.1873,652.88708 c -340.87381,0 -611.46461,-0.0692 -950.48731,-0.0711 -7.5161,-4e-5 -13.6091,-6.09304 -13.6091,-13.60915 l 0,-180.64342"
          id="path303"
          transform="translate(24,30)"
        />
        <g
          id="g411"
          transform="matrix(0.89176796,0,0,0.89176796,79.383515,753.77053)"
          style={{
            filter: "url(#filter846)"
          }}
        >
          <g id="g312">
            <path
              id="path304"
              style={{
                fill: "url(#radialGradient411)",
                fillRule: "evenodd",
                strokeWidth: 0.301652,
                strokeLinecap: "square",
                strokeLinejoin: "round",
                paintOrder: "stroke fill markers"
              }}
              d="m 1543.3657,113.20984 v 55.84136 c 0,4.12562 21.2928,7.44811 47.7416,7.44811 26.4488,0 47.7415,-3.32249 47.7415,-7.44811 v -55.84136 c 0,4.12562 -22.2011,-0.72587 -66.5282,3.4403 -13.3994,1.25938 -28.612,-0.4414 -28.9549,-3.4403 z"
            />
            <path
              style={{
                fill: "#c8560c",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 1616.7899,170.23685 c 0,0 13.6384,0.26243 15.0553,-4.06908 1.417,-4.33159 1.417,-10.23827 1.417,-10.76332 0,-0.52506 1.9484,-28.74595 1.9484,-28.74595 0,0 -0.4433,28.07881 0.3237,29.50003 0.1773,0.32833 0.5231,9.54621 -0.6782,10.9281 -0.6356,0.73121 -6.1993,3.41273 -18.0664,3.15022 z"
              id="path305"
            />
            <path
              style={{
                fill: "#994108",
                fillOpacity: 0.612832,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 1635.8034,117.82685 c 0,0 -3.5069,35.5694 -23.4207,39.2015 -19.9138,3.63207 -31.0606,2.25439 -36.0703,1.00194 -5.0098,-1.25244 -24.5479,-0.12534 -26.4266,-20.54007 -1.8787,-20.41481 -4.2583,-21.91776 -4.2583,-21.91776 0,0 0.501,45.83943 0.6262,46.84138 0.1254,1.00198 -0.2503,6.7632 -0.2503,6.7632 0,0 16.7827,9.8943 50.2229,6.26223 33.4403,-3.6321 38.8258,-2.7554 40.3287,-7.13894 1.5029,-4.38354 -0.7514,-50.47348 -0.7514,-50.47348 z"
              id="path306"
            />
            <path
              style={{
                fill: "#ce570a",
                fillOpacity: 0.451327,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 1546.4953,118.90218 c 0,0 -0.3756,22.04303 0.2503,26.55181 0.6263,4.50881 0.501,17.90995 0.3757,19.66336 -0.1253,1.75342 -0.2503,3.88258 -0.2503,3.88258 0,0 3.0059,-19.66337 3.2563,-22.2935 0.2503,-2.63012 -3.632,-27.80425 -3.632,-27.80425 z"
              id="path307"
            />
            <path
              style={{
                fill: "#903d07",
                fillOpacity: 0.712389,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 1634.831,151.84687 c 0,0 -3.4253,13.09973 -22.8754,14.43742 -19.4501,1.33762 -30.3374,0.83028 -35.2305,0.36885 -4.8931,-0.46129 -23.9764,-0.0458 -25.8112,-7.56467 -1.835,-7.51854 -4.1592,-8.07204 -4.1592,-8.07204 0,0 0.4893,16.88207 0.6116,17.25111 0.1227,0.36884 -0.2442,2.4908 -0.2442,2.4908 0,0 16.392,3.64392 49.0535,2.30627 32.6616,-1.33761 37.9217,-1.01478 39.3897,-2.62914 1.4679,-1.61444 -0.734,-18.58875 -0.734,-18.58875 z"
              id="path308"
            />
            <path
              style={{
                fill: "#733208",
                fillOpacity: 0.982301,
                stroke: "none",
                strokeWidth: 2.99999
              }}
              d="m 1548.875,159.10563 c 0.1253,0.6262 -1.503,9.01759 7.2641,9.8943 8.7672,0.8767 12.0235,0.8767 15.4051,1.25244 3.3816,0.37566 27.679,-0.75147 29.5576,-0.75147 1.8787,0 17.2838,0.62624 20.0392,-0.37566 2.7553,-1.00195 11.3971,-8.51659 11.3971,-8.51659 0,0 -4.3835,8.14085 -7.8903,9.6438 -3.5068,1.50291 -8.5166,1.62818 -11.6477,1.62818 -3.1312,0 -24.1722,-0.50097 -26.1761,-0.37566 -2.0039,0.12535 -2.5049,0.75148 -11.6477,0.75148 -9.1429,0 -13.4012,-1.37772 -18.7867,-1.62819 -5.3855,-0.25031 -9.1428,-0.50097 -8.7671,-3.25637 0.3757,-2.75536 1.2525,-8.26611 1.2525,-8.26611 z"
              id="path309"
            />
            <path
              style={{
                fill: "#f4711c",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 1543.8127,113.99174 c 0,0 -0.4288,2.21863 10.1308,2.64353 10.5597,0.4249 14.8854,1.60678 14.8854,1.60678 0,0 -3.9349,-0.66012 -7.4802,0 -3.5452,0.66013 -7.9503,-0.81814 -10.5189,-1.09085 -2.5686,-0.27271 -5.3363,3.03808 -6.1945,-0.0779 -0.8582,-3.11599 -0.8226,-3.08154 -0.8226,-3.08154 z"
              id="path310"
            />
            <path
              style={{
                fill: "#f1ffef",
                fillOpacity: 0.632743,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 1555.8555,117.26808 c 5.9321,-0.10118 8.518,0.43395 8.518,0.43395 0,0 -2.2161,-0.31612 -2.9274,-0.1028 -0.5843,0.17527 -5.5906,-0.33115 -5.5906,-0.33115 z"
              id="path311"
            />
            <path
              style={{
                fill: "#f4711c",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 3
              }}
              d="m 1638.8142,113.40942 c 0,0 0,2.31405 -5.7851,1.87328 -5.7852,-0.44077 -9.8072,0.38567 -9.8072,0.38567 0,0 4.7934,0.1102 6.8871,0.16529 2.0936,0.0551 5.4545,1.5978 6.6666,0.99174 1.2121,-0.60606 2.0386,-3.41598 2.0386,-3.41598 z"
              id="path312"
            />
          </g>
          <g id="g410" transform="translate(150.9312,11.630111)">
            <g
              id="g409"
              transform="matrix(3.7869151,0,0,3.7869151,893.07329,912.68254)"
              style={{
                strokeWidth: 0.998045
              }}
            >
              <g id="g408" transform="translate(-6.5675536,-3.9443317)">
                <path
                  style={{
                    fill: "#006580",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 138.42952,-195.48661 c -1e-5,-6e-5 0.003,-2.98276 0.003,-2.98276 0,0 0.0861,2.79463 0.26144,3.13373 0.1754,0.3391 1.91767,0.88867 1.91767,0.88867 l 0.61973,0.18709 c 0,0 -2.70072,-0.33995 -2.80176,-1.22673 z"
                  id="path313"
                />
                <path
                  style={{
                    fill: "#006580",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 163.7193,-195.4789 -0.0992,-8.73125 c 0,0 -0.0661,6.91224 -0.33073,8.00365 -0.26459,1.0914 -1.68672,1.78594 -1.68672,1.78594 0,0 1.85208,-0.39688 2.11666,-1.05834 z"
                  id="path314"
                />
                <g
                  id="g315"
                  transform="translate(32.801963,3.1805074)"
                  style={{
                    strokeWidth: 0.998045
                  }}
                >
                  <path
                    id="path315"
                    style={{
                      fill: "#014a59",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      stroke: "none",
                      strokeWidth: 0.0473961,
                      strokeLinecap: "square",
                      strokeLinejoin: "round",
                      paintOrder: "stroke fill markers"
                    }}
                    d="m 119.44519,-224.93882 v 2.56215 c 0.19711,0.003 0.38823,0.009 0.58251,0.0128 v -2.57494 z m -3.78292,0.0445 v 2.5457 c 0.19103,-0.006 0.38841,-0.009 0.58252,-0.0131 v -2.53261 z m 7.58457,0.0734 v 2.59245 c 0.19798,0.0129 0.3899,0.0272 0.58236,0.0416 v -2.63403 z m -11.24138,0.11741 v 2.55789 c 0.1902,-0.0159 0.38631,-0.0302 0.58251,-0.0446 v -2.51326 z m -3.30792,0.36657 v 2.59199 c 0.1897,-0.0323 0.37852,-0.0646 0.58251,-0.0949 v -2.49712 z m 18.34272,0.41073 v 2.07984 c 0.20348,0.0299 0.39305,0.0616 0.58251,0.0935 v -2.17335 z m -21.46256,0.73937 v 2.67774 c 0,-0.19768 0.20537,-0.38771 0.58251,-0.56637 v -2.11137 z m 24.63144,0.0391 v 2.07223 c 0.37707,0.17865 0.58251,0.36871 0.58251,0.56637 v -2.6386 z"
                  />
                </g>
                <g id="g318">
                  <path
                    id="path316"
                    style={{
                      fill: "#014a59",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      strokeWidth: 0.0778211,
                      strokeLinecap: "square",
                      strokeLinejoin: "round",
                      paintOrder: "stroke fill markers"
                    }}
                    d="m 118.18467,-225.02456 c -6.98425,0 -12.60697,0.83702 -12.60697,1.87684 v 0.61251 c 0,-1.03981 5.62272,-1.87683 12.60697,-1.87683 6.98426,0 12.60698,0.83702 12.60698,1.87683 v -0.61251 c 0,-1.03982 -5.62272,-1.87684 -12.60698,-1.87684 z"
                    transform="translate(32.801953,3.180507)"
                  />
                  <path
                    id="path317"
                    style={{
                      fill: "#014a59",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      stroke: "none",
                      strokeWidth: 0.173514,
                      strokeLinecap: "square",
                      strokeLinejoin: "round",
                      paintOrder: "stroke fill markers"
                    }}
                    d="m 104.65954,-226.5161 a 0.21236945,0.21236945 0 0 0 -0.2123,0.2123 v 0.35544 h -0.005 v 28.61964 0.40296 a 0.16483118,0.16483118 0 0 0 0.16478,0.16478 h 0.97086 v -0.56774 h -0.44926 a 0.11858203,0.11858203 0 0 1 -0.11863,-0.11863 v -2.49925 h 0.56789 v -0.5679 h -0.56789 v -2.94638 h 0.56789 v -0.56774 h -0.56789 v -3.49219 h 0.56789 v -0.56774 h -0.56789 v -3.26604 h 0.56789 v -0.5679 h -0.56789 v -3.23831 h 0.56789 v -0.56775 h -0.56789 v -3.11938 h 0.56789 v -0.56789 h -0.56789 v -6.36776 a 0.16483118,0.16483118 0 0 1 0.16478,-0.16478 h 0.233 a 0.16483118,0.16483118 0 0 1 0.16478,0.16478 v 2.59672 h 0.56789 v -2.7615 -0.35544 a 0.21236945,0.21236945 0 0 0 -0.21229,-0.2123 z"
                    transform="translate(32.801953,3.180507)"
                  />
                  <path
                    id="path318"
                    style={{
                      opacity: 0.245798,
                      fill: "#006680",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      strokeWidth: 0.0796565,
                      strokeLinecap: "square",
                      strokeLinejoin: "round",
                      paintOrder: "stroke fill markers"
                    }}
                    d="m 151.03941,-219.46168 c 6.98427,0 12.60698,0.87706 12.60698,1.9665 v 21.9998 c 0,1.08944 -5.62271,1.9665 -12.60698,1.9665 -6.98426,0 -12.60697,-0.87706 -12.60697,-1.9665 v -21.9998 c 0,-1.08944 5.62271,-1.9665 12.60697,-1.9665 z"
                  />
                </g>
                <path
                  id="path319"
                  style={{
                    fill: "#2b7a8f",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 0.0778211,
                    strokeLinecap: "square",
                    strokeLinejoin: "round",
                    paintOrder: "stroke fill markers"
                  }}
                  d="m 151.02601,-219.4425 c -6.98426,0 -12.94885,0.7481 -12.85253,1.78345 l 0.24555,2.63955 c 0,-1.03982 5.62272,-1.87699 12.60698,-1.87699 6.98425,0 12.61937,0.8165 12.61937,1.85632 l 0.20977,-2.54872 c 0.0853,-1.03632 -5.84489,-1.85361 -12.82914,-1.85361 z"
                />
                <path
                  id="path320"
                  style={{
                    opacity: 0.918067,
                    fill: "#006580",
                    fillOpacity: 0.595133,
                    fillRule: "evenodd",
                    strokeWidth: 0.0796565,
                    strokeLinecap: "square",
                    strokeLinejoin: "round",
                    paintOrder: "stroke fill markers"
                  }}
                  d="m 138.43247,-195.49543 c -0.85147,1.20638 -0.42704,1.86595 0,2.52439 0.59281,0.91404 5.62273,1.96629 12.60698,1.96629 6.98426,0 11.95814,-0.96222 12.60699,-1.96629 0.44861,-0.69421 0.60177,-1.52364 0,-2.52439 0,1.08944 -5.62273,1.9668 -12.60699,1.9668 -6.98425,0 -12.60698,-0.87736 -12.60698,-1.9668 z"
                />
                <path
                  style={{
                    fill: "#006580",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 137.98645,-194.4762 c 0,0 0.27479,-0.88282 0.47357,-0.70743 0.19878,0.1754 0.4268,0.24556 0.4268,0.24556 0,0 -0.39172,-0.15201 -0.45019,-0.52619 -0.0585,-0.37418 0.006,-0.0117 0.006,-0.0117 0,0 -0.39172,0.43849 -0.45604,0.99976 z"
                  id="path321"
                />
                <path
                  style={{
                    fill: "#006580",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 163.58701,-195.24739 c 0,0 0.42168,0.47129 0.33073,0.94258 -0.091,0.47129 -0.11575,1.0418 -0.32246,1.30638 -0.2067,0.26458 -0.47956,0.43822 -0.47956,0.43822 0,0 0.48783,-0.0579 0.81856,-1.01699 0.33073,-0.95912 -0.23151,-1.83555 -0.23151,-1.83555 z"
                  id="path322"
                />
                <path
                  style={{
                    opacity: 0.277311,
                    fill: "#006580",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 138.156,-194.85038 c 0,0 -0.0994,0.0643 0.0468,0.48526 0.14616,0.42095 0.35663,0.98222 0.53203,1.11669 0.17539,0.13447 1.12238,0.66341 1.99882,0.87838 0.87643,0.21498 2.46393,0.44649 2.81119,0.4961 0.34727,0.0496 5.20899,0.39687 6.06889,0.39687 0.85989,0 4.31601,-0.0331 5.10976,-0.0992 0.79375,-0.0661 5.17591,-0.16537 6.74688,-0.92605 1.57096,-0.76067 2.06705,-1.17408 2.18281,-1.43867 0.11575,-0.26458 0.21497,-0.89297 0.21497,-0.89297 0,0 0.16537,0.24805 0.0992,0.61185 -0.0661,0.3638 -0.16536,0.8599 -0.26458,1.09141 -0.0992,0.23151 -0.57878,0.63665 -1.15342,0.83096 -0.57464,0.1943 -2.8236,0.80615 -5.54385,1.03766 -2.72024,0.23151 -7.85481,0.339 -9.13639,0.17363 -1.28158,-0.16536 -5.4901,-0.38861 -7.00319,-0.85163 -1.51309,-0.46302 -2.14974,-0.55397 -2.53835,-1.2485 -0.3886,-0.69453 -0.42995,-0.91777 -0.35553,-1.28157 0.0744,-0.36381 0.18396,-0.38021 0.18396,-0.38021 z"
                  id="path324"
                />
                <path
                  style={{
                    opacity: 0.39916,
                    fill: "#c5f3ff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 163.61175,-195.19532 c 0.28064,0.43264 0.23386,0.49111 0.23386,0.49111 0,0 0,0.37417 -0.14031,0.6548 -0.14032,0.28064 -0.49111,0.43265 -0.49111,0.43265 0,0 0.3391,-0.25725 0.37418,-0.5028 0.0351,-0.24556 -0.0234,-0.32741 -0.11693,-0.44434 -0.0935,-0.11693 -0.63143,-0.0468 -0.63143,-0.0468 0,0 -0.17539,-0.0585 0.14032,-0.19878 0.31571,-0.14032 0.46772,-0.18709 0.54957,-0.28063 0.0819,-0.0935 0.0819,-0.10524 0.0819,-0.10524 z"
                  id="path325"
                />
                <path
                  style={{
                    opacity: 0.39916,
                    fill: "url(#linearGradient420)",
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 139.56648,-194.19833 c 0,0 -0.62763,-0.27178 -0.79429,-0.22454 -0.17465,0.0495 -0.13572,0.38287 -0.0432,0.66579 0.0823,0.25182 0.35079,0.49111 0.57296,0.60804 0.22217,0.11693 2.04932,0.65168 2.37415,0.75178 0.33083,0.10195 2.93449,0.44091 3.35544,0.47599 0.42095,0.0351 3.30913,0.22217 3.695,0.24555 0.38587,0.0234 3.44945,-0.0117 4.0341,-0.0117 0.58465,0 3.13373,-0.1637 3.39098,-0.1637 0.25725,0 2.82972,-0.32741 3.32083,-0.42095 0.4911,-0.0935 2.45554,-0.88867 2.6894,-0.98222 0.23386,-0.0935 0.93544,-0.63142 1.0056,-0.81851 0.0702,-0.18709 0.0702,-0.37418 -0.3508,-0.39756 -0.42094,-0.0234 -0.96284,0.31653 -1.47332,0.56127 -0.49769,0.2386 -2.9438,0.57946 -3.15428,0.64962 -0.21048,0.0702 -1.96727,0.19227 -3.06641,0.16889 -1.09915,-0.0234 -3.66335,0.0827 -4.03753,0.0827 -0.37417,0 -2.56562,-0.0234 -3.05673,-0.0234 -0.49111,0 -1.95474,-0.0595 -2.92751,-0.14742 -0.88169,-0.0797 -2.51318,-0.35622 -3.19137,-0.44977 -0.6782,-0.0935 -1.44155,-0.28335 -1.86959,-0.41114 -0.35431,-0.10578 -0.47753,-0.16288 -0.47753,-0.16288 z"
                  id="path334"
                />
                <path
                  style={{
                    fill: "#dcf7ff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 141.22972,-193.58134 c 0,0 -1.11208,-0.27285 -1.30638,-0.27699 -0.26913,-0.006 0.11989,0.27286 0.11989,0.27286 0,0 1.05006,0.30592 1.38079,0.32246 0.33073,0.0165 0.99633,0.091 1.17823,-0.008 0.1819,-0.0992 -0.48783,-0.11162 -0.48783,-0.11162 z"
                  id="path335"
                />
                <path
                  style={{
                    fill: "#1c505e",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 138.41439,-215.05393 0.0207,1.32292 c 0,0 -0.0289,-1.2113 0.0785,-1.37666 0.10749,-0.16537 0.12816,-0.20671 0.42168,-0.36381 0.29353,-0.15709 0.65733,-0.339 0.65733,-0.339 0,0 -1.12448,0.3018 -1.17823,0.75655 z"
                  id="path336"
                />
                <path
                  style={{
                    fill: "#1c505e",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 162.25169,-215.90556 c 0,0 1.06577,0.32169 1.27745,0.58705 0.1628,0.20409 0.11988,0.23151 0.11988,0.23151 l -0.004,0.92604 c 0,0 -5.9e-4,-0.72782 -0.0992,-0.95912 -0.0992,-0.23254 -0.24288,-0.32349 -0.57051,-0.46302 -0.29942,-0.12751 -0.72347,-0.32246 -0.72347,-0.32246 z"
                  id="path337"
                />
                <path
                  style={{
                    fill: "#266c7f",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 140.30752,-218.67495 c 0,0 -2.15445,0.42387 -2.12229,0.94421 0.0322,0.52034 0.23971,2.63971 0.23971,2.63971 0,0 0.0526,-0.20755 0.27771,-0.35371 0.22509,-0.14617 1.68964,-0.5905 1.68964,-0.5905 0,0 -0.83605,-0.0234 -1.07283,0.0731 -0.23679,0.0965 -0.62558,0.24263 -0.6665,0.0614 -0.0409,-0.18125 -0.0994,-1.03776 -0.0994,-1.03776 0,0 -0.26894,-0.61973 -0.0702,-0.83021 0.19879,-0.21047 1.82412,-0.90621 1.82412,-0.90621 z"
                  id="path338"
                />
                <path
                  style={{
                    fill: "#266c7f",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 161.67655,-218.61064 c 0,0 2.18076,0.38003 2.14568,0.93545 -0.0351,0.55542 -0.16955,2.50231 -0.16955,2.50231 0,0 -0.15509,-0.44678 -0.48527,-0.46919 -0.37934,-0.0258 -0.47039,-0.24286 -0.73666,-0.32009 -0.27104,-0.0786 -0.39756,-0.25141 -0.39756,-0.25141 0,0 0.63727,0.0935 0.86529,0.16371 0.22801,0.0702 0.42094,0.1754 0.55542,-0.0175 0.13447,-0.19293 0.0935,-0.37417 0.10523,-0.53788 0.0117,-0.1637 -0.0994,-0.39756 -0.0994,-0.50865 0,-0.11108 -0.0643,-0.51449 -0.28648,-0.64896 -0.22217,-0.13447 -0.47357,-0.29817 -0.6665,-0.44433 -0.19293,-0.14617 -0.46772,-0.19294 -0.67235,-0.30402 -0.20463,-0.11109 -0.54957,-0.14616 -0.54957,-0.14616 z"
                  id="path339"
                />
                <path
                  style={{
                    fill: "url(#linearGradient421)",
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 140.36599,-218.4177 c -0.0936,0.0234 -0.65481,0.0468 -1.05238,0.42095 -0.39756,0.37418 -1.0056,0.8419 -0.56126,1.19269 0.44433,0.35079 0.56126,0.77174 1.12253,0.67819 0.56126,-0.0935 0.56126,-0.28063 1.47332,-0.39756 0.91206,-0.11693 4.81753,-0.58465 6.05699,-0.60804 1.23947,-0.0234 1.56687,0.0234 2.6894,0.0468 1.12254,0.0234 2.31523,-0.0468 2.31523,-0.0468 l 0.0234,-2.0112 c 0,0 -6.03362,-0.25725 -7.71741,0.11693 -1.6838,0.37418 -1.61364,-0.18709 -3.01681,0.23386 -1.40316,0.42095 -1.33301,0.37418 -1.33301,0.37418 z"
                  id="path340"
                />
                <path
                  style={{
                    fill: "#3696b0",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 139.27853,-217.82135 c 0,0 -0.3274,0.3274 -0.0234,0.5028 0.30402,0.17539 0.56127,-0.12863 0.77174,-0.1754 0.21048,-0.0468 1.46163,-0.42095 1.71888,-0.44434 0.25725,-0.0234 1.47332,-0.35079 2.10475,-0.40925 0.63142,-0.0585 -1.63703,-0.23386 -1.95274,-0.12863 -0.31571,0.10524 -1.53179,0.19878 -1.73057,0.28064 -0.19878,0.0819 -0.63142,0.0935 -0.88867,0.37418 z"
                  id="path341"
                />
                <path
                  style={{
                    fill: "url(#linearGradient422)",
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 161.55303,-218.60513 c 0,0 0.39687,0.10748 0.80202,0.3638 0.40514,0.25631 0.39687,0.1819 0.61184,0.37207 0.21498,0.19017 0.29766,0.0165 0.38034,0.32246 0.0827,0.30593 0.0331,0.31419 0.11576,0.50436 0.0827,0.19017 0.0661,0.10749 0.0827,0.339 0.0165,0.23151 0.0661,0.23978 0,0.40514 -0.0661,0.16537 0.0496,0.21498 -0.1819,0.28112 -0.23151,0.0661 -0.19844,0 -0.48783,-0.0496 -0.28939,-0.0496 -0.37207,-0.11575 -0.61185,-0.12402 -0.23978,-0.008 0.0579,0.12402 -0.66972,-0.0827 -0.72761,-0.20671 -1.77767,-0.38034 -2.1084,-0.38861 -0.33073,-0.008 -0.68626,-0.0165 -0.90124,-0.0579 -0.21497,-0.0413 -2.36471,-0.21497 -2.41432,-0.19843 -0.0496,0.0165 0.0661,-2.28204 0.0661,-2.28204 0,0 4.53926,0.30593 5.31648,0.59532 z"
                  id="path342"
                />
                <path
                  style={{
                    fill: "#77c1d5",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.7922
                  }}
                  d="m 162.47168,-217.87398 c 0.15786,0.16955 0.39756,0.43265 0.37418,0.50281 -0.0234,0.0702 0.006,0.15785 -0.15786,0.19878 -0.1637,0.0409 -0.61973,-0.19294 -0.66066,-0.21632 -0.0409,-0.0234 -0.77758,-0.52034 -1.07576,-0.5905 -0.29817,-0.0702 -0.76004,-0.19879 -0.94713,-0.23971 -0.18709,-0.0409 -0.45018,-0.0877 -0.68404,-0.12277 -0.23387,-0.0351 -0.8419,-0.11109 -0.8419,-0.11109 0,0 1.7598,-0.11108 2.42046,0.0643 0.66065,0.1754 0.84189,0.20463 0.97636,0.25725 0.13448,0.0526 0.2631,0.076 0.40341,0.17539 0.14032,0.0994 0.19294,0.0819 0.19294,0.0819 z"
                  id="path343"
                />
                <g
                  id="g407"
                  style={{
                    strokeWidth: 0.998045
                  }}
                >
                  <path
                    style={{
                      opacity: 1,
                      fill: "url(#linearGradient423)",
                      fillOpacity: 0.210177,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 138.51774,-214.77694 c 0,0 0.13053,-1.07791 3.86953,-1.4056 3.67937,-0.32247 3.77846,0.22038 3.77846,0.22038 0,0 -0.64537,21.58877 -1.76531,21.84326 -0.94362,0.21442 -5.21247,-1.11788 -5.55786,-1.43925 -0.43558,-0.40531 -0.32482,-19.21879 -0.32482,-19.21879 z"
                    id="path402"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "url(#linearGradient424)",
                      fillOpacity: 0.60177,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 141.79196,-215.55416 c 0.91475,0 1.53946,0.0106 1.82727,0.19844 0.18645,0.12167 -0.0413,5.82083 -0.10753,6.44922 -0.0661,0.62839 -0.72761,5.42396 -0.76068,5.88698 -0.0331,0.46302 -0.49609,3.80338 -1.55443,3.86953 -1.05833,0.0661 -2.21588,-5.02708 -2.05052,-5.78776 0.16537,-0.76068 -0.0331,-5.68854 -0.0331,-6.08542 0,-0.39687 -0.10744,-3.55886 0.12403,-3.86952 0.15121,-0.20296 1.69273,-0.66147 2.53008,-0.66147 z"
                    id="path403"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "url(#linearGradient425)",
                      fillOpacity: 0.840708,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 139.882,-214.52062 c 0,0 -0.10749,1.87688 -0.008,3.59667 0.0992,1.71979 -0.19844,4.96094 -0.19844,5.45703 0,0.4961 0.26458,3.30729 0.3638,3.47266 0.0992,0.16536 0,-2.61276 0.19844,-3.47266 0.19844,-0.85989 0.16536,-2.87734 0.16536,-3.34036 0,-0.46302 -0.16536,-4.66328 0.1323,-5.35781 0.29765,-0.69453 1.30637,-0.87643 1.23197,-0.92604 -0.2537,-0.16915 -1.8769,0.14884 -1.8769,0.4134 0,0.26459 0.008,0.16537 0.008,0.16537 z"
                    id="path404"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "url(#linearGradient426)",
                      fillOpacity: 0.639381,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 157.08703,-216.50004 c 0,0 5.84652,0.74835 6.08038,1.21607 0.23386,0.46773 0.28064,1.07577 0.28064,1.07577 l -0.20906,16.64096 c -0.0262,0.15086 0.21405,1.17985 -0.67962,2.04452 -1.44812,1.40113 -2.05797,1.4967 -3.64822,0.65481 -1.59026,-0.8419 -0.93545,-6.64165 -0.74836,-8.41899 0.18709,-1.77735 -0.28063,-6.82874 -0.18709,-7.95127 0.0936,-1.12253 -0.88867,-5.26187 -0.88867,-5.26187 z"
                    id="path405"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "url(#linearGradient427)",
                      fillOpacity: 0.769912,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 160.19738,-215.58799 c 0,0 2.17491,-0.0234 2.33861,0.42095 0.1637,0.44434 0.30402,0.86529 0.25725,1.33301 -0.0468,0.46772 0.0935,6.45456 -0.0234,7.2263 -0.11693,0.77174 0.39756,9.19073 0.0702,9.61168 -0.3274,0.42095 -1.77734,1.05238 -1.89427,0.93544 -0.11693,-0.11693 -0.8419,-1.19269 -0.8419,-1.37977 0,-0.18709 0.11693,-7.71741 0.21048,-8.09159 0.0935,-0.37418 0.46772,-4.49013 0.46772,-4.95785 0,-0.46772 -0.58465,-5.09817 -0.58465,-5.09817 z"
                    id="path406"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "#e2f1f7",
                      fillOpacity: 0.769912,
                      stroke: "none",
                      strokeWidth: 0.7922
                    }}
                    d="m 160.42854,-215.02499 c 0.8599,0.0165 1.09141,0.0827 1.19063,0.0992 0.0992,0.0165 0.33073,0.59531 0.31419,0.79375 -0.0165,0.19844 0.0992,13.89062 0.0992,13.89062 0,0 -0.19844,-12.96458 -0.59531,-13.55989 -0.39688,-0.59531 -0.76068,-0.95912 -0.99219,-1.05834 -0.23151,-0.0992 -0.0165,-0.16536 -0.0165,-0.16536 z"
                    id="path407"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g
          id="g521"
          transform="matrix(0.69299595,0,0,0.69299595,492.36032,216.53006)"
        >
          <g
            id="g520"
            style={{
              filter: "url(#filter509)"
            }}
          >
            <path
              style={{
                opacity: 1,
                fill: "url(#linearGradient521)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 5,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1660.7012,550.38281 c 0,0 28.4174,15.76965 34.7081,37.68236 2.9543,10.29098 3.8373,28.07834 3.8373,28.07834 l -1.1288,25.12882 61.4337,-20.03561 -16.9838,-56.39163 -47.1584,-14.46228 z"
              id="path516"
            />
            <path
              style={{
                opacity: 1,
                fill: "url(#linearGradient522)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 5,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1751.5605,701.64453 h -93.0239 v -48.77168 l 46.6308,-35.61493 25.8531,-7.48091 40.1758,31.78672 z"
              id="path517"
            />
            <path
              id="path518"
              style={{
                opacity: 1,
                fill: "url(#linearGradient523)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 4.68221,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1660.7012,550.38281 v 0.0215 a 91.639023,162.07132 0 0 1 90.8593,151.24023 h 85.877 V 550.38281 Z"
            />
            <rect
              style={{
                fill: "url(#linearGradient524)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 4.65853,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              id="rect518"
              width={181.0654}
              height={19.106789}
              x={1658.5366}
              y={531.27557}
            />
            <circle
              style={{
                fill: "url(#radialGradient524)",
                fillOpacity: 0.988636,
                stroke: "none",
                strokeWidth: 5.31183,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              id="circle518"
              cx={1695.4093}
              cy={652.81604}
              r={36.872746}
            />
            <path
              id="path519"
              style={{
                fill: "url(#linearGradient525)",
                fillOpacity: 1,
                strokeWidth: 4.44176,
                strokeOpacity: 0.984314
              }}
              d="m 1731.567,428.96525 h 35.0047 c 8.282,17.33621 61.2039,66.20095 59.9863,102.31032 h -154.9774 c -3.7634,-31.44119 52.4049,-84.8299 59.9864,-102.31032 z"
            />
            <rect
              style={{
                fill: "url(#linearGradient526)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 4.39496,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              id="rect519"
              width={38.479015}
              height={15.913162}
              x={1729.7498}
              y={413.05209}
            />
            <rect
              style={{
                fill: "url(#linearGradient527)",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 3.65806,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              id="rect520"
              width={26.65728}
              height={15.913162}
              x={1735.6606}
              y={397.13892}
            />
          </g>
          <ellipse
            style={{
              fill: "url(#linearGradient528)",
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              filter: "url(#filter478)"
            }}
            id="ellipse520"
            cx={1781.0447}
            cy={457.53217}
            rx={21.495161}
            ry={15.391598}
          />
        </g>
        <g id="g531" transform="rotate(90,1002.5392,390.92202)">
          <path
            id="path528"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g530" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path529"
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
              id="path530"
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
        <g id="g536" transform="translate(292.74512,658.17641)">
          <path
            id="path533"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g535" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path534"
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
              id="path535"
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
        <g id="g539" transform="translate(337.8232,455.74296)">
          <path
            id="path536"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g538" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path537"
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
              id="path538"
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
            opacity: 1,
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1496.0273,371.96865 0,141.97331 a 9.5920603,9.5920603 45 0 0 9.5921,9.59206 h 41.2152"
          id="path539"
          transform="translate(24,30)"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1663.4705,553.535 H 1604.593"
          id="path540"
        />
        <path
          style={{
            opacity: 1,
            fill: "#ffffff",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1498.1036,815.54437 V 700.23072"
          id="path541"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1474.1036,636.47232 v -54.9555 a 10.435485,10.435485 135 0 1 10.4355,-10.43548 h 139.5819"
          id="path542"
          transform="translate(24,30)"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1615.9127,351.10057 h -82.1982"
          id="path543"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1625.6711,321.10057 111.3814,0 a 13.874408,13.874408 45 0 1 13.8744,13.87441 v 174.68463 a 13.874894,13.874894 134.999 0 1 -13.8744,13.8749 l -14.0814,4.9e-4"
          id="path546"
          transform="translate(24,30)"
        />
        <g id="g551" transform="rotate(90,1182.1239,569.43575)">
          <path
            id="path548"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g550" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path549"
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
              id="path550"
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
        <g
          id="g593"
          style={{
            filter: "url(#filter590)"
          }}
          transform="matrix(0.68378067,0,0,0.68378067,-651.87308,627.19543)"
        >
          <path
            id="path592"
            style={{
              opacity: 1,
              fill: "url(#radialGradient593)",
              fillOpacity: 0.840909,
              stroke: "#000000",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1588.1757,-226.88656 a 23.352768,23.358397 0 0 1 23.3527,23.3584 23.352768,23.358397 0 0 1 -23.3527,23.3584 23.352768,23.358397 0 0 1 -23.3528,-23.3584 23.352768,23.358397 0 0 1 23.3528,-23.3584 z"
          />
          <path
            id="path593"
            style={{
              color: "#000000",
              fill: "#000000",
              fillOpacity: 0.984314,
              InkscapeStroke: "none"
            }}
            d="m 1603.6887,-186.07282 a 23.358397,23.352768 48.380661 0 0 0.352,-0.35958 l -0.034,-0.0381 0.5212,-0.46306 a 23.358397,23.352768 48.380661 0 0 3.6358,-4.56793 l -1.4162,1.25828 -2.361,-2.6574 2.6573,-2.36089 1.9498,2.19458 a 23.358397,23.352768 48.380661 0 0 0.4998,-0.9431 l -1.702,-1.91566 2.656,-2.35969 0.3515,0.39569 a 23.358397,23.352768 48.380661 0 0 0.5115,-2.50011 l -0.7796,0.69267 -2.3609,-2.65733 2.6574,-2.36095 0.6901,0.77673 a 23.358397,23.352768 48.380661 0 0 -0.2125,-2.53871 l -0.3942,0.35022 -2.361,-2.6574 1.9128,-1.69936 a 23.358397,23.352768 48.380661 0 0 -0.3853,-0.99532 l -2.1916,1.94711 -2.361,-2.6574 2.6574,-2.36096 1.2505,1.40753 a 23.358397,23.352768 48.380661 0 0 -3.1181,-5.01528 l -0.41,-0.4614 0.034,-0.0298 a 23.358397,23.352768 48.380661 0 0 -0.3058,-0.3971 23.358397,23.352768 48.380661 0 0 -0.3584,-0.35048 l -0.033,0.0298 -0.41,-0.4614 a 23.358397,23.352768 48.380661 0 0 -4.6119,-3.68543 l 1.2492,1.40604 -2.6574,2.36095 -2.361,-2.6574 2.1916,-1.9471 a 23.358397,23.352768 48.380661 0 0 -0.943,-0.49984 l -1.9128,1.69937 -2.3596,-2.65591 0.3942,-0.35022 a 23.358397,23.352768 48.380661 0 0 -2.4961,-0.50998 l 0.6901,0.77681 -2.6574,2.36095 -2.3609,-2.6574 0.7796,-0.69267 a 23.358397,23.352768 48.380661 0 0 -2.5429,0.21359 l 0.3515,0.39569 -2.6559,2.35969 -1.702,-1.91566 a 23.358397,23.352768 48.380661 0 0 -0.9953,0.38534 l 1.9497,2.1945 -2.6573,2.36089 -2.361,-2.6574 1.4206,-1.26214 a 23.358397,23.352768 48.380661 0 0 -4.9685,3.07663 l -0.5213,0.46307 -0.034,-0.0381 a 23.358397,23.352768 48.380661 0 0 -0.3333,0.25728 l -0.2452,0.21791 a 23.358397,23.352768 48.380661 0 0 -0.1817,0.17479 l 0.049,0.0553 -1.0674,0.94831 a 23.358397,23.352768 48.380661 0 0 -3.1452,4.13203 l 1.4718,-1.30764 2.361,2.65741 -2.6574,2.36095 -1.986,-2.23539 a 23.358397,23.352768 48.380661 0 0 -0.4661,0.981 l 1.7045,1.91857 -2.6574,2.36095 -0.3801,-0.42783 a 23.358397,23.352768 48.380661 0 0 -0.4844,2.53359 l 0.7811,-0.694 2.361,2.6574 -2.6574,2.36095 -0.694,-0.78114 a 23.358397,23.352768 48.380661 0 0 0.1857,2.57035 l 0.4249,-0.37745 2.3596,2.6559 -1.9142,1.70063 a 23.358397,23.352768 48.380661 0 0 0.3473,1.02912 l 2.2311,-1.98217 2.3609,2.6574 -2.6574,2.36095 -1.2985,-1.46158 a 23.358397,23.352768 48.380661 0 0 2.6706,4.51157 l 0.9055,1.01917 -0.051,0.0454 a 23.358397,23.352768 48.380661 0 0 0.3219,0.38289 23.358397,23.352768 48.380661 0 0 0.3423,0.36468 l 0.051,-0.0454 0.9067,1.02059 a 23.358397,23.352768 48.380661 0 0 4.1658,3.18321 l -1.2998,-1.463 2.6574,-2.36096 2.3609,2.6574 -2.231,1.98218 a 23.358397,23.352768 48.380661 0 0 0.9796,0.46735 l 1.9156,-1.70195 2.361,2.6574 -0.4249,0.37745 a 23.358397,23.352768 48.380661 0 0 2.5293,0.48559 l -0.6927,-0.77965 2.6574,-2.36095 2.3609,2.65732 -0.7811,0.694 a 23.358397,23.352768 48.380661 0 0 2.5717,-0.18418 l -0.3788,-0.42642 2.6574,-2.36096 1.7046,1.91865 a 23.358397,23.352768 48.380661 0 0 1.029,-0.34735 l -1.9861,-2.23547 2.6574,-2.36096 2.361,2.6574 -1.4718,1.30764 a 23.358397,23.352768 48.380661 0 0 4.4736,-2.63689 l 1.0674,-0.94831 0.049,0.0553 a 23.358397,23.352768 48.380661 0 0 0.3803,-0.32179 z m 2.3114,-3.50624 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m 7.1883,-12.47905 -2.656,2.35969 -2.3609,-2.65733 2.656,-2.35969 z m -3.4035,3.02387 -2.6574,2.36089 -2.3609,-2.65733 2.6574,-2.36089 z m -3.4049,3.02507 -2.6574,2.36095 -2.3609,-2.65732 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.65733 2.6574,-2.36095 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.65733 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.65733 2.6574,-2.36096 z m 17.4033,-21.55438 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6559,2.35969 -2.361,-2.6574 2.656,-2.35969 z m -3.4035,3.02387 -2.6573,2.36089 -2.361,-2.6574 2.6573,-2.36089 z m -3.4049,3.02507 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36096 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.65741 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m 20.8082,-24.57958 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.656,2.3597 -2.3609,-2.65741 2.656,-2.35969 z m -3.4035,3.02387 -2.6574,2.36089 -2.3609,-2.6574 2.6573,-2.36089 z m -3.4049,3.02507 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.65741 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.4049,3.02514 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m 24.2131,-27.60472 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.656,2.35969 -2.361,-2.6574 2.656,-2.35969 z m -3.4036,3.02387 -2.6573,2.36089 -2.361,-2.6574 2.6574,-2.36089 z m -3.4049,3.02507 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.4049,3.02514 -2.6575,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m 27.6181,-30.62986 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6559,2.3597 -2.361,-2.65741 2.656,-2.35969 z m -3.4035,3.02387 -2.6573,2.36089 -2.361,-2.6574 2.6573,-2.36089 z m -3.4049,3.02507 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.65741 2.6574,-2.36095 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m 24.2132,-27.60472 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.656,2.35969 -2.3609,-2.6574 2.656,-2.35969 z m -3.4035,3.02387 -2.6574,2.36089 -2.3609,-2.6574 2.6573,-2.36089 z m -3.4049,3.02507 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36095 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m 20.8082,-24.57958 -2.6574,2.36095 -2.3597,-2.6559 2.6574,-2.36096 z m -3.405,3.02513 -2.656,2.3597 -2.3596,-2.65591 2.656,-2.35969 z m -3.4036,3.02387 -2.6573,2.36089 -2.3596,-2.6559 2.6573,-2.36089 z m -3.4049,3.02507 -2.6574,2.36096 -2.3596,-2.65591 2.6574,-2.36095 z m -3.405,3.02514 -2.6574,2.36095 -2.3596,-2.6559 2.6574,-2.36096 z m -3.4049,3.02513 -2.6574,2.36096 -2.3597,-2.65591 2.6574,-2.36096 z m -3.405,3.02513 -2.6574,2.36096 -2.3596,-2.65591 2.6574,-2.36095 z m -3.405,3.02514 -2.6574,2.36095 -2.3596,-2.6559 2.6574,-2.36096 z m 17.4046,-21.55296 -2.656,2.3597 -2.361,-2.65741 2.656,-2.35969 z m -3.4036,3.02387 -2.6573,2.36089 -2.361,-2.6574 2.6574,-2.36089 z m -3.4049,3.02507 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z m -3.405,3.02514 -2.6574,2.36095 -2.3609,-2.6574 2.6574,-2.36096 z m -3.4049,3.02513 -2.6574,2.36096 -2.361,-2.65741 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.361,-2.6574 2.6574,-2.36096 z m 7.1898,-12.48037 -2.6574,2.36095 -2.361,-2.6574 2.6574,-2.36095 z m -3.405,3.02513 -2.6574,2.36096 -2.3609,-2.6574 2.6574,-2.36096 z"
          />
          <circle
            style={{
              opacity: 1,
              mixBlendMode: "normal",
              fill: "#ffffff",
              fillOpacity: 0.840909,
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeOpacity: 0.984314,
              filter: "url(#filter585)"
            }}
            id="circle593"
            cx={1573.7598}
            cy={-212.9257}
            r={5.4417515}
          />
        </g>
        <path
          style={{
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#000000",
            strokeWidth: 0.8386,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 450.05889,488.02681 h 16.5"
          id="path594"
        />
        <path
          style={{
            fill: "none",
            fillOpacity: 0.840909,
            stroke: "#000000",
            strokeWidth: 0.846348,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 400.9744,488.02681 h 16.80628"
          id="path595"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 399.9744,466.73068 v 42.59226"
          id="path596"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 467.55889,466.73068 v 42.59226"
          id="path598"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 467.55889,488.02681 h 49.23444"
          id="path599"
        />
        <rect
          style={{
            opacity: 1,
            fill: "#808080",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 3.75482,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect599"
          width={6.0781875}
          height={27.800238}
          x={1498.1036}
          y={150.3783}
        />
        <rect
          style={{
            opacity: 1,
            fill: "#808080",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 0.960294,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          id="rect600"
          width={1.5544983}
          height={7.1099195}
          x={1500.3655}
          y={178.17854}
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#00aad4",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1181,206.55662 v 36.88676"
          id="path600"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b0010",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1231.5634,164.14731 v 36.88676"
          id="path601"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#00aad4",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1280.6953,836.55662 v 36.88676"
          id="path602"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b0010",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1313.9997,878.48519 v 36.88676"
          id="path603"
        />
        <g id="g612" transform="translate(24,30)">
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 2,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 1674.2343,53.830386 V 142.9955"
            id="path223"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,104.42702 11.7482,-5.790259"
            id="path224"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,91.951207 11.7482,-5.790263"
            id="path225"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,79.475389 11.7482,-5.790262"
            id="path226"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,66.999572 11.7482,-5.790263"
            id="path227"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,141.8545 11.7482,-5.79028"
            id="path228"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,129.37866 11.7482,-5.79027"
            id="path229"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,116.90284 11.7482,-5.79026"
            id="path230"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,98.189115 11.7482,-5.790263"
            id="path604"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,85.713298 11.7482,-5.790263"
            id="path605"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,73.23748 11.7482,-5.790263"
            id="path606"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="M 1674.7291,60.761663 1686.4773,54.9714"
            id="path607"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,135.61658 11.7482,-5.79028"
            id="path608"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,123.14075 11.7482,-5.79026"
            id="path609"
          />
          <path
            style={{
              fill: "none",
              stroke: "#2b0010",
              strokeWidth: 0.809648,
              strokeDasharray: "none",
              strokeOpacity: 0.984314
            }}
            d="m 1674.7291,110.66493 11.7482,-5.79026"
            id="path610"
          />
        </g>
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b0010",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1321.9363,985.5184 h 74.835 v 4.8642 h -75.3658 v -4.8642 z"
          id="path611"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b0010",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1321.9363,990.3826 h 74.835 v 4.8642 h -75.3658 v -4.8642 z"
          id="path612"
        />
        <g id="g664" transform="rotate(90,1422.3348,531.55103)">
          <g id="g665" transform="matrix(1,0,0,-1,-31.69918,196.16797)">
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="M 1674.2343,53.830386 V 142.9955"
              id="path613"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,104.42702 11.7482,-5.790259"
              id="path614"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,91.951207 11.7482,-5.790263"
              id="path615"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,79.475389 11.7482,-5.790262"
              id="path616"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,66.999572 11.7482,-5.790263"
              id="path617"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,141.8545 11.7482,-5.79028"
              id="path618"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,129.37866 11.7482,-5.79027"
              id="path619"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,116.90284 11.7482,-5.79026"
              id="path620"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,98.189115 11.7482,-5.790263"
              id="path621"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,85.713298 11.7482,-5.790263"
              id="path622"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,73.23748 11.7482,-5.790263"
              id="path660"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="M 1674.7291,60.761663 1686.4773,54.9714"
              id="path661"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,135.61658 11.7482,-5.79028"
              id="path662"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,123.14075 11.7482,-5.79026"
              id="path663"
            />
            <path
              style={{
                fill: "none",
                stroke: "#2b0010",
                strokeWidth: 0.809648,
                strokeDasharray: "none",
                strokeOpacity: 0.984314
              }}
              d="m 1674.7291,110.66493 11.7482,-5.79026"
              id="path664"
            />
          </g>
        </g>
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b0010",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1856.202,699.15975 -0.071,51.5916"
          id="path665"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,257.62207 h 34.14056"
          id="path666"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,338.10071 h 34.14056"
          id="path667"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,418.57939 h 34.14056"
          id="path668"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,459.64206 h 34.14056"
          id="path669"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,539.62038 h 34.14056"
          id="path670"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,619.59873 h 34.14056"
          id="path671"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 322.12668,699.57706 h 34.14056"
          id="path672"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 953.7716,891.56261 V 857.42205"
          id="path673"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="M 1214.7787,891.56261 V 857.42205"
          id="path674"
        />
        <path
          id="path682-0"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 1130.1856,182.06811 c 0,3.8645 3.0733,7.1404 6.6572,7.1404 v -1.0783 c -3.0435,0 -5.6572,-2.7804 -5.6572,-6.0621 0,-3.2817 2.4565,-5.9305 5.5,-5.9305 v -1.0783 c -3.584,0 -6.5,3.1443 -6.5,7.0088 z"
        />
        <path
          style={{
            fill: "#bcbcbc",
            fillOpacity: 1,
            stroke: "#2b0011",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1137.0092,188.25751 v 34.14056"
          id="path677"
        />
        <path
          id="path682-7"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 1774.9269,439.31729 c -3.8644,0 -7.1404,3.07331 -7.1404,6.65724 h 1.0783 c 0,-3.04349 2.7804,-5.65724 6.0621,-5.65724 3.2817,0 5.9306,2.45651 5.9306,5.5 h 1.0782 c 0,-3.58393 -3.1443,-6.5 -7.0088,-6.5 z"
        />
        <path
          id="path681"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.18881,248.62207 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path683"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,329.10073 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path684"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,409.57939 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path685"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,450.64205 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path686"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,530.6824 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path687"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,610.59869 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path688"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 316.17834,690.57706 c -3.86448,0 -7.14041,3.07331 -7.14041,6.65724 h 1.07828 c 0,-3.04349 2.7804,-5.65724 6.06213,-5.65724 3.28171,0 5.93052,2.45651 5.93052,5.5 h 1.07829 c 0,-3.58393 -3.14436,-6.5 -7.00881,-6.5 z"
        />
        <path
          id="path690"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 945.07558,897.51952 c 0,3.86448 3.07331,7.14041 6.65724,7.14041 v -1.07828 c -3.04349,0 -5.65724,-2.7804 -5.65724,-6.06213 0,-3.28171 2.45651,-5.93052 5.5,-5.93052 v -1.07829 c -3.58393,0 -6.5,3.14436 -6.5,7.00881 z"
        />
        <path
          id="path691"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 1205.8617,897.47533 c 0,3.86448 3.0733,7.14041 6.6572,7.14041 v -1.07828 c -3.0435,0 -5.6572,-2.7804 -5.6572,-6.06213 0,-3.28171 2.4565,-5.93052 5.5,-5.93052 v -1.07829 c -3.584,0 -6.5,3.14436 -6.5,7.00881 z"
        />
        <path
          style={{
            opacity: 1,
            fill: "#2b0010",
            fillOpacity: 0.984314,
            stroke: "#000000",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeOpacity: 0.984314
          }}
          d="m 1768.9269,440.31729 h 12"
          id="path692"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1680.4028,461.74572 0,-31.24842 a 13.317118,13.317118 135.03188 0 1 13.3319,-13.3171 l 51.1922,0.057"
          id="path696"
          transform="translate(24,30)"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1756.9269,416.31729 h 64.6078 a 10.599507,10.599507 44.990716 0 1 10.5995,10.59607 l 0.068,208.48799"
          id="path697"
          transform="translate(24,30)"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1340.1873,652.88708 49.9508,3e-5 a 8.2429858,8.2429858 135.00001 0 0 8.243,-8.24299 V 463.3682"
          id="path698"
          transform="translate(24,30)"
        />
        <path
          id="path700"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 1358.2497,674.06508 c -3.8645,0 -7.1404,3.0733 -7.1404,6.6572 h 1.0783 c 0,-3.0435 2.7804,-5.6572 6.0621,-5.6572 3.2817,0 5.9305,2.4565 5.9305,5.5 h 1.0783 c 0,-3.584 -3.1444,-6.5 -7.0088,-6.5 z"
        />
        <path
          style={{
            opacity: 1,
            fill: "none",
            fillOpacity: 0.984314,
            stroke: "#2b000f",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          d="m 1340.1873,720.75134 h 85.5185 a 12.612409,12.612409 135 0 0 12.6124,-12.61241 V 463.8125"
          id="path701"
          transform="translate(24,30)"
        />
        <path
          id="path702"
          style={{
            color: "#000000",
            fill: "#2b0010",
            fillOpacity: 0.984314,
            strokeWidth: 1.0384,
            InkscapeStroke: "none"
          }}
          d="m 1358.2497,742.52778 c -3.8645,0 -7.1404,3.0733 -7.1404,6.6572 h 1.0783 c 0,-3.0435 2.7804,-5.6572 6.0621,-5.6572 3.2817,0 5.9305,2.4565 5.9305,5.5 h 1.0783 c 0,-3.584 -3.1444,-6.5 -7.0088,-6.5 z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={392.18958}
          y={45.777203}
          id="text702"
        >
          <tspan id="tspan702" x={392.18958} y={45.777203}>
            {"VOID 6P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={489.74017}
          y={45.777203}
          id="text704"
        >
          <tspan id="tspan704" x={489.74017} y={45.777203}>
            {"VOID 5P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={585.15863}
          y={45.777203}
          id="text705"
        >
          <tspan id="tspan705" x={585.15863} y={45.777203}>
            {"VOID 4P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={684.87286}
          y={45.777203}
          id="text706"
        >
          <tspan id="tspan706" x={684.87286} y={45.777203}>
            {"VOID 3P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={780.83203}
          y={45.777203}
          id="text707"
        >
          <tspan id="tspan707" x={780.83203} y={45.777203}>
            {"VOID 2P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={879.30133}
          y={45.777203}
          id="text708"
        >
          <tspan id="tspan708" x={879.30133} y={45.777203}>
            {"VOID 1P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={979.01562}
          y={25.777203}
          id="text709"
        >
          <tspan id="tspan709" x={979.01562} y={25.777203}>
            {"LOWER DECK"}
          </tspan>
          <tspan x={979.01562} y={45.777203} id="tspan710">
            {"STORE P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1107.8888}
          y={45.777203}
          id="text711"
        >
          <tspan id="tspan711" x={1107.8888} y={45.777203}>
            {"JACK HOUSE 1"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={164.3927}
          y={221.60373}
          id="text712"
        >
          <tspan id="tspan712" x={164.3927} y={221.60373}>
            {"JACK HOUSE 3"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={163.12708}
          y={301.15826}
          id="text714"
        >
          <tspan id="tspan714" x={163.12708} y={301.15826}>
            {"RUDDER"}
          </tspan>
          <tspan x={163.12708} y={321.15826} id="tspan715">
            {"PRO.RM P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={163.66614}
          y={380.18484}
          id="text717"
        >
          <tspan x={163.66614} y={380.18484} id="tspan717">
            {"ENGIN ROOM"}
          </tspan>
          <tspan x={163.66614} y={400.18484} id="tspan718">
            {"AFT P"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={164.0802}
          y={466.43845}
          id="text720"
        >
          <tspan x={164.0802} y={466.43845} id="tspan719">
            {"ENGIN ROOM"}
          </tspan>
          <tspan x={164.0802} y={486.43845} id="tspan720">
            {"FORWARD MIDDLE"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={164.11145}
          y={546.12933}
          id="text722"
        >
          <tspan x={164.11145} y={546.12933} id="tspan721">
            {"ENGIN ROOM"}
          </tspan>
          <tspan x={164.11145} y={566.12933} id="tspan722">
            {"AFT S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={163.12708}
          y={633.81647}
          id="text724"
        >
          <tspan x={163.12708} y={633.81647} id="tspan725">
            {"RUDDER"}
          </tspan>
          <tspan x={163.12708} y={653.81647} id="tspan726">
            {"PRO.RM S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={163.96301}
          y={720.50916}
          id="text727"
        >
          <tspan id="tspan727" x={163.96301} y={720.50916}>
            {"JACK HOUSE 4"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={611.23694}
          y={300.37933}
          id="text728"
        >
          <tspan id="tspan728" x={611.23694} y={300.37933}>
            {"FROM BALLAST SYS."}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={767.11194}
          y={340.35852}
          id="text729"
        >
          <tspan
            id="tspan729"
            x={767.11194}
            y={340.35852}
            style={{
              textAlign: "start",
              textAnchor: "start"
            }}
          >
            {"BILGE&BALLAST PUMP"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1056.6614}
          y={432.74222}
          id="text730"
        >
          <tspan id="tspan730" x={1056.6614} y={432.74222}>
            {"TO BALLAST"}
          </tspan>
          <tspan x={1056.6614} y={452.74222} id="tspan731">
            {"SYS."}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "end",
            textAnchor: "end",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={734.45569}
          y={512.06091}
          id="text732"
        >
          <tspan id="tspan732" x={734.45569} y={512.06091}>
            {"ER EMERGENCY SUCTION"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={815.51794}
          y={576.89777}
          id="text733"
        >
          <tspan id="tspan733" x={815.51794} y={576.89777}>
            {"BILGE PUMP"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={815.51794}
          y={771.67596}
          id="text734"
        >
          <tspan id="tspan734" x={815.51794} y={771.67596}>
            {"DAILY BILGE PUMP"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={362.05057}
          y={1048.1733}
          id="text735"
        >
          <tspan id="tspan735" x={362.05057} y={1048.1733}>
            {"VOID 6S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={454.23438}
          y={1048.1733}
          id="text736"
        >
          <tspan id="tspan736" x={454.23438} y={1048.1733}>
            {"VOID 5S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={548.80994}
          y={1048.1733}
          id="text737"
        >
          <tspan id="tspan737" x={548.80994} y={1048.1733}>
            {"VOID 3S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={647.45135}
          y={1048.1733}
          id="text738"
        >
          <tspan id="tspan738" x={647.45135} y={1048.1733}>
            {"VOID 2S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={742.55719}
          y={1048.1733}
          id="text739"
        >
          <tspan id="tspan739" x={742.55719} y={1048.1733}>
            {"VOID 1S"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={844.91089}
          y={1048.1421}
          id="text740"
        >
          <tspan id="tspan740" x={844.91089} y={1048.1421}>
            {"CASCADE RM"}
          </tspan>
          <tspan x={844.91089} y={1068.1421} id="tspan741">
            {"LOWER DECK"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={990.14081}
          y={1048.1421}
          id="text743"
        >
          <tspan x={990.14081} y={1048.1421} id="tspan743">
            {"JACK"}
          </tspan>
          <tspan x={990.14081} y={1068.1421} id="tspan744">
            {"HOSE 2"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1109.8029}
          y={1048.1733}
          id="text746"
        >
          <tspan x={1109.8029} y={1048.1733} id="tspan746">
            {"ECHO AND"}
          </tspan>
          <tspan x={1109.8029} y={1068.1733} id="tspan747">
            {"SPL TK"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1250.5529}
          y={1048.4546}
          id="text749"
        >
          <tspan x={1250.5529} y={1048.4546} id="tspan749">
            {"B/T ROOM"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1500.5022}
          y={200.40343}
          id="text750"
        >
          <tspan id="tspan750" x={1500.5022} y={200.40343}>
            {"NC"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1492.1002}
          y={336.54425}
          id="text751"
        >
          <tspan id="tspan751" x={1492.1002} y={336.54425}>
            {"BILGE"}
          </tspan>
          <tspan x={1492.1002} y={356.54425} id="tspan752">
            {"WATER TK"}
          </tspan>
        </text>
        <g id="g757" transform="translate(-142.73328,407.45601)">
          <g
            id="g756"
            transform="matrix(1.1752562,0,0,1.1752562,-277.03049,4.523287)"
            className={
              typeof bilge_water_tk?.item1?.value === "number"
                ? bilge_water_tk?.item1?.value
                  ? "fill-success"
                  : "fill-destructive"
                : "fill-primary/50"
            }
          >
            <circle
              style={{
                opacity: 1,
                // fill: "#55d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.5,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="circle755"
              cx={1603.5414}
              cy={-25.809397}
              r={3.8069806}
            />
            <path
              id="path755"
              style={{
                opacity: 1,
                // fill: "#54d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.677033,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 1603.5417,-30.964658 a 5.1549029,5.1549029 0 0 0 -5.1551,5.156788 5.1549029,5.1549029 0 0 0 5.1551,5.153464 5.1549029,5.1549029 0 0 0 5.1535,-5.153464 5.1549029,5.1549029 0 0 0 -5.1535,-5.156788 z m 0,0.598274 a 4.5582814,4.5582814 0 0 1 4.5585,4.558514 4.5582814,4.5582814 0 0 1 -4.5585,4.55519 4.5582814,4.5582814 0 0 1 -4.5585,-4.55519 4.5582814,4.5582814 0 0 1 4.5585,-4.558514 z"
            />
          </g>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: 16,
              textAlign: "start",
              textAnchor: "start",
              opacity: 1,
              fill: "#220b28",
              fillOpacity: 0.984314,
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            x={1617.4111}
            y={-19.99299}
            id="text756"
          >
            <tspan id="tspan756" x={1617.4111} y={-19.99299}>
              {bilge_water_tk?.item1?.title ?? "LAH"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1498.0084}
          y={847.70935}
          id="text758"
        >
          <tspan id="tspan757" x={1498.0084} y={847.70935}>
            {"DIRTY"}
          </tspan>
          <tspan x={1498.0084} y={867.70935} id="tspan758">
            {"OIL TANK"}
          </tspan>
        </text>
        <g id="g761" transform="translate(-134.92735,915.65588)">
          <g
            id="g760"
            transform="matrix(1.1752562,0,0,1.1752562,-277.03049,4.523287)"
            className={
              typeof dirty_oil_tank?.item1?.value === "number"
                ? dirty_oil_tank?.item1?.value
                  ? "fill-success"
                  : "fill-destructive"
                : "fill-primary/50"
            }
          >
            <circle
              style={{
                opacity: 1,
                // fill: "#55d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.5,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="circle759"
              cx={1603.5414}
              cy={-25.809397}
              r={3.8069806}
            />
            <path
              id="path759"
              style={{
                opacity: 1,
                // fill: "#54d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.677033,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 1603.5407,-30.965212 a 5.1549029,5.1549029 0 0 0 -5.1535,5.156788 5.1549029,5.1549029 0 0 0 5.1535,5.153464 5.1549029,5.1549029 0 0 0 5.1551,-5.153464 5.1549029,5.1549029 0 0 0 -5.1551,-5.156788 z m 0,0.598274 a 4.5582814,4.5582814 0 0 1 4.5585,4.558514 4.5582814,4.5582814 0 0 1 -4.5585,4.556852 4.5582814,4.5582814 0 0 1 -4.5585,-4.556852 4.5582814,4.5582814 0 0 1 4.5585,-4.558514 z"
            />
          </g>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: 16,
              textAlign: "start",
              textAnchor: "start",
              opacity: 1,
              fill: "#220b28",
              fillOpacity: 0.984314,
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            x={1617.4111}
            y={-19.99299}
            id="text760"
          >
            <tspan id="tspan760" x={1617.4111} y={-19.99299}>
              {dirty_oil_tank?.item1?.title ?? "LAH"}
            </tspan>
          </text>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1766.9269}
          y={134.27843}
          id="text761"
        >
          <tspan id="tspan761" x={1766.9269} y={134.27843}>
            {"OVERBOARD"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            textAlign: "center",
            textAnchor: "middle",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1856.2897}
          y={782.76587}
          id="text762"
        >
          <tspan id="tspan762" x={1856.2897} y={782.76587}>
            {"OVERBOARD"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontSize: 16,
            fontWeight: 600,
            textAlign: "start",
            textAnchor: "start",
            opacity: 1,
            fill: "#220b28",
            fillOpacity: 0.984314,
            stroke: "none",
            strokeWidth: 5,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          x={1552.7937}
          y={740.95447}
          id="text763"
        >
          <tspan id="tspan763" x={1552.7937} y={740.95447}>
            {"OILY WATER SEPARATOR"}
          </tspan>
        </text>
        <g id="g764" transform="translate(-46.331157,783.75588)">
          <g
            id="g763"
            transform="matrix(1.1752562,0,0,1.1752562,-277.03049,4.523287)"
          >
            <path
              id="circle763"
              className={
                typeof oily_water_separator?.item1?.value === "number"
                  ? oily_water_separator?.item1?.value
                    ? "fill-success"
                    : "fill-destructive"
                  : "fill-primary/50"
              }
              style={{
                opacity: 1,
                // fill: "#55d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.5,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 1603.5403,-30.965545 a 5.1549029,5.1549029 0 0 0 -5.1535,5.156788 5.1549029,5.1549029 0 0 0 5.1535,5.155126 5.1549029,5.1549029 0 0 0 5.1551,-5.155126 5.1549029,5.1549029 0 0 0 -5.1551,-5.156788 z m 0,0.598274 a 4.5582814,4.5582814 0 0 1 4.5585,4.558514 4.5582814,4.5582814 0 0 1 -4.5585,4.556852 4.5582814,4.5582814 0 0 1 -4.5586,-4.556852 4.5582814,4.5582814 0 0 1 4.5586,-4.558514 z m 0,0.751166 a 3.8069806,3.8069806 0 0 0 -3.8073,3.807348 3.8069806,3.8069806 0 0 0 3.8073,3.805686 3.8069806,3.8069806 0 0 0 3.8057,-3.805686 3.8069806,3.8069806 0 0 0 -3.8057,-3.807348 z"
            />
          </g>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: 16,
              textAlign: "start",
              textAnchor: "start",
              opacity: 1,
              fill: "#220b28",
              fillOpacity: 0.984314,
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            x={1617.4111}
            y={-19.99299}
            id="text764"
          >
            <tspan
              className="uppercase"
              id="tspan764"
              x={1617.4111}
              y={-19.99299}
            >
              {oily_water_separator?.item1?.title ?? "RUNNING"}
            </tspan>
          </text>
        </g>
        <g id="g766" transform="translate(-46.331157,802.81763)">
          <g
            id="g765"
            transform="matrix(1.1752562,0,0,1.1752562,-277.03049,4.523287)"
          >
            <path
              id="circle764"
              className={
                typeof oily_water_separator?.item2?.value === "number"
                  ? oily_water_separator?.item2?.value
                    ? "fill-success"
                    : "fill-destructive"
                  : "fill-primary/50"
              }
              style={{
                opacity: 1,
                // fill: "#55d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.5,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 1603.5403,-30.964906 a 5.1549029,5.1549029 0 0 0 -5.1535,5.156787 5.1549029,5.1549029 0 0 0 5.1535,5.153465 5.1549029,5.1549029 0 0 0 5.1551,-5.153465 5.1549029,5.1549029 0 0 0 -5.1551,-5.156787 z m 0,0.598273 a 4.5582814,4.5582814 0 0 1 4.5585,4.558514 4.5582814,4.5582814 0 0 1 -4.5585,4.556853 4.5582814,4.5582814 0 0 1 -4.5586,-4.556853 4.5582814,4.5582814 0 0 1 4.5586,-4.558514 z m 0,0.749505 a 3.8069806,3.8069806 0 0 0 -3.8073,3.807348 3.8069806,3.8069806 0 0 0 3.8073,3.807348 3.8069806,3.8069806 0 0 0 3.8057,-3.807348 3.8069806,3.8069806 0 0 0 -3.8057,-3.807348 z"
            />
          </g>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: 16,
              textAlign: "start",
              textAnchor: "start",
              opacity: 1,
              fill: "#220b28",
              fillOpacity: 0.984314,
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            x={1617.4111}
            y={-19.99299}
            id="text765"
          >
            <tspan
              className="uppercase"
              id="tspan765"
              x={1617.4111}
              y={-19.99299}
            >
              {oily_water_separator?.item2?.title ?? "COMMON FAULT ALARM"}
            </tspan>
          </text>
        </g>
        <g id="g768" transform="translate(-46.331157,823.46417)">
          <g
            id="g767"
            transform="matrix(1.1752562,0,0,1.1752562,-277.03049,4.523287)"
          >
            <path
              id="circle766"
              className={
                typeof oily_water_separator?.item3?.value === "number"
                  ? oily_water_separator?.item3?.value
                    ? "fill-success"
                    : "fill-destructive"
                  : "fill-primary/50"
              }
              style={{
                opacity: 1,
                // fill: "#55d400",
                fillOpacity: 0.984314,
                stroke: "none",
                strokeWidth: 0.5,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 1603.5403,-30.964954 a 5.1549029,5.1549029 0 0 0 -5.1535,5.156788 5.1549029,5.1549029 0 0 0 5.1535,5.153464 5.1549029,5.1549029 0 0 0 5.1551,-5.153464 5.1549029,5.1549029 0 0 0 -5.1551,-5.156788 z m 0,0.598274 a 4.5582814,4.5582814 0 0 1 4.5585,4.558514 4.5582814,4.5582814 0 0 1 -4.5585,4.556852 4.5582814,4.5582814 0 0 1 -4.5586,-4.556852 4.5582814,4.5582814 0 0 1 4.5586,-4.558514 z m 0,0.749504 a 3.8069806,3.8069806 0 0 0 -3.8073,3.807348 3.8069806,3.8069806 0 0 0 3.8073,3.807348 3.8069806,3.8069806 0 0 0 3.8057,-3.807348 3.8069806,3.8069806 0 0 0 -3.8057,-3.807348 z"
            />
          </g>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: 16,
              textAlign: "start",
              textAnchor: "start",
              opacity: 1,
              fill: "#220b28",
              fillOpacity: 0.984314,
              stroke: "none",
              strokeWidth: 5,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            x={1617.4111}
            y={-19.99299}
            id="text767"
          >
            <tspan id="tspan767" x={1617.4111} y={-19.99299}>
              {oily_water_separator?.item3?.title ??
                "HIGH OIL CONCENTRATION 15 PPM"}
            </tspan>
          </text>
        </g>
        <path
          id="path770"
          style={{
            opacity: 1,
            fill: "url(#linearGradient771)",
            strokeWidth: 0.0996358
          }}
          d="m 1144.8664,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8573,4.398001 z"
        />
        <path
          id="path771"
          style={{
            opacity: 1,
            fill: "url(#linearGradient772)",
            strokeWidth: 0.0996358
          }}
          d="m 1081.4505,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path772"
          style={{
            opacity: 1,
            fill: "url(#linearGradient773)",
            strokeWidth: 0.0996358
          }}
          d="m 984.23615,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path773"
          style={{
            opacity: 1,
            fill: "url(#linearGradient774)",
            strokeWidth: 0.0996358
          }}
          d="m 886.76583,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path774"
          style={{
            opacity: 1,
            fill: "url(#linearGradient775)",
            strokeWidth: 0.0996358
          }}
          d="m 789.80764,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path775"
          style={{
            opacity: 1,
            fill: "url(#linearGradient776)",
            strokeWidth: 0.0996358
          }}
          d="m 692.59342,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path776"
          style={{
            opacity: 1,
            fill: "url(#linearGradient777)",
            strokeWidth: 0.0996358
          }}
          d="m 595.37918,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path777"
          style={{
            opacity: 1,
            fill: "url(#linearGradient778)",
            strokeWidth: 0.0996358
          }}
          d="m 498.16498,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path778"
          style={{
            opacity: 1,
            fill: "url(#linearGradient779)",
            strokeWidth: 0.0996358
          }}
          d="m 400.95079,86.61511 -4.0236,7.904095 -3.7966,7.790695 -3.796,-7.879515 -4.0983,-7.766084 7.8572,4.398001 z"
        />
        <path
          id="path779"
          style={{
            opacity: 1,
            fill: "url(#linearGradient780)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,210.43008 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path780"
          style={{
            opacity: 1,
            fill: "url(#linearGradient781)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,250.02086 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path781"
          style={{
            opacity: 1,
            fill: "url(#linearGradient783)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,290.90874 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path782"
          style={{
            opacity: 1,
            fill: "url(#linearGradient782)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,330.49952 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path783"
          style={{
            opacity: 1,
            fill: "url(#linearGradient785)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,371.38739 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path784"
          style={{
            opacity: 1,
            fill: "url(#linearGradient784)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,410.97817 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path785"
          style={{
            opacity: 1,
            fill: "url(#linearGradient787)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,451.36572 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path786"
          style={{
            opacity: 1,
            fill: "url(#linearGradient786)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,490.9565 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path787"
          style={{
            opacity: 1,
            fill: "url(#linearGradient789)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,531.34406 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path788"
          style={{
            opacity: 1,
            fill: "url(#linearGradient788)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,570.93484 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path789"
          style={{
            opacity: 1,
            fill: "url(#linearGradient791)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,610.74145 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path790"
          style={{
            opacity: 1,
            fill: "url(#linearGradient790)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,650.33223 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path791"
          style={{
            opacity: 1,
            fill: "url(#linearGradient793)",
            strokeWidth: 0.0996358
          }}
          d="m 198.909,690.71977 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path792"
          style={{
            opacity: 1,
            fill: "url(#linearGradient792)",
            strokeWidth: 0.0996358
          }}
          d="m 197.659,730.31055 7.90409,4.0236 7.7907,3.7966 -7.87952,3.796 -7.76608,4.0983 4.398,-7.8572 z"
        />
        <path
          id="path793"
          style={{
            opacity: 1,
            fill: "url(#linearGradient794)",
            strokeWidth: 0.0996358
          }}
          d="m 634.08707,287.5161 7.9041,4.0236 7.79069,3.7966 -7.87951,3.796 -7.76609,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path794"
          style={{
            opacity: 1,
            fill: "url(#linearGradient795)",
            strokeWidth: 0.0996358
          }}
          d="m 567.97259,361.03014 7.9041,4.0236 7.79069,3.7966 -7.87951,3.796 -7.76609,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path795"
          style={{
            opacity: 1,
            fill: "url(#linearGradient796)",
            strokeWidth: 0.0996358
          }}
          d="m 567.97259,595.98233 7.9041,4.0236 7.79069,3.7966 -7.87951,3.796 -7.76609,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path796"
          style={{
            opacity: 1,
            fill: "url(#linearGradient797)",
            strokeWidth: 0.0996358
          }}
          d="m 634.08707,525.93065 7.9041,4.0236 7.79069,3.7966 -7.87951,3.796 -7.76609,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path797"
          style={{
            opacity: 1,
            fill: "url(#linearGradient798)",
            strokeWidth: 0.0996358
          }}
          d="m 967.04817,432.4195 7.9041,4.0236 7.7907,3.7966 -7.8796,3.796 -7.766,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path798"
          style={{
            opacity: 1,
            fill: "url(#linearGradient799)",
            strokeWidth: 0.0996358
          }}
          d="m 1045.7138,361.12577 7.9041,4.0236 7.7907,3.7966 -7.8796,3.796 -7.766,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path799"
          style={{
            opacity: 1,
            fill: "url(#linearGradient800)",
            strokeWidth: 0.0996358
          }}
          d="m 1045.7138,595.98233 7.9041,4.0236 7.7907,3.7966 -7.8796,3.796 -7.766,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path800"
          style={{
            opacity: 1,
            fill: "url(#linearGradient801)",
            strokeWidth: 0.0996358
          }}
          d="m 1211.1768,477.33915 7.9041,4.0236 7.7907,3.7966 -7.8796,3.796 -7.766,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path801"
          style={{
            opacity: 1,
            fill: "url(#linearGradient802)",
            strokeWidth: 0.0996358
          }}
          d="m 1315.198,304.97707 -4.0236,-7.90409 -3.7966,-7.7907 -3.796,7.87952 -4.0983,7.76608 7.8573,-4.39801 z"
        />
        <path
          id="path802"
          style={{
            opacity: 1,
            fill: "url(#linearGradient803)",
            strokeWidth: 0.0996358
          }}
          d="m 1365.2641,304.97707 -4.0236,-7.90409 -3.7966,-7.7907 -3.796,7.87952 -4.0983,7.76608 7.8573,-4.39801 z"
        />
        <path
          id="path803"
          style={{
            opacity: 1,
            fill: "url(#linearGradient804)",
            strokeWidth: 0.0996358
          }}
          d="m 1498.932,282.20877 -4.0236,7.90409 -3.7966,7.79071 -3.796,-7.87953 -4.0984,-7.76607 7.8573,4.39801 z"
        />
        <path
          id="path804"
          style={{
            opacity: 1,
            fill: "url(#linearGradient805)",
            strokeWidth: 0.0996358
          }}
          d="m 1558.7198,358.92077 -7.9041,-4.0236 -7.7907,-3.7966 7.8795,-3.796 7.7661,-4.0984 -4.398,7.8573 z"
        />
        <path
          id="path805"
          style={{
            opacity: 1,
            fill: "url(#linearGradient806)",
            strokeWidth: 0.0996358
          }}
          d="m 1537.725,561.3923 7.9041,-4.0236 7.7907,-3.7966 -7.8795,-3.796 -7.7661,-4.0984 4.398,7.8573 z"
        />
        <path
          id="path806"
          style={{
            opacity: 1,
            fill: "url(#linearGradient807)",
            strokeWidth: 0.0996358
          }}
          d="m 1708.5966,358.92077 -7.9041,-4.0236 -7.7907,-3.7966 7.8795,-3.796 7.7661,-4.0984 -4.398,7.8573 z"
        />
        <path
          id="path807"
          style={{
            opacity: 1,
            fill: "url(#linearGradient808)",
            strokeWidth: 0.0996358
          }}
          d="m 1812.2052,454.17459 7.9041,-4.0236 7.7907,-3.7966 -7.8795,-3.796 -7.7661,-4.0984 4.398,7.8573 z"
        />
        <path
          id="path808"
          style={{
            opacity: 1,
            fill: "url(#linearGradient809)",
            strokeWidth: 0.0996358
          }}
          d="m 1848.329,613.13246 4.0236,7.9041 3.7966,7.7907 3.796,-7.8795 4.0984,-7.7661 -7.8573,4.398 z"
        />
        <path
          id="path809"
          style={{
            opacity: 1,
            fill: "url(#linearGradient810)",
            strokeWidth: 0.0996358
          }}
          d="m 1543.1978,608.93864 -7.9041,-4.0236 -7.7907,-3.7966 7.8795,-3.796 7.7661,-4.0984 -4.398,7.8573 z"
        />
        <path
          id="path810"
          style={{
            opacity: 1,
            fill: "url(#linearGradient811)",
            strokeWidth: 0.0996358
          }}
          d="m 1470.1754,539.70229 -4.0236,7.9041 -3.7966,7.7907 -3.796,-7.8796 -4.0983,-7.766 7.8573,4.398 z"
        />
        <path
          id="path811"
          style={{
            opacity: 1,
            fill: "url(#linearGradient812)",
            strokeWidth: 0.0996358
          }}
          d="m 1430.2383,539.70229 -4.0236,7.9041 -3.7966,7.7907 -3.796,-7.8796 -4.0983,-7.766 7.8573,4.398 z"
        />
        <path
          id="path812"
          style={{
            opacity: 1,
            fill: "url(#linearGradient813)",
            strokeWidth: 0.0996358
          }}
          d="m 858.66701,674.9929 -7.9041,4.0236 -7.7907,3.7966 7.87959,3.796 7.766,4.0983 -4.398,-7.8573 z"
        />
        <path
          id="path813"
          style={{
            opacity: 1,
            fill: "url(#linearGradient814)",
            strokeWidth: 0.0996358
          }}
          d="m 857.791,741.84885 -7.9041,4.0236 -7.7907,3.7966 7.87959,3.796 7.766,4.0983 -4.398,-7.8573 z"
        />
        <path
          id="path814"
          style={{
            opacity: 1,
            fill: "url(#linearGradient815)",
            strokeWidth: 0.0996358
          }}
          d="m 1262.5418,790.95942 7.9041,4.0236 7.7907,3.7966 -7.8796,3.796 -7.766,4.0983 4.398,-7.8573 z"
        />
        <path
          id="path815"
          style={{
            opacity: 1,
            fill: "url(#linearGradient816)",
            strokeWidth: 0.0996358
          }}
          d="m 1366.0527,906.16172 -4.0236,7.9041 -3.7966,7.7907 -3.796,-7.8796 -4.0983,-7.766 7.8573,4.398 z"
        />
        <path
          id="path816"
          style={{
            opacity: 1,
            fill: "url(#linearGradient817)",
            strokeWidth: 0.0996358
          }}
          d="m 347.22222,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path817"
          style={{
            opacity: 1,
            fill: "url(#linearGradient818)",
            strokeWidth: 0.0996358
          }}
          d="m 446.01775,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path818"
          style={{
            opacity: 1,
            fill: "url(#linearGradient819)",
            strokeWidth: 0.0996358
          }}
          d="m 544.63406,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path819"
          style={{
            opacity: 1,
            fill: "url(#linearGradient820)",
            strokeWidth: 0.0996358
          }}
          d="m 643.60886,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path820"
          style={{
            opacity: 1,
            fill: "url(#linearGradient821)",
            strokeWidth: 0.0996358
          }}
          d="m 742.22525,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path821"
          style={{
            opacity: 1,
            fill: "url(#linearGradient822)",
            strokeWidth: 0.0996358
          }}
          d="m 841.20005,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path822"
          style={{
            opacity: 1,
            fill: "url(#linearGradient823)",
            strokeWidth: 0.0996358
          }}
          d="m 946.17037,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0983,7.76608 -7.8572,-4.398 z"
        />
        <path
          id="path823"
          style={{
            opacity: 1,
            fill: "url(#linearGradient824)",
            strokeWidth: 0.0996358
          }}
          d="m 1009.3303,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0984,7.76608 -7.8573,-4.398 z"
        />
        <path
          id="path824"
          style={{
            opacity: 1,
            fill: "url(#linearGradient825)",
            strokeWidth: 0.0996358
          }}
          d="m 1102.2073,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0984,7.76608 -7.8573,-4.398 z"
        />
        <path
          id="path825"
          style={{
            opacity: 1,
            fill: "url(#linearGradient826)",
            strokeWidth: 0.0996358
          }}
          d="m 1207.1775,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0984,7.76608 -7.8573,-4.398 z"
        />
        <path
          id="path826"
          style={{
            opacity: 1,
            fill: "url(#linearGradient827)",
            strokeWidth: 0.0996358
          }}
          d="m 1270.3375,993.92755 4.0236,-7.90409 3.7966,-7.7907 3.796,7.87952 4.0984,7.76608 -7.8573,-4.398 z"
        />
        <g id="g834">
          <ellipse
            style={{
              fill: "none",
              fillOpacity: 0.984314,
              stroke: "#000000",
              strokeWidth: 0.620001,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="ellipse831"
            cx={-447.21924}
            cy={1741.6864}
            rx={11.315}
            ry={11.168691}
            transform="rotate(-90)"
          />
          <path
            style={{
              fill: "none",
              fillOpacity: 0.984314,
              stroke: "#000000",
              strokeWidth: 0.768328,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 1752.8219,455.80122 V 438.63727"
            id="path832"
          />
          <path
            style={{
              fill: "none",
              fillOpacity: 0.984314,
              stroke: "#000000",
              strokeWidth: 0.894231,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 1753.3114,434.38511 h -23.25"
            id="path833"
          />
          <path
            style={{
              fill: "none",
              fillOpacity: 0.984314,
              stroke: "#000000",
              strokeWidth: 0.768328,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 1730.5918,455.80122 V 438.63727"
            id="path834"
          />
        </g>
        <g id="g838" transform="translate(-330.10494,708.48099)">
          <path
            id="path835"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g837" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path836"
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
              id="path837"
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
        <g id="g841" transform="translate(-334.9687,902.62888)">
          <path
            id="path838"
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
            d="m 1285.2548,-120.50868 v 2.21485 h 1.0488 7.6701 v 13.65144 h 1.9901 v -13.65144 h 7.67 1.0488 v -2.21485 h -1.0488 -17.3301 z"
          />
          <g id="g840" transform="rotate(180,1294.9687,-77.27745)">
            <path
              id="path839"
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
              id="path840"
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
      </g>
    </svg>
  );
};
export default BilgeSystemDiagramSvg;
