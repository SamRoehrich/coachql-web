import React, { FC, useEffect, useState } from "react";
import { setAccessToken } from "./accessToken";
import Loading from "./components/Loading";
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
