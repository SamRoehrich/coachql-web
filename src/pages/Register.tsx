import React, { FC, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useRegisterMutation } from "../generated/graphql";

const RegisterPage: FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [register] = useRegisterMutation();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const values = await register({
          variables: {
            email,
            password,
            firstName,
            lastName,
          },
        });
        history.push("/");
      }}
    >
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>{" "}
      <div>
        <input
          value={firstName}
          placeholder="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>{" "}
      <div>
        <input
          value={lastName}
          placeholder="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
