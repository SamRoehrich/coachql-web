import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import CreateWorkoutTimerItem from "./CreateWorkoutTImerItem";
import { useCreateWorkoutMutation } from "../../generated/graphql";

export interface Interval {
  minutes: number;
  seconds: number;
  description: string;
  type: string;
  infinite: boolean;
  reps: number;
}

interface InitialValues {
  name: string;
  description: string;
  sets: number;
  equiptment: string;
  workoutType: string;
  timerType: string;
  intervals: Interval[];
  teamId: string;
}

const CreateWorkout: FC = () => {
  const initialValues: InitialValues = {
    name: "",
    description: "",
    sets: 0,
    equiptment: "Wall",
    workoutType: "Bouldering",
    timerType: "HIIT",
    intervals: [],
    teamId: "1",
  };

  const [createWorkout, { data }] = useCreateWorkoutMutation();

  if (data) console.log(data);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log(JSON.stringify(values));
        await createWorkout({
          variables: {
            description: values.description,
            equiptment: values.equiptment,
            intervals: JSON.stringify(values.intervals),
            name: values.name,
            sets: values.sets,
            timerType: values.timerType,
            workoutType: values.workoutType,
            teamId: "1",
          },
        });
        if (data?.createWorkout) {
          alert("Workout Created");
          actions.resetForm();
        } else {
          alert("Error Creating Workout");
        }
      }}
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
                <div className="h-full flex flex-col justify-between">
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
                              autoComplete="off"
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
                      <Field as="select" name="workoutType">
                        <option value="Bouldering">Bouldering</option>
                        <option value="Lead">Lead</option>
                        <option value="Speed">Speed</option>
                        <option value="Power Endurance">Power Endurance</option>
                        <option value="Endurance">Endurance</option>
                        <option value="Conditioning">Conditioning</option>
                        <option value="Mobility and Flexability">
                          Mobility and Flexability
                        </option>
                        <option value="Unordered">Unordered</option>
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
                        <Field name="sets">
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
                              {errors.sets && touched.sets && (
                                <div className="m-2">
                                  <p className="text-lg text-red-600">
                                    {errors.sets}
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
                  <div className="w-full h-full">
                    <FieldArray
                      name="intervals"
                      render={(arrayHelpers) => (
                        <div className="flex flex-col">
                          <div className="">
                            <div
                              onClick={() =>
                                arrayHelpers.push({
                                  seconds: 0,
                                  minutes: 0,
                                  description: "",
                                  type: "",
                                  reps: 0,
                                })
                              }
                              className="h-12 w-full border rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100"
                            >
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
                              <p className="mr-2 font-semibold">Add Interval</p>
                            </div>
                            {values.intervals &&
                              values.intervals.length > 0 &&
                              values.intervals.map((interval, idx) => (
                                <CreateWorkoutTimerItem
                                  arrayHelpers={arrayHelpers}
                                  interval={interval as any}
                                  idx={idx}
                                />
                              ))}
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="rounded-xl bg-blue-600 w-full h-12 flex items-center justify-center cursor-pointer hover:bg-blue-800">
                  <button type="submit">
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
