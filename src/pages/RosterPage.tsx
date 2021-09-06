import { ChartPieIcon } from "@heroicons/react/outline";
import { FC } from "react";

const RosterPage: FC = () => {
  return (
    <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
      <div className="flex justify-between items-end px-2 h-16 col-span-full">
        <p>Teague Hendrix</p>
        <div className="flex space-x-4 p-2">
          <button>Overview</button>
          <button>Training</button>
          <button>Metrics</button>
          <button>Notes</button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-2 row-span-3">
        <div className="flex justify-between">
          <div className="flex flex-col p-2 w-full">
            <span className="text-xs text-gray-500">Age</span>
            <p className="text-lg">17</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Catagory</span>
            <p className="text-lg text-right">JR</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Status</span>
            <p className="text-lg">Active</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500 text-right">Email</span>
            <div className="flex space-x-2">
              <p className="text-lg">Parent</p>
              <p className="text-lg">Athlete</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Last Session</span>
            <p className="text-lg">Sept 1</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Last Assessment</span>
            <p className="text-lg text-right">July 30</p>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-start-1 col-span-2 shadow-md rounded-md bg-gray-100 mb-2">
        <div className="p-2">
          <p>Stats</p>
          <div className="flex justify-center">
            <ChartPieIcon className="h-1/2 w-1/2" />
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-4 row-span-full row-start-2 bg-gray-100 mb-2 rounded-md shadow-md"></div>
    </div>
  );
};

export default RosterPage;
