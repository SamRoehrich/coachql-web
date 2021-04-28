import React from "react";
import { RouteComponentProps } from "react-router";
import { setAccessToken } from "../accessToken";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  CustomInputComponent,
  CustomPasswordInputComponent,
} from "../components/Forms/Inputs";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [login] = useLoginMutation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async ({ email, password }) => {
        const response = await login({
          variables: {
            email,
            password,
          },
          update: (store, { data }) => {
            if (!data) return null;
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                __typename: "Query",
                me: data.login.user,
              },
            });
          },
        });

        if (response && response.data) {
          setAccessToken(response.data?.login.accessToken);
        }

        history.push("/home");
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Not a valid email address.")
          .required("Email is Required."),
        password: Yup.string().required("Password is required"),
      })}
    >
      <Form className="flex flex-col p-0 p-5 mt-5 space-y-4 text-black bg-white rounded-lglg:p-10 lg:space-y-6">
        <Field name="email" placeholder="Email" as={CustomInputComponent} />
        <ErrorMessage
          name="email"
          component="div"
          className="text-xs italic text-right text-primary-red"
        />
        <Field
          name="password"
          placeholder="Password"
          as={CustomPasswordInputComponent}
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-xs italic text-right text-primary-red"
        />
        <button
          className="py-4 text-sm tracking-wide text-black uppercase rounded-lg shadow-xl outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none "
          type="submit"
        >
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
