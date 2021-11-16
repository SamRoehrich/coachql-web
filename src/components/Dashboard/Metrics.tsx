import { FC, useEffect } from "react";
import {
  useGetAssessmentByIdLazyQuery,
  useGetAssessmentsInOrgQuery,
} from "../../generated/graphql";
import Loading from "../Loading";

const Metrics: FC = () => {
  const { data, loading } = useGetAssessmentsInOrgQuery();
  const [
    getAssessmentById,
    { data: assessmentData, loading: assessmentLoading },
  ] = useGetAssessmentByIdLazyQuery();
  useEffect(() => {
    if (data && data.getAssessmentsInOrg.length > 0) {
      getAssessmentById({
        variables: {
          assessmentId: data.getAssessmentsInOrg[0].id,
        },
      });
    }
  }, [data, getAssessmentById]);

  console.log(assessmentData);

  if (!loading && !assessmentLoading) {
    return (
      <div className="h-screen">
        <div className="p-2">
          <div>
            <h2 className="font-semibold text-2xl">Metrics</h2>
          </div>
          <div>
            {data?.getAssessmentsInOrg.map((assessment, idx) => (
              <div>
                <p>{assessment.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Loading />
    </div>
  );
};

export default Metrics;
