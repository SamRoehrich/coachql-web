import { useReactiveVar } from "@apollo/client";
import { FC, useEffect } from "react";
import {
  useGetSessionsForAthleteLazyQuery,
  useGetSessionsForAthleteQuery,
} from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Loading from "../Loading";
import AthleteTrainingBarChart from "./AthleteTrainingBarChart";

const OverviewBarChart: FC = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const [getSessionsForAthlete, { data: sessionData, loading: dataLoading }] =
    useGetSessionsForAthleteLazyQuery({
      variables: {
        athleteId: currentAthlete!.toString(),
      },
    });
  useEffect(() => {
    getSessionsForAthlete({
      variables: {
        athleteId: currentAthlete!.toString(),
      },
    });
  }, [currentAthlete, getSessionsForAthlete]);
  if (dataLoading) {
    return <Loading />;
  }
  if (sessionData) {
    return (
      <div className="h-full w-full">
        <div className="p-2 flex justify-end space-x-2">
          <button className="flex items-center justify-center rounded-md bg-white shadow-md p-2 hover:shadow-xl text-sm h-6">
            <span>30 Days</span>
          </button>
          <button className="flex items-center justify-center rounded-md bg-white shadow-md p-2 hover:shadow-xl text-sm h-6">
            <span>90 Days</span>
          </button>
        </div>
        <div>
          <AthleteTrainingBarChart sessions={sessionData} />
        </div>
      </div>
    );
  }
  return null;
};

export default OverviewBarChart;
