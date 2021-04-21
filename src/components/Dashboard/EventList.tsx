import React, { FC } from "react";
import { useGetAuthenticatedEventsQuery } from "../../generated/graphql";
import { currentEventIdVar, currentEventVar } from "../../graphql/cache";
import Loading from "./../Loading";

interface Props {}

const EventList: FC<Props> = () => {
  const { data } = useGetAuthenticatedEventsQuery();

  if (!data) return <Loading />;

  if (data && data.getAuthenticatedEvents) {
    currentEventIdVar(data.getAuthenticatedEvents[0].id);
    currentEventVar(data.getAuthenticatedEvents[0]);
    return (
      <div>
        <ul>
          {data.getAuthenticatedEvents.map((x) => {
            return (
              <li
                key={x.id}
                onClick={() => {
                  currentEventIdVar(x.id);
                  currentEventVar(x);
                }}
              >
                <p>{x.name}</p>
                <p>{x.location}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return <div>No Events</div>;
};

export default EventList;
