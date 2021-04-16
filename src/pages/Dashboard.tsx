import { useQuery } from "@apollo/client";
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import AthleteList from "../components/Dashboard/AthleteList";
import BoulderList from "../components/Dashboard/BoulderList";
import EventInfo from "../components/Dashboard/EventInfo";
import { GET_CURRENT_EVENT } from "../graphql/cache";

interface Props {}

const Dashboard: FC<Props> = () => {
  const { data } = useQuery(GET_CURRENT_EVENT);
  const location = useLocation();
  console.log(location);
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
