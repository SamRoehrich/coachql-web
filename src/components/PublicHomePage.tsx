import { FC } from "react";
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
    history.push(`/layout/${data.me?.id}/home`);
  }
  return (
    <div className="h-screen bg-gray-100 max-w-screen">
      <header className="w-full h-16 bg-gray-200">
        <div className="flex justify-between items-center p-6">
          <div className="flex space-x-2">
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <Link to="/login">
            <button>
              <p className="font-semibold text-gray-900 hover:text-blue-500">
                Login
              </p>
            </button>
          </Link>
        </div>
      </header>
      <div className="mx-auto w-full h-96 flex justify-around items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-gray-800 text-6xl font-extrabold py-4">
            Coachql
          </h1>
          <h2 className="font-semibold text-2xl text-gray-600">
            The most advanced toolset for climbing coaches.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PublicHomePage;
