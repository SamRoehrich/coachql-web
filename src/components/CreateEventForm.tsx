import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { useCreateEventMutation } from "../generated/graphql";

interface Props {}

const CreateEventForm: FC<Props> = () => {
  const [createEvent] = useCreateEventMutation();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          location: "",
          visible: true,
          startDate: "",
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await createEvent({
            variables: {
              location: data.location,
              name: data.name,
              visible: data.visible,
              startDate: data.startDate,
            },
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Event Name</label>
            <Field id="name" name="name" />
            <label htmlFor="location">Event Location</label>
            <Field id="location" name="location" />
            <label htmlFor="visible">Public</label>
            <Field id="visible" name="visible" />
            <label htmlFor="startDate">Start Date</label>
            <Field id="startDate" name="startDate" />
            <button type="submit" disabled={isSubmitting}>
              Create Event
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEventForm;
