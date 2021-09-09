import { PlusIcon } from "@heroicons/react/outline";
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
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">
                        Permissions
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              Create Workout
                            </label>
                            <p className="text-gray-500">
                              Athlete can create their own workouts.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Require Metrics
                            </label>
                            <p className="text-gray-500">
                              Upon registration, the athlete will need to
                              complete an assessment test.
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
