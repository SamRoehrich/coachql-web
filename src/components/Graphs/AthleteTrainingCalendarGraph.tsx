import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import Chart from "react-google-charts";
import { useGetSessionsForAthleteQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";

const AthleteTrainingCalendarGraph: FC = () => {
  const currentAthlete = useReactiveVar(currentAthleteId);
  const { data: sessionData, loading: dataLoading } =
    useGetSessionsForAthleteQuery({
      variables: {
        athleteId: currentAthlete!.toString(),
      },
    });

  return (
    <div>
      <Chart
        width={1000}
        height={200}
        chartType="Calendar"
        loader={<div>Loading...</div>}
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Number of Sessions" },
          ],
        ]}
      />
    </div>
  );
};

export default AthleteTrainingCalendarGraph;
