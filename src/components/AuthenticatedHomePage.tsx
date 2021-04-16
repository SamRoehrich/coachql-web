import { FC } from "react";
import EventInfo from "./Dashboard/EventInfo";
import EventList from "./EventList";

interface Props {}

const AuthenticatedHomePage: FC<Props> = () => {
  return (
    <div className="flex w-full">
      <EventList />
    </div>
  );
};

export default AuthenticatedHomePage;
