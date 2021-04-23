import { FC } from "react";
import { useHistory } from "react-router";

const RegisterSuccessPage: FC = () => {
  const history = useHistory();
  const goHomeClick = () => {
    history.push("/home");
  };
  return (
    <>
      <div>
        Successfuly created Account. Check email to acitve your account.
      </div>
      <button onClick={goHomeClick}>Go Home</button>
    </>
  );
};

export default RegisterSuccessPage;
