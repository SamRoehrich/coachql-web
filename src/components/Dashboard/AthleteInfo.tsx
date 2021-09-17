import { Disclosure } from "@headlessui/react";
import { ChartPieIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { classNames } from "../../utils/classNames";

const trainingLog = [
  {
    name: "5 by 3",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Bar Core",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Comp Wall Session",
    type: "Competition Training",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Pull Up 3",
    type: "Conditioning",
    percent: "100%",
    rpe: 6,
  },
  {
    name: "Shoulder Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Hip Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 2,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Comp Wall Session",
    type: "Competition Training",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Pull Up 3",
    type: "Conditioning",
    percent: "100%",
    rpe: 6,
  },
  {
    name: "Shoulder Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 8,
  },
];

const AthleteInfo: FC = () => {
  return (
    <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
      <div className="flex justify-between items-end px-2 h-16 col-span-full">
        <p className="text-xl font-semibold text-gray-800">
          Teague Hendrix - Comp
        </p>
        <div className="flex space-x-4">
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            <p className="text-gray-800 font-medium">Overview</p>
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Training
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Metrics
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Notes
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-2 row-span-2">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center text-center">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Age</span>
            <p className="text-lg">17</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Catagory</span>
            <p className="text-lg md:text-right">JR</p>
          </div>
        </div>
        <div className="flex md:justify-between justify-center text-center">
          <div className="flex flex-col p-2 md:text-left">
            <span className="text-xs text-gray-500">Status</span>
            <p className="text-lg">Active</p>
          </div>
          <div className="hidden md:flex flex-col p-2">
            <span className="text-xs text-gray-500 text-right">Email</span>
            <div className="flex space-x-2">
              <p className="text-lg">Parent</p>
              <p className="text-lg">Athlete</p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-between justify-center text-center">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500 md:text-right">
              Last Session
            </span>
            <p className="text-lg md:text-left">Sept 1</p>
          </div>
          <div className="flex-col p-2 hidden md:flex">
            <span className="text-xs text-gray-500 md:text-right">
              Last Assessment
            </span>
            <p className="text-lg text-right">July 30</p>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-start-1 col-span-2 shadow-md rounded-md bg-gray-100 mb-2">
        <div className="">
          <div className="flex justify-center">
            <ChartPieIcon className="h-1/2 w-1/2" />
          </div>
          <div className="">
            <p>Phase</p>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-span-4 row-span-4 row-start-2 bg-gray-100 mb-2 rounded-md shadow-md max-h-full overflow-auto">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <div className="">
                <Disclosure.Button className="flex justify-between w-full h-12 items-baseline p-1">
                  <span>Training Logs</span>
                </Disclosure.Button>
                <Disclosure.Panel className="">
                  {trainingLog.map((item, idx) => (
                    <div
                      key={idx}
                      className={classNames(
                        idx % 2 === 0 ? "bg-white" : "",
                        "h-14 grid grid-cols-8 p-1 grid-rows-2 gap-x-4 w-full"
                      )}
                    >
                      <div className="flex flex-col col-span-3">
                        <span className="text-xs text-gray-500">Name</span>
                        <p className="text-sm">{item.name}</p>
                      </div>
                      <div className="flex flex-col col-span-3">
                        <span className="text-xs text-gray-500">Type</span>
                        <p className="text-sm">{item.type}</p>
                      </div>
                      <div className="flex-col sm:col-span-2 md:col-span-1 md:flex md:text-left text-right">
                        <span className="text-xs text-gray-500">Days Ago</span>
                        <p className="text-sm ">{item.rpe}</p>
                      </div>
                      <div className="hidden md:flex flex-col col-span-2 text-right md:col-span-1">
                        <span className="text-xs text-gray-500">Percent</span>
                        <p className="text-sm">{item.percent}</p>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default AthleteInfo;