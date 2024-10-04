import { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { SVGPowerManagementSystem } from "@/components/diagrams/SVGPowerManagementSystem";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { RESPONSE_PW_SYSTEM } from "@/dummy/responsePMSystem";
import SVGPmsComponent from "./svg-pms-component";

PowerManagementSystemOverview.propTypes = {};

export function PowerManagementSystemOverview() {
  const [engineStatus, setEngineStatus] = useState(
    RESPONSE_PW_SYSTEM?.engineStatus
  );
  const [midBoxValues, setMidBoxValue] = useState(
    RESPONSE_PW_SYSTEM?.midBoxValues
  );
  const [dg1Alarms, setDg1Alarms] = useState(
    RESPONSE_PW_SYSTEM?.alarmStatus?.dg1
  );
  const [dg2Alarms, setDg2Alarms] = useState(
    RESPONSE_PW_SYSTEM?.alarmStatus?.dg2
  );
  const [dg3Alarms, setDg3Alarms] = useState(
    RESPONSE_PW_SYSTEM?.alarmStatus?.dg3
  );
  const [sg1Alarms, setSg1Alarms] = useState(
    RESPONSE_PW_SYSTEM?.alarmStatus?.sg1
  );
  const [sg2Alarms, setSg2Alarms] = useState(
    RESPONSE_PW_SYSTEM?.alarmStatus?.sg2
  );

  return (
    <div className="p-2 pt-4 relative w-full flex items-start">
      <SVGPmsComponent />
      {/* <div className="absolute top-[18%] left-[10%]"> */}
      {/*   <PTable data={dg1Alarms} /> */}
      {/* </div> */}
      {/* <div className="absolute top-[18%] right-[43%] 2xl:right-[45%]"> */}
      {/*   <PTable data={dg2Alarms} /> */}
      {/* </div> */}
      {/* <div className="absolute top-[18%] right-[10%]"> */}
      {/*   <PTable data={dg3Alarms} /> */}
      {/* </div> */}
      {/* <div className="absolute bottom-[18%] left-[30%]"> */}
      {/*   <PTable data={sg1Alarms} /> */}
      {/* </div> */}
      {/* <div className="absolute bottom-[18%] right-[30%]"> */}
      {/*   <PTable data={sg2Alarms} /> */}
      {/* </div> */}
      {/* <SVGPowerManagementSystem */}
      {/*   midBoxValues={midBoxValues} */}
      {/*   engineStatus={engineStatus} */}
      {/* /> */}
    </div>
  );
}

PTable.propTypes = {
  data: PropTypes.array
};

function PTable({ data }) {
  return (
    <Table>
      <TableBody className="backdrop-blur">
        {data?.map((item, key) => (
          <TableRow key={key}>
            <TableCell className="text-xs font-semibold">
              {item?.title}
            </TableCell>
            <TableCell className="text-right">
              <FaCircleDot
                className={`${item?.status ? "text-success" : "text-destructive"} text-md`}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
