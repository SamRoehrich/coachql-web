import { FC, useState } from "react";
import EventInfo from "./EventInfo";
import { useGetEventQuery } from "../../generated/graphql";
import Loading from "../Loading";
import { currentEventVar } from "../../graphql/cache";
import StackTab from "./Tabs/StackTab";
import BouldersTab from "./Tabs/BoudlersTab";
import AthletesTab from "./Tabs/AthletesTab";
import { useParams } from "react-router";

interface Params {
  userId: string;
  eventId: string;
}

const EventDashboard: FC = () => {
  const { eventId } = useParams<Params>();
  const { loading, data } = useGetEventQuery({
    variables: {
      eventId,
    },
  });
  const [currentTab, setCurrentTab] = useState(<StackTab eventId={eventId} />);
  const handleTabClick = (tab: string) => {
    switch (tab) {
      case "stacks":
        setCurrentTab(<StackTab eventId={eventId} />);
        break;
      case "boulders":
        setCurrentTab(<BouldersTab />);
        break;
      case "athletes":
        setCurrentTab(<AthletesTab />);
        break;
      default:
        setCurrentTab(<StackTab eventId={eventId} />);
        break;
    }
  };
  if (loading) return <Loading />;
  if (data && data.event) {
    currentEventVar(data.event);
    return (
      <div className="flex flex-col max-w-full">
        <div className="max-w-full m-8">
          <EventInfo />
        </div>
        <div className="flex flex-col max-w-full m-8">
          <div className="h-12 flex items-center justify-center space-x-16 -mt-5">
            <button
              className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-lg hover:border-none shadow-sm active:border-blue-300"
              onClick={() => handleTabClick("stacks")}
            >
              Stacks
            </button>
            <button
              className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-lg hover:border-none shadow-sm"
              onClick={() => handleTabClick("athletes")}
            >
              Athletes
            </button>
            <button
              className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-lg hover:border-none shadow-sm"
              onClick={() => handleTabClick("boulders")}
            >
              Boulders
            </button>
            <button className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-lg hover:border-none shadow-sm">
              Scoring
            </button>
          </div>
          {currentTab}
        </div>
      </div>
    );
  }
  if (data?.event === null) {
    return <div>No Event with the id: {eventId}</div>;
  }
  return <div>Something went wrong</div>;
};

export default EventDashboard;
