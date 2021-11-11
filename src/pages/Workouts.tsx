import { FC, useEffect } from "react";
import {
  useDeleteWorkoutMutation,
  useGetWorkoutLazyQuery,
  useGetWorkoutsLazyQuery,
  useGetWorkoutsQuery,
} from "../generated/graphql";

import { useReactiveVar } from "@apollo/client";
import { currentWorkoutId } from "../graphql/cache";
import { classNames } from "../utils/classNames";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";

interface Set {
  intensity: string;
  timer: string;
  title: string;
  minutes: number;
  seconds: number;
  reps: number;
}

const WorkoutList = () => {
  const { data } = useGetWorkoutsQuery({
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data !== undefined) {
      currentWorkoutId(data.getWorkoutsInOrg[0].id);
    }
  }, [data]);

  const handleWorkoutListItemClick = (workoutId: number) => {
    currentWorkoutId(workoutId);
  };

  if (data && data.getWorkoutsInOrg.length > 0) {
    const workouts = data.getWorkoutsInOrg;
    const sorted = [...workouts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <div className="col-span-1 flex flex-col space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Strength & Power</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Strength and Power" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Anaerobic Capacity</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Anaerobic Capacity" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Aerobic Capacity</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Aerobic Capacity" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Aerobic Power</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Aerobic Power" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Competition</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Competition" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Open Session</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Open Session" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : (
                    <div></div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Conditioning</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Conditioning" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center">
                <span className="text-sm">Mobility</span>
                <ChevronRightIcon
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-4 h-4 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {sorted.map((workout, idx) => {
                  return workout.workoutType === "Mobility" ? (
                    <div
                      onClick={() => handleWorkoutListItemClick(workout.id)}
                      className="cursor-pointer bg-gray-100 rounded"
                    >
                      <p>{workout.name}</p>
                    </div>
                  ) : null;
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  }

  return <></>;
};

const WorkoutsPage: FC = () => {
  const [getWorkout, { data: workoutData }] = useGetWorkoutLazyQuery();
  const [getWorkouts, { called }] = useGetWorkoutsLazyQuery();
  const [deleteWorkout] = useDeleteWorkoutMutation();
  const currentWorkout = useReactiveVar(currentWorkoutId);

  useEffect(() => {
    if (currentWorkout !== null) {
      getWorkout({
        variables: {
          workoutId: currentWorkout,
        },
      });
    }
  }, [currentWorkout, called, getWorkout]);

  if (workoutData !== undefined) {
    const { getWorkout: workout } = workoutData;
    const sets: Set[] = JSON.parse(workout.sets);

    return (
      <div className="w-fullpx-2 flex">
        <WorkoutList />
        <div className="flex justify-between items-end px-2 h-16 col-start-2 col-span-5 border-b-2 py-2">
          <p className="text-2xl font-semibold text-gray-800">
            {workoutData?.getWorkout.name}
          </p>
          <div className="flex space-x-4">
            <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
              <Link to={`workouts/edit-workout/${workout.id}`}>Edit</Link>
            </button>
            <button
              className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1"
              onClick={() => {
                deleteWorkout({
                  variables: {
                    workoutId: workoutData.getWorkout.id,
                  },
                });
                getWorkouts();
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-1 col-start-2">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            <div className="flex flex-col p-2 text-center">
              <span className="text-xs text-gray-500">Type</span>
              <p className="text-lg">{workoutData?.getWorkout.workoutType}</p>
            </div>
          </div>
          <div className="flex flex-col p-2 text-center">
            <span className="text-xs text-gray-500">Facality</span>
            <p className="text-lg">{workoutData?.getWorkout.equiptment}</p>
          </div>
          <div className="flex justify-center text-center">
            <div className="flex flex-col p-2">
              <span className="text-xs text-gray-500">Sets</span>
              <p className="text-lg">{workoutData?.getWorkout.numSets}</p>
            </div>
          </div>
        </div>
        <div className="px-2 col-start-3 col-span-4 row-span-full row-start-2 white mb-2 rounded-md shadow-lg">
          <div className="h-1/3">
            <p>Description</p>
            <div className="">
              <p>{workoutData.getWorkout.description}</p>
            </div>
          </div>
          <div className="rounded overflow-scroll">
            <div className="grid grid-cols-5 rounded w-full text-sm text-gray-700 bg-gray-100 p-2">
              <p className="text-center">Name</p>
              <p className="text-center">Pace</p>
              <p className="text-center">Minutes</p>
              <p className="text-center">Seconds</p>
              <p className="text-center">Reps</p>
            </div>
            {sets.map((set, idx) => (
              <div
                className={classNames(
                  idx % 2 === 0 ? "bg-white" : "bg-gray-100",
                  "p-2 grid grid-cols-5 w-full text-center text-md rounded"
                )}
                key={set.intensity + idx}
              >
                <p>{set.title}</p>
                <p>{set.timer}</p>

                <>
                  <p>{set.minutes > 0 ? set.minutes : "--"}</p>
                  <p>{set.seconds > 0 ? set.seconds : "--"}</p>
                  <p>{set.reps}</p>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
      <WorkoutList />
    </div>
  );
};

export default WorkoutsPage;
