// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../service/authService'; // Assume you have an authService to handle authentication

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth/login" />
      )
    }
  />
);

export default PrivateRoute;