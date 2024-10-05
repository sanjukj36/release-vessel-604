import { useEffect, useState } from "react";
import { BsFan } from "react-icons/bs";
import { CgGhost } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import PropTypes from "prop-types";
import thruster from "@/assets/svg/thruster.svg";
import { BoxCard } from "@/components/common/BoxCard";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { RESPONSE_BOW_THRUSTER_OVERVIEW } from "@/dummy/responseBowThruster";

BowThrusterOverview.propTypes = {};

const b1PitchAlarms = [];

const b2PitchAlarms = [];

export function BowThrusterOverview() {
  const [b1ControlSystemAlamrs, setB1ControlSystemAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b1ControlSystemAlamrs
  );
  const [b2ControlSystemAlamrs, setB2ControlSystemAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b2ControlSystemAlamrs
  );
  const [b2MotorAlamrs, setB2MotorAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b2MotorAlamrs
  );
  const [b1MotorAlamrs, setB1MotorAlamrs] = useState(
    RESPONSE_BOW_THRUSTER_OVERVIEW?.b1MotorAlamrs
  );

  return (
    <PageWrapper className="grid grid-cols-[3fr_1fr_3fr]">
      <BowThrusterComponent
        title={"Bow Thruster-1"}
        controlSystemAlarms={b1ControlSystemAlamrs}
        motorAlarms={b1MotorAlamrs}
        pitchAlarms={b1PitchAlarms}
      />
      <div></div>
      <BowThrusterComponent
        title={"Bow Thruster-2"}
        controlSystemAlarms={b2ControlSystemAlamrs}
        motorAlarms={b2MotorAlamrs}
        pitchAlarms={b2PitchAlarms}
      />
    </PageWrapper>
  );
}

function BowThrusterComponent({
  controlSystemAlarms,
  motorAlarms,
  pitchAlarms,
  title
}) {
  return (
    <BoxCard variant="secondary" className="bg-transparent border-none">
      <CardHeader className="items-center gap-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="w-[120px]">
          <img src={thruster} alt="thruster" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {controlSystemAlarms?.length > 0 && (
          <ThrusterCard
            title="Control System Alarms"
            data={controlSystemAlarms}
            icon=<IoSettings />
          />
        )}
        {motorAlarms?.length > 0 && (
          <ThrusterCard
            title="Motor Alarms"
            data={motorAlarms}
            icon=<BsFan />
          />
        )}
        {pitchAlarms?.length > 0 && (
          <ThrusterCard
            title="Pitch Alarms"
            data={pitchAlarms}
            icon=<CgGhost />
          />
        )}
      </CardContent>
    </BoxCard>
  );
}

export function ThrusterCard({ title, data, icon }) {
  return (
    <BoxCard>
      <CardHeader className="p-4">
        <CardTitle className="flex gap-2 items-center">
          <div className="text-xl">{icon}</div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Table>
          <TableBody>
            {data?.length > 0 &&
              data?.map((item, key) => (
                <TableRow key={key}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="text-end">
                    <Switch checked={item.status} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </BoxCard>
  );
}
