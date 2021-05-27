import { FC } from "react";
import { NavLink } from "react-router-dom";

const AthleteInfo: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="border border-b-2 border-gray-100 h-16 p-4 flex items-center justify-between">
        <p className="text-gray-900 font-semibold text-2xl">Athlete Name</p>
        <p className="text-gray-900 font-semibold text-2xl">17</p>
      </div>
      <div className="h-1/4 border bg-yellow-300 flex justify-between p-4">
        <div className="flex flex-col justify-between">
          <p>Parent Email</p>
          <p>Parent Phone</p>
          <p>USAC Number</p>
        </div>
        <div className="flex flex-col justify-between">
          <p>Sub Team</p>
          <p>Age Catagory</p>
          <p>Gender</p>
        </div>
      </div>
      <div className="h-3/4 bg-gray-100">
        <div className="flex space-x-4 border-b">
          <NavLink
            to="#"
            className="border border-b-0 p-2 rounded-t-xl ml-1 shadow-sm hover:shadow-md"
          >
            Activity
          </NavLink>
          <NavLink
            to="#"
            className="border border-b-0 p-2 rounded-t-xl ml-1 shadow-sm hover:shadow-md"
          >
            Asessments
          </NavLink>
          <NavLink
            to="#"
            className="border border-b-0 p-2 rounded-t-xl ml-1 shadow-sm hover:shadow-md"
          >
            Analytics
          </NavLink>
          <NavLink
            to="#"
            className="border border-b-0 p-2 rounded-t-xl ml-1 shadow-sm hover:shadow-md"
          >
            Sessions
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AthleteInfo;
