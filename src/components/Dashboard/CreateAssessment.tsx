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
                      Create Athlete Profile
                    </h1>
                  </div>
                </header>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Athlete Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        This can be edited later.
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
                              First name
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
                              Team
                            </label>
                            <select
                              id="teamId"
                              name="teamId"
                              value={values.teamId}
                              onChange={handleChange}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option> -- </option>
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
                        Parent Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 px-2">
                        Parents must confirm the account before the athlete will
                        be granted access.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="parentEmail"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="parentEmail"
                            id="parentEmail"
                            onChange={handleChange}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <fieldset>
                          <legend className="text-base font-medium text-gray-900">
                            Permissions
                          </legend>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="createWorkouts"
                                  name="createWorkouts"
                                  type="checkbox"
                                  onChange={handleChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="createWorkouts"
                                  className="font-medium text-gray-700"
                                >
                                  Create Workout
                                </label>
                                <p className="text-gray-500">
                                  Athlete can create their own workouts.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="metricsRequired"
                                  name="metricsRequired"
                                  type="checkbox"
                                  onChange={handleChange}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="metricsRequired"
                                  className="font-medium text-gray-700"
                                >
                                  Require Metrics
                                </label>
                                <p className="text-gray-500">
                                  Upon registration, the athlete will need to
                                  complete an assessment test.
                                </p>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
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
