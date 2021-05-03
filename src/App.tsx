import React, { FC, useEffect } from "react";
import { setAccessToken } from "./accessToken";
import Routes from "./Routes";

interface Props {}

const App: FC<Props> = () => {
  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
    });
  }, []);
  return <Routes />;
};

export default App;
