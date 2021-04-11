import React, { FC } from "react";
import Loading from "../components/Loading";
import { useByeQuery } from "../generated/graphql";

interface Props {}

const ByePage: FC<Props> = () => {
  const { data, error, loading } = useByeQuery();

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  return <div>{data?.bye}</div>;
};

export default ByePage;
