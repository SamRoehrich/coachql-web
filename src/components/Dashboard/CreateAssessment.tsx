import { Form, Formik } from "formik";
import { FC } from "react";

const CreateAssessment: FC = () => {
  return (
    <>
      <div className="w-full">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            parentEmail: "",
            teamId: "",
            birthYear: "",
            metricsRequired: false,
            createWorkouts: false,
          }}
          onSubmit={async (
            {
              firstName,
              lastName,
              email,
              parentEmail,
              teamId,
              metricsRequired,
              createWorkouts,
              birthYear,
            },
            actions
          ) => {}}
          render={({ values, handleChange }) => (
            <Form autoComplete="off">
              <div className="mt-10 sm:mt-0">
                <header className="bg-white">
                  <div className="max-w-7xl mx-auto py-6 px-1 sm:px-2">
                    <h1 className="text-3xl font-bold to-green-900">
                      Create Assessment Test
                    </h1>
                  </div>
                </header>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 px-2">
                        General Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 px-2">
                        Type refers to the type of data you wish to record. A
                        basic assessment has been provided however you can make
                        your own. <br />
                        Examples: <br />
                        Max Strength - Rep : Pull up 2 Rep Max <br />
                        Max Strength - Time : 10 Second Hang on 20mm Edge <br />
                        Capacity : Push Ups to Failure.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Assessment Name
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              onChange={handleChange}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Type
                            </label>
                            <select
                              id="teamId"
                              name="teamId"
                              value={values.teamId}
                              onChange={handleChange}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option> -- </option>
                              <option>Basic</option>
                              <option>Max Strength - Rep</option>
                              <option>Max Strength - Time</option>
                              <option>Capacity</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 px-2">
                        Data Points
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 px-2">
                        Define the type of data you are collecting with this
                        test. <br />
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6"></div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default CreateAssessment;
