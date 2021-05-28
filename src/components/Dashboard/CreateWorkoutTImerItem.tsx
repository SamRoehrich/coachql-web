import { Field, FieldProps } from "formik";
import { FC } from "react";

const CreateWorkoutTimerItem: FC = () => {
  return (
    <div className="flex items-center space-x-4 justify-start">
      <input type="checkbox" className="rounded-full mt-6" />
      <div>
        <Field name="workoutTimerItem">
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col">
              <span>Interval Description</span>
              <input type="text" {...field} className="rounded-xl" />
              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
      <div>
        <Field name="intervalType">
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col">
              <span>Interval Type</span>
              <select className="rounded-xl" {...field}>
                <option>High Intensity</option>
                <option>Low Intensity</option>
              </select>
              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
      <div>
        <Field name="minutes">
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-sm">Minutes</span>
              <input type="number" className="w-16 rounded-xl" {...field} />

              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
      <div className="">
        <Field name="seconds">
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-sm">Seconds</span>
              <input type="number" className="w-16 rounded-xl" {...field} />
              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
    </div>
  );
};

export default CreateWorkoutTimerItem;
