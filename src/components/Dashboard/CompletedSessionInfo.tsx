import { useReactiveVar } from "@apollo/client";
import { format } from "date-fns";
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
      <div className="col-start-5 col-span-2 shadow-md h-full">
        <div className="flex flex-col">
          <span>Session: {data.getSessionById.workout.name}</span>
          <span>
            Date: {format(new Date(data.getSessionById.date), "MM - dd")}
          </span>
          <p>RPE: {data.getSessionById.rpe}</p>
          <p>Percent Completed: {data.getSessionById.percentCompleted}</p>
          <p>Notes</p>
          <br />
          <p>{data.getSessionById.notes}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="col-start-4 col-span-5 row-span-4 row-start-5 mb-2 rounded-md shadow-md overflow-auto w-full">
      <p>Loading...</p>
    </div>
  );
};

export default CompletedSessionInfo;
