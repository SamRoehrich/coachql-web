import { FC, useEffect } from "react";
import { useGetSessionsForAthleteQuery } from "../../generated/graphql";
import { currentAthleteId, currentSessionId } from "../../graphql/cache";
import { classNames } from "../../utils/classNames";

const AthleteRecentWorkouts: FC = () => {
  const { data, loading, error } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: currentAthleteId()!.toString(),
    },
    fetchPolicy: "cache-and-network",
  });
  const handleSessionClick = (sessionId: number) => {
    currentSessionId(sessionId);
  };

  useEffect(() => {
    console.log("recent workout rerender");

    if (data!.getCompletedSessionsForAthlete.length > 0) {
      currentSessionId(data?.getCompletedSessionsForAthlete[0].id);
    }
    if (data!.getCompletedSessionsForAthlete.length === 0) {
      currentSessionId(null);
    }
  }, [data]);

  return (
    <div className="bg-gray-100 rounded-md shadow-md overflow-auto w-1/2">
      {data?.getCompletedSessionsForAthlete.map((item, idx) => (
        <button
          key={idx}
          className={classNames(
            idx % 2 === 0 ? "bg-white" : "",
            "h-14 grid grid-cols-6 p-1 grid-rows-2 gap-x-2 w-full"
          )}
          onClick={() => handleSessionClick(item.id)}
        >
          <div className="flex flex-col col-span-2">
            <span className="text-xs text-gray-500">Name</span>
            <p className="text-sm">{item.workout.name}</p>
          </div>
          <div className="flex flex-col col-span-2">
            <span className="text-xs text-gray-500">Date</span>
            <p className="text-sm">
              {new Date(Date.parse(item.date)).getMonth() + 1}/
              {new Date(Date.parse(item.date)).getDate()}
            </p>
          </div>
          <div className="flex-col md:flex md:text-left text-right col-span-1">
            <span className="text-xs text-gray-500">RPE</span>
            <p className="text-sm ">{item.rpe}</p>
          </div>
          <div className="hidden md:flex flex-col text-right md:col-span-1">
            <span className="text-xs text-gray-500">Percent</span>
            <p className="text-sm">{item.percentCompleted}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AthleteRecentWorkouts;
