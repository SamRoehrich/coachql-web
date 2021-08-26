import React from "react";
import { Link } from "react-router-dom";

import { RouteComponentProps, useHistory } from "react-router";
import { setAccessToken } from "../accessToken";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { CustomInputComponent } from "../components/Forms/Inputs";

const Login: React.FC<RouteComponentProps> = () => {
  const [login] = useLoginMutation();
  const history = useHistory();

  return (
    <div className="flex h-screen">
      <div className="flex bg-blue-500 w-1/3 items-center flex-col">
        <div className="p-10 ">
          <h1 className="text-gray-100 text-4xl">Coachql</h1>
        </div>
        <p className="text-gray-100 text-xl p-2">
          Manage your teams and athletes with ease.
        </p>
        <div className="justify-center text-center">
          <span>Need an account?</span>
          <button className="py-4 text-sm w-full tracking-wide text-black uppercase border hover:border-gray-100 rounded-lg hover:shadow-md outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none mt-8 disabled:bg-gray-600 disabled:opacity-50">
            <Link to="/register">Create your coach account now!</Link>
          </button>
        </div>
      </div>

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

          if (
            response &&
            response.data &&
            response.data.login &&
            response.data.login.user
          ) {
            setAccessToken(response.data.login.accessToken);
            history.push("/app/" + response.data.login.user.id);
          }
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Not a valid email address.")
            .required("Email is Required."),
          password: Yup.string().required("Password is required"),
        })}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="flex text-center justify-center bg-gray-300 w-2/3 items-center">
            <Form className="flex flex-col items-center">
              <div className="w-full">
                <span className="text-gray-700">Email</span>
                <Field as={CustomInputComponent} name="email" id="email" />
                {errors.email && touched.email && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.email}</p>
                  </div>
                )}
              </div>
              <div className="w-full">
                <span className="text-gray-700">Password</span>
                <Field
                  as={CustomInputComponent}
                  name="password"
                  id="password"
                />
                {errors.password && touched.password && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.password}</p>
                  </div>
                )}
              </div>
              <button
                className=" py-4 text-sm w-full tracking-wide text-black uppercase border border-gray-300 hover:border-blue-400 rounded-lg hover:shadow-md outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none mt-8 disabled:bg-gray-600 disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
