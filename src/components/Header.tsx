import React, { FC, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setAccessToken } from "../accessToken";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface Props {}

const Header: FC<Props> = () => {
  const { loading, data } = useMeQuery();
  const location = useLocation();
  const [logout, { client }] = useLogoutMutation();
  const [showing, setShowing] = useState(false);
  const history = useHistory();
  if (loading) {
    return <div className="max-w-full h-20 items-center m-8"></div>;
  }
  // remove header if currently scorekeeping
  if (location) {
    const loc = location.pathname.split("/");
    console.log(loc);
    if (loc[2] === "scorekeeper") {
      return null;
    }
  }
  return (
    <div className="max-w-full h-20 items-center m-8">
      <header className="flex flex-row justify-between">
        {data && data.me ? (
          <div className="group">
            <div onClick={() => setShowing(!showing)}>
              <Link to="/home">Home</Link>
            </div>
            {showing && (
              <div className="flex flex-col fixed">
                <Link to="/workouts"> Workouts</Link>
                <Link to="/events"> Events</Link>
                <Link to="/athletes">Athletes</Link>
                <Link to="/settings"> Settings</Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link to="/">Home </Link>
          </div>
        )}
        <div className="flex flex-row space-x-5 relative">
          {!loading && data && data.me?.firstName ? (
            <button
              onClick={async () => {
                await logout();
                setAccessToken("");
                await client.resetStore();
                history.push("/");
                window.location.reload();
              }}
            >
              Log out: {data.me.firstName}
            </button>
          ) : (
            <div className="flex flex-row space-x-5">
              <div>
                <Link to="/register">Create Account</Link>
              </div>
              <p>|</p>
              <div>
                <Link to="/login">Login</Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
