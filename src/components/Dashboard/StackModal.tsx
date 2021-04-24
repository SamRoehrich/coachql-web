import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router";

import { useCreateStackMutation } from "../../generated/graphql";

interface Params {
  eventId: string;
  userId: string;
}

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [createStack] = useCreateStackMutation();
  const params = useParams<Params>();
  const formik = useFormik({
    initialValues: {
      male: 0,
      female: 0,
      jr: 0,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      eventId: "",
    },
    onSubmit: async (data) => {
      const currentParams = params;
      console.log(currentParams);
      function isFalse(x: number) {
        if (!x) {
          return false;
        }
        return true;
      }

      console.log(isFalse(data.female));
      await createStack({
        variables: {
          male: isFalse(data.male),
          female: isFalse(data.female),
          a: isFalse(data.a),
          b: isFalse(data.b),
          c: isFalse(data.c),
          d: isFalse(data.d),
          jr: isFalse(data.jr),
          eventId: currentParams.eventId,
        },
      });

      setShowModal(false);
    },
  });

  return (
    <>
      <button
        className="bg-gray-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Stack
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Stack</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative p-6 flex-row">
                    <div className="flex flex-col">
                      <label htmlFor="male">Male</label>
                      <input
                        type="checkbox"
                        id="male"
                        name="male"
                        onChange={formik.handleChange}
                        value={formik.values.male}
                      />
                      <label htmlFor="female">Female</label>
                      <input
                        type="checkbox"
                        id="female"
                        name="female"
                        onChange={formik.handleChange}
                        value={formik.values.female}
                      />
                    </div>
                    <div>
                      <label htmlFor="JR">JR</label>
                      <input
                        type="checkbox"
                        id="jr"
                        name="jr"
                        onChange={formik.handleChange}
                        value={formik.values.jr}
                      />
                      <label htmlFor="A">A</label>
                      <input
                        type="checkbox"
                        id="a"
                        name="a"
                        onChange={formik.handleChange}
                        value={formik.values.a}
                      />
                      <label htmlFor="B">B</label>
                      <input
                        type="checkbox"
                        id="b"
                        name="b"
                        onChange={formik.handleChange}
                        value={formik.values.b}
                      />
                      <label htmlFor="C">C</label>
                      <input
                        type="checkbox"
                        id="c"
                        name="c"
                        onChange={formik.handleChange}
                        value={formik.values.c}
                      />
                      <label htmlFor="D">D</label>
                      <input
                        type="checkbox"
                        id="d"
                        name="d"
                        onChange={formik.handleChange}
                        value={formik.values.d}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
