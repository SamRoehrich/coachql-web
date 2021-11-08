import { FC, useEffect } from "react";
import {
  useGetAthleteLazyQuery,
  useGetAthletesInOrgQuery,
} from "../generated/graphql";
import Loading from "../components/Loading";
import { useReactiveVar } from "@apollo/client";
import { currentAthleteId } from "../graphql/cache";
import AthleteList from "../components/Dashboard/AthleteList";
import AthleteInfo from "../components/AthleteInfo";
import { useHistory, useRouteMatch } from "react-router";

const RosterPage: FC = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const history = useHistory();
  const { url } = useRouteMatch();
  const { data: athletes, loading } = useGetAthletesInOrgQuery({
    fetchPolicy: "cache-first",
  });
  const [getAthlete] = useGetAthleteLazyQuery({
    fetchPolicy: "cache-first",
  });
  useEffect(() => {
    if (currentAthlete !== null) {
      getAthlete({
        variables: {
          AthleteId: currentAthlete,
        },
      });
      history.push(`${url}/${currentAthlete}/overview`);
    }
  }, [currentAthlete, getAthlete, history, url]);

  if (loading) {
    return <Loading />;
  }

  if (athletes) {
    return (
      <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-2 w-full max-h-screen px-2">
        <AthleteList />
        <AthleteInfo />
      </div>
    );
  }
  return (
    <div>
      You have no athletes in your organization. Create an athlete profile in
      the top right corner to get started.
    </div>
  );
};

export default RosterPage;
