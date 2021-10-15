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
    <div className="col-span-5 col-start-2">
      <div>
        <p>Athlete Training</p>
      </div>
      <div>
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

  const graphData = {
    strengthandPower: [],
    conditioning: [],
    aerobicCapacity: [],
    anaerobicCapacity: {
      name: "Anaerobic Capacity",
      sessions: [],
    },
    openSession: {
      name: "Open Session",
      sessions: [],
    },
  };
  const fillGraphData = (data: GetSessionsForAthleteQuery) => {
    for (const session of data.getCompletedSessionsForAthlete) {
    }
  };
  useEffect(() => {
    if (sessionData) {
      fillGraphData(sessionData);
    }
  }, [sessionData]);
  return (
    <div>
      <Chart
        height={"500px"}
        width={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
        ]}
        options={{
          title: "My Daily Activities",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default AthleteTraining;
