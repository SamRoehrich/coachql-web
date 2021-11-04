import { useReactiveVar } from "@apollo/client";
import { useCallback, useEffect } from "react";
import Chart from "react-google-charts";
import {
  GetSessionsForAthleteQuery,
  useGetSessionsForAthleteQuery,
} from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Loading from "../Loading";

const AthleteTrainingBarChart = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const { data: sessionData, loading: dataLoading } =
    useGetSessionsForAthleteQuery({
      variables: {
        athleteId: currentAthlete!.toString(),
      },
    });

  const graphData: [string, number][] = [
    ["Strength and Power", 0],
    ["Conditioning", 0],
    ["Anaerobic Capacity", 0],
    ["Aerobic Capacity", 0],
    ["Aerobic Power", 0],
    ["Mobility", 0],
    ["Open Session", 0],
  ];

  const fillGraphData = useCallback(
    (data: GetSessionsForAthleteQuery) => {
      for (let i = 0; i < graphData.length; i++) {
        for (let session of data.getCompletedSessionsForAthlete) {
          if (graphData[i][0] === session.workout.workoutType) {
            graphData[i][1]++;
          }
        }
      }
      console.log(graphData);
    },
    [graphData]
  );
  useEffect(() => {
    if (sessionData) {
      fillGraphData(sessionData);
    }
  }, [sessionData, fillGraphData]);
  if (dataLoading) {
    return <Loading />;
  }
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
