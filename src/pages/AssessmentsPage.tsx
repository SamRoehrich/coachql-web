import { useReactiveVar } from "@apollo/client";
import { FC, useEffect } from "react";
import Loading from "../components/Loading";
import {
  useGetAssessmentByIdLazyQuery,
  useGetAssessmentsInOrgQuery,
} from "../generated/graphql";
import { currentAssessmentId } from "../graphql/cache";

const AssessmentsPage: FC = () => {
  const { data, loading } = useGetAssessmentsInOrgQuery();
  const currentAssessment = useReactiveVar(currentAssessmentId);
  const [
    getAssessmentById,
    { data: assessmentData, loading: loadingAssessment },
  ] = useGetAssessmentByIdLazyQuery();

  const openRecordAssessmentWindow = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    currentAssessmentId(data?.getAssessmentsInOrg[0].id);
  }, [data]);

  useEffect(() => {
    if (currentAssessment) {
      getAssessmentById({
        variables: {
          assessmentId: currentAssessment,
        },
      });
    }
  }, [currentAssessment, getAssessmentById]);

  if (loading) {
    return <Loading />;
  }
  if (data && !loadingAssessment) {
    return (
      <div className="p-4 flex justify-between w-full h-screen">
        <div className="flex flex-col">
          {data.getAssessmentsInOrg.map((assessment, idx) => (
            <button
              key={"assessmentList" + assessment.id}
              onClick={() => currentAssessmentId(assessment.id)}
            >
              {assessment.name}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          <p>{assessmentData?.getAssessmentById.name}</p>
          <button
            onClick={() =>
              openRecordAssessmentWindow(
                `record/assessment/${assessmentData?.getAssessmentById.id}`
              )
            }
          >
            Record Assessment
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>Assessment List</div>
    </div>
  );
};

export default AssessmentsPage;
