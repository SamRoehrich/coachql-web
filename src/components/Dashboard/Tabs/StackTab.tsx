import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_CURRENT_EVENT } from "../../../graphql/cache";
import Loading from "../../Loading";
import Modal from "../StackModal";

const StackTab: FC = (props) => {
  const { data, loading } = useQuery(GET_CURRENT_EVENT);

  if (loading) return <Loading />;

  if (data && data.currentEvent.stacks !== null) {
    console.log(data);
    return (
      <div>
        <div>Stack List</div>
        <div>Stack Info</div>
        <Modal />
      </div>
    );
  }

  return (
    <div>
      <Modal />
    </div>
  );
};

export default StackTab;
