import { useApolloClient } from "@apollo/client";
import React, { FC } from "react";
import EventList from "../components/EventList";
import { MeDocument } from "../generated/graphql";

interface Props {}

const HomePage: FC<Props> = () => {
  const { cache } = useApolloClient();

  if (
    cache.readQuery({
      query: MeDocument,
    }) === null
  ) {
    return (
      <div className="m-4">
        <div className="w-1/4">
          <EventList />
        </div>
      </div>
    );
  }

  return <div>logged in</div>;
};

export default HomePage;
