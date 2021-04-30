import { Field, Form, Formik } from "formik";
import { FC } from "react";
// import { useHistory } from "react-router";
// import { useCreateEventMutation } from "../generated/graphql";
import {
  CustomCheckboxComponent,
  CustomDateInputComponent,
  CustomInputComponent,
  CustomInputComponentNoBorder,
} from "./Forms/Inputs";
import { HiTrash } from "react-icons/hi";

interface Stack {
  male: boolean;
  female: boolean;
  a: boolean;
  b: boolean;
  c: boolean;
  d: boolean;
  jr: boolean;
}

interface InitialValues {
  eventName: string;
  eventLocation: string;
  publicEvent: string;
  startDate: string;
  stacks: Stack[];
  numBoulders: string;
  male: boolean;
  female: boolean;
  a: boolean;
  b: boolean;
  c: boolean;
  d: boolean;
  jr: boolean;
}

const CreateEventForm: FC = () => {
  // const [createEvent] = useCreateEventMutation();
  // const history = useHistory();
  const initialValues: InitialValues = {
    male: false,
    female: false,
    a: false,
    b: false,
    c: false,
    d: false,
    jr: false,
    eventName: "",
    eventLocation: "",
    publicEvent: "",
    startDate: "",
    stacks: [],
    numBoulders: "4",
  };
  const stacks: Stack[] = [];
  console.log(stacks);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        values.stacks = stacks;
        console.log(values);
      }}
    >
      {(props) => {
        const handleSaveStack = () => {
          function resetStackInputs() {
            props.setFieldValue("male", false);
            props.setFieldValue("female", false);
            props.setFieldValue("a", false);
            props.setFieldValue("b", false);
            props.setFieldValue("c", false);
            props.setFieldValue("d", false);
            props.setFieldValue("jr", false);
            props.setFieldValue("stacks", [...props.values.stacks, newStack]);
            // props.setValues({
            //   ...props.values,
            //   male: false,
            //   female: false,
            //   a: false,
            //   b: false,
            //   c: false,
            //   d: false,
            //   jr: false,
            //   stacks: [...props.values.stacks, newStack],
            // });
          }
          let newStack = {
            male: props.values.male,
            female: props.values.female,
            a: props.values.a,
            b: props.values.b,
            c: props.values.c,
            d: props.values.d,
            jr: props.values.jr,
          };
          stacks.push(newStack);
          props.values.stacks = stacks;
          resetStackInputs();
        };
        console.log(props.values);
        return (
          <div className="max-w-full flex text-center justify-center m-8">
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
              <div className="border flex w-full text-center rounded border-gray-300  h-96">
                <div className="w-1/2" id="stack-list">
                  <div className="h-1/6 flex content-center justify-center">
                    {stacks.map((stack, i) => (
                      <div className="flex items-center space-x-4" key={i}>
                        <p>{stack.male ? "Male" : ""}</p>
                        <p>{stack.female ? "Female" : ""}</p>
                        <p>
                          {stack.a
                            ? "A"
                            : "" && stack.b
                            ? "B"
                            : "" && stack.c
                            ? "C"
                            : "" && stack.d
                            ? "D"
                            : "" && stack.jr
                            ? "JR"
                            : ""}
                        </p>
                        <HiTrash />
                      </div>
                    ))}
                  </div>
                  <div className="h-1/6 flex content-center justify-center">
                    <div className="flex items-center space-x-24">
                      <p>Female</p>
                      <p>B A JR</p>
                      <HiTrash />
                    </div>
                  </div>
                  <div className="h-1/6 flex content-center justify-center">
                    <div className="flex items-center space-x-24">
                      <p>Male</p>
                      <p>C D</p>
                      <HiTrash />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1/2" id="stack-inputs">
                  <div className="flex w-full justify-around">
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
                      <span>Female</span>
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
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">Junior</span>
                      <Field
                        as={CustomCheckboxComponent}
                        name="jr"
                        id="jr"
                        checked={props.values.jr}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">A</span>
                      <Field
                        as={CustomCheckboxComponent}
                        name="a"
                        id="a"
                        checked={props.values.a}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">B</span>
                      <Field
                        as={CustomCheckboxComponent}
                        name="b"
                        id="b"
                        checked={props.values.b}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
                      <span className="text-gray-700">C</span>
                      <Field
                        as={CustomCheckboxComponent}
                        name="c"
                        id="c"
                        checked={props.values.c}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="flex justify-around mt-2 mb-2 w-full">
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
                    <button onClick={handleSaveStack} type="button">
                      Create Stack
                    </button>
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
