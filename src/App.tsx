import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import HealthPage from "./pages/HealthPage";
import CompetitivePage from "./pages/CompetitivePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQSPage from "./pages/FAQSPage";
import LeadershipPage from "./pages/LeadershipPage";
import SchedulePage from "./pages/SchedulePage";
import BrownBearInvitational from "./pages/BrownBearInvitational";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/health" component={HealthPage} />
        <Route exact path="/competitive" component={CompetitivePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/faq" component={FAQSPage} />
        <Route exact path="/leadership" component={LeadershipPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route
          exact
          path="/brown-bear-invitational"
          component={BrownBearInvitational}
        />
        <Route exact path="/roster-registration">
          <Redirect to="https://brownrec.com/sports/2018/8/14/club-sports-registrations-offerings.aspx" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
