import { Field, Form, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { CustomInputComponent } from "../Forms/Inputs";

interface InitialValues {
  name: string;
  description: string;
  restTime: number;
  activeTime: number;
  reps: number;
  sets: number;
}

const CreateWorkout: FC = () => {
  const initialValues: InitialValues = {
    name: "",
    description: "",
    restTime: 0,
    activeTime: 0,
    reps: 0,
    sets: 0,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={Yup.object()}
    >
      {(props) => {
        const { values, touched, errors } = props;
        console.log(values);
        return (
          <div>
            <Form>
              <div className="min-h-screen grid grid-cols-6 grid-rows-6">
                <div className="col-span-2 col-start-3">
                  <span className="text-gray-700">Workout Name</span>
                  <Field as={CustomInputComponent} name="name" id="name" />
                  {errors.name && touched.name && (
                    <div className="m-2">
                      <p className="text-lg text-red-600">{errors.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default CreateWorkout;

{
  /* <Form>
  <span className="text-gray-700">Description</span>
  <Field as={CustomInputComponent} name="name" id="name" />
  {errors.description && touched.description && (
    <div className="m-2">
      <p className="text-lg text-red-600">{errors.description}</p>
    </div>
  )}
  <span className="text-gray-700">Reps</span>
  <Field as={CustomInputComponent} name="name" id="name" />
  {errors.reps && touched.reps && (
    <div className="m-2">
      <p className="text-lg text-red-600">{errors.reps}</p>
    </div>
  )}
  <span className="text-gray-700">Sets</span>
  <Field as={CustomInputComponent} name="name" id="name" />
  {errors.sets && touched.sets && (
    <div className="m-2">
      <p className="text-lg text-red-600">{errors.sets}</p>
    </div>
  )}
  <span className="text-gray-700">Rest Time</span>
  <Field as={CustomInputComponent} name="name" id="name" />
  {errors.restTime && touched.restTime && (
    <div className="m-2">
      <p className="text-lg text-red-600">{errors.restTime}</p>
    </div>
  )}
  <span className="text-gray-700">Active Time</span>
  <Field as={CustomInputComponent} name="name" id="name" />
  {errors.activeTime && touched.activeTime && (
    <div className="m-2">
      <p className="text-lg text-red-600">{errors.activeTime}</p>
    </div>
  )}
</Form> */
}
