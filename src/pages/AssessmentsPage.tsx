import { useReactiveVar } from "@apollo/client";
import { FC, useEffect } from "react";
import AssessmentGraph from "../components/Graphs/AssessmentGraph";
import Loading from "../components/Loading";
import {
  useGetAssessmentByIdLazyQuery,
  useGetAssessmentsInOrgQuery,
} from "../generated/graphql";
import { currentAssessmentId } from "../graphql/cache";

interface DataPoint {
  name: string;
  type: string;
}

const AssessmentsPage: FC = () => {
  const { data, loading } = useGetAssessmentsInOrgQuery({
    fetchPolicy: "cache-and-network",
  });
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
  if (data && !loadingAssessment && assessmentData?.getAssessmentById) {
    const dataPoints: DataPoint[] = JSON.parse(
      assessmentData.getAssessmentById.dataPoints
    );
    return (
      <div className="p-4 flex justify-between w-full">
        <div className="flex flex-col w-52">
          {data.getAssessmentsInOrg.map((assessment, idx) => (
            <button
              key={"assessmentList" + assessment.id}
              onClick={() => currentAssessmentId(assessment.id)}
              className="font-medium border-b border-gray-500 p-2 text-md text-gray-900"
            >
              {assessment.name}
            </button>
          ))}
        </div>
        <div className="w-full px-6">
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-900">
              {assessmentData?.getAssessmentById.name}
            </p>
            <div className="flex space-x-2">
              <button
                className="border rounded border-gray-600 p-2 hover:border-blue-600"
                onClick={() =>
                  openRecordAssessmentWindow(
                    `record/assessment/${assessmentData?.getAssessmentById.id}`
                  )
                }
              >
                Record Assessment
              </button>
              <button
                className="border rounded border-gray-600 p-2 hover:border-blue-600"
                onClick={() =>
                  openRecordAssessmentWindow(
                    `edit/assessment/${assessmentData?.getAssessmentById.id}`
                  )
                }
              >
                Edit Assessment
              </button>
            </div>
          </div>
          <div className="mt-2 w-full">
            <p className="font-semibold text-3xl text-gray-900">Description</p>
            <p className="font-medium text-gray-700 mt-2">
              {assessmentData?.getAssessmentById.description}
            </p>
          </div>
          <div className="w-full mt-4 flex">
            <div className="flex flex-col w-1/5 bg-gray-100">
              <p className="text-xl text-center">Data Points</p>
              <div className="w-full">
                {dataPoints.map((dataPoint, idx) => (
                  <div className="flex p-2 justify-between w-full">
                    <p className="font-medium text-md text-gray-800 text-left">
                      {dataPoint.name}
                    </p>
                    <p className="font-normal text-gray-700 text-right">
                      {dataPoint.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border w-4/5">
              <AssessmentGraph data={assessmentData} />
            </div>
          </div>
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
