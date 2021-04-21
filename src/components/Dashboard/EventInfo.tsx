import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { useMeQuery } from "../../generated/graphql";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
import AthleteList from "./AthleteList";
interface Props {}

const EventInfo: FC<Props> = () => {
  const { data } = useQuery(GET_CURRENT_EVENT);
  const { data: meResult } = useMeQuery();
  if (data && data.currentEvent && data.currentEvent.creator) {
    console.log(data);
    return (
      <div className='flex ml-4 flex-col w-full mr-8'>
        <div className='flex justify-between'>
          <p>{data.currentEvent.name}</p>
          <p>{data.currentEvent.location}</p>
        </div>
        <div className='justify-items-end flex flex-row justify-between'>
          {data.currentEvent.started === true ? (
            <p>Started</p>
          ) : (
            <p>Start Date: {data.currentEvent.startDate}</p>
          )}
          <p>Contact: {data.currentEvent.creator.email}</p>
        </div>
        <div className='flex justify-between'>
          <button>Register for Event</button>
          {data.currentEvent.creator.id === meResult?.me?.id ? (
            <button>Manage Event</button>
          ) : (
            <div></div>
          )}
        </div>
        <AthleteList />
      </div>
    );
  }
  return <div>No Event Selected</div>;
};

export default EventInfo;
