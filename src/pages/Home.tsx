import React, { FC } from "react";
import { useUsersQuery } from "../generated/graphql";

interface Props {}

const HomePage: FC<Props> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) return <div>Loading...</div>;
  return (
    <div>
      Home
      <div>
        <ul>
          {data.users.map((x) => {
            return (
              <li key={x.id}>
                {x.email}, {x.id}, {x.firstName}, {x.lastName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
