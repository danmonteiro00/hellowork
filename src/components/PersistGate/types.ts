import React from 'react';

export interface IPersistGateProps {
  liftSession(): Promise<boolean>;
  children: React.ReactNode,
}
