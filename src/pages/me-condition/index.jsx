import PropTypes from "prop-types";
import { FaCircleDot } from "react-icons/fa6";
import { SVGMEConditionOverview } from "@/components/diagrams/SVGMEConditionOverview";
import propeller from "@/assets/propeller-with-bg_transparent_Craiyon.png";
import propeller2 from "@/assets/svg/propeller-150x150.svg";
import { BoxCard } from "@/components/common/BoxCard";
import propellerBase from "@/assets/svg/propeller-base.svg";
import propellerLeafe from "@/assets/svg/propeller-leaf.svg";
import { RESPONSE_ME_CONDITION_OVERVIEW } from "@/dummy/reponseMEConditionOverview";

MEConditionOverview.propTypes = {};
Table.propTypes = {
  table: PropTypes.array,
  title: PropTypes.string,
  className: PropTypes.string,
};
export function MEConditionOverview() {
  return (
    <div className="me-condition-overview text-sm gap-1 w-full">
      <div className="me-condition-overview__left-section space-y-1 p-1 pr-0">
        <Table table={RESPONSE_ME_CONDITION_OVERVIEW?.fo} title="FO" />
        <Table table={RESPONSE_ME_CONDITION_OVERVIEW?.lo} title="LO" />
        <Table
          table={RESPONSE_ME_CONDITION_OVERVIEW?.bearing}
          title="Bearing"
        />
        <Table
          table={RESPONSE_ME_CONDITION_OVERVIEW?.shaft_power_system}
          title="Shaft Power System"
        />
        <Table table={RESPONSE_ME_CONDITION_OVERVIEW?.omd} title="OMD" />
        <Table table={RESPONSE_ME_CONDITION_OVERVIEW?.air} title="Air" />
      </div>
      <div className="me-condition-overview__middle-section grid relative py-1 gap-4 items-start ">
        <div className="grid grid-cols-5 gap-1 items-start">
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.no1_tc}
            title="No.1 T/C"
            className="col-start-1"
          />
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.no2_tc}
            title="No.2 T/C"
            className="col-start-2"
          />
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.no3_tc}
            title="No.3 T/C"
            className="col-start-3"
          />
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.top_bracing_hyr}
            title="Top Bracing HYR."
          />
        </div>
        <div className="w-full relative pt-6 isolate">
          <SVGMEConditionOverview />
          {/* <div className="scene"> */}
          {/*   <div className="propeller w-[130px]"> */}
          {/*     <img src={propeller2} className="w-full" /> */}
          {/*   </div> */}
          {/* </div> */}
          <div className="scene2 isolate">
            <div className="propeller2 w-[50px] h-[21px]">
              <img className="w-[20px] leaf z-10" src={propellerLeafe} />
              <img className="w-[20px] leaf z-20" src={propellerLeafe} />
              <img className="w-[20px] leaf z-30" src={propellerLeafe} />
              <img className="w-[20px] leaf" src={propellerLeafe} />
              <img
                className="w-[50px] base absolute top-0 "
                src={propellerBase}
              />
            </div>
          </div>
        </div>
        <div className="me-condition-overview__right-section absolute right-0 top-0 bottom-0 space-y-1 p-1 pl-0">
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.cooling}
            title="Cooling"
          />
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.scav_air}
            title="SCAV. AIR"
          />
          <Table
            table={RESPONSE_ME_CONDITION_OVERVIEW?.bms_control_sys}
            title="BMS Control SYS."
          />
          <Table table={RESPONSE_ME_CONDITION_OVERVIEW?.lo} title="LO" />
        </div>
      </div>
    </div>
  );
}

function Table({ table, title, className }) {
  return (
    <BoxCard className={`py-1 px-3 ` + className}>
      {title && (
        <h2 className="text-md font-semibold border-b border-b-primary-800/30">
          {title}
        </h2>
      )}
      {table?.map((item, key) => (
        <div
          key={key}
          className={`flex w-full py-1 ${
            key !== table.length - 1 && " border-b border-b-slate-300/80 "
          }`}
        >
          <p className="mr-1">{item.title}</p>
          {item.status ? (
            <FaCircleDot className="ml-auto text-green-600" />
          ) : (
            <input
              className={`${
                item.value && item?.value > 30000
                  ? "bg-gradient-to-br from-red-600 to-red-800 text-slate-100"
                  : "bg-slate-50 text-slate-700"
              } ml-auto max-w-[4em] px-2 focus:outline-none font-semibold rounded-xl text-center`}
              readOnly
              value={item.value}
              type="text"
            />
          )}
          <p className="ml-1 min-w-[2em]">{item.unit}</p>
        </div>
      ))}
    </BoxCard>
  );
}
