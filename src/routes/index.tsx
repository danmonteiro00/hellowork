import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AuthGate from '../components/AuthGate';
import PrivateRoute from '../components/PrivateRoute';

import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard';
import SignIn from '../pages/signIn';
import SignUp from '../pages/singnUp';
import Freelancer from '../pages/freelancer';
import Project from '../pages/project';
import { Wrapper } from '../components/Wrapper';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/cadastrar" component={SignUp} />
        <Route path="/">
          <AuthGate>
            <Wrapper>
              <PrivateRoute exact path="/">
                <Redirect to="/freelancers" />
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/freelancers" component={Freelancer} />
              <PrivateRoute exact path="/projects" component={Project} />
            </Wrapper>
          </AuthGate>
        </Route>
      </Switch>
    </Router>
  );
};
