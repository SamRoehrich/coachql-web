import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
import { Athlete } from "../../generated/graphql";

interface Props {}

const AthleteList: FC<Props> = () => {
  const { data } = useQuery(GET_CURRENT_EVENT);
  if (data.currentEvent.athletes) {
    return (
      <div>
        <ul>
          {data.currentEvent.athletes.map((athlete: Athlete) => (
            <li key={athlete.id}>
              <p>{athlete.user.lastName}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="text-center mt-10">
      No Athletes Have Registered For This Event.
    </div>
  );
};

export default AthleteList;
