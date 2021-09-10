import { FC } from "react"

const WorkoutIntervalItem: FC = () => {

    return (
        <div className="flex max-w-full flex-wrap items-center justify-between px-2">
        <div>
          <input
            type="checkbox"
            className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col text-left mt-1 p-1">
          <label
            htmlFor="Interval Type"
            className=" text-sm font-medium text-gray-700"
          >
            Interval Type
          </label>
          <select
            id="Interval Type"
            name="Interval Type"
            className="mt-1  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Timed - Active</option>
            <option>Timed - Rest</option>
            <option>Self Paced - Active</option>
            <option>Self Paced - Rest</option>
          </select>
        </div>
        <div className="flex flex-col text-left mt-1 p-1">
          <label className=" text-sm font-medium text-gray-700">
            Interval Title
          </label>
          <input
            type="text"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col text-left mt-1 p-1">
          <label className="text-sm font-medium text-gray-700">Minutes</label>
          <input
            type="text"
            className="w-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col text-left mt-1 p-1">
          <label className=" text-sm font-medium text-gray-700">
            Seconds
          </label>
          <input
            type="text"
            className="w-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    )
}

export WorkoutIntervalItem