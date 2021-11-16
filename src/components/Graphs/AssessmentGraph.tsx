import { useReactiveVar } from "@apollo/client";
import { Chart } from "chart.js";
import { FC, useEffect } from "react";
import {
  GetAssessmentByIdQuery,
  useGetRecordsByAssessmentIdLazyQuery,
} from "../../generated/graphql";
import { currentAssessmentId } from "../../graphql/cache";
import Loading from "../Loading";

interface Props {
  data: GetAssessmentByIdQuery;
}

const AssessmentGraph: FC<Props> = ({ data }) => {
  //   const dataPoints = JSON.stringify(data.getAssessmentById.dataPoints);

  const currentAssessment = useReactiveVar(currentAssessmentId);

  const [getRecordsByAssessmentId, { data: recordData, loading, error }] =
    useGetRecordsByAssessmentIdLazyQuery();

  useEffect(() => {
    if (currentAssessment) {
      getRecordsByAssessmentId({
        variables: {
          assessmentId: currentAssessment,
        },
      });
    }
  }, [data, getRecordsByAssessmentId, currentAssessment]);

  useEffect(() => {
    const parent = document.getElementById("assessment-graph");
    var ctx = document.createElement("canvas");

    if (recordData) {
      const labels = JSON.parse(
        recordData!.getRecordsByAssessmentId[0].assessment.dataPoints
      );
      console.log(labels);
    }

    // if(ctx) {
    //   const myChart = new Chart(ctx, {
    //     type: "scatter",
    //     data: {
    //       labels: recordData?.getRecordsByAssessmentId.map((record) => (
    //         record.
    //       ))
    //     }
    //   })
    // }
  }, [recordData]);

  if (
    !loading &&
    recordData &&
    recordData.getRecordsByAssessmentId.length > 0
  ) {
    const records = recordData.getRecordsByAssessmentId;

    const athletes = records.map((record) => record.athlete);

    console.log(athletes);

    const assessments = records.map((record) => record.data);

    console.log(assessments);

    return (
      <div>
        <div id="assessment-graph"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error occured in getting record data.</p>
      </div>
    );
  }

  return (
    <div>
      <Loading />
    </div>
  );
};

export default AssessmentGraph;

// need to have all the possible athlete data for the assessment
// a list of all the athletes so that you can select and deselect athletes from the list and rerender the graph
// TODO: write a query that gets all the records with the assessment id
