import { FC } from "react";
import Dashboard from "./Dashboard/Dashboard";

interface Props {}

const AuthenticatedHomePage: FC<Props> = () => {
  return (
    <div className="flex w-full">
      <Dashboard />
    </div>
  );
};

export default AuthenticatedHomePage;
