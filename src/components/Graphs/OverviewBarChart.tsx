import { FC } from "react";
import AthleteTrainingBarChart from "./AthleteTrainingBarChart";

const OverviewBarChart: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="p-2 flex justify-end space-x-2">
        <button className="flex items-center justify-center rounded-md bg-white shadow-md p-2 hover:shadow-xl text-sm h-6">
          <span>30 Days</span>
        </button>
        <button className="flex items-center justify-center rounded-md bg-white shadow-md p-2 hover:shadow-xl text-sm h-6">
          <span>90 Days</span>
        </button>
      </div>
      <div>
        <AthleteTrainingBarChart />
      </div>
    </div>
  );
};

export default OverviewBarChart;
