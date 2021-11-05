import { useReactiveVar } from "@apollo/client";
import { FC, useEffect } from "react";
import { useGetSessionByIdLazyQuery } from "../../generated/graphql";
import { currentSessionId } from "../../graphql/cache";

const CompletedSessionInfo: FC = () => {
  const currentSession = useReactiveVar(currentSessionId);
  const [getSessionById, { data, loading }] = useGetSessionByIdLazyQuery();
  console.log(currentSession);

  useEffect(() => {
    if (currentSession) {
      console.log(currentSession);
      getSessionById({
        variables: {
          sessionId: currentSession,
        },
      });
    }
  }, [currentSession, getSessionById]);

  if (data) {
    return (
      <div>
        <p>{data.getSessionById.workout.name}</p>
      </div>
    );
  }
  return (
    <div className="col-start-4 col-span-5 row-span-4 row-start-5 mb-2 rounded-md shadow-md overflow-auto w-full">
      <p>title</p>
    </div>
  );
};

export default CompletedSessionInfo;
