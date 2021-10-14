import { useReactiveVar } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { FC, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import {
  useGetAthleteLazyQuery,
  useGetAthleteQuery,
  useGetSessionsForAthleteQuery,
} from "../generated/graphql";
import { currentAthleteId } from "../graphql/cache";
import { classNames } from "../utils/classNames";
import AthleteCalendar from "./Dashboard/AthleteCalendar";
import AthleteInfoHeader from "./Dashboard/AthleteHeaderInfo";
import Metrics from "./Dashboard/Metrics";

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

const AthleteOverviewTab = () => {
  return (
    <>
      <AthleteInfoOverviewPanel />
      <AthleteCalendar />
      <AthleteInfoRecentTraining />
    </>
  );
};

const AthleteInfoRecentTraining = () => {
  const { data, loading, error } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: currentAthleteId()!.toString(),
    },
  });
  return (
    <div className=" col-start-2 col-span-5 row-span-4 row-start-5 bg-gray-100 mb-2 rounded-md shadow-md overflow-auto">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <div className="">
              <Disclosure.Button className="flex justify-between w-full h-12 items-baseline p-1">
                <span>Training Logs</span>
              </Disclosure.Button>
              <Disclosure.Panel className="">
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
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

const AthleteInfoOverviewPanel = () => {
  const date = new Date();
  const currentAthlete = currentAthleteId();
  const [getAthlete, { data, loading }] = useGetAthleteLazyQuery();

  // THIS IS VERY GROSS
  useEffect(() => {
    if (currentAthlete !== null) {
      let id = currentAthlete?.valueOf();
      if (id) {
        getAthlete({
          variables: {
            AthleteId: id,
          },
        });
      }
    }
  }, [currentAthlete]);
  return (
    <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-2 col-start-2 row-span-3">
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center text-center">
        <div className="flex flex-col p-2">
          <span className="text-xs text-gray-500">Age</span>
          <p className="text-lg text-gray-900">
            {date.getFullYear() - data?.getAthleteById.birthYear!}
          </p>
        </div>
        <div className="flex flex-col p-2">
          <span className="text-xs text-gray-500">Catagory</span>
          <p className="text-lg md:text-right">JR</p>
        </div>
      </div>
      <div className="flex md:justify-between justify-center text-center">
        <div className="flex flex-col p-2 md:text-left">
          <span className="text-xs text-gray-500">Status</span>
          <p className="text-lg">Active</p>
        </div>
        <div className="hidden md:flex flex-col p-2">
          <span className="text-xs text-gray-500 text-right">Email</span>
          <div className="flex space-x-2">
            <p className="text-lg">Parent</p>
            <p className="text-lg">Athlete</p>
          </div>
        </div>
      </div>
      <div className="flex md:justify-between justify-center text-center">
        <div className="flex flex-col p-2">
          <span className="text-xs text-gray-500 md:text-right">
            Last Session
          </span>
          <p className="text-lg md:text-left">Sept 1</p>
        </div>
        <div className="flex-col p-2 hidden md:flex">
          <span className="text-xs text-gray-500 md:text-right">
            Last Assessment
          </span>
          <p className="text-lg text-right">July 30</p>
        </div>
      </div>
    </div>
  );
};

const AthleteInfo: FC = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const { path, url } = useRouteMatch();
  const [getAthlete, { data: athleteData }] = useGetAthleteLazyQuery({
    fetchPolicy: "cache-first",
  });
  console.log(path, url);

  useEffect(() => {
    if (currentAthlete !== null) {
      getAthlete({
        variables: {
          AthleteId: currentAthlete,
        },
      });
    }
  }, [currentAthlete]);

  if (athleteData && athleteData.getAthleteById) {
    return (
      <>
        <AthleteInfoHeader user={athleteData.getAthleteById.user} />
        <Switch>
          <Route
            path={`${path}/:athleteId/overview`}
            component={AthleteOverviewTab}
            exact
          />
          <Route
            path={`${path}/:athleteId/metrics`}
            component={Metrics}
            exact
          />
        </Switch>
      </>
    );
  }

  return <></>;
};
export default AthleteInfo;
