import React from 'react';
import { Redirect } from 'react-router-dom';
import { IAuthGateProps } from './types';

const AuthGate: React.FC<IAuthGateProps> = (props: IAuthGateProps) => {
  const { isUserAuthenticated, children } = props;

  if (!isUserAuthenticated) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthGate;
