import { useFormik } from "formik";
import { FC, useState } from "react";

interface Props {
  key: number;
}

const StackInput: FC<Props> = ({ key }) => {
  const [showStack, setShowStack] = useState(true);
  const hideStack = () => {
    setShowStack(false);
  };

  return (
    <div>
      {showStack ? (
        <div key={key}>
          <div>
            <p>Male</p>
            <label>JR</label>
            <input type="checkbox" />
            <label>A</label>
            <input type="checkbox" />
            <label>B</label>
            <input type="checkbox" />
            <label>C</label>
            <input type="checkbox" />
            <label>D</label>
            <input type="checkbox" />
          </div>
          <div>
            <p>Female</p>
            <label>JR</label>
            <input type="checkbox" />
            <label>A</label>
            <input type="checkbox" />
            <label>B</label>
            <input type="checkbox" />
            <label>C</label>
            <input type="checkbox" />
            <label>D</label>
            <input type="checkbox" />
          </div>
          <button onClick={hideStack}>Delete Stack</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StackInput;
