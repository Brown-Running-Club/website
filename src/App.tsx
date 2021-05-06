import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import HealthPage from './pages/HealthPage';
import CompetitivePage from './pages/CompetitivePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import FAQSPage from './pages/FAQSPage';
import LeadershipPage from './pages/LeadershipPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/health" component={HealthPage} />
        <Route path="/competitive" component={CompetitivePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQSPage} />
        <Route path="/leadership" component={LeadershipPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/roster-registration">
            <Redirect to="https://brownrec.com/sports/2018/8/14/club-sports-registrations-offerings.aspx" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
