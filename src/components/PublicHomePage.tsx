import React, { FC } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import Loading from "./Loading";

interface Props {}

const PublicHomePage: FC<Props> = () => {
  const { loading, data } = useMeQuery();
  const history = useHistory();
  if (loading) {
    return <Loading />;
  }
  if (data) {
    console.log(data);
    history.push(`/layout/${data.me?.id}/home`);
  }
  return (
    <div className="h-screen bg-gray-100">
      <header className="w-full h-16 bg-gray-200">
        <div className="h-full flex justify-between items-center p-6">
          <Link to="/login">
            <button>
              <p className="font-semibold text-gray-900 hover:text-blue-500">
                Login
              </p>
            </button>
          </Link>
        </div>
      </header>
      <div className="">
        <h1 className="text-gray-800">
          Coachql - The most advanced toolset for climbing coaches.
        </h1>
      </div>
    </div>
  );
};

export default PublicHomePage;
