import React from "react";
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
    <div className="flex justify-around">
      <div>Left content</div>

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
          <div className="max-w-full flex text-center justify-center ml-8 mr-8">
            <Form className="w-full flex flex-col items-center">
              <div className="">
                <span className="text-gray-700">Email</span>
                <Field as={CustomInputComponent} name="email" id="email" />
                {errors.email && touched.email && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.email}</p>
                  </div>
                )}
              </div>
              <div className="">
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
                className=" py-4 text-sm tracking-wide text-black uppercase border border-gray-300 hover:border-blue-400 rounded-lg hover:shadow-md outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none mt-8 disabled:bg-gray-600 disabled:opacity-50"
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
