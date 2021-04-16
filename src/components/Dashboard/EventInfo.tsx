import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
interface Props {}

const EventInfo: FC<Props> = () => {
  return (
    <div className="flex ml-4">
      <div className="flex justify-center ">
        <p>Event Name</p>
        <p>Event Location</p>
        <label>Public</label>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default EventInfo;
