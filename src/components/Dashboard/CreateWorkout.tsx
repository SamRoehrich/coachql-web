import { Formik } from "formik";
import { FC } from "react";

const CreateWorkotu: FC = () => {
  return (
    <div>
      <Formik initialValues={{ name: "" }} onSubmit={() => {}}></Formik>
    </div>
  );
};

export default CreateWorkotu;
