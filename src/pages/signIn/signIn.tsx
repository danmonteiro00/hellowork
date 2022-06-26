import React from 'react';
import { useHistory } from 'react-router-dom';
import { SignInForm } from './signInForm';
import { IFormValues } from './signInForm/types';
import { ISignInProps } from './types';

export const SignIn: React.FC<ISignInProps> = (props: ISignInProps) => {
  const history = useHistory();
  const { isLoading, isAuthenticated } = props;

  const onSignFormSubmit = async (values: IFormValues) => {
    const { email, password } = values;
    await props.authenticateUser({ email, password });
  };

  if (isAuthenticated) {
    history.push('/freelancers');
    return null;
  }

  return (
    <SignInForm
      loading={isLoading}
      onSignInFormSubmit={onSignFormSubmit}
    />
  );
}
