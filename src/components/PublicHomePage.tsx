import React, { FC } from "react";
import EventList from "./EventList";

interface Props {}

const PublicHomePage: FC<Props> = () => {
  return (
    <div>
      <EventList />
    </div>
  );
};

export default PublicHomePage;
