import { FC } from "react";

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
        <svg
          style={{
            height: 500,
            width: "100%",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </div>
  );
};

export default OverviewBarChart;
