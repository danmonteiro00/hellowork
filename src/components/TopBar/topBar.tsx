import React from 'react';
import { Link } from 'react-router-dom';
import { ITopBarProps } from './types';

import './styles.css';

export const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
  const { isAuthenticated, doLogout } = props;
  return (
    <div className="top-bar">
      <div className='top-one'>
        <Link to="/" className='title-link'>
          <div>
            <h1 className='title'>{`< Hello Work! >`}</h1>
          </div>
        </Link>
        <div className='search-controller'>
          <div>
            <input type="text" placeholder='Pesquisar' />
          </div>
          <div className='search'>
            <button className='search-btn'>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      {isAuthenticated ? (
        <div className='top-two'>
          <div className='top-icon'>
            <i className="bi bi-chat"></i>
          </div>
          <div className='top-icon'>
            <i className="bi bi-bell"></i>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary avatar" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-fill"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button onClick={doLogout} className="dropdown-item text-danger" type="button"><i className="bi bi-box-arrow-left me-2"></i>Logout</button></li>
            </ul>
          </div>
        </div>
      ) :
        (
          <div className='top-two'>
            <div className='top-link'>
              <a>Publicar Projeto</a>
            </div>
            <div className='top-link'>
              <a>Quero um freela</a>
            </div>
            <div className='top-link'>
              <a>Como Funciona</a>
            </div>
            <Link to="/login" className='login'>
              <div className='login-icon'>
                <i className="bi bi-box-arrow-in-right"></i>
              </div>
              <div className='login-icon'>
                Login
              </div>
            </Link>
          </div>
        )}
    </div>
  );
};
