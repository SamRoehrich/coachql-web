import React, { FC } from "react";
import { useMeQuery } from "../generated/graphql";
import AuthenticatedHomePage from "../components/AuthenticatedHomePage";
import PublicHomePage from "../components/PublicHomePage";
import Loading from "../components/Loading";

interface Props {}

const HomePage: FC<Props> = () => {
  const { data, loading } = useMeQuery({ fetchPolicy: "cache-first" });

  if (loading) return <Loading />;
  return data?.me ? <AuthenticatedHomePage /> : <PublicHomePage />;
};

export default HomePage;
