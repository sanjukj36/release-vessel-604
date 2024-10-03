import { useState } from "react";
// assets
import compassSmallBg from "@/assets/svg/compass-small/compass-bg-small-200x200.svg";
import smallCompassBg from "@/assets/svg/compass-small/compass-bg-small.svg";
import compassSmallNeedl from "@/assets/svg/compass-small/compass-needle-small-36x200.svg";
import smallCompassNeedle from "@/assets/svg/compass-small/compass-needle-small.svg";
import compassBg from "@/assets/svg/compass/compass-bg-600x600.svg";
import compassBgGrid from "@/assets/svg/compass/compass-bg-grid-600x600.svg";
import compassHeading from "@/assets/svg/compass/compass-heading-600x600.svg";
import headingImage from "@/assets/svg/heading-circular-bg-200x200.svg";
import shipArrowRight from "@/assets/svg/small-ship-arrow-right.svg";
import { AreaChart } from "@/components/charts/AreaChart";
import { BoxCard } from "@/components/common/BoxCard";
import { MapComponent } from "@/components/common/MapComponent";
import { Progress } from "@/components/ui/progress";

Navigation.propTypes = {};

export function Navigation() {
  return (
    <div className="w-full h-full grid grid-cols-6 grid-rows-4 gap-1 p-1">
      <div className="row-span-3 col-span-6 grid grid-cols-6 gap-1 w-full h-full">
        <div className="col-span-3 grid grid-cols-3 grid-rows-3 gap-1">
          {/* small section */}
          <div className="col-span-3 grid grid-cols-3 gap-1">
            <div className="">
              <VesselSpeedCard />
            </div>
            <div className="col-span-2">
              <HeadingComponent />
            </div>
          </div>
          <div className="col-span-3 row-span-2 grid grid-cols-3 grid-rows-2 gap-1">
            <div className="">
              <WindSensorsComponent />
            </div>
            <div className="col-start-1 row-start-2">
              <WindComponent />
            </div>
            <div className="col-span-2 row-span-2">
              <MapComponent />
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full h-full">
          {/* big section */}
          <CompassSectionComponent />
        </div>
      </div>
      <div className="col-span-6 grid grid-cols-6 w-full h-full gap-1">
        <div className="">
          <ThrusterForceBarComponents />
        </div>
        <div className="">
          <WindTrendComponent />
        </div>
        <div className="">
          <PowerTrendComponent />
        </div>
        <div className="">
          <ThrusterForceVectorComponent />
        </div>
        <div>
          <Joystick />
        </div>
        <div className="">
          <PitchAndRollComponent />
        </div>
      </div>
    </div>
  );
}

function VesselSpeedCard() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-full mt-auto relative isolate mx-auto">
        <div className="mx-auto w-[200px]">
          <img src={compassSmallBg} />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[130deg]"
            src={compassSmallNeedl}
          />
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <p className="font-semibold">Vessel speed</p>
        <div className="flex flex-col">
          <p className="leading-none text-xs">SOG</p>
          <div className="flex items-end gap-1">
            <p className="font-semibold text-4xl">0.00</p>
            <p>m/s</p>
          </div>
        </div>
      </div>
    </BoxCard>
  );
}

function Joystick() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-7/12 mt-auto relative isolate mx-auto"></div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Joystick</p>
          <p className="text-sm">Surge and sway</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm max-w-[13ch]">General Reduced Thrust</p>
        </div>
      </div>
    </BoxCard>
  );
}

function HeadingComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-full grid grid-cols-3 mt-auto">
        <div className="flex justify-between items-center px-4">
          <p>ROT</p>
          <div className="flex gap-1 items-end">
            <p className="text-2xl font-semibold">-0.0</p>
            <p className="text-xs opacity-50">°/min</p>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="mx-auto w-[200px] isolate relative">
            <img className="w-full mt-auto mx-auto" src={headingImage} />
            <div className="absolute top-1/2 left-[50.5%] -translate-y-1/2 -translate-x-1/2">
              <p className="text-3xl font-semibold text-primary">000.0°</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="">Gyro</p>
          <div className="flex gap-2">
            <p className="inline-flex items-center justify-center rounded-full bg-green-700 size-6 text-xs font-medium text-green-50 ring-1 ring-inset ring-green-600/20 cursor-pointer">
              1
            </p>
            <p className="inline-flex items-center justify-center rounded-full bg-green-50 size-6 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 cursor-pointer">
              2
            </p>
            <p className="inline-flex items-center justify-center rounded-full bg-green-50 size-6 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 cursor-pointer">
              3
            </p>
          </div>
        </div>
      </div>
      {/* title */}
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Heading</p>
        </div>
        <div className="flex flex-col">
          <div className="text-sm flex gap-2">
            <p>Control mode</p>
            <p className="font-semibold">High precision</p>
          </div>
          <div className="text-sm flex gap-2">
            <p>Gain Level</p>
            <p className="font-semibold">Medium</p>
          </div>
        </div>
      </div>
    </BoxCard>
  );
}

function RotationCenterPosition() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-full h-full flex flex-col relative isolate mx-auto">
        <div className="h-full w-full flex items-center justify-center">
          <p>- No reference system -</p>
        </div>
        <div className="mt-auto flex w-full  border-t-2">
          <p>DP class</p>
          <p className="mx-auto font-semibold">None</p>
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Rotation center position</p>
        </div>
      </div>
    </BoxCard>
  );
}

function PowerConsumptionComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-full h-full flex flex-col relative isolate mx-auto">
        <div className="h-full w-full flex items-center justify-center">
          <p>- No reference system -</p>
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Power consumption</p>
          <p className="text-sm"></p>
        </div>
      </div>
    </BoxCard>
  );
}

function CompassSectionComponent() {
  const [heading, setHeading] = useState(130);
  return (
    <BoxCard className="w-full h-full flex flex-col p-1 px-2">
      <p className="font-semibold pt-2">Reference System main</p>
      <div className="w-full h-full grid grid-cols-[auto_4fr]">
        <div className="h-full flex flex-col flex-wrap justify-between gap-2 py-12 pl-4">
          <CompassSectionCard title={"HDG"} value={`${0}°`} unit={"/min"} />
          <CompassSectionCard title={"COG"} value={`${0}°`} unit={"/min"} />
          <CompassSectionCard title={"ROT"} value={`${120}°`} unit={"/min"} />
          <CompassSectionCard title={"Wind"} value={12.5} unit={"kn"} />
          <CompassSectionCard title={"Current"} value={12.4} unit={"kn"} />
        </div>
        <div className="grid place-content-center">
          <div className="w-[400px] 2xl:w-[600px] relative isolate">
            <img
              className="w-full opacity-20"
              src={compassBgGrid}
              alt="Compass Bg Grid"
            />
            <img
              className="w-full absolute inset-0"
              src={compassBg}
              alt="Compass Bg"
            />
            <img
              style={{
                left: "50%",
                right: "50%",
                transform: `translate(-50%, -50%) rotate(${heading}deg) `
              }}
              className="absolute h-[400px] 2xl:h-full top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 rotate-[10deg]"
              src={compassHeading}
            />
          </div>
        </div>
      </div>
    </BoxCard>
  );
}

function CompassSectionCard({ title, value, unit }) {
  return (
    <div className="flex flex-col w-max">
      <p className="text-4xl font-semibold border-b">{value}</p>
      <div className="flex gap-1 text-lg">
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground">{unit}</p>
      </div>
    </div>
  );
}
function ThrusterForceBarComponents() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-10"></div>
      <div className="w-full h-full flex flex-col">
        <div className="w-[200px] ml-auto flex justify-between">
          <p>0%</p>
          <p>100%</p>
        </div>
        <div className="w-full flex flex-col gap-2 text-sm">
          <div className="grid grid-cols-[auto_200px] items-center">
            <p>BowTunnel1</p>
            <Progress className="h-4 rounded-none" value={90} />
          </div>
          <div className="grid grid-cols-[auto_200px] items-center">
            <p>BowTunnel2</p>
            <Progress className="h-4 rounded-none" value={30} />
          </div>
          <div className="grid grid-cols-[auto_200px] items-center">
            <p>AftPORTAzi3</p>
            <Progress className="h-4 rounded-none" value={10} />
          </div>
          <div className="grid grid-cols-[auto_200px] items-center">
            <p>AftPORTAzi4</p>
            <Progress className="h-4 rounded-none" value={5} />
          </div>
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <p className="font-semibold">Thruster force bar</p>
      </div>
    </BoxCard>
  );
}

function WindSensorsComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-10"></div>
      <div className="w-full h-full flex flex-col divide-y-2 divide-border">
        <div className="grid grid-cols-2 divide-x-2 divide-border text-end px-2">
          <p className="px-1 text-sm font-medium">Measured</p>
          <p className="px-1 text-sm">True</p>
        </div>
        {[1, 2, 3].map((item, key) => (
          <div
            key={key}
            className="grid grid-cols-2 divide-x-2  divide-border px-2"
          >
            <div className="grid grid-cols-3 gap-0.5 p-0.5 items-center">
              <p className="inline-flex items-center justify-center rounded-full bg-green-700 size-6 text-xs font-medium text-green-50 ring-1 ring-inset ring-green-600/20 cursor-pointer">
                {item}
              </p>
              <div className="w-[20px] relative">
                <img className="w-full" src={shipArrowRight} />
              </div>
              <p className="text-2xl font-semibold">4.2</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="w-full">
                <div className="w-5/6 relative">
                  <img src={smallCompassBg} className="w-full" />
                  <img
                    src={smallCompassNeedle}
                    className="absolute w-3/12 rotate-[90deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-end">
                <p className="text-2xl font-semibold">4.2</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <p className="font-semibold">
          Wind sensors{" "}
          <span className="text-muted-foreground font-normal">[m/s]</span>
        </p>
      </div>
    </BoxCard>
  );
}

function ReferenceSystemComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-4"></div>
      <div className="w-full h-full flex flex-col relative isolate mx-auto">
        <div className="h-full w-full flex items-center justify-center">
          <p>- No reference system -</p>
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Reference Systems</p>
          <p className="text-sm"></p>
        </div>
      </div>
    </BoxCard>
  );
}

function ThrusterForceVectorComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-10"></div>
      <div className="w-full h-full flex flex-col relative isolate mx-auto">
        <div className="h-full w-full flex items-center justify-center">
          <p>- No reference system -</p>
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <p className="font-semibold">Thruster force vector</p>
      </div>
    </BoxCard>
  );
}

function WindComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      {/* <div className="w-8/12 mt-auto relative isolate mx-auto"> */}
      {/*   <img src={simpleCompassBg} /> */}
      {/*   <img className="absolute w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[130deg]" src={ship} /> */}
      {/* </div> */}

      <div className="w-full mt-auto relative isolate mx-auto">
        <div className="mx-auto w-[200px]">
          <img src={compassSmallBg} />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[130deg]"
            src={compassSmallNeedl}
          />
        </div>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Wind</p>
          <p className="text-xs text-muted-foreground">5 min</p>
          <p className="text-sm">
            Range 30 <span className="text-muted-foreground">m/s</span>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-end">
            <p className="font-semibold text-4xl">0.00</p>
            <p className="text-muted-foreground">m/s</p>
          </div>
          <p className="text-xs">Sensor=1</p>
        </div>
      </div>
    </BoxCard>
  );
}

function PitchAndRollComponent() {
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      {/* <div className="w-8/12 mt-auto relative isolate mx-auto"> */}
      {/*   <img src={simpleCompassBg} /> */}
      {/*   <img className="absolute w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[130deg]" src={ship} /> */}
      {/* </div> */}
      <div className="h-full w-full flex items-center justify-center">
        <p>- No reference system -</p>
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Pitch and roll</p>
          <p className="text-xs text-muted-foreground">5 min</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs">Sensor=1</p>
        </div>
      </div>
    </BoxCard>
  );
}

function PowerTrendComponent() {
  const data = [10, 11, 10, 10, 11, 10, 10];
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-8"></div>
      <div className="w-full mt-auto relative isolate mx-auto">
        {/* graph */}
        <p className="absolute left-0 right-0 text-center">Connect-Swbd 1</p>
        <AreaChart seriesData={data} height={100} />
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Power trend</p>
          <p className="text-xs text-muted-foreground">5 min</p>
        </div>
      </div>
    </BoxCard>
  );
}

function WindTrendComponent() {
  const data = [4, 8, 2, 2, 4, 2];
  return (
    <BoxCard className="w-full h-full relative isolate flex flex-col p-1 px-2">
      <div className="h-8"></div>
      <div className="w-full mt-auto relative isolate mx-auto">
        {/* graph */}
        <p className="absolute left-0 right-0 text-center">Sensor-1 speed</p>
        <AreaChart seriesData={data} height={100} />
      </div>
      <div className="absolute left-0 z-10 right-0 top-0 flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-semibold">Wind trend</p>
          <p className="text-xs text-muted-foreground">5 min</p>
        </div>
        <div className="flex items-end gap-1">
          <p className="font-semibold text-4xl">4.0</p>
          <p>m/s</p>
        </div>
      </div>
    </BoxCard>
  );
}
