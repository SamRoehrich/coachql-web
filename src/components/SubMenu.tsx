import { FC } from "react";
import { Route } from "react-router";
import EventSubMenu from "./Dashboard/EventSubMenu";
import RosterSubMenu from "./RosterSubMenu";
import WorkoutSubMenu from "./WorkoutSubMenu";

const SubMenu: FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 flex flex-col space-y-4 justify-between">
      <Route path="/app/roster" component={RosterSubMenu} />
      <Route path="/app/:userId/workouts" component={WorkoutSubMenu} />
      <Route path="/app/events" component={EventSubMenu} />
    </div>
  );
};

export default SubMenu;
