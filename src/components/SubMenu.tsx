import { FC } from "react";
import { Route } from "react-router";
import RosterSubMenu from "./RosterSubMenu";
import WorkoutSubMenu from "./WorkoutSubMenu";

const SubMenu: FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 flex flex-col space-y-4 justify-between">
      <Route path="/roster" component={RosterSubMenu} />
      <Route path="/workouts" component={WorkoutSubMenu} />
    </div>
  );
};

export default SubMenu;
