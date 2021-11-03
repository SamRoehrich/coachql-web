import { useReactiveVar } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { FC, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import {
  useGetAthleteLazyQuery,
  useGetSessionsForAthleteQuery,
} from "../generated/graphql";
import { currentAthleteId } from "../graphql/cache";
import { classNames } from "../utils/classNames";
import AthleteCalendar from "./Dashboard/AthleteCalendar";
import AthleteInfoHeader from "./Dashboard/AthleteHeaderInfo";
import AthleteTraining from "./Dashboard/AthleteTraining";
import Metrics from "./Dashboard/Metrics";
import RecentTrainingSunburst from "./Graphs/RecentTrainingSunburst";

const AthleteOverviewTab = () => {
  return (
    <>
      <AthleteInfoOverviewPanel />
      <AthleteRecentTraining />
      <AthleteCalendar />
    </>
  );
};

const AthleteRecentTraining = () => {
  return (
    <div className="col-start-2 col-span-2 row-span-5 row-start-3 bg-gray-100 rounded-md shadow-md overflow-auto">
      {/* <RecentTrainingSunburst /> */}
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
    <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-5 col-start-2 row-span-1">
      <div className="flex md:justify-between items-center justify-center text-center">
        <div>
          <div className="flex flex-col p-2 text-left">
            <span className="text-xs text-gray-500">Age</span>
            <p className="text-lg text-gray-900">
              {date.getFullYear() - data?.getAthleteById.birthYear!}
            </p>
          </div>
          <div className="flex flex-col p-2 text-left">
            <span className="text-xs text-gray-500">Catagory</span>
            <p className="text-lg">JR</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-center flex-col">
            <div className="flex flex-col p-2">
              <span className="text-xs text-gray-500">Status</span>
              <p className="text-lg">Active</p>
            </div>
            <div className="hidden md:flex flex-col p-2">
              <span className="text-xs text-gray-500">Email</span>
              <div className="flex space-x-2">
                <p className="text-lg cursor-pointer hover:border-b-2">
                  Parent
                </p>
                <p className="text-lg cursor-pointer">Athlete</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-center flex-col">
            <div className="flex flex-col p-2">
              <span className="text-xs text-gray-500 md:text-right">
                Last Session
              </span>
              <p className="text-lg text-right">Sept 1</p>
            </div>
            <div className="flex-col p-2 hidden md:flex">
              <span className="text-xs text-gray-500 md:text-right">
                Last Assessment
              </span>
              <p className="text-lg text-right">July 30</p>
            </div>
          </div>
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
            path={`${path}/:athleteId/training`}
            component={AthleteTraining}
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
