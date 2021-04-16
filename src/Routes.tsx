import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateEventForm from "./components/CreateEventForm";
import Header from "./components/Header";
import ByePage from "./pages/bye";
import CoachRegisterPage from "./pages/CoachRegister";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/bye" component={ByePage} />
          <Route exact path="/coach_register" component={CoachRegisterPage} />
          <Route exact path="/events/create" component={CreateEventForm} />
          <Route exact path="/event/:id" component={Dashboard} />
          {/* <Route exact path="/events" component={EventsHome} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
