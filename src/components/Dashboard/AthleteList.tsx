import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
import { Athlete, Event } from "../../generated/graphql";

interface Props {}

const AthleteList: FC<Props> = () => {
  const { data } = useQuery(GET_CURRENT_EVENT);
  if (data && data.currentEvent.athletes) {
    return (
      <div>
        Athletes
        {data.event.athletes.map((athlete: Athlete) => (
          <li>{athlete.user.firstName}</li>
        ))}
      </div>
    );
  }
  return <div>Athlete List: Empty</div>;
};

export default AthleteList;
