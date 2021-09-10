import { Disclosure } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { useGetWorkoutsForTeamQuery } from "../generated/graphql";

import WorkoutIntervalItem from "../components/Dashboard/WorkoutIntervalItem";

const WorkoutsPage: FC = () => {
  return (
    <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
      <div className="flex justify-between items-end px-2 h-16 col-span-full">
        <p className="text-xl font-semibold text-gray-800">
          Strength and Power - 5 x 3
        </p>
        <div className="flex space-x-4">
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Overview
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            History
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Save Changes
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-2 row-span-3">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center text-center">
          <div className="flex flex-col p-2 text-center md:text-left">
            <span className="text-xs text-gray-500">Type</span>
            <p className="text-lg">Strength and Power</p>
          </div>
          <div className="flex flex-col p-2 text-center md:text-right">
            <span className="text-xs text-gray-500">Facality</span>
            <p className="text-lg md:text-right">Bouldering</p>
          </div>
        </div>
        <div className="flex md:justify-between justify-center text-center md:text-left">
          <div className="flex flex-col p-2 md:text-left">
            <span className="text-xs text-gray-500">Sets</span>
            <p className="text-lg">5</p>
          </div>
          <div className="hidden md:flex flex-col p-2 text-center md:text-right">
            <span className="text-xs text-gray-500 text-right">Reps</span>
            <p className="text-lg">3</p>
          </div>
        </div>
        <div className="flex md:justify-between justify-center">
          <div className="flex flex-col p-2 text-left">
            <span className="text-xs text-gray-500 text-left">Created</span>
            <p className="text-lg md:text-left">Sept 1</p>
          </div>
          <div className="flex-col p-2 hidden md:flex">
            <span className="text-xs text-gray-500 md:text-right">
              Completed Sessions
            </span>
            <p className="text-lg text-right">July 30</p>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-start-1 col-span-2 shadow-md rounded-md bg-gray-100 mb-2">
        <div className="p-2">
          <div className="flex justify-center"></div>
          <div className="">
            <p>Recent Activity</p>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-4 row-span-full row-start-2 bg-gray-100 mb-2 rounded-md shadow-md">
        <WorkoutIntervalItem />
      </div>
    </div>
  );
};

export default WorkoutsPage;
