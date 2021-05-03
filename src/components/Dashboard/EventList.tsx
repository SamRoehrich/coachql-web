import { FC } from "react";
import { useEventsQuery } from "../../generated/graphql";
import { currentEventIdVar, currentEventVar } from "../../graphql/cache";
import Loading from "./../Loading";

interface Props {}

const EventList: FC<Props> = () => {
  const { data, loading } = useEventsQuery();
  if (loading) return <Loading />;
  if (data)
    return (
      <div className="w-1/2 mt-5">
        <ul>
          {data?.events.map((e) => (
            <li
              key={e.id}
              className="h-20 flex items-center hover:bg-gray-300 justify-between cursor-pointer"
              onClick={() => {
                currentEventIdVar(e.id);
                currentEventVar(e);
              }}
            >
              <p>{e.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );

  return <div>Loading...</div>;
};

export default EventList;
