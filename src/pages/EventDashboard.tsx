import { FC } from "react";
import { useParams } from "react-router";
import EventDashboard from "../components/Dashboard/EventDashboard";
import Loading from "../components/Loading";
import { useMeQuery } from "../generated/graphql";

interface Params {
  userId: string;
  eventId: string;
}

const EventPage: FC = (props) => {
  const { eventId, userId } = useParams<Params>();
  const { data, loading } = useMeQuery();

  if (loading) return <Loading />;

  if (data && data.me) {
    if (data.me.id.toString() === userId) {
      return <EventDashboard eventId={eventId} />;
    }
  }

  return <div>Not Authenticated</div>;
};

export default EventPage;
