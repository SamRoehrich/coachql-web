import { FC } from "react";
import { useParams } from "react-router";
import { useGetTeamByCoachIdQuery } from "../../generated/graphql";
import { Params } from "../../utils/interfaces";

const CoachDashboard: FC = () => {
  const params = useParams<Params>();
  const { data, loading, error } = useGetTeamByCoachIdQuery({
    variables: {
      coachId: "1",
    },
    fetchPolicy: "cache-first",
  });
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (data) {
    console.log(data);
    return (
      <div className="grid grid-flow-row grid-cols-3 grid-rows-8 gap-x-4 gap-y-10 w-full">
        <div className="flex justify-between p-4 border rounded-xl bg-gray-100 shadow h-16 items-center col-span-full">
          <p>{data.getTeamByCoachId.teamName}</p>
          <p>Hello {data.getTeamByCoachId.headCoach.firstName}</p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>87 athletes</p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>7 Coaches</p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>{data.getTeamByCoachId.workouts.length} workout sessions</p>
        </div>
        <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4 hover:border-blue-500">
          Notes
        </button>
        <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4 hover:border-blue-500">
          Contact Athletes
        </button>
        <button className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4 hover:border-blue-500">
          Contact Coaches
        </button>
        <div className="row-span-2 col-span-full border">
          <div className="grid grid-cols-7 gap-4 text-center h-full sm:text-sm">
            <div className="border">
              <p className="sm:text-sm">Monday</p>
            </div>
            <div>
              <p>Tuesday</p>
            </div>
            <div>
              <p>Wednesday</p>
            </div>
            <div>
              <p>Thursday</p>
            </div>
            <div>
              <p>Friday</p>
            </div>
            <div>
              <p>Saturday</p>
            </div>
            <div>
              <p>Sunday</p>
            </div>
          </div>
        </div>
        <div className="col-span-full row-span-2 border">
          <p>Recent activity</p>
          <div className="h-full">
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
