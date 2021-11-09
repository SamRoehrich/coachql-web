import { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { setAccessToken } from "../accessToken";
import { useLogoutMutation } from "../generated/graphql";

interface Props {}

const ByePage: FC<Props> = () => {
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

  useEffect(() => {
    logout();
    setAccessToken("");
    client.resetStore();
  }, [client, logout]);

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
