import { FC } from "react";
import { useGetWorkoutsForTeamQuery } from "../generated/graphql";

const WorkoutsPage: FC = () => {
  return (
    <div>
      <button onClick={() => alert("more to be done here.")}>
        Create Workout
      </button>
      <div>
        <p>Workout List</p>
      </div>
      <div>
        <p>Workout Editor</p>
      </div>
    </div>
  );
};

export default WorkoutsPage;
