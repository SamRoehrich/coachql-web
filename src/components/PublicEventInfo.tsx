import { FC } from "react";
import { useParams } from "react-router";
import { useGetEventQuery } from "../generated/graphql";
import Loading from "./Loading";

interface Params {
  eventId: string;
}

const PublicEventInfo: FC = () => {
  const params = useParams<Params>();
  const { data, loading } = useGetEventQuery({
    variables: {
      eventId: params.eventId,
    },
  });
  if (loading) return <Loading />;
  if (data) {
    return (
      <div className="flex flex-col">
        <p>{data.event.name}</p>
        <p>{data.event.location}</p>
        <p>{data.event.startDate}</p>
        <p>Contact: {data.event.creator.email}</p>
      </div>
    );
  }
  return <p>No Event</p>;
};

export default PublicEventInfo;
