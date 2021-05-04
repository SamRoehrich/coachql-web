import { FC, MouseEventHandler, useState } from "react";
import EventInfo from "./EventInfo";
import { useGetEventQuery } from "../../generated/graphql";
import Loading from "../Loading";
import { currentEventVar } from "../../graphql/cache";
import StackTab from "./Tabs/StackTab";
import BouldersTab from "./Tabs/BoudlersTab";
import AthletesTab from "./Tabs/AthletesTab";
import { useHistory, useParams } from "react-router";
import { MainButton } from "../Styled/Buttons";
import GeneralTab from "./Tabs/GeneralTab";

interface Params {
  userId: string;
  eventId: string;
}

const EventDashboard: FC = () => {
  const { eventId } = useParams<Params>();
  const history = useHistory();
  const { loading, data } = useGetEventQuery({
    variables: {
      eventId,
    },
  });
  const [currentTab, setCurrentTab] = useState(<GeneralTab />);
  const handleScoringClick = () => window.open("/scoring/dashboard/" + eventId);
  const handleTabClick = (tab: string) => {
    switch (tab) {
      case "general":
        setCurrentTab(<GeneralTab />);
        break;
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
        <div className="flex flex-col max-w-full m-8">
          <div className="h-12 flex items-center justify-center space-x-16 -mt-5">
            <div onClick={() => handleTabClick("general")}>
              <MainButton text="General" />
            </div>
            <div onClick={() => handleTabClick("stacks")}>
              <MainButton text="Stacks" />
            </div>
            <div onClick={() => handleTabClick("boulders")}>
              <MainButton text="Boulders" />
            </div>
            <div onClick={() => handleTabClick("athletes")}>
              <MainButton text="Athletes" />
            </div>
            <div onClick={handleScoringClick}>
              <MainButton text="Scoring" />
            </div>
          </div>
        </div>
        {currentTab}
      </div>
    );
  }
  if (data?.event === null) {
    return <div>No Event with the id: {eventId}</div>;
  }
  return <div>Something went wrong</div>;
};

export default EventDashboard;
