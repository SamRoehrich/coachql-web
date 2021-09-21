import { gql, useQuery } from "@apollo/client";
import React, { FC } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_CURRENT_EVENT } from "../../graphql/cache";
import { useGetAthletesInOrgQuery } from "../../generated/graphql";
import Loading from "../Loading";

interface Props {}

const AthleteList: FC<Props> = () => {
  const { data, loading } = useGetAthletesInOrgQuery({
    fetchPolicy: "cache-first",
  });
  if (loading) {
    return <Loading />;
  }
  if (data?.getAthletesInOrg) {
    if (data.getAthletesInOrg.length > 0) {
      return (
        <div className="flex flex-col col-span-1 w-full">
          {data.getAthletesInOrg.map((athlete) => (
            <div className="w-full">
              <p>{athlete.user.firstName}</p>
              <p>{athlete.user.lastName}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  return (
    <div className="text-center mt-10">
      No Athletes Have Registered For This Event.
    </div>
  );
};

export default AthleteList;
