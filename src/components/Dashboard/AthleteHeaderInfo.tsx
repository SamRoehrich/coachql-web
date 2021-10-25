import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { User } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";

interface AthleteInfoHeaderProps {
  user: User;
}

const AthleteInfoHeader: FC<AthleteInfoHeaderProps> = ({ user }) => {
  const { path, url } = useRouteMatch();
  const currentAthlete = useReactiveVar(currentAthleteId);
  return (
    <div className="flex justify-between px-2 h-16 col-span-5 items-center rounded-lg">
      <p className="text-2xl font-semibold text-gray-900">
        {user.firstName} {user.lastName}
      </p>
      <div className="flex space-x-4">
        <Link to={`${url}/${currentAthlete}/overview`}>
          <div className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            <p className="text-gray-800">Overview</p>
          </div>
        </Link>
        <Link to={`${url}/${currentAthlete}/training`}>
          <div className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Training
          </div>
        </Link>
        <Link to={`${url}/${currentAthlete}/metrics`}>
          <div className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
            Metrics
          </div>
        </Link>
        <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
          Notes
        </button>
      </div>
    </div>
  );
};

export default AthleteInfoHeader;
