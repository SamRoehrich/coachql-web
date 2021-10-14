import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { setAccessToken } from "../accessToken";
import Loading from "../components/Loading";
import { useByeQuery, useLogoutMutation } from "../generated/graphql";

interface Props {}

const ByePage: FC<Props> = () => {
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

  useEffect(() => {
    logout();
    setAccessToken("");
    client.resetStore();
  });

  return (
    <div>
      You have been logged out{" "}
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default ByePage;
