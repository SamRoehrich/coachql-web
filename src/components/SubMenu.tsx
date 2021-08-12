import { useState } from "react";
import { FC } from "react";
import { Route } from "react-router";
import { useLocation } from "react-router-dom";
import EventSubMenu from "./Dashboard/EventSubMenu";
import RosterSubMenu from "./RosterSubMenu";
import WorkoutSubMenu from "./WorkoutSubMenu";

const SubMenu: FC = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <div
      className={`${location.pathname.includes("calendar") ? "hidden" : ""}`}
    >
      <div className={`${open ? "" : "bg-white"}`}>
        <button onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-64 bg-gray-100 p-4 flex flex-col space-y-4 justify-between ${
          open ? "" : "hidden bg-white"
        }`}
      >
        <Route path="/app/roster" component={RosterSubMenu} />
        <Route path="/app/:userId/workouts" component={WorkoutSubMenu} />
      </div>
    </div>
  );
};

export default SubMenu;
