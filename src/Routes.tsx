import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthenticatedHomePage from "./pages/AuthenticatedHomePage";
import CreateEventForm from "./components/CreateEventForm";
import Header from "./components/Header";
import ByePage from "./pages/bye";
import CoachRegisterPage from "./pages/CoachRegister";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import EventPage from "./pages/EventDashboard";
import RegisterSuccessPage from "./pages/RegisterSuccessPage";
import EventSignup from "./pages/EventSignup";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={AuthenticatedHomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/bye" component={ByePage} />
          <Route exact path="/coach_register" component={CoachRegisterPage} />
          <Route exact path="/events/create" component={CreateEventForm} />
          <Route
            path="/account/register/success"
            component={RegisterSuccessPage}
          />
          <Route
            exact
            path="/event/dashboard/:eventId/:userId"
            component={EventPage}
          />
          <Route
            exact
            path="/event/register/success"
            component={RegisterSuccessPage}
          />
          <Route
            exact
            path="/event/register/:eventId"
            component={EventSignup}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
