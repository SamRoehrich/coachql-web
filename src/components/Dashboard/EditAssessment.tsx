import { FieldArray, Form, Formik } from "formik";
import { FC } from "react";
import { useParams } from "react-router";
import {
  useEditAssessmentMutation,
  useGetAssessmentByIdQuery,
} from "../../generated/graphql";
import Loading from "../Loading";

interface DataPoint {
  name: string;
  type: string;
}

interface Params {
  assessmentId: string;
}

const EditAssessment: FC = () => {
  const params = useParams<Params>();
  const [editAssessment, { called, data }] = useEditAssessmentMutation();
  const { data: assessmentData, loading } = useGetAssessmentByIdQuery({
    variables: {
      assessmentId: Number.parseInt(params.assessmentId),
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (assessmentData) {
    const dataPoints: DataPoint[] = JSON.parse(
      assessmentData.getAssessmentById.dataPoints
    );

    return (
      <>
        <div className="w-full">
          <Formik
            initialValues={{
              name: assessmentData.getAssessmentById.name,
              type: assessmentData.getAssessmentById.assessmentType,
              description: assessmentData.getAssessmentById.description,
              dataPoints,
              tools: assessmentData.getAssessmentById.testMethod,
            }}
            onSubmit={async (
              { name, description, type, dataPoints, tools },
              actions
            ) => {
              await editAssessment({
                variables: {
                  assessmentId: Number.parseInt(params.assessmentId),
                  name,
                  type,
                  description,
                  tools,
                  dataPoints: JSON.stringify(dataPoints),
                },
              });
              if (called && data) {
                alert("success");
                actions.resetForm();
              }
            }}
            render={({ values, handleChange }) => (
              <Form autoComplete="off">
                <div className="mt-10 sm:mt-0">
                  <header className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-1 sm:px-2">
                      <h1 className="text-3xl font-bold to-green-900">
                        Edit - {assessmentData.getAssessmentById.name}
                      </h1>
                    </div>
                  </header>
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 px-2">
                          Edit Assessment
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 px-2">
                          WARNING: Editing an assessment will DELETE all
                          recorded data you have related to this assessment.
                          <br />
                          If you do not want to do this, create a new assessment
                          with the correct paramaters.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Assessment Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={values.name}
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
                                id="type"
                                name="type"
                                value={values.type}
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
                            <div className="col-span-6">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <textarea
                                name="description"
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-24"
                              />
                            </div>
                            <div className="col-span-6">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Tools
                              </label>
                              <input
                                name="tools"
                                id="tools"
                                value={values.tools}
                                type="text"
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
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
                  <div className="md:grid md:grid-cols-3 md:gap-6 overflow-auto">
                    <FieldArray name="dataPoints" validateOnChange={false}>
                      {({ insert, remove, push }) => (
                        <>
                          <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium leading-6 text-gray-900 px-2">
                                Data Points
                              </h3>
                              <p className="mt-1 text-sm text-gray-600 px-2">
                                Define the type of data you are collecting with
                                this test. <br />
                              </p>
                              <button
                                className="bg-gray-100 h-12 w-full flex items-center justify-center space-x-1 rounded-md shadow-md hover:shadow-lg"
                                type="button"
                                onClick={() => push(DataPointInput)}
                              >
                                Add Data Point
                              </button>
                            </div>
                          </div>
                          <div className="mt-5 md:mt-0 md:col-span-2">
                            <div className="shadow overflow-hidden sm:rounded-md">
                              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                {values.dataPoints.map(
                                  (dataPoint: DataPoint, idx: number) => (
                                    <div className="flex w-full">
                                      <div className="flex flex-col text-left mt-1 p-1 w-1/2">
                                        <label className=" text-sm font-medium text-gray-700">
                                          Data Point Name
                                        </label>
                                        <input
                                          type="text"
                                          id="name"
                                          name={`dataPoints[${idx}].name`}
                                          value={dataPoint.name}
                                          onChange={handleChange}
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md w-full"
                                        />
                                      </div>
                                      <div className="w-40 flex flex-col mt-2">
                                        <label className=" text-sm font-medium text-gray-700">
                                          Data Type
                                        </label>
                                        <select
                                          className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          id="type"
                                          name={`dataPoints[${idx}].type`}
                                          value={dataPoint.type}
                                          onChange={handleChange}
                                        >
                                          <option>---</option>
                                          <option value="text">Text</option>
                                          <option value="number">Number</option>
                                          <option value="time">Time</option>
                                        </select>
                                      </div>
                                    </div>
                                  )
                                )}
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
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </>
    );
  }

  return <div>An Error occured</div>;
};

export default EditAssessment;

interface DataPointInputProps {
  handleChange: any;
}

const DataPointInput: FC<DataPointInputProps> = ({ handleChange }) => {
  return (
    <div className="flex">
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          Data Point Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Data Type
        </label>
        <select
          id="teamId"
          name="teamId"
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option> -- </option>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="time">Time</option>
        </select>
      </div>
    </div>
  );
};
