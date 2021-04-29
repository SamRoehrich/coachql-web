import { FieldProps } from "formik";
import { FC } from "react";

export const CustomInputComponent: React.ComponentType<FieldProps["field"]> = (
  props
) => (
  <div>
    <input
      className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
      type="text"
      autoComplete="off"
      {...props}
    />
  </div>
);

export const CustomPasswordInputComponent: React.ComponentType<
  FieldProps["field"]
> = (props) => (
  <div>
    <input
      className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
      type="password"
      autoComplete="off"
      {...props}
    />
  </div>
);

export const CustomCheckboxComponent: React.ComponentType<
  FieldProps["field"]
> = (props) => (
  <div>
    <input
      {...props}
      type="checkbox"
      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
);

export const CustomDateInputComponent: React.ComponentType<
  FieldProps["field"]
> = (props) => (
  <div>
    <input
      className="form-input w-full rounded-lg placeholder-gray-500 text-gray-500"
      type="date"
    />
  </div>
);

export const CustomRadioButtonComponent: React.ComponentType<
  FieldProps["field"]
> = (props) => (
  <div>
    <input
      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      type="radio"
    />
  </div>
);

export const CustomLabel: FC = () => <div></div>;
