import { Formik, FormikConfig, FormikValues } from "formik";
import React, { Children, useState } from "react";
export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik {...props}>
      <form autoComplete="off">{currentChild}</form>
      {step > 0 ? (
        <button onClick={() => setStep((s) => s - 1)}>Back</button>
      ) : null}
      <button>{isLastStep() ? "Create" : "Next"}</button>
    </Formik>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

export function FormikStep() {}
