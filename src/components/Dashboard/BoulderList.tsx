import { FC } from "react";
import { useParams } from "react-router";
import { useGetBouldersInEventQuery } from "../../generated/graphql";
import Loading from "../Loading";

interface Params {
  eventId: string;
}

const BoulderList: FC = () => {
  const params = useParams<Params>();
  const { data, loading } = useGetBouldersInEventQuery({
    variables: { eventId: params.eventId },
  });
  if (loading) return <Loading />;
  if (data && data.getBouldersForEvent.length > 0) {
    return (
      <div>
        <ul>
          {data.getBouldersForEvent.map((boulder) => (
            <li key={boulder.id}>{boulder.boulderNumber}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>No Boulders</div>;
};

export default BoulderList;
