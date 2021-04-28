import { FieldProps } from "formik";

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
