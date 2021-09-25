import { FC } from "react";
import Monthly from "../Calendar/Monthly";

const AthleteCalendar: FC = () => {
  return (
    <div className="col-start-4 col-span-3 row-span-3 row-start-2 bg-gray-100 rounded-md shadow-md overflow-auto">
      <Monthly />
    </div>
  );
};

export default AthleteCalendar;
