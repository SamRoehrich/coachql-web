import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { number } from "yup";
import { string } from "yup/lib/locale";
import { useMeQuery } from "../generated/graphql";
import { CustomInputComponent } from "./Forms/Inputs";
import Loading from "./Loading";
import PublicEventInfo from "./PublicEventInfo";
import * as Yup from "yup";
import { MainButton, SubmitButton } from "./Styled/Buttons";
import { useHistory } from "react-router";

const initialValues = {
  height: number,
  ape: number,
  ageCatagory: string,
};

const EventSignupForm: FC = () => {
  const history = useHistory();
  const handleRegisterClick = () => history.push("/register");

  const { data, loading } = useMeQuery();
  if (loading) return <Loading />;
  return (
    <div className="flex max-w-full m-8">
      <div>
        <PublicEventInfo />
      </div>

      {data && data.me === null ? (
        <div className="flex flex-col w-full justify-center text-center">
          <div>You must be logged in to register for this event.</div>
          <div className="w-1/2">
            <MainButton
              text="Click here to create an account."
              onClick={handleRegisterClick}
            />
          </div>
        </div>
      ) : (
        <div className="flex max-w-full">
          <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
            validationSchema={Yup.object().shape({
              height: Yup.string()
                .min(0, "I am sorry but you must be more than 0 inches tall.")
                .max(100, "I dont think so")
                .required("Height is required."),
              ape: Yup.string()
                .min(0)
                .max(100)
                .required("Ape Index is Required."),
            })}
          >
            {({ values, errors, touched }) => {
              return (
                <div className="flex flex-col justify-center">
                  <Form>
                    <div className="">
                      <span className="text-gray-700">Height in Inches</span>
                      <Field
                        as={CustomInputComponent}
                        name="height"
                        id="height"
                      />
                      {errors.height && touched.height && (
                        <div className="m-2">
                          <p className="text-lg text-red-600">
                            {errors.height}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="">
                      <span className="text-gray-700">Ape Index in Inches</span>
                      <Field as={CustomInputComponent} name="ape" id="ape" />
                      {errors.ape && touched.ape && (
                        <div className="m-2">
                          <p className="text-lg text-red-600">{errors.ape}</p>
                        </div>
                      )}
                    </div>
                    <SubmitButton text="Register For Event" />
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default EventSignupForm;
