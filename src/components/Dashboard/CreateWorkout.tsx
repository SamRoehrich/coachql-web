import { Field, FieldProps, Form, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { CustomInputComponent } from "../Forms/Inputs";
import CreateWorkoutTimerItem from "./CreateWorkoutTImerItem";

interface InitialValues {
  name: string;
  description: string;
  restTime: number;
  activeTime: number;
  reps: number;
  sets: number;
  equiptment: string;
  workoutType: string;
  timerType: string;
}

const CreateWorkout: FC = () => {
  const initialValues: InitialValues = {
    name: "",
    description: "",
    restTime: 0,
    activeTime: 0,
    reps: 0,
    sets: 0,
    equiptment: "",
    workoutType: "",
    timerType: "",
  };

  const handleAddIntervalClick = () => {};

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
          <div className="p-4 w-full max-h-screen">
            <Form className="h-full flex flex-col justify-between">
              <div>
                <div className="mb-2">
                  <p className="font-bold text-4xl text-gray-900">
                    Create Workout
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Field name="name">
                        {({
                          field,
                          form: { touched, errors },
                          meta,
                        }: FieldProps) => (
                          <>
                            <input
                              type="text"
                              placeholder="Name"
                              {...field}
                              className="rounded-xl border-gray-900 h-12"
                            />
                            {errors.name && touched.name && (
                              <div className="m-2">
                                <p className="text-lg text-red-600">
                                  {errors.name}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div>
                      <Field name="workoutType">
                        {({
                          field,
                          form: { touched, errors },
                          meta,
                        }: FieldProps) => (
                          <>
                            <select className="rounded-xl" {...field}>
                              <option>Bouldering</option>
                              <option>Lead</option>
                              <option>Speed</option>
                              <option>Power Endurance</option>
                              <option>Endurance</option>
                              <option>Conditioning</option>
                              <option>Mobility and Flexability</option>
                              <option>Unordered</option>
                            </select>
                            {errors.name && touched.name && (
                              <div className="m-2">
                                <p className="text-lg text-red-600">
                                  {errors.name}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div>
                    <Field name="description">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }: FieldProps) => (
                        <>
                          <textarea
                            placeholder="Description"
                            {...field}
                            className="rounded-xl border-gray-900 h-36 w-full"
                          >
                            {" "}
                          </textarea>
                          {errors.name && touched.name && (
                            <div className="m-2">
                              <p className="text-lg text-red-600">
                                {errors.name}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </Field>
                  </div>{" "}
                  <div className="flex justify-between items-center">
                    <div>
                      <Field name="timerType">
                        {({
                          field,
                          form: { touched, errors },
                          meta,
                        }: FieldProps) => (
                          <div className="flex flex-col w-40">
                            <span>Timer Type</span>
                            <select className="rounded-xl" {...field}>
                              <option>HIIT</option>
                              <option>Circuit</option>
                              <option>Round</option>
                              <option>Custom</option>
                            </select>
                            {errors.name && touched.name && (
                              <div className="m-2">
                                <p className="text-lg text-red-600">
                                  {errors.name}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div className="flex item-center space-x-2">
                      <div>
                        <Field name="numSets">
                          {({
                            field,
                            form: { touched, errors },
                            meta,
                          }: FieldProps) => (
                            <div className="flex flex-col">
                              <span>Number of Sets</span>

                              <input
                                type="number"
                                {...field}
                                className="rounded-xl border-gray-900"
                              />
                              {errors.numSets && touched.numSets && (
                                <div className="m-2">
                                  <p className="text-lg text-red-600">
                                    {errors.numSets}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="flex items-center justify-center"></div>
                    </div>
                  </div>
                  <div className="h-full w-full">
                    <CreateWorkoutTimerItem />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="h-12 w-12 border-2 rounded-xl flex items-center justify-center ring-4 ring-green-400 border-green-400 focus:ring-green-400">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600 focus:ring-0 active:ring-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="rounded-xl bg-blue-600 w-24 h-12 flex items-center justify-center">
                  <button onClick={handleAddIntervalClick}>
                    <p className="font-semibold text-white text-xl">Save</p>
                  </button>
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
