import React, { FC } from "react";
import EventList from "../components/EventList";

interface Props {}

const HomePage: FC<Props> = () => {
  return (
    <div className="m-4">
      <div className="w-1/4">
        <EventList />
      </div>
    </div>
  );
};

export default HomePage;
