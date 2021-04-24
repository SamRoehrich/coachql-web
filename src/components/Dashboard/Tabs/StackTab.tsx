import { FC } from "react";
import Loading from "../../Loading";
import StackList from "../StackList";
import Modal from "../StackModal";
import { useGetStacksForEventQuery } from "../../../generated/graphql";

interface Props {
  eventId: string;
}

const StackTab: FC<Props> = ({ eventId }) => {
  const { data, loading } = useGetStacksForEventQuery({
    variables: {
      eventId,
    },
  });
  if (loading) return <Loading />;

  if (data && data.getStacks !== null) {
    return (
      <div className="w-full">
        <StackList stacks={data.getStacks} />
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
