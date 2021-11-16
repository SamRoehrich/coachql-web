import { FC, useEffect } from "react";
import { GetSessionsForAthleteQuery } from "../../generated/graphql";
import { Chart } from "react-chartjs-2";

interface Props {
  sessions: GetSessionsForAthleteQuery;
}

const AthleteTrainingBarChart: FC<Props> = ({ sessions }) => {
  useEffect(() => {
    const parent = document.getElementById("chart-container");
    var ctx = document.createElement("canvas");
    const labels = [
      "Strength and Power",
      "Anaerobic Capacity",
      "Aeroic Capacity",
      "Aerobic Power",
      "Conditioning",
      "Mobility",
      "Open Session",
    ];

    const data = (function () {
      const res = [0, 0, 0, 0, 0, 0, 0];
      let completedSessions = sessions.getCompletedSessionsForAthlete;
      for (let i = 0; i < labels.length; i++) {
        for (let session of completedSessions) {
          if (labels[i] === session.workout.workoutType) {
            res[i]++;
          }
        }
      }
      return res;
    })();
    console.log(data);

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Number of Sessions",
              data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
        },
      });
      parent?.appendChild(myChart.canvas);
    }
    return function () {
      if (parent) {
        parent.removeChild(ctx);
      }
    };
  }, [sessions]);
  return (
    <div className="h-80">
      <div id="chart-container" className="h-full"></div>
    </div>
  );
};

export default AthleteTrainingBarChart;
