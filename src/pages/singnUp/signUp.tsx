import React from 'react';
import { useHistory } from 'react-router-dom';
import { SignUpForm } from './signUpForm';
import { IFormValues } from './signUpForm/types';
import { ISignUpProps } from './types';
import { ICreateNewUserRequestDto } from '../../global/dataTransferObjects/user';

export const SignUp: React.FC<ISignUpProps> = (props: ISignUpProps) => {
  const history = useHistory();
  const { isLoading, isAuthenticated } = props;

  const onSignUpFormSubmit = async (values: IFormValues) => {
    const newUserInfo: ICreateNewUserRequestDto = { ...values };

    const result = await props.createNewUser(newUserInfo);
    if (!result) {
      return;
    };

    history.push('/login');
  };

  if (isAuthenticated) {
    history.push('/freelancers');
    return null;
  };

  return (
    <SignUpForm
      loading={isLoading}
      onSignUpFormSubmit={onSignUpFormSubmit}
    />
  );
};
