import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { useHistory } from "react-router";
import {
  CustomCheckboxComponent,
  CustomDateInputComponent,
  CustomInputComponent,
  CustomInputComponentNoBorder,
} from "./Forms/Inputs";
import { HiTrash } from "react-icons/hi";
import { useCreateEventMutation } from "../generated/graphql";
import * as Yup from "yup";
import { Catagory, Gender } from "../utils/enums";

interface Stack {
  gender: Gender;
  catagory: Catagory;
}

interface InitialValues {
  eventName: string;
  eventLocation: string;
  publicEvent: boolean;
  startDate: string;
  numBoulders: string;
  stackType: string;
}

const CreateEventForm: FC = () => {
  const [
    createEvent,
    { data, loading, error, called },
  ] = useCreateEventMutation();
  const history = useHistory();
  const initialValues: InitialValues = {
    eventName: "",
    eventLocation: "",
    publicEvent: false,
    startDate: "",
    numBoulders: "4",
    stackType: "default",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        let newE = null;
        if (values.stackType === "default") {
          newE = await createEvent({
            variables: {
              name: values.eventName,
              startDate: values.startDate,
              location: values.eventLocation,
              numBoulders: parseInt(values.numBoulders),
              visible: values.publicEvent,
            },
          });
        }
        if (values.stackType === "custom") {
          newE = await createEvent({
            variables: {
              name: values.eventName,
              startDate: values.startDate,
              location: values.eventLocation,
              numBoulders: parseInt(values.numBoulders),
              visible: values.publicEvent,
            },
          });
        }
        if (values.stackType === "none") {
          newE = await createEvent({
            variables: {
              name: values.eventName,
              startDate: values.startDate,
              location: values.eventLocation,
              numBoulders: parseInt(values.numBoulders),
              visible: values.publicEvent,
            },
          });
        }
        console.log(data);
        if (newE && newE.data?.createEvent === true) {
          history.push("/home");
        }
        if (newE && newE.data?.createEvent === false) {
          alert(
            "Event Failed to Create. If you are using custom stacks check that they are valid."
          );
        }
        if (error) {
          alert("Error. Event was not created.");
        }
      }}
      validationSchema={Yup.object().shape({
        eventName: Yup.string()
          .min(5, "The event name must be at least 5 characters long")
          .max(100, "The event name is too long.")
          .required("Required"),
        eventLocation: Yup.string()
          .min(5, "The event location must be at least 5 characters.")
          .max(100, "The location is too many characters.")
          .required("Required"),
        startDate: Yup.string().required("Date is Required."),
      })}
    >
      {(props) => {
        const { values, errors, touched } = props;
        console.log(values);
        // Arg : New Stack
        return (
          <div className="max-w-full flex text-center justify-center ml-8 mr-8 -mt-8">
            <Form autoComplete="off" className="w-full flex flex-col">
              <div>
                <span className="text-gray-700">Event Name</span>
                <Field
                  as={CustomInputComponent}
                  name="eventName"
                  id="eventName"
                />
                {errors.eventName && touched.eventName && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.eventName}</p>
                  </div>
                )}
                <span className="text-gray-700">Event Location</span>
                <Field
                  as={CustomInputComponent}
                  name="eventLocation"
                  id="eventLocation"
                />
                {errors.eventLocation && touched.eventLocation && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">
                      {errors.eventLocation}
                    </p>
                  </div>
                )}
                <span className="text-gray-700">Event Date</span>
                <Field
                  as={CustomDateInputComponent}
                  name="startDate"
                  id="startDate"
                  onChange={props.handleChange}
                />
                {errors.startDate && touched.startDate && (
                  <div className="m-2">
                    <p className="text-lg text-red-600">{errors.startDate}</p>
                  </div>
                )}
                <div className="flex mt-2 mb-2 justify-center">
                  <span className="text-gray-700">Public Event</span>
                  <Field
                    as={CustomCheckboxComponent}
                    name="publicEvent"
                    id="publicEvent"
                  />
                </div>
                <span className="text-gray-700">
                  {props.values.publicEvent
                    ? "Open Registration"
                    : "Invite Required"}
                </span>
              </div>
              <div className="flex items-center justify-between border rounded border-gray-500">
                <p>Format: Onsight</p>
                <div className="flex space-x-5 items-center">
                  <span>Number of Boulders Per Stack</span>
                  <Field
                    as={CustomInputComponentNoBorder}
                    name="numBoulders"
                    id="numBoulders"
                  />
                </div>
              </div>
              {/* <div className="border flex flex-col w-full text-center rounded border-gray-300 min-h-16">
                <div role="group" className="justify-center flex space-x-5">
                  <div>
                    <span>Default Stacks</span>
                    <Field type="radio" name="stackType" value="default" />
                  </div>
                  <div>
                    <span>Custom Stacks</span>
                    <Field type="radio" name="stackType" value="custom" />
                  </div>
                  <div>
                    <span>No Stacks</span>
                    <Field type="radio" name="stackType" value="none" />
                  </div>
                </div> */}
              {/* <div>
                  {props.values.stackType === "default" ? (
                    <div className="items-center">
                      <p>Defualt Stacks</p>
                      <p>One Male Stack</p>
                      <p>One Female Stack</p>
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <div className="w-1/2" id="stack-list">
                        <div className="h-1/6 flex content-center justify-center">
                          {props.values.stackType === "default" ? (
                            <div className="items-center">
                              <p>Defualt Stacks</p>
                              <p>One Male Stack</p>
                              <p>One Female Stack</p>
                            </div>
                          ) : (
                            props.values.stacks.map((stack, i) => (
                              <div
                                className="flex items-center space-x-4"
                                key={i}
                              >
                                <p>{stack.male ? "Male" : ""}</p>
                                <p>{stack.female ? "Female" : ""}</p>
                                <p>{stack.a ? "A" : ""}</p>
                                <p>{stack.b ? "B" : ""}</p>
                                <p>{stack.c ? "C" : ""}</p>
                                <p>{stack.d ? "D" : ""}</p>
                                <p>{stack.jr ? "JR" : ""}</p>
                                <button
                                  type="button"
                                  onClick={() => handleTrashCanClick(i)}
                                  className="items-center hover:bg-gray-300 cursor-pointer"
                                >
                                  <HiTrash />
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col w-1/2" id="stack-inputs">
                        {props.values.stackType === "custom" ? (
                          <>
                            <div className="flex w-full justify-center space-x-10">
                              <div className="flex flex-col">
                                <span className="text-gray-700">Male</span>
                                <Field
                                  component={CustomCheckboxComponent}
                                  id="male"
                                  name="male"
                                  checked={props.values.male}
                                  onChange={props.handleChange}
                                />
                              </div>
                              <div>
                                <span className="text-gray-700">Female</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  id="female"
                                  name="female"
                                  checked={props.values.female}
                                  onChange={props.handleChange}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="flex justify-center space-x-12 mt-2 mb-2 w-full">
                                <span className="text-gray-700">Junior</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  name="jr"
                                  id="jr"
                                  checked={props.values.jr}
                                  onChange={props.handleChange}
                                />
                              </div>
                              <div className="flex justify-center space-x-12 mt-2 mb-2 w-full">
                                <span className="text-gray-700">A</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  name="a"
                                  id="a"
                                  checked={props.values.a}
                                  onChange={props.handleChange}
                                />
                              </div>
                              <div className="flex justify-center space-x-12 mt-2 mb-2 w-full">
                                <span className="text-gray-700">B</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  name="b"
                                  id="b"
                                  checked={props.values.b}
                                  onChange={props.handleChange}
                                />
                              </div>
                              <div className="flex justify-center space-x-12 mt-2 mb-2 w-full">
                                <span className="text-gray-700">C</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  name="c"
                                  id="c"
                                  checked={props.values.c}
                                  onChange={props.handleChange}
                                />
                              </div>
                              <div className="flex justify-center space-x-12 mt-2 mb-2 w-full">
                                <span className="text-gray-700">D</span>
                                <Field
                                  as={CustomCheckboxComponent}
                                  name="d"
                                  id="d"
                                  checked={props.values.d}
                                  onChange={props.handleChange}
                                />
                              </div>
                            </div>
                            <div>
                              <button
                                onClick={handleSaveStack}
                                type="button"
                                className="items-center hover:border-blue-700 cursor-pointer border border-white rounded-lg p-5"
                              >
                                Create Stack
                              </button>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div> */}
              <button
                type="submit"
                className="items-center hover:border-blue-700 cursor-pointer border border-white rounded-lg p-5"
                disabled={called || loading}
              >
                Create Event
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default CreateEventForm;
