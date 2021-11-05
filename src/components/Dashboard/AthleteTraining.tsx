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
    <div className="col-span-5 col-start-2 flex">
      <div></div>
      <div>
        <AthleteRecentWorkouts />
      </div>
      <div>
        <CompletedSessionInfo />
      </div>
    </div>
  );
};

export default AthleteTraining;
