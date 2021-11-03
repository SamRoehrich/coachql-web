import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { useGetSessionsForAthleteQuery } from "../../generated/graphql";
import { currentAthleteId } from "../../graphql/cache";
import Monthly from "../Calendar/Monthly";
import Loading from "../Loading";

const AthleteCalendar: FC = () => {
  const athleteId = useReactiveVar(currentAthleteId);
  const { data, loading } = useGetSessionsForAthleteQuery({
    variables: {
      athleteId: athleteId!.toString(),
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <div className="col-start-4 col-span-3 row-span-5 row-start-3 bg-gray-100 rounded-md shadow-md overflow-auto">
        <Monthly sessions={data} />
      </div>
    );
  }
  return (
    <div className="col-start-4 col-span-3 row-span-5 row-start-3 bg-gray-100 rounded-md shadow-md overflow-auto">
      <Monthly />
    </div>
  );
};

export default AthleteCalendar;
