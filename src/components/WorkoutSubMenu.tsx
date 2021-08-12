import { gql, useApolloClient } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Workout {
  name: String;
  description: String;
  id: number;
  workoutType: String;
}

function getWorkoutsInType(
  workoutType: string,
  workouts: Workout[]
): Workout[] | null {
  if (workouts.length === 0) {
    return null;
  }
  const res = workouts.filter((workout) => workout.workoutType === workoutType);
  console.log("res" + res);
  return res;
}

const WorkoutSubMenu: FC = () => {
  const client = useApolloClient();
  const location = useLocation();
  const fragment = client.readFragment({
    id: "Team:1",
    fragment: gql`
      fragment Workouts on Team {
        workouts {
          name
          description
          id
          workoutType
        }
      }
    `,
  });
  const workouts: Workout[] = fragment?.workouts;
  if (workouts) {
    const bouldering = getWorkoutsInType("Bouldering", workouts);
    const lead = getWorkoutsInType("Lead", workouts);
    const powerEndurance = getWorkoutsInType("Power Endurance", workouts);
    const speed = getWorkoutsInType("Speed", workouts);
    console.log(location.pathname.includes("create"));
    return (
      <div className="w-full flex flex-col h-full">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Workouts</p>
          <svg
            className="flex-none w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div className="overflow-auto h-full">
          <div className="flex flex-col mt-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Bouldering</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white rounded-b-xl">
                    {bouldering?.map((workout) => {
                      return (
                        <ul>
                          <li>
                            <p>{workout.name}</p>
                          </li>
                        </ul>
                      );
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Lead</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white">
                    {lead?.map((workout) => (
                      <ul>
                        <li>
                          <p>{workout.name}</p>
                        </li>
                      </ul>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Speed</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white">
                    {speed?.map((workout) => (
                      <ul>
                        <li>
                          <p>{workout.name}</p>
                        </li>
                      </ul>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Power Endurance</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white">
                    {powerEndurance?.map((workout) => (
                      <ul>
                        <li>
                          <p>{workout.name}</p>
                        </li>
                      </ul>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Endurance</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Conditioning</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Mobility and Flexibility</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                      open ? "rounded-b-none border-b-none" : ""
                    } `}
                  >
                    <div className="flex justify-between items-center">
                      <p>Unordered</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          open ? "transform rotate-90" : ""
                        } w-5 h-5 text-gray-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white"></Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="mb-8 h-16 bg-white-500 border border-gray-300 hover:border-blue-300 cursor-pointer justify-self-end rounded-2xl text-center flex items-center justify-center flex-none">
          {location.pathname.includes("create") ? (
            <button disabled>
              <p className="font-semibold text-xl text-gray-900">
                Create Workout
              </p>
            </button>
          ) : (
            <Link to={`${location.pathname}/create`}>
              <p className="font-semibold text-xl text-gray-900">
                Create Workout
              </p>
            </Link>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">Workouts</p>
        <svg
          className="flex-none w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="overflow-auto h-full">
        <div className="flex flex-col mt-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Bouldering</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white rounded-b-xl"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Lead</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Speed</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Power Endurance</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Endurance</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Conditioning</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Mobility and Flexibility</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`p-2  border border-gray-200 rounded-lg hover:border-blue-300 z-50 ${
                    open ? "rounded-b-none border-b-none" : ""
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <p>Unordered</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-90" : ""
                      } w-5 h-5 text-gray-500`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white"></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="mb-8 h-16 bg-white-500 border border-gray-300 hover:border-blue-300 cursor-pointer justify-self-end rounded-2xl text-center flex items-center justify-center flex-none">
        <button disabled={location.pathname.includes("create")}>
          <Link to={`${location.pathname}/create`}>
            <p className="font-semibold text-xl text-gray-900">
              Create Workout
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default WorkoutSubMenu;
