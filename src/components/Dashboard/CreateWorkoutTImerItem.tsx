import { Field, FieldArrayRenderProps, FieldProps } from "formik";
import { FC } from "react";
import { Interval } from "./CreateWorkout";
interface Props {
  arrayHelpers: FieldArrayRenderProps;
  interval: Interval;
  idx: number;
}

const CreateWorkoutTimerItem: FC<Props> = ({ arrayHelpers, interval, idx }) => {
  return (
    <div className="flex items-center space-x-4 justify-start" key={idx}>
      <div>
        <Field name={`intervals[${idx}].description`}>
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
        <Field name={`intervals[${idx}].type`}>
          {({ field, form: { touched, errors, values }, meta }: FieldProps) => (
            <div className="flex flex-col">
              <span>Interval Type</span>
              <select className="rounded-xl" {...field}>
                <option>High Intensity</option>
                <option>Low Intensity</option>
                <option>Rest</option>
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
        <Field name={`intervals[${idx}].minutes`}>
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-sm">Minutes</span>
              <input
                type="number"
                className="w-16 rounded-xl"
                disabled={interval.infinite === true ? true : false}
                {...field}
                value={interval.infinite === true ? 0 : field.value}
              />

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
        <Field name={`intervals[${idx}].seconds`}>
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-sm">Seconds</span>
              <input
                type="number"
                className="w-16 rounded-xl"
                disabled={interval.infinite === true ? true : false}
                {...field}
              />
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
        <Field name={`intervals[${idx}].reps`}>
          {({ field, form: { touched, errors }, meta }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-sm">Reps</span>
              <input
                type="number"
                className="w-16 rounded-xl"
                disabled={interval.infinite === true ? true : false}
                {...field}
              />
              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
      <div className="flex items-center justify-center">
        <Field name={`intervals[${idx}].infinite`}>
          {({
            field,
            form: { touched, errors, setValues },
            meta,
          }: FieldProps) => (
            <div className="flex flex-col items-center">
              <span className="text-xs">Self Paced</span>
              <input type="checkbox" className="w-4 rounded-xl" {...field} />
              {errors.name && touched.name && (
                <div className="m-2">
                  <p className="text-lg text-red-600">{errors.name}</p>
                </div>
              )}
            </div>
          )}
        </Field>
      </div>
      <button
        onClick={() => arrayHelpers.remove(idx)}
        type="button"
        className="flex items-center justify-center text-gray-900 mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateWorkoutTimerItem;
