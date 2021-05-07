import { FC, useEffect } from "react";
import Loading from "../../Loading";
import StackList from "../StackList";
import { useGetStacksForEventQuery } from "../../../generated/graphql";
import StackInfo from "../StackInfo";
import { currentStackVar } from "../../../graphql/cache";

interface Props {
  eventId: string;
}

const StackTab: FC<Props> = ({ eventId }) => {
  const { data, loading } = useGetStacksForEventQuery({
    variables: {
      eventId,
    },
  });
  useEffect(() => {
    if (data) {
      currentStackVar(data.getStacks[0]);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (data && data.getStacks !== null) {
    return (
      <div className="w-full flex">
        <StackList stacks={data.getStacks} />
        <StackInfo />
      </div>
    );
  }

  return <div></div>;
};

export default StackTab;
