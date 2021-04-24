import { FC, useState } from "react";
import EventInfo from "./EventInfo";
import { useGetEventQuery } from "../../generated/graphql";
import Loading from "../Loading";
import { currentEventVar } from "../../graphql/cache";
import StackTab from "./Tabs/StackTab";
import BouldersTab from "./Tabs/BoudlersTab";
import AthletesTab from "./Tabs/AthletesTab";

interface Props {
  eventId: string;
}

const EventDashboard: FC<Props> = ({ eventId }) => {
  const { loading, data: eventQuery } = useGetEventQuery({
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
  if (eventQuery && eventQuery.event) {
    currentEventVar(eventQuery.event);
    return (
      <div className="flex flex-col">
        <EventInfo />
        <div className="flex flex-col">
          <div className="h-12 flex items-start space-x-8">
            <button onClick={() => handleTabClick("stacks")}>Stacks</button>
            <button onClick={() => handleTabClick("athletes")}>Athletes</button>
            <button onClick={() => handleTabClick("boulders")}>Boulders</button>
          </div>
          {currentTab}
        </div>
      </div>
    );
  }
  return <div>No Event with the id: {eventId}</div>;
};

export default EventDashboard;
