import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { useMeQuery } from "../../generated/graphql";
import { currentEventVar, GET_CURRENT_EVENT } from "../../graphql/cache";
import Loading from "../Loading";
import AthleteList from "./AthleteList";
interface Props {}

const EventInfo: FC<Props> = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = useQuery(GET_CURRENT_EVENT);
  const { data: meResult, loading } = useMeQuery();
  console.log(data);
  if (loading) return <Loading />;
  if (data && data.currentEvent && data.currentEvent.id) {
    const handleManageClick = () => {
      history.push(
        `/event/dashboard/${data.currentEvent.id}/${meResult?.me?.id}`
      );
    };
    const handleRegistrationLinkClick = async () => {
      await navigator.clipboard.writeText(
        "/event/register/" + data.currentEvent.id
      );
      alert("Link copied to clipboard.");
    };
    return (
      <div className="flex flex-col w-1/2">
        <div className="flex justify-between mb-4 mt-11">
          <p>{data.currentEvent.name}</p>
          <p>Location: {data.currentEvent.location}</p>
        </div>
        <div className="justify-items-end flex flex-row justify-between mb-4">
          {data.currentEvent.started === true ? (
            <p>Started</p>
          ) : (
            <p>Start Date: {data.currentEvent.date}</p>
          )}
          <p>Contact: {data.currentEvent.creator.email}</p>
        </div>
        <div className="flex justify-between">
          <p>Format: {data.currentEvent.format}</p>
          <p>Number of boulders: {data.currentEvent.numBoulders}</p>
        </div>
        <div className="flex justify-between">
          {location.pathname.includes("dashboard") ? (
            <button>Scoring</button>
          ) : data.currentEvent.creator.id === meResult?.me?.id ? (
            <>
              <button onClick={handleManageClick}>Manage Event</button>
              <button onClick={handleRegistrationLinkClick}>
                Registration Link
              </button>
            </>
          ) : (
            <button className="w-full hover:bg-gray-300 cursor-pointer h-12">
              Register for Event
            </button>
          )}
        </div>
        <div>
          <AthleteList />
        </div>
      </div>
    );
  }
  return <div>No Event Selected</div>;
};

export default EventInfo;
