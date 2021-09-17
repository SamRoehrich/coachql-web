import { Form, Field, Formik, yupToFormErrors } from "formik";
import { FC, useState } from "react";
import { useHistory } from "react-router";
// import { useRegisterMutation, useTeamsQuery } from "../generated/graphql";
import * as Yup from "yup";
import { CustomInputComponent } from "./Forms/Inputs";

const RegisterForm: FC = () => {
  // const [register] = useRegisterMutation();
  // const history = useHistory();
  // const { data } = useTeamsQuery();
  const [createTeam, setCreateTeam] = useState(false);
  return (
    <div>
      {/* <Formik
        initialValues={{
          teamName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          verificationCode: "",
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          const registerRes = await register({
            variables: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password,
            },
          });
          if (registerRes.data?.register) {
            setSubmitting(false);
            history.push("/account/register/success");
          } else {
            alert("Error: Complete form and try again.");
          }
        }}
        validationSchema={Yup.object().shape({
          createTeam: Yup.boolean(),
          firstName: Yup.string()
            .min(2)
            .max(100)
            .required("First Name is Required."),
          lastName: Yup.string()
            .min(2)
            .max(100)
            .required("Last Name is Required."),
          email: Yup.string().email().required("Email is Required."),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters.")
            .max(56)
            .required("Password is Required"),
          confirmPassword: Yup.string()
            .when("password", {
              is: (val: string | any[]) =>
                val && val.length > 0 ? true : false,
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Passwords do not match"
              ),
            })
            .required("Confirm Password is required"),
          verificationCode: Yup.string()
            .min(8)
            .max(10)
            .when("createTeam", {
              is: true,
              then: Yup.string().required("Verification code is required."),
            }),
        })}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="max-w-full flex text-center justify-center ml-8 mr-8">
            <Form className="min-w-full flex flex-col items-center">
              <div className="w-1/2">
                <span className="text-gray-700">First Name</span>
                <Field
                  as={CustomInputComponent}
                  name="firstName"
                  id="firstName"
                />
                {errors.firstName && touched.firstName && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.firstName}</p>
                  </div>
                )}
              </div>
              <div className="w-1/2">
                <span className="text-gray-700">Last Name</span>
                <Field
                  as={CustomInputComponent}
                  name="lastName"
                  id="lastName"
                />
                {errors.lastName && touched.lastName && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.lastName}</p>
                  </div>
                )}
              </div>
              <div className="w-1/2">
                <span className="text-gray-700">Email</span>
                <Field as={CustomInputComponent} name="email" id="email" />
                {errors.email && touched.email && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.email}</p>
                  </div>
                )}
              </div>
              <div className="w-1/2">
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
              <div className="w-1/2">
                <span className="text-gray-700">Confirm Password</span>
                <Field
                  as={CustomInputComponent}
                  name="confirmPassword"
                  id="confirmPassword"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">
                      {errors.confirmPassword}
                    </p>
                  </div>
                )}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="py-4 text-sm w-1/2 tracking-wide text-black uppercase border hover:border-blue-300 rounded-lg hover:shadow-md outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none mt-8 disabled:bg-gray-600 disabled:opacity-50"
              >
                Create Account
              </button>
            </Form>
          </div>
        )}
      </Formik> */}
    </div>
  );
};

export default RegisterForm;
