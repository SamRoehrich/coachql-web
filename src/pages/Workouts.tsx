import { Disclosure } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import { FC, useEffect } from "react";
import {
  useGetWorkoutLazyQuery,
  useGetWorkoutsForTeamQuery,
  useGetWorkoutsQuery,
} from "../generated/graphql";

import WorkoutIntervalItem from "../components/Dashboard/WorkoutIntervalItem";
import { useReactiveVar } from "@apollo/client";
import { currentWorkoutId } from "../graphql/cache";
import { classNames } from "../utils/classNames";

interface Set {
  intensity: string;
  timer: string;
  title: string;
  minutes: number;
  seconds: number;
}

const WorkoutList = () => {
  const { data, loading } = useGetWorkoutsQuery();
  const currentWorkout = useReactiveVar(currentWorkoutId);
  const [getWorkout, { loading: workoutLoading, data: workoutData }] =
    useGetWorkoutLazyQuery();

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
    return (
      <div className="col-span-1">
        {workouts.map((workout, idx) => (
          <div
            onClick={() => handleWorkoutListItemClick(workout.id)}
            className={classNames(
              idx % 2 === 0 ? "bg-gray-100" : "",
              "text-sm h-10 w-full flex space-x-1 flex-none items-center"
            )}
          >
            <p>{workout.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return <></>;
};

const WorkoutsPage: FC = () => {
  const [getWorkout, { loading: workoutLoading, data: workoutData }] =
    useGetWorkoutLazyQuery();

  const currentWorkout = useReactiveVar(currentWorkoutId);

  useEffect(() => {
    if (currentWorkout !== null) {
      getWorkout({
        variables: {
          workoutId: currentWorkout,
        },
      });
    }
  }, [currentWorkout]);

  if (workoutData !== undefined) {
    const { getWorkout: workout } = workoutData;
    const sets: Set[] = JSON.parse(workout.sets);
    console.log(sets);

    return (
      <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
        <WorkoutList />
        <div className="flex justify-between items-end px-2 h-16 col-start-2 col-span-5">
          <p className="text-xl font-semibold text-gray-800">
            {workoutData?.getWorkout.name}
          </p>
          <div className="flex space-x-4">
            <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
              Edit
            </button>
            <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
              Save Changes
            </button>
            <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-1 row-span-3 col-start-2">
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
        <div className="row-span-4 col-start-2 col-span-1 shadow-md rounded-md bg-gray-100 mb-2"></div>
        <div className="px-2 col-start-3 col-span-4 row-span-full row-start-2 white mb-2 rounded-md shadow-lg">
          <div className="mt-2 h-1/2 rounded">
            <div className="grid grid-cols-6 rounded w-full text-sm text-gray-700 bg-gray-100 p-2">
              <p className="text-center">Name</p>
              <p className="text-center">Intensity</p>
              <p className="text-center">Timer</p>
              <p className="text-center">Minutes</p>
              <p className="text-center">Seconds</p>
              <p className="text-center">Reps</p>
            </div>
            {sets.map((set, idx) => (
              <div
                className={classNames(
                  idx % 2 === 0 ? "bg-white" : "bg-gray-100",
                  "p-2 grid grid-cols-6 w-full text-center text-md rounded"
                )}
                key={set.intensity + idx}
              >
                <p>{set.title}</p>
                <p>{set.intensity}</p>
                <p>{set.timer}</p>
                {set.timer === "Timed" ? (
                  <>
                    <p>{set.minutes}</p>
                    <p>{set.seconds}</p>
                    <p>---</p>
                  </>
                ) : (
                  <>
                    <p>---</p>
                    <p>---</p>
                    <p>1</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200" />
          <div className="">
            <p>Description</p>
            <div className="">
              <p>{workoutData.getWorkout.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-cols-6 grid-rows-8 gap-x-4 gap-y-8 w-full max-h-screen px-2">
      <WorkoutList />
      <div className="flex justify-between items-end px-2 h-16 col-start-2 col-span-5">
        <p className="text-xl font-semibold text-gray-800"></p>
        <div className="flex space-x-4">
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Edit
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Save Changes
          </button>
          <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-gray-100 shadow-md rounded-md col-span-2 row-span-3 col-start-2">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center text-center">
          <div className="flex flex-col p-2 text-center md:text-left">
            <span className="text-xs text-gray-500">Type</span>
            <p className="text-lg"></p>
          </div>
          <div className="flex flex-col p-2 text-center md:text-right">
            <span className="text-xs text-gray-500">Facality</span>
            <p className="text-lg md:text-right"></p>
          </div>
        </div>
        <div className="flex md:justify-between justify-center text-center md:text-left">
          <div className="flex flex-col p-2 md:text-left">
            <span className="text-xs text-gray-500">Sets</span>
            <p className="text-lg"></p>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-start-2 col-span-2 shadow-md rounded-md bg-gray-100 mb-2">
        <div className="p-2">
          <div className="flex justify-center"></div>
          <div className="">
            <p>Description</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="col-start-4 col-span-3 row-span-full row-start-2 bg-gray-100 mb-2 rounded-md shadow-md"></div>
    </div>
  );
};

export default WorkoutsPage;
