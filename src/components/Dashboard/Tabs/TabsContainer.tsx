import { FC } from "react";
import { GET_CURRENT_TAB } from "../../../graphql/cache";
import { useQuery } from "@apollo/client";
import StackTab from "./StackTab";
import BouldersTab from "./BoudlersTab";
import AthletesTab from "./AthletesTab";
import Loading from "../../Loading";

interface Props {}

const Tabs: FC = (props) => {
  const { loading, data: currentTab } = useQuery(GET_CURRENT_TAB);
  if (loading) return <Loading />;
  const renderTab = () => {
    switch (currentTab) {
      case currentTab === "stacks":
        return <StackTab />;
      case "boulders":
        return <BouldersTab />;
      case "athletes":
        return <AthletesTab />;
      default:
        return <div>Error</div>;
    }
  };
  return <div>{renderTab()}</div>;
};

export default Tabs;
