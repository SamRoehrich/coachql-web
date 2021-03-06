import { useReactiveVar } from "@apollo/client";
import { FC, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { useGetAthleteLazyQuery } from "../generated/graphql";
import { currentAthleteId } from "../graphql/cache";
import AthleteCalendar from "./Dashboard/AthleteCalendar";
import AthleteInfoHeader from "./Dashboard/AthleteHeaderInfo";
import AthleteTraining from "./Dashboard/AthleteTraining";
import Metrics from "./Dashboard/Metrics";
import OverviewBarChart from "./Graphs/OverviewBarChart";

const AthleteOverviewTab = () => {
  return (
    <div className="flex justify-between overflow-clip">
      <div className="flex flex-col p-1">
        <AthleteInfoOverviewPanel />
        <AthleteRecentTraining />
      </div>

      <AthleteCalendar />
    </div>
  );
};

const AthleteRecentTraining = () => {
  return (
    <div className="bg-gray-100 rounded-md shadow-md overflow-auto flex flex-col justify-center">
      <OverviewBarChart />
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Sessions Past 30 Days</span>
            <p className="text-lg">21</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">
              Training Hours Past 30 Days
            </span>
            <p className="text-lg text-right">23.5</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">Sessions Past 90 Days</span>
            <p className="text-lg">45</p>
          </div>
          <div className="flex flex-col p-2">
            <span className="text-xs text-gray-500">
              Training Hours Past 90 Days
            </span>
            <p className="text-lg text-right">100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AthleteInfoOverviewPanel = () => {
  const date = new Date();
  const currentAthlete = currentAthleteId();
  const [getAthlete, { data }] = useGetAthleteLazyQuery();

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
  }, [currentAthlete, getAthlete]);
  return (
    <div className="flex justify-between bg-gray-100 shadow-md rounded-md">
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
  }, [currentAthlete, getAthlete]);

  if (athleteData && athleteData.getAthleteById) {
    return (
      <div className="w-full">
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
      </div>
    );
  }

  return <></>;
};
export default AthleteInfo;
