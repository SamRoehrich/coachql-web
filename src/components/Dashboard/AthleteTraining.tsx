import { useReactiveVar } from "@apollo/client";
import { useCallback, useEffect, useMemo } from "react";
import Chart from "react-google-charts";
import {
  GetSessionsForAthleteQuery,
  useGetSessionsForAthleteQuery,
} from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Loading from "../Loading";
import AthleteRecentWorkouts from "./AthleteRecentWorkouts";

const AthleteTraining = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const { data, loading: dataLoading } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: currentAthlete!.toString(),
    },
  });
  console.log(data);
  if (dataLoading) {
    return <Loading />;
  }
  return (
    <div className="col-span-5 col-start-2 flex">
      <div>
        <AthleteRecentWorkouts />
      </div>
      <div></div>
    </div>
  );
};

export default AthleteTraining;
