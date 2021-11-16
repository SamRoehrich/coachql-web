import { FC } from "react";
import { GetAssessmentByIdQuery } from "../../generated/graphql";

interface Props {
  data: GetAssessmentByIdQuery;
}

const AssessmentGraph: FC<Props> = ({ data }) => {
  const dataPoints = JSON.stringify(data.getAssessmentById.dataPoints);

  return (
    <div>
      <div id="assessment-graph"></div>
    </div>
  );
};

export default AssessmentGraph;

// need to have all the possible athlete data for the assessment
// a list of all the athletes so that you can select and deselect athletes from the list and rerender the graph
// TODO: write a query that gets all the records with the assessment id
