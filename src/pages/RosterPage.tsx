import { ChartPieIcon } from "@heroicons/react/outline";
import { FC, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { classNames } from "../utils/classNames";
import AthleteInfo from "../components/Dashboard/AthleteInfo";
import AthleteList from "../components/Dashboard/AthleteList";
import {
  useGetAthleteLazyQuery,
  useGetAthletesInOrgQuery,
} from "../generated/graphql";
import Loading from "../components/Loading";

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
  const { data: athletes, loading } = useGetAthletesInOrgQuery({
    fetchPolicy: "cache-first",
  });
  const [getAthlete, { data: athleteData, loading: loadingAthlete }] =
    useGetAthleteLazyQuery();

  useEffect(() => {
    if (athletes) {
      getAthlete({
        variables: {
          AthleteId: athletes.getAthletesInOrg[0].id,
        },
      });
    }
  }, [athletes]);

  if (loading || loadingAthlete) {
    return <Loading />;
  }

  if (athletes) {
    return (
      <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-2 w-full max-h-screen px-2">
        {athletes.getAthletesInOrg.length > 0 && (
          <div className="flex flex-col col-span-1 w-full">
            {athletes.getAthletesInOrg.map((athlete) => (
              <div className="w-full flex space-x-1">
                <p>{athlete.user.firstName}</p>
                <p>{athlete.user.lastName}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-end px-2 h-16 col-span-full">
          <p>{athleteData?.getAthleteById.user.firstName}</p>
        </div>
        {/* <AthleteInfo /> */}
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
