import { useFormik } from "formik";
import { FC, useState } from "react";
import { useHistory, useParams } from "react-router";
import PublicEventInfo from "../components/PublicEventInfo";
import { MainButton } from "../components/Styled/Buttons";

import { useRegisterForEventMutation } from "../generated/graphql";
import { Gender } from "../utils/enums";

interface Params {
  eventId: string;
}

const EventSignup: FC = () => {
  const [showing, setShowing] = useState(false);
  const [registerForEvent, { loading, error }] = useRegisterForEventMutation();
  const params = useParams<Params>();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      team: "",
      birthYear: "2000",
      gender: Gender.Male,
    },
    onSubmit: async ({
      gender,
      firstName,
      lastName,
      email,
      password,
      team,
      birthYear,
    }) => {
      try {
        const registerResult = await registerForEvent({
          variables: {
            firstName,
            lastName,
            email,
            password,
            team,
            birthYear: parseFloat(birthYear),
            gender,
            eventId: params.eventId,
          },
        });
        if (error) {
          alert("Error Registering for Event. Refresh the page and try again.");
        }
        if (registerResult.data) {
          formik.resetForm();
          history.push("/event/register/success");
        }
      } catch (err) {}
    },
  });

  const handleShowing = () => setShowing(!showing);

  return (
    <div className="max-w-full justify-center items-center m-8">
      <div className="flex justify-around align-middle">
        <div>
          <PublicEventInfo />
        </div>
        <div className="text-center">
          <MainButton onClick={handleShowing} text="Create Account" />
          <form onSubmit={formik.handleSubmit}>
            {showing ? (
              <div className="flex flex-col">
                <label htmlFor="firstName">Frist Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                <label htmlFor="team">Team</label>
                <input
                  type="text"
                  name="team"
                  id="team"
                  value={formik.values.team}
                  onChange={formik.handleChange}
                />
                <label htmlFor="birthYear">Birth Year</label>
                <input
                  type="text"
                  name="birthYear"
                  id="birthYear"
                  value={formik.values.birthYear}
                  onChange={formik.handleChange}
                />
                <div role="group">
                  <label htmlFor="gender">Male</label>
                  <input
                    type="radio"
                    name="male"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="gender">Female</label>
                  <input
                    type="radio"
                    name="female"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <button type="submit" disabled={loading}>
              Register for Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventSignup;
