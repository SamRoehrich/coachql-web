import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_CURRENT_STACK } from "../../graphql/cache";

const StackInfo: FC = () => {
  const { data } = useQuery(GET_CURRENT_STACK);

  if (data) {
    return (
      <div className="w-full">
        {data.currentStack.male ? <p>Male</p> : <p>Female</p>}
      </div>
    );
  }
  return null;
};

export default StackInfo;
