import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useGetSessionsForAthleteLazyQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Loading from "../Loading";
import AthleteRecentWorkouts from "./AthleteRecentWorkouts";
import CompletedSessionInfo from "./CompletedSessionInfo";

const AthleteTraining = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const [getSessionsForAthlete, { data, loading: dataLoading }] =
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

  if (data) {
    return (
      <div className="flex flex-col px-2">
        <div className="flex h-96 justify-between w-full space-x-2">
          <AthleteRecentWorkouts sessions={data} />
          <CompletedSessionInfo />
        </div>
        <div>training plan</div>
      </div>
    );
  }
  return <div>error</div>;
};

export default AthleteTraining;
