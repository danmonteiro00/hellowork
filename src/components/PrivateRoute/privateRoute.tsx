import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IPrivateRoute } from './types';

const CustomRoute: React.FC<IPrivateRoute> = ({
  exact,
  component,
  children,
  isAuthenticated,
  ...rest
}: IPrivateRoute) => {
  const onRenderComponent = ({ location }: RouteComponentProps): React.ReactNode => {
    if (!isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { form: location },
          }}
        />
      );
    }

    return (
      <>
        {component}
      </>
    );
  };

  return (
    <Route
      {...rest}
      exact={exact}
      render={onRenderComponent}
      component={component}
    >
      {children}
    </Route>
  );
};

CustomRoute.defaultProps = {
  exact: false,
};

export default CustomRoute;
