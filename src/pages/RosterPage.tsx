import { ChartPieIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../utils/classNames";
import AthleteInfo from "../components/Dashboard/AthleteInfo";
import AthleteList from "../components/Dashboard/AthleteList";

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

const RosterPage: FC = () => {
  return (
    <div className="flex w-full">
      <AthleteList />
      <AthleteInfo />
    </div>
  );
};

export default RosterPage;
