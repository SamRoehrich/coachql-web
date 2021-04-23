import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { useMeQuery } from "../../generated/graphql";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
interface Props {}

const EventInfo: FC<Props> = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = useQuery(GET_CURRENT_EVENT);
  const { data: meResult } = useMeQuery();
  if (data && data.currentEvent && data.currentEvent.creator && meResult?.me) {
    const handleManageClick = () => {
      history.push(
        `/event/dashboard/${data.currentEvent.id}/${meResult?.me?.id}`
      );
    };
    return (
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p>{data.currentEvent.name}</p>
          <p>{data.currentEvent.location}</p>
        </div>
        <div className="justify-items-end flex flex-row justify-between">
          {data.currentEvent.started === true ? (
            <p>Started</p>
          ) : (
            <p>Start Date: {data.currentEvent.startDate}</p>
          )}
          <p>Contact: {data.currentEvent.creator.email}</p>
        </div>
        <div className="flex justify-between">
          {location.pathname.includes("dashboard") ? (
            <button>Scoring</button>
          ) : data.currentEvent.creator.id === meResult?.me?.id ? (
            <button onClick={handleManageClick}>Manage Event</button>
          ) : (
            <button>Register for Event</button>
          )}
        </div>
      </div>
    );
  }
  return <div>No Event Selected</div>;
};

export default EventInfo;
