import React, { useEffect, useState } from "react";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function ThrusterCard({ title, data, icon }) {
  return (
    <BoxCard>
      {title && (
        <CardHeader className="p-2">
          <CardTitle className="flex gap-2 items-center">
            <div className="text-xl">{icon}</div>
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-2 pt-0">
        {data?.length > 0 &&
          data?.map((item, key) => (
            <div
              key={key}
              className="text-sm flex w-full border-b border-b-primary/10 py-2 items-center"
            >
              <p>{item.title}</p>
              {item.unit === undefined ? (
                <Switch className="ml-auto" checked={item.value} />
              ) : (
                <>
                  <ReadOnlyInput value={item.value} />
                  <p className="min-w-[3em] text-end">{item.unit}</p>
                </>
              )}
            </div>
          ))}

        {/* <Table> */}
        {/*   <TableBody> */}
        {/*     {data?.length > 0 && */}
        {/*       data?.map((item, key) => ( */}
        {/**/}
        {/**/}
        {/*         <TableRow key={key}> */}
        {/*           <TableCell>{item.title}</TableCell> */}
        {/*           {item.unit === undefined ? ( */}
        {/*             <TableCell className="text-end"> */}
        {/*               <Switch checked={item.value} /> */}
        {/*             </TableCell> */}
        {/*           ) : ( */}
        {/*             <> */}
        {/*               <TableCell className="text-end"> */}
        {/*                 <ReadOnlyInput value={item.value} /> */}
        {/*               </TableCell> */}
        {/*               <TableCell className="text-end"> */}
        {/*                 <p>{item.unit}</p> */}
        {/*               </TableCell> */}
        {/*             </> */}
        {/*           )} */}
        {/*         </TableRow> */}
        {/*       ))} */}
        {/*   </TableBody> */}
        {/* </Table> */}
      </CardContent>
    </BoxCard>
  );
}
