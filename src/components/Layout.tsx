import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { FaDumbbell } from "react-icons/fa";
import { Route, useLocation, useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import WorkoutsPage from "../pages/Workouts";
import AthleteInfo from "./AthleteInfo";
import Loading from "./Loading";
import SubMenu from "./SubMenu";
import CreateWorkout from "../components/Dashboard/CreateWorkout";

const Layout: FC = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="flex flex-col justify-between items-center flex-none w-16 bg-gray-200">
        <div className="flex flex-col space-y-4 w-full items-center pt-5">
          <NavLink
            to="/home"
            className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center"
            activeClassName="rounded-full bg-gray-200 border border-indigo-300 text-white w-8 h-8 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </NavLink>
          <NavLink
            to="/roster"
            className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center"
            activeClassName="rounded-full bg-gray-200 border border-indigo-300 text-white w-8 h-8 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </NavLink>
          <NavLink
            to="/workouts"
            className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center"
            activeClassName="rounded-full bg-gray-200 border border-indigo-300 text-white w-8 h-8 flex items-center justify-center"
          >
            <FaDumbbell />
          </NavLink>
          <NavLink
            to="/events"
            className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center"
            activeClassName="rounded-full bg-gray-200 border border-indigo-300 text-white w-8 h-8 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
        <div className="flex flex-col space-y-4 w-full items-center pb-5">
          <a>
            <div className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a>
            <div className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a>
            <div className="rounded-full bg-gray-200 border border-gray-500 text-indigo-500 w-8 h-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <SubMenu />

      <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
        <Route path={`/roster/athlete/:athleteId`} component={AthleteInfo} />
        <Route path="/coach/:coachId" render={() => <div>coach page</div>} />
        <Route exact path="/workouts" component={WorkoutsPage} />
        <Route path="/workouts/create" component={CreateWorkout} />
      </div>
    </div>
  );
};

export default Layout;
