import { createElement } from "react";
import PortPropulsion from "@/pages/azimuth-thruster";
import AzimuthThruster from "@/pages/azimuth-thruster";
import PortAzhimuthThruster from "@/pages/azimuth-thruster/port-azimuth-thruster";
import StbdAzhimuthThruster from "@/pages/azimuth-thruster/stbd-azimuth-thruster";
import { BowThrusterOverview } from "@/pages/bow-thruster";
import { Colors } from "@/pages/Colors";
import { DG } from "@/pages/diesel-generator";
import { GEOverview } from "@/pages/diesel-generator/GEOverview";
import { No1DieselGenerator } from "@/pages/diesel-generator/No1DieselGenerator";
import { Edg } from "@/pages/edg";
import InfModule from "@/pages/inf-module";
import TelemetryEquipmentStatus from "@/pages/inf-module/telemetry-equipment-status";
import { MEConditionOverview } from "@/pages/me-condition";
import { Navigation } from "@/pages/navigation";
import { PowerManagementSystemOverview } from "@/pages/pms";
import { TankGaugingSystem } from "@/pages/tank-guaging-system";

export const urls = [
  // {
  //   title: "Navigation",
  //   url: "",
  //   element: createElement(Navigation),
  //   sub: [{ title: "Sub title", url: "sub-url" }]
  // },
  // {
  //   title: "ME Condition",
  //   url: "me-condition-overview",
  //   element: createElement(MEConditionOverview),
  //   sub: [{ title: "Sub title", url: "sub-url" }],
  // },
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
        element: createElement(No1DieselGenerator)
      },
      {
        title: "NO2. DG",
        url: "dg2",
        element: createElement(No1DieselGenerator)
      },
      {
        title: "NO3. DG",
        url: "dg3",
        element: createElement(No1DieselGenerator)
      },
      {
        title: "NO4. DG",
        url: "dg4",
        element: createElement(No1DieselGenerator)
      }
    ]
  },
  {
    title: "PM System",
    url: "pm-system",
    element: createElement(PowerManagementSystemOverview),
    sub: [{ title: "Sub title", url: "pm-system-sub-url" }]
  },
  // {
  //   title: "Bow Thruster",
  //   url: "bow-thruster",
  //   element: createElement(BowThrusterOverview),
  //   sub: [{ title: "Sub title", url: "bow-thruster-overview" }]
  // },
  {
    title: "Azhimuth Thruster",
    url: "azhimuth-thruster",
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
  // {
  //   title: "EDG",
  //   url: "edg",
  //   element: createElement(Edg)
  // },
  {
    title: "INF Module",
    url: "inf-module",
    element: createElement(InfModule),
    sub: [
      {
        title: "Telemetry Equipment Status",
        url: "",
        element: createElement(TelemetryEquipmentStatus)
      }
    ]
  },
  {
    title: "Color",
    url: "color",
    element: createElement(Colors),
    sub: [{ title: "Sub title", url: "sub-url" }]
  }
];
