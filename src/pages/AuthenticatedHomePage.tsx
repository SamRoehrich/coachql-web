import { FC } from "react";
import { useHistory } from "react-router";
import EventInfo from "../components/Dashboard/EventInfo";
import EventList from "../components/Dashboard/EventList";
import Loading from "../components/Loading";
import { useMeQuery } from "../generated/graphql";

const AuthenticateHomePage: FC = (props) => {
  const { data, loading, error } = useMeQuery();
  let history = useHistory();
  const handleCreateEventClick = () => {
    history.push("/event/create");
  };
  if (loading) {
    return <Loading />;
  }
  if (!loading && data && data.me === null) {
    history.push("/");
  }

  if (error) {
    history.push("/");
    return null;
  }

  if (data && data.me) {
    return (
      <div className="flex m-8 max-w-full flex-col">
        <div className="flex justify-between w-full">
          <button onClick={handleCreateEventClick}>Create Event</button>
          <input placeholder="Search For Event" />
        </div>
        <div className="flex flex-row space-x-10">
          <EventList />
          <EventInfo />
        </div>
      </div>
    );
  }
  return null;
};

export default AuthenticateHomePage;
