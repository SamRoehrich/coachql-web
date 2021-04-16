import React, { FC } from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "../accessToken";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface Props {}

const Header: FC<Props> = () => {
  const { loading, data } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  if (loading) return null;
  return (
    <div className="max-w-full h-20 items-center m-8">
      <header className="flex flex-row justify-between">
        <div>
          <Link to="/">Home </Link>
        </div>
        <div className="flex flex-row space-x-5">
          {!loading && data && data.me?.firstName ? (
            <button
              onClick={async () => {
                await logout();
                setAccessToken("");
                await client.resetStore();
              }}
            >
              Log out: {data.me.firstName}
            </button>
          ) : (
            <div className="flex flex-row space-x-5">
              <div>
                <Link to="/register">Register</Link>
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
