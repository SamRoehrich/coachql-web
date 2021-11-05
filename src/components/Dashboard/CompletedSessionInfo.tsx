import { useReactiveVar } from "@apollo/client";
import { format } from "date-fns";
import { FC, useEffect } from "react";
import { useGetSessionByIdLazyQuery } from "../../generated/graphql";
import { currentSessionId } from "../../graphql/cache";

const CompletedSessionInfo: FC = () => {
  const currentSession = useReactiveVar(currentSessionId);
  const [getSessionById, { data, loading }] = useGetSessionByIdLazyQuery();

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
      <div className="shadow-md w-1/2 p-2">
        <div className="flex flex-col">
          <span className="text-xl font-light flex justify-between">
            Session:
            <p className="font-medium">{data.getSessionById.workout.name}</p>
          </span>
          <span className="text-xl font-light flex justify-between">
            Date:
            <p className="font-medium">
              {format(new Date(data.getSessionById.date), "MM - dd")}
            </p>
          </span>
          <p className="text-xl font-light flex justify-between">
            RPE:
            <p className="font-medium">{data.getSessionById.rpe}</p>
          </p>
          <p className="text-xl font-light flex justify-between">
            Percent Completed:
            <p className="font-medium">
              {data.getSessionById.percentCompleted}
            </p>
          </p>
          <p className="text-xl font-medium">Notes</p>
          <br />
          <p className="text-xl text-gray-800">{data.getSessionById.notes}</p>
        </div>
      </div>
    );
  }

  if (currentSessionId === null) {
    return (
      <div className="col-start-4 col-span-5 row-span-4 row-start-5 mb-2 rounded-md shadow-md overflow-auto w-1/2">
        <p>This athlete has not completed any workouts yet.</p>
      </div>
    );
  }

  return (
    <div className="col-start-4 col-span-5 row-span-4 row-start-5 mb-2 rounded-md shadow-md overflow-auto w-1/2">
      <p>Loading...</p>
    </div>
  );
};

export default CompletedSessionInfo;
