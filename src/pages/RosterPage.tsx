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

        {/* <div className="row-span-2 col-start-2 col-span-2 shadow-md rounded-md bg-gray-100 mb-2">
          <div className="">
            <div className="flex justify-center">
              <ChartPieIcon className="h-1/2 w-1/2" />
            </div>
            <div className="">
              <p>Phase</p>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-span-3 row-span-4 row-start-2 bg-gray-100 mb-2 rounded-md shadow-md overflow-auto">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <div className="">
                  <Disclosure.Button className="flex justify-between w-full h-12 items-baseline p-1">
                    <span>Training Logs</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    {trainingLog.map((item, idx) => (
                      <div
                        key={idx}
                        className={classNames(
                          idx % 2 === 0 ? "bg-white" : "",
                          "h-14 grid grid-cols-8 p-1 grid-rows-2 gap-x-4 w-full"
                        )}
                      >
                        <div className="flex flex-col col-span-3">
                          <span className="text-xs text-gray-500">Name</span>
                          <p className="text-sm">{item.name}</p>
                        </div>
                        <div className="flex flex-col col-span-3">
                          <span className="text-xs text-gray-500">Type</span>
                          <p className="text-sm">{item.type}</p>
                        </div>
                        <div className="flex-col sm:col-span-2 md:col-span-1 md:flex md:text-left text-right">
                          <span className="text-xs text-gray-500">
                            Days Ago
                          </span>
                          <p className="text-sm ">{item.rpe}</p>
                        </div>
                        <div className="hidden md:flex flex-col col-span-2 text-right md:col-span-1">
                          <span className="text-xs text-gray-500">Percent</span>
                          <p className="text-sm">{item.percent}</p>
                        </div>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>
        </div> */}
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
