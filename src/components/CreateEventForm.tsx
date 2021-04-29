import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { useHistory } from "react-router";
import { useCreateEventMutation } from "../generated/graphql";
import {
  CustomCheckboxComponent,
  CustomDateInputComponent,
  CustomInputComponent,
  CustomRadioButtonComponent,
} from "./Forms/Inputs";

const CreateEventForm: FC = () => {
  const [createEvent] = useCreateEventMutation();
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        eventName: "",
        eventLocation: "",
        publicEvent: "",
        startDate: "",
        stacks: {},
        male: false,
        female: false,
        a: false,
        b: false,
        c: false,
        d: false,
      }}
      onSubmit={() => {}}
    >
      {(props) => {
        return (
          <div className="w-full flex text-center justify-center">
            <Form autoComplete="off" className="w-full flex flex-col">
              <div>
                <span className="text-gray-700">Event Name</span>
                <Field
                  as={CustomInputComponent}
                  name="eventName"
                  id="eventName"
                />
                <span className="text-gray-700">Event Location</span>
                <Field
                  as={CustomInputComponent}
                  name="eventLocation"
                  id="eventLocation"
                />
                <span className="text-gray-700">Event Date</span>
                <Field
                  as={CustomDateInputComponent}
                  name="eventDate"
                  id="eventDate"
                />
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
              <div className="border flex w-full text-center rounded border-gray-300  h-96">
                <div className="w-1/2" id="stack-list">
                  <div className="border border-gray-300 h-full">
                    <div className="flex">
                      <p>Male: B A JR</p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col w-1/2 border border-gray-300"
                  id="stack-inputs"
                >
                  <div className="flex w-full justify-around">
                    <div className="flex flex-col">
                      <span className="text-gray-700">Male</span>
                      <Field
                        as={CustomCheckboxComponent}
                        id="male"
                        name="male"
                      />
                    </div>
                    <div>
                      <span>Female</span>
                      <Field
                        as={CustomCheckboxComponent}
                        id="female"
                        name="female"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">Junior</span>
                      <Field as={CustomCheckboxComponent} name="jr" id="jr" />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">A</span>
                      <Field as={CustomCheckboxComponent} name="a" id="a" />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">B</span>
                      <Field as={CustomCheckboxComponent} name="b" id="b" />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">C</span>
                      <Field as={CustomCheckboxComponent} name="c" id="c" />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">D</span>
                      <Field as={CustomCheckboxComponent} name="d" id="d" />
                    </div>
                  </div>

                  <div>
                    <button>Create Stack</button>
                  </div>
                </div>
              </div>
              <button type="submit">Create Event</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default CreateEventForm;
