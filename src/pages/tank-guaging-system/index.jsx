import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { SVGTankGaugingSystem } from "@/components/diagrams/SVGTankGaugingSystem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Progress, ProgressVertical } from "@/components/ui/progress";

TankGaugingSystem.propTypes = {};

const tankGaugingCardDummy = [
  { title: "No.7 DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "No.7 DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.6 DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "No.5 DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "No.5 DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.4 DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "No.3 DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "P DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "AFT PEAK DW WB P", mtrs: 0.0, m3: 0.0 },
  { title: "AFT PEAK DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.8 DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.7 DW WB S", mtrs: 0.0, m3: 0.0 },
  { title: "No.6 DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.6 DW WB S", mtrs: 0.0, m3: 0.0 },
  { title: "No.5 DW WB S", mtrs: 0.0, m3: 0.0 },
  { title: "No.4 DW WB C", mtrs: 0.0, m3: 0.0 },
  { title: "No.4 DW WB S", mtrs: 0.0, m3: 0.0 },
  { title: "No.3 DW WB S", mtrs: 0.0, m3: 0.0 }
];

export function TankGaugingSystem() {
  return (
    <div className="w-full h-full p-1 grid bg-radial">
      <div className="w-full flex flex-col gap-1 relative">
        <div className="h-full flex-col">
          <TopComponents />
        </div>
        <div className="w-full h-full px-2">
          <SVGTankGaugingSystem />
        </div>
        <div className="h-full"></div>
      </div>
    </div>
  );
}

function TopComponents() {
  return (
    <div className="w-full h-full items-center justify-evenly gap-2 flex flex-wrap">
      {tankGaugingCardDummy.map((item, key) => (
        <BoxCard key={key} className="p-0">
          <CardHeader className="p-3">
            <CardTitle className="text-xs">{item?.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 flex gap-2 justify-center">
            <ProgressVertical className="h-[50px] w-1" value={50} />
            <div className="flex flex-col justify-between text-xs font-semibold">
              <p>{item.mtrs} mtrs</p>
              <p>{item.m3} m3</p>
            </div>
          </CardContent>
        </BoxCard>
      ))}
    </div>
  );
}
