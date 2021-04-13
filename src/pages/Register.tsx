import { FC } from "react";
import { RouteComponentProps } from "react-router";
import RegisterForm from "../components/RegisterForm";

const RegisterPage: FC<RouteComponentProps> = ({ history }) => {
  return <RegisterForm />;
};

export default RegisterPage;
