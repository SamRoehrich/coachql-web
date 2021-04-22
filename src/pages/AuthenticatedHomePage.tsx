import { FC } from "react";
import { useHistory } from "react-router";
import EventInfo from "../components/Dashboard/EventInfo";
import EventList from "../components/Dashboard/EventList";
import Loading from "../components/Loading";
import { useMeQuery } from "../generated/graphql";

const AuthenticateHomePage: FC = (props) => {
  const { data, loading } = useMeQuery();
  let history = useHistory();
  if (loading) {
    return <Loading />;
  }
  if (!loading && data && data.me === null) {
    history.push("/");
  }

  return (
    <div className='flex'>
      <EventList />
      <EventInfo />
    </div>
  );
};

export default AuthenticateHomePage;
