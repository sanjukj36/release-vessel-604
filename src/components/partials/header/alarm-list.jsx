import { IoIosWarning } from "react-icons/io";

export function AlarmList() {
  return (
    <div className="w-full flex flex-col">
      {[1, 2, 3, 4, 5, 6].map((item, key) => (
        <div
          key={key}
          className="shadow-3d py-1 custom-icon h-full flex items-center gap-2"
        >
          <div className="px-2">
            <IoIosWarning className="text-destructive text-2xl" />
          </div>
          <div className="flex gap-6 text-sm items-center">
            <p>12:35:52 17-05-2024</p>
            <p className="font-semibold">Alert warning</p>
          </div>
        </div>
      ))}
    </div>
  );
}
