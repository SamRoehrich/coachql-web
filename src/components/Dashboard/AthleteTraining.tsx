import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import Chart from "react-google-charts";
import {
  GetSessionsForAthleteQuery,
  useGetSessionsForAthleteQuery,
} from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";

const AthleteTraining = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const { data, loading: dataLoading } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: currentAthlete!.toString(),
    },
  });
  console.log(data);
  return (
    <div className="col-span-5 col-start-2 flex">
      <div className="">
        <AthleteTrainingPieChart />
      </div>
    </div>
  );
};

const AthleteTrainingPieChart = () => {
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
  const fillGraphData = (data: GetSessionsForAthleteQuery) => {
    for (let i = 0; i < graphData.length; i++) {
      for (let session of data.getCompletedSessionsForAthlete) {
        if (graphData[i][0] === session.workout.workoutType) {
          graphData[i][1]++;
        }
      }
    }
    console.log(graphData);
  };
  useEffect(() => {
    if (sessionData) {
      fillGraphData(sessionData);
    }
  }, [sessionData]);
  return (
    <div>
      <Chart
        height={"400px"}
        width={"600px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Workout Type", "Units of Work"], ...graphData]}
        options={{
          title: "Training History",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default AthleteTraining;
