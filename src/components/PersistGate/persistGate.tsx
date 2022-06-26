import React, { useState, useEffect } from 'react';
import { IPersistGateProps } from './types';

const PersistGate: React.FC<IPersistGateProps> = (props: IPersistGateProps) => {
  const { children, liftSession } = props;
  const [isSessionLifted, setSessionLifted] = useState(false);

  useEffect(() => {
    liftSession().then(() => setSessionLifted(true));
  }, []);

  if (!isSessionLifted) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <>
      {children}
    </>
  );
};

export default PersistGate;
