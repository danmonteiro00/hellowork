import React from 'react';

export interface IAuthGateOwnProps {
  children: React.ReactNode;
}

export interface IAuthGateState {
  isUserAuthenticated: boolean;
}

export type IAuthGateProps = IAuthGateOwnProps & IAuthGateState;
