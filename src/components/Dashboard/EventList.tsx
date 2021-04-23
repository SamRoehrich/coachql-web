import { FC } from "react";
import { useHistory } from "react-router";
import { useGetAuthenticatedEventsQuery } from "../../generated/graphql";
import { currentEventIdVar, currentEventVar } from "../../graphql/cache";
import Loading from "./../Loading";

interface Props {}

const EventList: FC<Props> = () => {
  const history = useHistory();
  const { data, loading } = useGetAuthenticatedEventsQuery({
    fetchPolicy: "network-only",
  });

  const handleCreateEventClick = () => {
    history.push("/events/create");
  };

  if (loading) return <Loading />;
  if (
    data &&
    data.getAuthenticatedEvents &&
    data.getAuthenticatedEvents.length > 0
  ) {
    currentEventIdVar(data.getAuthenticatedEvents[0].id);
    currentEventVar(data.getAuthenticatedEvents[0]);
    return (
      <div className="ml-8">
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
        <button onClick={handleCreateEventClick}>Create Event</button>
      </div>
    );
  }
  return (
    <div>
      <p>No Events</p>
      <button onClick={handleCreateEventClick}>Create Event</button>
    </div>
  );
};

export default EventList;
