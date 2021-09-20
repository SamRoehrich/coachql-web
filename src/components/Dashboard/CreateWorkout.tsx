import { PlusIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import { FieldArray, useFormik } from "formik";
import { useState } from "react";
import { FC } from "react";
import { useCreateWorkoutMutation } from "../../generated/graphql";
import WorkoutIntervalItem from "./WorkoutIntervalItem";

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
  const [createWorkout, { data, loading, error }] = useCreateWorkoutMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      numSets: 1,
      equiptment: "",
      sets: "",
      workoutType: "",
      recordClimbs: false,
      notifications: false,
    },
    onSubmit: ({
      description,
      equiptment,
      name,
      numSets,
      sets,
      workoutType,
      notifications,
      recordClimbs,
    }) => {
      createWorkout({
        variables: {
          description,
          equiptment,
          name,
          numSets,
          sets,
          workoutType,
          recordClimbs,
          notifications,
        },
      });
    },
  });
  return (
    <>
      <div className="w-full">
        <form action="#" method="POST" autoComplete="off">
          <div className="mt-10 sm:mt-0">
            <header className="bg-white">
              <div className="max-w-7xl mx-auto py-6 px-1 sm:px-2">
                <h1 className="text-3xl font-bold">Create Workout</h1>
              </div>
            </header>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>
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
              <div className="mt-5 md:mt-0 md:col-span-2 p-1">
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
                          onChange={formik.handleChange}
                          value={formik.values.name}
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
                          name="workoutType"
                          onChange={formik.handleChange}
                          value={formik.values.workoutType}
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
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
              <FieldArray name="sets" validateOnChange={false}>
                {({ insert, remove, push }) => (
                  <>
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Timer Settings
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Design your workout with active/working times and rest
                          times. Either option can be self paced.
                        </p>
                      </div>
                      <div className="px-4 sm:px-2 flex mt-5 space-x-4">
                        <div className="">
                          <label>Sets</label>
                          <input
                            type="number"
                            name="numSets"
                            id="numSets"
                            value={formik.values.numSets}
                            onChange={formik.handleChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md w-full"
                          />
                        </div>
                      </div>
                      <div className="px-4 sm:px-2 flex justify-between mt-5 space-x-4">
                        <button
                          className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-1 rounded-md shadow-md hover:shadow-lg"
                          type="button"
                        >
                          <PlusIcon className="h-6 text-green-600 font-bold" />
                          <p className="text-gray-800 font-semibold">Active</p>
                        </button>
                        <button
                          className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-1 rounded-md shadow-md hover:shadow-lg"
                          type="button"
                        >
                          <PlusIcon className="h-6 text-green-600 font-bold" />
                          <p className="text-gray-800 font-semibold">Rest</p>
                        </button>
                        <button
                          className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-1 rounded-md shadow-md hover:shadow-lg"
                          type="button"
                        >
                          <XIcon className="h-6 text-red-600 font-bold" />
                          <p className="text-gray-800 font-semibold">Delete</p>
                        </button>
                      </div>
                      <div className="md:col-span-1 col-start-1 px-2 mt-5">
                        <fieldset>
                          <legend className="text-base font-medium text-gray-900">
                            Extra
                          </legend>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="flex items-center h-5 ">
                                <input
                                  id="recordClimbs"
                                  name="recordClimbs"
                                  type="checkbox"
                                  onChange={formik.handleChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="recordClimbs"
                                  className="font-medium text-gray-700"
                                >
                                  Record Climbs
                                </label>
                                <p className="text-gray-500">
                                  After the session is completed, the athletes
                                  will be required to record their climbs.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="notifications"
                                  name="notifications"
                                  type="checkbox"
                                  onChange={formik.handleChange}
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
                      <div className="px-4 py-3 sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center py-2 px-2 mt-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2 p-1">
                      <div className="shadow sm:rounded-md max-h-screen overflow-auto h-full">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                          <div className="col-span-6 sm:col-span-4">
                            <WorkoutIntervalItem />
                            <WorkoutIntervalItem />
                            <WorkoutIntervalItem />
                            <WorkoutIntervalItem />
                            <WorkoutIntervalItem />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </FieldArray>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateWorkout;
