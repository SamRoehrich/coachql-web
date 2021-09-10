import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { FC } from "react";

export interface Interval {
  minutes: number;
  seconds: number;
  description: string;
  type: string;
  infinite: boolean;
  reps: number;
}

const CreateWorkout: FC = () => {
  const [intervals, setIntervals] = useState([]);
  return (
    <>
      <div className="w-full">
        <div className="mt-10 sm:mt-0">
          <header className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-1 sm:px-2">
              <h1 className="text-3xl font-bold">Create Workout</h1>
            </div>
          </header>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Description
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  General information on the workout. Can be edited later.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST" autoComplete="off">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="type"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Training Type
                        </label>
                        <select
                          id="type"
                          name="type"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Strength and Power</option>
                          <option>Competition</option>
                          <option>Anaerobic Capacity</option>
                          <option>Aerobic Capacity</option>
                          <option>Aerobic Power</option>
                          <option>Conditioning</option>
                          <option>Mobility</option>
                          <option>Open Session</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-24"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="team"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Team
                        </label>
                        <select
                          id="team"
                          name="team"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Comp</option>
                          <option>Travel</option>
                          <option>Training</option>
                          <option>Rec</option>
                          <option>Private</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Timer Settings
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Design your workout with active/working times and rest times.
                  Either option can be self paced.
                </p>
              </div>
              <div className="px-4 sm:px-2 flex justify-between mt-5 space-x-4">
                <div className="w-ful">
                  <label>Sets</label>
                  <input
                    type="number"
                    name="sets"
                    id="sets"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-ful">
                  <label>Reps</label>
                  <input
                    type="number"
                    name="reps"
                    id="reps"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="px-4 sm:px-2 flex justify-between mt-5 space-x-4">
                <button
                  className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-6 rounded-md shadow-md hover:shadow-lg"
                  type="button"
                >
                  <PlusIcon className="h-6 text-green-600 font-bold" />
                  <p className="text-gray-800 font-semibold">Active</p>
                </button>
                <button
                  className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-6 rounded-md shadow-md hover:shadow-lg"
                  type="button"
                >
                  <PlusIcon className="h-6 text-green-600" />
                  <p className="text-gray-800 font-semibold">Rest</p>
                </button>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="col-span-6 sm:col-span-4">
                      <div className="flex space-x-2">
                        <div>
                          <label
                            htmlFor="Interval Type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Interval Type
                          </label>
                          <select
                            id="Interval Type"
                            name="Interval Type"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>Active</option>
                            <option>Rest</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Interval Title
                          </label>
                          <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Minutes
                          </label>
                          <input
                            type="number"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Seconds
                          </label>
                          <input
                            type="number"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm  font-medium text-gray-700 ">
                            Self Paced
                          </label>
                          <input
                            type="checkbox"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <TrashIcon className="mt-2 h-8" />
                        </div>
                      </div>
                    </div>
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">
                        Extra
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5 ">
                            <input
                              id="track-climbs"
                              name="track-climbs"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="track-climbs"
                              className="font-medium text-gray-700"
                            >
                              Record Climbs
                            </label>
                            <p className="text-gray-500">
                              After the session is completed, the athletes will
                              be required to record their climbs.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="notifications"
                              name="notifications"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="notifications"
                              className="font-medium text-gray-700"
                            >
                              Notifications
                            </label>
                            <p className="text-gray-500">
                              Get notified when an athlete completes this
                              session.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateWorkout;
