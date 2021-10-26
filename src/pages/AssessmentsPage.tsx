import { FC } from "react";
import Loading from "../components/Loading";
import { useGetAssessmentsInOrgQuery } from "../generated/graphql";

const AssessmentsPage: FC = () => {
  const { data, loading } = useGetAssessmentsInOrgQuery();
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <div>
        <div>
          {data.getAssessmentsInOrg.map((assessment, idx) => (
            <div>{assessment.name}</div>
          ))}
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
