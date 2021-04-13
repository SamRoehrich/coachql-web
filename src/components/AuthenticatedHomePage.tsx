import { FC } from "react";

interface Props {}

const AuthenticatedHomePage: FC<Props> = () => {
  return (
    <div>
      <button>Create Event</button>
      <button>View Past Events</button>
    </div>
  );
};

export default AuthenticatedHomePage;
