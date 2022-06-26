import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ISideMenuProps } from './types';
import logoImage from '../../assets/logo.png';

import './styles.css';

export const SideMenu: React.FC<ISideMenuProps> = (props: ISideMenuProps) => {
  const { isAuthenticated } = props;
  const [inactive, setInactive] = useState<boolean>(true);

  return isAuthenticated ? (
    <nav id="sidebar" className={`${inactive ? "active" : ""}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <div onClick={() => setInactive((prevState) => !prevState)} className='logo d-flex justify-content-between align-items-center'>
          <img src={logoImage} alt="" className='img-fluid' />
        </div>
        <div onClick={() => setInactive((prevState) => !prevState)} className='toggle-menu-btn'>
          {inactive ? "" : <i className="bi bi-arrow-left-square-fill"></i>}
        </div>
      </div>

      <ul className="list-unstyled components">
        <li className="active">
          <Link to="/freelancers">
            <i className="bi bi-person-bounding-box"></i>
            Freelancers
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="bi bi-briefcase"></i>
            Projetos
          </Link>
          <Link to="/chat">
            <i className="bi bi-chat-dots"></i>
            Chat
          </Link>
        </li>
      </ul>
    </nav>) : (<div />)
}
