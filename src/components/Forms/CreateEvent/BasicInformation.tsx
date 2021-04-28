import { useFormik } from "formik";
import { FC } from "react";
import { useHistory } from "react-router";
import { useCreateEventMutation } from "../../../generated/graphql";
import { FormikStepper } from "../FormikStepper";

const BasicInformationForm: FC = () => {
  const [createEvent] = useCreateEventMutation();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      visible: true,
      startDate: "",
      numBoulders: 4,
    },
    onSubmit: async (data) => {
      await createEvent({
        variables: {
          location: data.location,
          name: data.name,
          visible: data.visible,
          startDate: data.startDate,
          numBoulders: data.numBoulders,
        },
      });
      history.push("/home");
    },
    validationSchema: {},
  });
  return (
    <FormikStepper initialValues={{ firstName: "" }} onSubmit={() => {}}>
      <div>
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
      </div>
      <div>
        <label htmlFor="numBoulders">Number of Boulders in Stack</label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.numBoulders}
          id="numBoulders"
          name="numBoulders"
        />
      </div>
    </FormikStepper>
  );
};

export default BasicInformationForm;
