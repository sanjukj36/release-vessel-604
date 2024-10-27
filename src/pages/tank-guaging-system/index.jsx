import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressVertical } from "@/components/ui/progress";
import tankAPI from "@/infrastructure/tank-gauge";
import { REFRESH_TIME, RESPONSE_DATA_TYPE } from "@/lib/constants";
import SVGTankGauging from "./tank-gauging-svg";

TankGaugingSystem.propTypes = {};

export function TankGaugingSystem() {
  const [topSectionData, setTopSectionData] = useState(null);
  const [bottomSectionData, setBottomSectionData] = useState(null);

  useEffect(() => {
    fetchAllData();
    const id = setInterval(fetchAllData, REFRESH_TIME);
    return () => clearInterval(id);
  }, []);

  const fetchAllData = () => {
    fetchTopSectionData();
    fetchBottomSectionData();
  };

  const fetchTopSectionData = async () => {
    const [data, error] = await tankAPI.getTopsectionAPI();
    if (data) {
      setTopSectionData(data);
    }
    if (error) {
      console.error("ERROR", error);
    }
  };

  const fetchBottomSectionData = async () => {
    const [data, error] = await tankAPI.getBottomsectionAPI();
    if (data) {
      setBottomSectionData(data);
    }
    if (error) {
      console.error("ERROR", error);
    }
  };
  return (
    <PageWrapper className="grid place-items-center">
      <Title title="TANK GAUGING" />
      <TankGaugeCardList data={topSectionData} />
      <SVGTankGauging />
      <TankGaugeCardList data={bottomSectionData} />
    </PageWrapper>
  );
}

TankGaugeCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.array
    })
  )
};
function TankGaugeCardList({ data }) {
  return (
    <div className="w-full h-full min-h-8 items-center justify-evenly gap-2 flex flex-wrap">
      {data?.length > 0 &&
        data.map((item, key) => <TankGaugeCard key={key} {...item} />)}
    </div>
  );
}
TankGaugeCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  progressBar: PropTypes.object,
  error: PropTypes.string
};
function TankGaugeCard({ title, data, progressBar, error }) {
  if (!title) {
    return null;
  }
  return (
    <BoxCard className="p-0">
      <CardHeader className="p-3">
        <CardTitle className="text-xs">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 flex gap-2 justify-center">
        {progressBar?.view ? (
          <ProgressVertical
            className="h-[70px] w-1"
            value={progressBar.value}
            min={progressBar.in}
            max={progressBar.max}
          />
        ) : (
          <div className="h-[70px]" />
        )}
        {error && error instanceof Error && (
          <p className="text-xs text-wrap max-w-[15ch]">{error.message}</p>
        )}
        {error && typeof error === "string" && (
          <p className="text-xs text-wrap max-w-[15ch]">{error}</p>
        )}
        {!error && (
          <div className="flex flex-col justify-between text-xs font-semibold">
            {data?.map((item, index) => {
              if (item.data_type === RESPONSE_DATA_TYPE.bool) {
                return <BooleanItem item={item} key={index} />;
              } else {
                return <CharItem item={item} key={index} />;
              }
            })}
          </div>
        )}
      </CardContent>
    </BoxCard>
  );
}

CharItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unit: PropTypes.string
  })
};
function CharItem({ item }) {
  return (
    <div className="w-full flex gap-1">
      {item?.value} <span className="ml-auto">{item?.unit}</span>
    </div>
  );
}

BooleanItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
  })
};
function BooleanItem({ item }) {
  return (
    <div className="w-full flex gap-1">
      <FaCircleDot
        className={`text-sm ${item.value ? "text-success" : "text-destructive"}`}
      />
      <span className="ml-auto">{item?.title}</span>
    </div>
  );
}
