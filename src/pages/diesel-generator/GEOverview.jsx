import PropTypes from "prop-types";
import { useState } from "react";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { Switch } from "@/components/ui/switch";
import { FaCircleDot } from "react-icons/fa6";
import { RESPONSE_DG_OVERVIEW } from "@/dummy/responseDgOverview";

GEOverview.propTypes = {};
GETable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export function GEOverview() {
  const [tableValueData, setTableValueData] = useState(
    RESPONSE_DG_OVERVIEW?.tableValueData,
  );
  const [tableBooleanData, setTableBooleanData] = useState(
    RESPONSE_DG_OVERVIEW?.tableBooleanData,
  );

  return (
    <div className="ge-overview w-full p-2 gap-2">
      <GETable title={"NO.1 G/E"} data={RESPONSE_DG_OVERVIEW?.dg1} />
      <GETable title={"NO.2 G/E"} data={RESPONSE_DG_OVERVIEW?.dg1} />
      <GETable title={"NO.3 G/E"} data={RESPONSE_DG_OVERVIEW?.dg1} />
      <GETable title={"NO.4 G/E"} data={RESPONSE_DG_OVERVIEW?.dg1} />
      <DetailsTable valueData={tableValueData} booleanData={tableBooleanData} />
    </div>
  );
}

function GETable({ title, data }) {
  return (
    <BoxCard className="p-2 flex flex-col gap-3 text-xs text-primary">
      <div className="grid grid-cols-3 divide-x">
        <div className="flex flex-col gap-2 px-2 pl-0">
          <div className="max-w-max flex items-center gap-2">
            <h2 className="p-1 pl-0 font-semibold text-lg text-primary">
              {title}
            </h2>
            <Switch checked={data?.status} />
          </div>
          {data?.row1Data?.col1?.map((item, index) => (
            <div key={index} className="flex gap-2 mt-auto p-1 pl-0">
              <p>{item?.title}</p>
              <ReadOnlyInput value={item?.value} />
              <p className="ml-1 min-w-[4em] text-end">{item?.unit}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1 mt-auto p-1 px-2">
          {data?.row1Data?.col2?.map((item, index) => (
            <div key={index} className="flex gap-2">
              <p>{item?.title}</p>
              <ReadOnlyInput value={item?.value} />
              <p className="ml-1 min-w-[4em] text-end">{item?.unit}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 p-1 px-2">
          <p>{data?.row1Data?.col3?.title}</p>
          <div className="flex-1 space-y-1">
            {data?.row1Data?.col3?.data?.map((item, index) => (
              <div key={index} className="flex gap-1 justify-evenly">
                <p className="">{item?.title}</p>
                <ReadOnlyInput className="ml-0" value={item?.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between py-1">
        <p>{data?.row2Data?.title} : </p>
        {data?.row2Data?.data?.map((item, index) => {
          if (item?.value === undefined) {
            return (
              <div key={index} className="flex gap-1 items-center">
                <FaCircleDot
                  className={item?.status ? "text-success" : "text-destructive"}
                />
                <p>{item?.title} </p>
              </div>
            );
          }
          return (
            <div key={index} className="flex gap-1">
              <p className="">{item?.title}</p>
              <ReadOnlyInput className="ml-0" value={item?.value} />
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <table className="w-full overflow-hidden">
          <thead>
            <tr className="font-semibold rounded-md divide-x divide-y">
              <td className="px-1 border">ITEMS</td>
              <td className="text-center px-1">NO.1</td>
              <td className="text-center px-1">NO.2</td>
              <td className="text-center px-1">NO.3</td>
              <td className="text-center px-1">NO.4</td>
              <td className="text-center px-1">NO.5</td>
              <td className="text-center px-1">NO.6</td>
              <td className="text-center px-1">NO.7</td>
              <td className="text-center px-1">NO.8</td>
            </tr>
          </thead>
          <tbody>
            {data?.row3Data?.map((item, index) => (
              <tr key={index} className="divide-x divide-y">
                <td className="px-1 p-1 border">{item?.title} </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_1?.value}
                    variant={
                      item?.no_1?.value > item?.no_1?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_2?.value}
                    variant={
                      item?.no_2?.value > item?.no_2?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_3?.value}
                    variant={
                      item?.no_3?.value > item?.no_3?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_4?.value}
                    variant={
                      item?.no_4?.value > item?.no_4?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_5?.value}
                    variant={
                      item?.no_5?.value > item?.no_5?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_6?.value}
                    variant={
                      item?.no_6?.value > item?.no_6?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_7?.value}
                    variant={
                      item?.no_7?.value > item?.no_7?.limit ? "danger" : ""
                    }
                  />
                </td>
                <td className="text-center py-1 px-1">
                  <ReadOnlyInput
                    value={item?.no_8?.value}
                    variant={
                      item?.no_8?.value > item?.no_8?.limit ? "danger" : ""
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BoxCard>
  );
}

function DetailsTable({ valueData, booleanData }) {
  return (
    <BoxCard className="text-xs flex flex-col gap-2 p-0">
      <table className="w-full h-full border-separate border-spacing-y-1 py-2 px-2">
        <thead>
          <tr className="font-medium">
            <td className="pl-2 border-b">ITEMS</td>
            <td className="border-b">NO.1</td>
            <td className="border-b">NO.2</td>
            <td className="border-b">NO.3</td>
            <td className="border-b px-1">NO.4</td>
          </tr>
        </thead>
        <tbody className="max-h-max gap-2">
          {valueData.map((item, key) => (
            <tr key={key} className="">
              <td className=" pl-2">{item.title}</td>
              <td className=" text-center">
                <div className="flex gap-2 items-center justify-start">
                  <FaCircleDot
                    className={`text-sm ${item.no_1.status ? "text-success" : "text-destructive"}`}
                  />
                  <p>{item.no_1.text}</p>
                </div>
              </td>
              <td className="text-center">
                <div className="flex gap-2 items-center justify-start">
                  <FaCircleDot
                    className={`text-sm ${item.no_2.status ? "text-success" : "text-destructive"}`}
                  />
                  <p>{item.no_2.text}</p>
                </div>
              </td>
              <td className="text-center">
                <div className="flex gap-2 items-center justify-start">
                  <FaCircleDot
                    className={`text-sm ${item.no_3.status ? "text-success" : "text-destructive"}`}
                  />
                  <p>{item.no_3.text}</p>
                </div>
              </td>
              <td className="text-center rounded-r-md">
                <div className="flex gap-2 items-center justify-start">
                  <FaCircleDot
                    className={`text-sm ${item.no_4.status ? "text-success" : "text-destructive"}`}
                  />
                  <p>{item.no_4.text}</p>
                </div>
              </td>
            </tr>
          ))}
          {booleanData?.map((item, key) => (
            <tr key={key} className="">
              <td className="rounded-l-md pl-2 flex">
                {item.title}
                <span className="ml-auto mr-5">{item.unit}</span>
              </td>
              <td className="text-start">
                <ReadOnlyInput
                  value={item.no_1}
                  variant={item?.no_1 > item?.limit ? "danger" : "default"}
                />
              </td>
              <td className="text-start">
                <ReadOnlyInput
                  value={item.no_2}
                  variant={item?.no_2 > item?.limit ? "danger" : "default"}
                />
              </td>
              <td className="text-start">
                <ReadOnlyInput
                  value={item.no_3}
                  variant={item?.no_3 > item?.limit ? "danger" : "default"}
                />
              </td>
              <td className="text-start">
                <ReadOnlyInput
                  value={item.no_4}
                  variant={item?.no_4 > item?.limit ? "danger" : "default"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BoxCard>
  );
}
