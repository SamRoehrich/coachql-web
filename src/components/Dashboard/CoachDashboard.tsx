import { FC } from "react";
import { useParams } from "react-router";
import { useGetTeamByCoachIdQuery } from "../../generated/graphql";
import { Params } from "../../utils/interfaces";

const CoachDashboard: FC = () => {
  const params = useParams<Params>();
  const { data, loading, error } = useGetTeamByCoachIdQuery({
    variables: {
      coachId: params.userId,
    },
    fetchPolicy: "cache-first",
  });
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (data) {
    console.log(data);
    return (
      <div className="container space-y-3 py-4 px-2 bg-gray-100">
        <div className="flex justify-between p-4 border rounded-xl bg-gray-100 shadow h-16 items-center">
          <p>{data.getTeamByCoachId.teamName}</p>
          <p>Hello {data.getTeamByCoachId.headCoach.firstName}</p>
        </div>
        <div className="flex justify-between">
          <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4">
            <p>87 athletes</p>
          </div>
          <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4">
            <p>7 Coaches</p>
          </div>
          <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4">
            <p>{data.getTeamByCoachId.workouts.length} workout sessions</p>
          </div>
        </div>
        {/* <div className="flex justify-between">
          <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4 hover:border-blue-500">
            Create Team
          </button>
          <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4 hover:border-blue-500">
            Invite Athletes
          </button>
        </div> */}
        <div className="flex justify-between">
          <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4 hover:border-blue-500">
            Record Assessments
          </button>
          <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4 hover:border-blue-500">
            Contact Athletes
          </button>
          <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center p-4 hover:border-blue-500">
            Contact Coaches
          </button>
        </div>
        <div className="px-3">
          <p>Recent activity</p>
          <div>
            <p>Bouldering: Open Session</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button>Create your Orginization</button>
    </div>
  );
};

export default CoachDashboard;
