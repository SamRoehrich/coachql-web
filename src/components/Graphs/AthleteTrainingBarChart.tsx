import { FC, useCallback, useEffect, useState } from "react";
import Chart from "react-google-charts";
import { GetSessionsForAthleteQuery } from "../../generated/graphql";

interface Props {
  sessions: GetSessionsForAthleteQuery;
}

const AthleteTrainingBarChart: FC<Props> = ({ sessions }) => {
  const [graphData, setGraphData] = useState<[string, number][]>([]);

  useEffect(() => {
    const fillGraphData = (data: GetSessionsForAthleteQuery) => {
      const graphData: [string, number][] = [
        ["Strength and Power", 0],
        ["Conditioning", 0],
        ["Anaerobic Capacity", 0],
        ["Aerobic Capacity", 0],
        ["Aerobic Power", 0],
        ["Mobility", 0],
        ["Open Session", 0],
      ];
      for (let i = 0; i < graphData.length; i++) {
        for (let session of data.getCompletedSessionsForAthlete) {
          if (graphData[i][0] === session.workout.workoutType) {
            graphData[i][1]++;
          }
        }
      }
      setGraphData(graphData);
    };
    fillGraphData(sessions);
  }, [sessions]);
  return (
    <div className="">
      <Chart
        height={"450px"}
        width={"410px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[["Workout Type", "Sessions"], ...graphData]}
        options={{
          legend: {
            alignment: "center",
            position: "none",
            fontSize: 8,
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default AthleteTrainingBarChart;
