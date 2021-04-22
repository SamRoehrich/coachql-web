import { FC } from "react";
import AthleteList from "./AthleteList";
import BoulderList from "./BoulderList";
import EventInfo from "./EventInfo";
import { useGetEventQuery } from "../../generated/graphql";
import Loading from "../Loading";
import { currentEventVar, GET_CURRENT_TAB } from "../../graphql/cache";
import { useQuery } from "@apollo/client";
import Tabs from "./Tabs/TabsContainer";

interface Props {
  eventId: string;
}

const EventDashboard: FC<Props> = ({ eventId }) => {
  const { loading, data: eventQuery } = useGetEventQuery({
    variables: {
      eventId,
    },
  });
  const { data: currentTab } = useQuery(GET_CURRENT_TAB);

  if (loading) return <Loading />;
  if (eventQuery && eventQuery.event) {
    currentEventVar(eventQuery.event);
    return (
      <div className='flex flex-col'>
        <EventInfo />
        <div className='flex'>
          <div className='h-12 flex items-start space-x-8'>
            <button>Stacks</button>
            <button>Athletes</button>
            <button>Boulders</button>
          </div>
          <Tabs />
        </div>
      </div>
    );
  }
  return <div>No Event with the id: {eventId}</div>;
};

export default EventDashboard;
