import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface IPrivateRoute {
  isAuthenticated: boolean;
  children?: React.ReactNode,
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
  exact?: boolean;
}
