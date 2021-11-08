import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { Link, Route, useHistory, useRouteMatch } from "react-router-dom";
import { classNames } from "../utils/classNames";
import { BellIcon, MenuIcon, XIcon, PlusIcon } from "@heroicons/react/outline";
import CoachDashboard from "./Dashboard/CoachDashboard";
import WorkoutsPage from "../pages/Workouts";
import CreateWorkout from "./Dashboard/CreateWorkout";
import EventPage from "../pages/EventDashboard";
import CreateAthlete from "./Dashboard/CreateAthlete";
import RosterPage from "../pages/RosterPage";
import EditWorkout from "./Dashboard/EditWorkout";
import { useMeQuery } from "../generated/graphql";
import { setAccessToken } from "../accessToken";
import CreateAssessment from "./Dashboard/CreateAssessment";
import AssessmentsPage from "../pages/AssessmentsPage";

const Navigation = [
  {
    name: "Dashboard",
    href: "/home",
    current: false,
  },
  {
    name: "Team",
    href: "/roster",
    current: false,
  },
  {
    name: "Workouts",
    href: "/workouts",
    current: false,
  },
  {
    name: "Assessments",
    href: "/assessments",
    current: false,
  },
  {
    name: "Calendar",
    href: "#",
    current: false,
  },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Logout", href: "/logout" },
];

const addNav = [
  { name: "Create Assessment Test", href: "/create/assessment" },
  { name: "Create Training Plan", href: "#" },
  { name: "Create Workout", href: "/create/workout" },
  { name: "Create Athlete Profile", href: "/create/athlete" },
  { name: "Create Coach Profile", href: "#" },
  { name: "Create Team", href: "#" },
];

const user = {
  imageUrl:
    "https://cdn2.apstatic.com/photos/climb/117744654_large_1568574712.jpg",
  name: "Sam Roehrich",
  email: "sam_roehrich@icloud.com",
};
const Laay: FC = () => {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { data, error, client } = useMeQuery();

  if (!data || error) {
    client.resetStore();
    setAccessToken("");
    history.push("/");
  }

  return (
    <div className="max-h-screen">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {Navigation.map((item) => (
                        <Link
                          to={url + item.href}
                          key={item.name}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none">
                          <span className="sr-only">Open add menu</span>
                          <PlusIcon className="block h-8 w-8 text-white rounded-full border-2 border-white " />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {addNav.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={url + item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="Profile"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={url + item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Navigation.map((item) => (
                  <Link
                    to={url + item.href}
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block py-2 px-3 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className="max-w-7xl lg:max-w-screen mx-auto py-6 sm:px-6 lg:px-0 max-h-screen">
        <div className="flex flex-row flex-auto bg-white shadow-xl w-full">
          <Route path={`${path}/roster`} component={RosterPage} />
          <Route path={`${path}/assessments`} component={AssessmentsPage} />
          <Route
            path="/layout/:userId/create/athlete"
            component={CreateAthlete}
            exact
          />
          <Route
            path="/layout/:userId/create/assessment"
            component={CreateAssessment}
            exact
          />
          <Route
            path="/layout/:userId/create/workout"
            component={CreateWorkout}
            exact
          />
          <Route path={`${path}/home`} component={CoachDashboard} />
          <Route
            exact
            path="/layout/:userId/workouts"
            component={WorkoutsPage}
          />
          <Route
            exact
            path="/layout/:userId/workouts/edit-workout/:workoutId"
            component={EditWorkout}
          />
          <Route
            path="/app/:userId/workouts/create"
            component={CreateWorkout}
          />
          <Route path="/events/:eventId" component={EventPage} />
        </div>
      </main>
    </div>
  );
};

export default Laay;
