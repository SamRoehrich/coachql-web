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
      <div className="container space-y-3 py-4">
        <div className="flex justify-between px-3">
          <p>{data.getTeamByCoachId.teamName}</p>
          <p>Hello {data.getTeamByCoachId.headCoach.firstName}</p>
        </div>
        <div className="flex justify-between px-3">
          <div>
            <p>87 athletes</p>
          </div>
          <div>
            <p>7 Coaches</p>
          </div>
          <div>
            <p>{data.getTeamByCoachId.workouts.length} workout sessions</p>
          </div>
        </div>
        <div className="flex justify-between px-3">
          <button>Create Team</button>
          <button>Invite Athletes</button>
        </div>
        <div className="flex justify-between px-3">
          <button>Record Assessments</button>
          <button>Contact Athletes</button>
          <button>Contact Coaches</button>
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
