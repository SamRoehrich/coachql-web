import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { useGetSessionsForAthleteQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import { classNames } from "../../utils/classNames";

const AthleteRecentWorkouts: FC = () => {
  const { data, loading, error } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: currentAthleteId()!.toString(),
    },
    fetchPolicy: "cache-and-network",
  });
  return (
    <div className=" col-start-2 col-span-5 row-span-4 row-start-5 bg-gray-100 mb-2 rounded-md shadow-md overflow-auto">
      <span>Training Logs</span>
      {data?.getCompletedSessionsForAthlete.map((item, idx) => (
        <div
          key={idx}
          className={classNames(
            idx % 2 === 0 ? "bg-white" : "",
            "h-14 grid grid-cols-8 p-1 grid-rows-2 gap-x-4 w-full"
          )}
        >
          <div className="flex flex-col col-span-3">
            <span className="text-xs text-gray-500">Name</span>
            <p className="text-sm">{item.workout.name}</p>
          </div>
          <div className="flex flex-col col-span-3">
            <span className="text-xs text-gray-500">Date</span>
            <p className="text-sm">
              {new Date(Date.parse(item.date)).getMonth() + 1}/
              {new Date(Date.parse(item.date)).getDate()}
            </p>
          </div>
          <div className="flex-col sm:col-span-2 md:col-span-1 md:flex md:text-left text-right">
            <span className="text-xs text-gray-500">RPE</span>
            <p className="text-sm ">{item.rpe}</p>
          </div>
          <div className="hidden md:flex flex-col col-span-2 text-right md:col-span-1">
            <span className="text-xs text-gray-500">Percent</span>
            <p className="text-sm">{item.percentCompleted}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AthleteRecentWorkouts;
