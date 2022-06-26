import React from 'react';
import SideMenu from '../SideMenu';
import TopBar from '../TopBar';
import { IWrapperProps } from './types';

import './styles.css';

export const Wrapper: React.FC<IWrapperProps> = (props: IWrapperProps) => {
  const { children } = props;
  return (
    <div className='wrapper'>
      <SideMenu />
      <div id='content'>
        <TopBar />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
