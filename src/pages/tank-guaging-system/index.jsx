import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressVertical } from "@/components/ui/progress";
import SVGTankGauging from "./tank-gauging-svg";

TankGaugingSystem.propTypes = {};

const topSection = [
  { title: "SW BALLAST TK 3(P)", m: 0.0, m3: 0.0 },
  { title: "SW BALLAST TK 2(P)", m: 0.0, m3: 0.0 },
  { title: "F.O. SERV.TK1", m: 0.0, m3: 0.0 },
  { title: "F.O. SERV.TK2", m: 0.0, m3: 0.0 },
  { title: "F.O. STOR.TK(P)", m: 0.0, m3: 0.0 },
  { title: "F.W.TK(P)", m: 0.0, m3: 0.0 },
  { title: "STERN DRAFT (P)", m: 0.0, m3: 0.0 },
  { title: "DIRTY OIL TANK", m: 0.0, m3: 0.0 },
  { title: "BIL.WATER TANK", m: 0.0, m3: 0.0 },
  { title: "BOW DRAFT(P)", m: 0.0, m3: 0.0 },
  { title: "G.W.TK(P)", m: 0.0, m3: 0.0 },
  { title: "SW BALLAST TK 1(P)", m: 0.0, m3: 0.0 },
  { title: "SW RESERVATION TK", m: 0.0, m3: 0.0 }
];

const bottomSection = [
  { title: "STERN DRAFT (S)", m: 0.0, m3: 0.0 },
  { title: "BOW DRAFT(S)", m: 0.0, m3: 0.0 },
  { title: "EG F.O. TANK", m: 0.0, m3: 0.0 },
  { title: "BLACK WATER TK", m: 0.0, m3: 0.0 },
  { title: "SW BALLAST TK 1(S)", m: 0.0, m3: 0.0 },
  { title: "SW BALLAST TK 3(S)", m: 0.0, m3: 0.0 },
  { title: "SW BALLAST TK 2(S)", m: 0.0, m3: 0.0 },
  { title: "LO TANK", m: 0.0, m3: 0.0 },
  { title: "F.O.STOR.TK(S)", m: 0.0, m3: 0.0 },
  { title: "F.W.TK(S)", m: 0.0, m3: 0.0 }
];

export function TankGaugingSystem() {
  return (
    <PageWrapper className="grid place-items-center">
      <Title title="TANK GAUGING" />
      <TopComponents data={topSection} />
      <SVGTankGauging />
      <TopComponents data={bottomSection} />
    </PageWrapper>
  );
}

TopComponents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      m: PropTypes.number,
      m3: PropTypes.number
    })
  )
};
function TopComponents({ data }) {
  return (
    <div className="w-full h-full min-h-8 items-center justify-evenly gap-2 flex flex-wrap">
      {data?.length > 0 &&
        data.map((item, key) => (
          <BoxCard key={key} className="p-0">
            <CardHeader className="p-3">
              <CardTitle className="text-xs">{item?.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 flex gap-2 justify-center">
              <ProgressVertical className="h-[50px] w-1" value={50} />
              <div className="flex flex-col justify-between text-xs font-semibold">
                <p>{item.m} m</p>
                <p>{item.m3} m3</p>
              </div>
            </CardContent>
          </BoxCard>
        ))}
    </div>
  );
}
