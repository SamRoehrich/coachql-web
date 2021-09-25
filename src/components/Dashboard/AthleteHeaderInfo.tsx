import { FC } from "react";
import { User } from "../../generated/graphql";

interface AthleteInfoHeaderProps {
  user: User;
}

const AthleteInfoHeader: FC<AthleteInfoHeaderProps> = ({ user }) => {
  return (
    <div className="flex justify-between px-2 h-16 col-span-5 items-center">
      <p className="text-2xl font-semibold text-gray-900">
        {user.firstName} {user.lastName}
      </p>
      <div className="flex space-x-4">
        <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
          <p className="text-gray-800 font-medium">Overview</p>
        </button>
        <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
          Training
        </button>
        <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
          Metrics
        </button>
        <button className="shadow-md hover:shadow-lg rounded-md bg-gray-100 hover:cursor-pointer h-9 p-1">
          Notes
        </button>
      </div>
    </div>
  );
};

export default AthleteInfoHeader;
