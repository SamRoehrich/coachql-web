import { FC } from "react";
import { useParams } from "react-router";
import { useGetAssessmentByIdQuery } from "../generated/graphql";

interface Params {
  assessmentId: string;
}

const RecordAssessment: FC = () => {
  const params = useParams<Params>();
  const { data } = useGetAssessmentByIdQuery({
    variables: {
      assessmentId: Number.parseInt(params.assessmentId),
    },
  });
  return (
    <div className="h-screen">
      <p>{data?.getAssessmentById.name}</p>
    </div>
  );
};

export default RecordAssessment;
