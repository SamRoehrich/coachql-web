import { useFormik } from "formik";
import { FC, useState } from "react";
import { useCreateEventMutation } from "../generated/graphql";
import StackInput from "./StackInput";

interface Props {}

const CreateEventForm: FC<Props> = () => {
  const [createEvent] = useCreateEventMutation();
  const [stacks, setStacks] = useState<JSX.Element[]>([]);
  const onAddNewStack = () => {
    setStacks(stacks.concat(<StackInput key={stacks.length} />));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      visible: true,
      startDate: "",
      selfScored: true,
    },
    onSubmit: (data) => {},
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          name="name"
          placeholder="Event Name"
        />
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
          id="location"
          name="location"
          placeholder="Event Location"
        />
        <label htmlFor="visible">Public</label>
        <input
          type="checkbox"
          onChange={formik.handleChange}
          id="visible"
          name="visible"
        />
        <input
          type="date"
          onChange={formik.handleChange}
          value={formik.values.startDate}
          id="startDate"
          name="startDate"
        />
        <input
          type="time"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          name="name"
          placeholder="Event Name"
        />
        <div role="group">
          <label>
            Self Scored
            <input
              type="radio"
              name="selfScored"
              value="true"
              id="selfScored"
              onChange={formik.handleChange}
            />
          </label>
          <label>
            Score Keepers
            <input
              type="radio"
              name="selfScored"
              value="false"
              id="selfScored"
              onChange={formik.handleChange}
            />
          </label>
        </div>
        {formik.values.selfScored ? (
          <div>Self Scored</div>
        ) : (
          <div>{stacks}</div>
        )}
      </form>
    </div>
  );
};

export default CreateEventForm;
