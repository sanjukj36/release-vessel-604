import { createElement } from "react";
import { PanelsRightBottom } from "lucide-react";
import { Loader } from "@/components/layout/loader";
import AirCompressorSystem from "@/pages/air-compressor";
import PortPropulsion from "@/pages/azimuth-thruster";
import AzimuthThruster from "@/pages/azimuth-thruster";
import PortAzhimuthThruster from "@/pages/azimuth-thruster/port-azimuth-thruster";
import StbdAzhimuthThruster from "@/pages/azimuth-thruster/stbd-azimuth-thruster";
import BilgeSystem from "@/pages/bilge-system";
import { BowThrusterOverview } from "@/pages/bow-thruster";
import { Colors } from "@/pages/Colors";
import CoolingSystem from "@/pages/cooling-system";
import { DG } from "@/pages/diesel-generator";
import { GEOverview } from "@/pages/diesel-generator/dg-overview";
import DieselGenerator from "@/pages/diesel-generator/diesel-generator";
import { Edg } from "@/pages/edg";
import InfModule from "@/pages/inf-module";
import AlarmList from "@/pages/inf-module/alarm-list";
import DataBase from "@/pages/inf-module/database";
import TelemetryEquipmentStatus from "@/pages/inf-module/telemetry-equipment-status";
import JackingSystem from "@/pages/jacking-system";
import { MEConditionOverview } from "@/pages/me-condition";
import MoreOptions from "@/pages/more-options";
import CctvPage from "@/pages/more-options/cctv";
import General from "@/pages/more-options/general";
import Miscellaneous from "@/pages/more-options/miscellaneous";
import { Navigation } from "@/pages/navigation";
import { PowerManagementSystemOverview } from "@/pages/pms";
import { TankGaugingSystem } from "@/pages/tank-guaging-system";

export const hideUrls = [
  {
    title: "Azhimuth Thruster",
    url: "",
    element: createElement(AzimuthThruster),
    sub: [
      {
        title: "PORT",
        url: "",
        element: createElement(PortAzhimuthThruster)
      },
      {
        title: "STBD",
        url: "stbd",
        element: createElement(StbdAzhimuthThruster)
      }
    ]
  },
  {
    title: "Diesel Generator",
    // url: "dg",
    url: "dg",
    element: createElement(DG),
    sub: [
      {
        title: "Overview",
        url: "",
        element: createElement(GEOverview)
      },
      {
        title: "NO1. DG",
        url: "dg1",
        // url: "",
        element: createElement(DieselGenerator)
      },
      {
        title: "NO2. DG",
        url: "dg2",
        element: createElement(DieselGenerator)
      },
      {
        title: "NO3. DG",
        url: "dg3",
        element: createElement(DieselGenerator)
      },
      {
        title: "NO4. DG",
        url: "dg4",
        element: createElement(DieselGenerator)
      }
    ]
  },
  {
    title: "PM System",
    url: "pm-system",
    element: createElement(PowerManagementSystemOverview),
    sub: [{ title: "Sub title", url: "pm-system-sub-url" }]
  },
  {
    title: "Tank Guaging",
    url: "tank-gauging",
    element: createElement(TankGaugingSystem),
    sub: [
      { title: "Drill Water", url: "drill-water" },
      { title: "Fresh Water", url: "fresh-water" },
      { title: "Fuel Oil", url: "fuel-oil" },
      { title: "Mud", url: "mud" },
      { title: "Cement", url: "cement" }
    ]
  },
  {
    title: "Bilge",
    url: "bilge-system",
    element: createElement(BilgeSystem),
    sub: []
  },
  {
    title: "Air Compressor",
    url: "air-compressor-system",
    element: createElement(AirCompressorSystem),
    sub: []
  },
  {
    title: "Cooling System",
    url: "cooling-system",
    element: createElement(CoolingSystem),
    sub: []
  },
  {
    title: "Jacking System",
    url: "jacking-system",
    element: createElement(JackingSystem),
    sub: []
  },
  {
    title: "More Options",
    url: "more-options",
    element: createElement(MoreOptions),
    sub: [
      {
        title: "Miscellaneous",
        url: "",
        element: createElement(Miscellaneous)
      },
      {
        title: "CCTV",
        url: "cctv",
        element: createElement(CctvPage)
      },
      {
        title: "Machinery Overview",
        url: "machinery-overview",
        element: createElement(General)
      }
    ]
  }
];

// export const urls = [
//   ...hideUrls,
//   {
//     title: "INF Module",
//     url: "inf-module",
//     element: createElement(InfModule),
//     sub: [
//       {
//         title: "Telemetry Equipment Status",
//         url: "",
//         element: createElement(TelemetryEquipmentStatus)
//       },
//       {
//         title: "Database",
//         url: "database",
//         element: createElement(DataBase)
//       },
//       {
//         title: "Alarm List",
//         url: "alarm-list",
//         element: createElement(AlarmList)
//       }
//     ]
//   }
//   // {
//   //   title: "Navigation",
//   //   url: "",
//   //   element: createElement(Navigation),
//   //   sub: [{ title: "Sub title", url: "sub-url" }]
//   // },
//   // {
//   //   title: "ME Condition",
//   //   url: "me-condition-overview",
//   //   element: createElement(MEConditionOverview),
//   //   sub: [{ title: "Sub title", url: "sub-url" }],
//   // },
//   // {
//   //   title: "Bow Thruster",
//   //   url: "bow-thruster",
//   //   element: createElement(BowThrusterOverview),
//   //   sub: [{ title: "Sub title", url: "bow-thruster-overview" }]
//   // },
//   // {
//   //   title: "EDG",
//   //   url: "edg",
//   //   element: createElement(Edg)
//   // },
//   // {
//   //   title: "Color",
//   //   url: "color",
//   //   element: createElement(Colors),
//   //   sub: [{ title: "Sub title", url: "sub-url" }]
//   // }
// ];

export const urls = [
  {
    title: "More Options",
    url: "more-options",
    element: createElement(MoreOptions),
    sub: [
      {
        title: "Miscellaneous",
        url: "",
        element: createElement(Miscellaneous)
      }
    ]
  },
  {
    title: "INF Module",
    url: "inf-module",
    element: createElement(InfModule),
    sub: [
      {
        title: "Telemetry Equipment Status",
        url: "",
        element: createElement(TelemetryEquipmentStatus)
      },
      {
        title: "Database",
        url: "database",
        element: createElement(DataBase)
      },
      {
        title: "Alarm List",
        url: "alarm-list",
        element: createElement(AlarmList)
      }
    ]
  }
];
