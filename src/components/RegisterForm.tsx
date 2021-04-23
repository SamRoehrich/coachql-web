import { Form, Field, Formik } from "formik";
import { FC } from "react";
import { useHistory } from "react-router";
import { useRegisterMutation } from "../generated/graphql";

const RegisterForm: FC = () => {
  const [register] = useRegisterMutation();
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          teamName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await register({
            variables: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password,
            },
          });
          setSubmitting(false);
          history.push("/register/success");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" />
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" />
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" />
            <button disabled={isSubmitting} type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
