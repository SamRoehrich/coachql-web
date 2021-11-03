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

const AthleteOverviewTab = () => {
  return (
    <>
      <AthleteInfoOverviewPanel />
      <AthleteCalendar />
    </>
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
            <p className="text-lg cursor-pointer hover:border-b-2">Parent</p>
            <p className="text-lg cursor-pointer">Athlete</p>
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
