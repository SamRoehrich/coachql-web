import { useReactiveVar } from "@apollo/client";
import { useGetSessionsForAthleteQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Loading from "../Loading";
import AthleteRecentWorkouts from "./AthleteRecentWorkouts";
import CompletedSessionInfo from "./CompletedSessionInfo";

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
    <div className="col-span-5 col-start-2 flex row-start-auto row-span-6">
      <div className="flex justify-between w-full space-x-2">
        <AthleteRecentWorkouts />
        <CompletedSessionInfo />
      </div>
    </div>
  );
};

export default AthleteTraining;
