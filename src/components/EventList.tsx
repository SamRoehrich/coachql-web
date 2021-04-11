import React, { FC } from "react";
import { useEventsQuery } from "../generated/graphql";
import Loading from "./Loading";

interface Props {}

const EventList: FC<Props> = () => {
  const { data } = useEventsQuery();

  if (!data) return <Loading />;

  return (
    <div>
      <ul>
        {data.events.map((x) => {
          return (
            <li key={x.id}>
              <p>{x.name}</p>
              <p>{x.location}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventList;
