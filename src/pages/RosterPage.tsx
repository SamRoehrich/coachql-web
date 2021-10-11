import { ChartPieIcon } from "@heroicons/react/outline";
import { FC, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../utils/classNames";
import {
  Athlete,
  useGetAthleteLazyQuery,
  useGetAthletesInOrgQuery,
  User,
} from "../generated/graphql";
import Loading from "../components/Loading";
import { useReactiveVar } from "@apollo/client";
import { currentAthleteId } from "../graphql/cache";
import AthleteList from "../components/Dashboard/AthleteList";
import AthleteInfoHeader from "../components/Dashboard/AthleteHeaderInfo";
import Monthly from "../components/Calendar/Monthly";
import AthleteCalendar from "../components/Dashboard/AthleteCalendar";
import AthleteInfo from "../components/AthleteInfo";
import { useHistory, useRouteMatch } from "react-router";

const trainingLog = [
  {
    name: "5 by 3",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Bar Core",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Comp Wall Session",
    type: "Competition Training",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Pull Up 3",
    type: "Conditioning",
    percent: "100%",
    rpe: 6,
  },
  {
    name: "Shoulder Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Hip Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 2,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Supine IYT",
    type: "Conditioning",
    percent: "100%",
    rpe: 5,
  },
  {
    name: "Board Session",
    type: "Strength and Power",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Comp Wall Session",
    type: "Competition Training",
    percent: "100%",
    rpe: 8,
  },
  {
    name: "Pull Up 3",
    type: "Conditioning",
    percent: "100%",
    rpe: 6,
  },
  {
    name: "Shoulder Mobility",
    type: "Mobility",
    percent: "100%",
    rpe: 8,
  },
];

const RosterPage: FC = () => {
  const date = new Date();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const { data: athletes, loading } = useGetAthletesInOrgQuery({
    fetchPolicy: "cache-first",
  });
  const [getAthlete, { data: athleteData }] = useGetAthleteLazyQuery({
    fetchPolicy: "cache-first",
  });

  const currentAthlete = useReactiveVar(currentAthleteId);

  useEffect(() => {
    if (currentAthlete !== null) {
      getAthlete({
        variables: {
          AthleteId: currentAthlete,
        },
      });
      history.push(`${url}/${currentAthlete}/overview`);
    }
  }, [currentAthlete]);

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
