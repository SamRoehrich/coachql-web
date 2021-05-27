import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const WorkoutSubMenu: FC = () => {
  const location = useLocation();
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
        <div className="flex flex-col space-y-4 mt-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-2  border border-gray-200 rounded-lg hover:border-blue-300">
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
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Link to={`/roster/athlete/1`}>
                    <div className="p-1 hover:shadow-sm rounded">
                      <p>Teague Hendrix</p>
                    </div>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="mb-8 h-16 bg-white-500 border border-gray-300 hover:border-blue-300 cursor-pointer justify-self-end rounded-2xl text-center flex items-center justify-center flex-none">
        <Link to={`${location.pathname}/create`}>
          <p className="font-semibold text-xl text-gray-900">Create Workout</p>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutSubMenu;
