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
      <div className="grid grid-flow-row grid-cols-3 grid-rows-8 gap-x-4 gap-y-10 w-full px-2">
        <div className="flex justify-between p-4 h-16 items-center col-span-full">
          <p className="font-semibold text-gray-800 text-xl">
            {data.getTeamByCoachId.teamName}
          </p>
          <p className="font-semibold text-gray-800 text-xl">
            Hello {data.getTeamByCoachId.headCoach.firstName}
          </p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>87 Athletes</p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>7 Coaches</p>
        </div>
        <div className="border shadow rounded-xl bg-gray-100 h-16 flex items-center justify-center p-4">
          <p>{data.getTeamByCoachId.workouts.length} Workout Sessions</p>
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
        <div className="row-span-2 col-span-full bg-gray-100 rounded-md">
          <div className="grid grid-cols-7 gap-4 text-center h-full sm:text-sm mt-4">
            <div className="space-y-2">
              <p className="sm:text-sm">Monday</p>
              <div className="p-1 mt-1">
                <p>Travel</p>
                <p>Rocks and Ropes</p>
              </div>
              <div className="p-1 mt-1">
                <p>Comp</p>
                <p>Rocks and Ropes</p>
              </div>
              <div className="p-1 mt-1">
                <p>Rec Gold</p>
                <p>The Bloc</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Tuesday</p>
              <div className="p-1 mt-1">
                <p>Training</p>
                <p>Rocks and Ropes</p>
              </div>
              <div className="p-1 mt-1">
                <p>Junior 2</p>
                <p>The Bloc</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Wednesday</p>
              <div className="p-1 mt-1">
                <p>Travel</p>
                <p>The Bloc</p>
              </div>
              <div className="p-1 mt-1">
                <p>Comp</p>
                <p>The Bloc</p>
              </div>
              <div className="p-1 mt-1">
                <p>Junior 1</p>
                <p>Rocks and Ropes</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Thursday</p>
              <div className="p-1 mt-1">
                <p>Travel</p>
                <p>Rocks and Ropes</p>
              </div>
              <div className="p-1 mt-1">
                <p>Training</p>
                <p>The Bloc</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Friday</p>
              <div className="p-1 mt-1">
                <p>Comp</p>
                <p>Rocks and Ropes</p>
              </div>
              <div className="p-1 mt-1">
                <p>Rec Gold</p>
                <p>The Bloc</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Saturday</p>
              <div className="p-1 mt-1">
                <p>Travel</p>
                <p>Rock Solid</p>
              </div>
              <div className="p-1 mt-1">
                <p>Comp</p>
                <p>Rock Solid</p>
              </div>
              <div className="p-1 mt-1">
                <p>Training</p>
                <p>Rock Solid</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Sunday</p>
              <div className="p-1 mt-1">
                <p>USAC Regionals</p>
                <p>Mesa Rim</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full row-span-2">
          <p className="font-semibold text-gray-800 text-xl p-2">
            Recent activity
          </p>
          <div className="w-full">
            <div className="flex justify-between p-2">
              <p>Bouldering: Open Session</p>
              <p>Rocks and Ropes</p>
              <p>2 days ago</p>
              <p>17 Athletes</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex bg-gray-100 justify-between p-2">
              <p>Bar Core</p>
              <p>Rocks and Ropes</p>
              <p>2 days ago</p>
              <p>17 Athletes</p>
            </div>
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
