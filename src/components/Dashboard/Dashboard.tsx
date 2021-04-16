import { FC } from "react";
import AthleteList from "./AthleteList";
import BoulderList from "./BoulderList";
import EventInfo from "./EventInfo";

interface Props {}

const Dashboard: FC<Props> = () => {
  return (
    <div className="flex flex-col">
      <EventInfo />
      <div className="flex">
        <BoulderList />
        <AthleteList />
      </div>
    </div>
  );
};

export default Dashboard;
