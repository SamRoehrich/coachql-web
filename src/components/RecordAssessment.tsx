import { FieldArray, Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { useParams } from "react-router";
import {
  useCreateRecordMutation,
  useGetAssessmentByIdQuery,
  useGetAthletesInOrgQuery,
} from "../generated/graphql";
import Loading from "./Loading";

interface Params {
  assessmentId: string;
}

interface DataPoint {
  name: string;
  type: string;
  value?: string | number;
}

const RecordAssessment: FC = () => {
  const params = useParams<Params>();
  const [createRecord] = useCreateRecordMutation();
  const { data, loading: loadingAssessment } = useGetAssessmentByIdQuery({
    variables: {
      assessmentId: Number.parseInt(params.assessmentId),
    },
  });
  const { data: athletes, loading: loadingAthletes } =
    useGetAthletesInOrgQuery();

  useEffect(() => {
    document.title = "CoachQL - Record Assessment";
  }, []);

  if (loadingAssessment || loadingAthletes) {
    return <Loading />;
  }

  if (!loadingAssessment && !loadingAthletes) {
    if (data) {
      const dataPoints: DataPoint[] = JSON.parse(
        data.getAssessmentById.dataPoints
      );
      console.log(dataPoints);
      return (
        <div className="h-screen p-4 w-full">
          <Formik
            initialValues={{
              athlete: "",
              data: dataPoints,
              date: "",
            }}
            onSubmit={async ({ athlete, data, date }, actions) => {
              const res = await createRecord({
                variables: {
                  assessmentId: Number.parseInt(params.assessmentId),
                  athleteId: Number.parseInt(athlete),
                  data: JSON.stringify(data),
                  date,
                },
              });
              if (res) {
                alert("Assessment Recorded");
                actions.resetForm();
              }
            }}
            render={({ values, handleChange }) => (
              <Form autoComplete="off">
                <div className="mt-10 sm:mt-0">
                  <header className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-1 sm:px-2">
                      <h1 className="text-3xl font-bold to-green-900">
                        {data.getAssessmentById.name}
                      </h1>
                    </div>
                  </header>
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0 py-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 px-2">
                          Description
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 px-2">
                          {data.getAssessmentById.description}
                        </p>
                      </div>
                      <div className="px-0 py-2">
                        <label
                          htmlFor="country"
                          className="text-lg font-medium leading-6 text-gray-900 px-2"
                        >
                          Athlete
                        </label>
                        <select
                          id="type"
                          name="athlete"
                          value={values.athlete}
                          onChange={handleChange}
                          className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option> -- </option>
                          {athletes?.getAthletesInOrg.map((athlete, idx) => (
                            <option
                              value={athlete.id}
                              key={"athlete" + idx + athlete.id}
                            >
                              {athlete.user.firstName} {athlete.user.lastName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="text-lg font-medium leading-6 text-gray-900 px-2">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          className="rounded-md shadow-sm border border-gray-300"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <FieldArray name="dataPoints" validateOnChange={false}>
                        {({ insert, remove, push }) => (
                          <>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                  {values.data.map((dataPoint, idx) => (
                                    <div className="flex w-full">
                                      <div className="flex flex-col text-left mt-1 p-1 w-full">
                                        <label className=" text-sm font-medium text-gray-700">
                                          {dataPoint.name}
                                        </label>
                                        <input
                                          type={dataPoint.type}
                                          id="value"
                                          name={`data[${idx}].value`}
                                          value={dataPoint.value}
                                          onChange={handleChange}
                                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md w-full"
                                        />
                                      </div>
                                    </div>
                                  ))}
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
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>

                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-3 md:gap-6 overflow-auto"></div>
                </div>
              </Form>
            )}
          />
        </div>
      );
    }
    if (!data) {
      return <div className="h-screen">Assessment not found</div>;
    }
  }
  return <div className="h-screen">Loading...</div>;
};

export default RecordAssessment;
